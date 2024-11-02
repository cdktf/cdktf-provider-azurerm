# `batchPool` Submodule <a name="`batchPool` Submodule" id="@cdktf/provider-azurerm.batchPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BatchPool <a name="BatchPool" id="@cdktf/provider-azurerm.batchPool.BatchPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool azurerm_batch_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPool(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_name: str,
  name: str,
  node_agent_sku_id: str,
  resource_group_name: str,
  storage_image_reference: BatchPoolStorageImageReference,
  vm_size: str,
  auto_scale: BatchPoolAutoScale = None,
  certificate: typing.Union[IResolvable, typing.List[BatchPoolCertificate]] = None,
  container_configuration: BatchPoolContainerConfiguration = None,
  data_disks: typing.Union[IResolvable, typing.List[BatchPoolDataDisks]] = None,
  disk_encryption: typing.Union[IResolvable, typing.List[BatchPoolDiskEncryption]] = None,
  display_name: str = None,
  extensions: typing.Union[IResolvable, typing.List[BatchPoolExtensions]] = None,
  fixed_scale: BatchPoolFixedScale = None,
  id: str = None,
  identity: BatchPoolIdentity = None,
  inter_node_communication: str = None,
  license_type: str = None,
  max_tasks_per_node: typing.Union[int, float] = None,
  metadata: typing.Mapping[str] = None,
  mount: typing.Union[IResolvable, typing.List[BatchPoolMount]] = None,
  network_configuration: BatchPoolNetworkConfiguration = None,
  node_placement: typing.Union[IResolvable, typing.List[BatchPoolNodePlacement]] = None,
  os_disk_placement: str = None,
  start_task: BatchPoolStartTask = None,
  stop_pending_resize_operation: typing.Union[bool, IResolvable] = None,
  target_node_communication_mode: str = None,
  task_scheduling_policy: typing.Union[IResolvable, typing.List[BatchPoolTaskSchedulingPolicy]] = None,
  timeouts: BatchPoolTimeouts = None,
  user_accounts: typing.Union[IResolvable, typing.List[BatchPoolUserAccounts]] = None,
  windows: typing.Union[IResolvable, typing.List[BatchPoolWindows]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.accountName">account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#account_name BatchPool#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#name BatchPool#name}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.nodeAgentSkuId">node_agent_sku_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#node_agent_sku_id BatchPool#node_agent_sku_id}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#resource_group_name BatchPool#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.storageImageReference">storage_image_reference</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference">BatchPoolStorageImageReference</a></code> | storage_image_reference block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.vmSize">vm_size</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#vm_size BatchPool#vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.autoScale">auto_scale</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScale">BatchPoolAutoScale</a></code> | auto_scale block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.certificate">certificate</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificate">BatchPoolCertificate</a>]]</code> | certificate block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.containerConfiguration">container_configuration</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfiguration">BatchPoolContainerConfiguration</a></code> | container_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.dataDisks">data_disks</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisks">BatchPoolDataDisks</a>]]</code> | data_disks block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.diskEncryption">disk_encryption</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryption">BatchPoolDiskEncryption</a>]]</code> | disk_encryption block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#display_name BatchPool#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.extensions">extensions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensions">BatchPoolExtensions</a>]]</code> | extensions block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.fixedScale">fixed_scale</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScale">BatchPoolFixedScale</a></code> | fixed_scale block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#id BatchPool#id}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentity">BatchPoolIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.interNodeCommunication">inter_node_communication</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#inter_node_communication BatchPool#inter_node_communication}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.licenseType">license_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#license_type BatchPool#license_type}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.maxTasksPerNode">max_tasks_per_node</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#max_tasks_per_node BatchPool#max_tasks_per_node}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#metadata BatchPool#metadata}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.mount">mount</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMount">BatchPoolMount</a>]]</code> | mount block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.networkConfiguration">network_configuration</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration">BatchPoolNetworkConfiguration</a></code> | network_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.nodePlacement">node_placement</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacement">BatchPoolNodePlacement</a>]]</code> | node_placement block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.osDiskPlacement">os_disk_placement</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#os_disk_placement BatchPool#os_disk_placement}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.startTask">start_task</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTask">BatchPoolStartTask</a></code> | start_task block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.stopPendingResizeOperation">stop_pending_resize_operation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#stop_pending_resize_operation BatchPool#stop_pending_resize_operation}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.targetNodeCommunicationMode">target_node_communication_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#target_node_communication_mode BatchPool#target_node_communication_mode}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.taskSchedulingPolicy">task_scheduling_policy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicy">BatchPoolTaskSchedulingPolicy</a>]]</code> | task_scheduling_policy block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeouts">BatchPoolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.userAccounts">user_accounts</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts">BatchPoolUserAccounts</a>]]</code> | user_accounts block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.windows">windows</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindows">BatchPoolWindows</a>]]</code> | windows block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_name`<sup>Required</sup> <a name="account_name" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.accountName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#account_name BatchPool#account_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#name BatchPool#name}.

---

##### `node_agent_sku_id`<sup>Required</sup> <a name="node_agent_sku_id" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.nodeAgentSkuId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#node_agent_sku_id BatchPool#node_agent_sku_id}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#resource_group_name BatchPool#resource_group_name}.

---

##### `storage_image_reference`<sup>Required</sup> <a name="storage_image_reference" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.storageImageReference"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference">BatchPoolStorageImageReference</a>

storage_image_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#storage_image_reference BatchPool#storage_image_reference}

---

##### `vm_size`<sup>Required</sup> <a name="vm_size" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.vmSize"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#vm_size BatchPool#vm_size}.

---

##### `auto_scale`<sup>Optional</sup> <a name="auto_scale" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.autoScale"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScale">BatchPoolAutoScale</a>

auto_scale block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#auto_scale BatchPool#auto_scale}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.certificate"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificate">BatchPoolCertificate</a>]]

certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#certificate BatchPool#certificate}

---

##### `container_configuration`<sup>Optional</sup> <a name="container_configuration" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.containerConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfiguration">BatchPoolContainerConfiguration</a>

container_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#container_configuration BatchPool#container_configuration}

---

##### `data_disks`<sup>Optional</sup> <a name="data_disks" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.dataDisks"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisks">BatchPoolDataDisks</a>]]

data_disks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#data_disks BatchPool#data_disks}

---

##### `disk_encryption`<sup>Optional</sup> <a name="disk_encryption" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.diskEncryption"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryption">BatchPoolDiskEncryption</a>]]

disk_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#disk_encryption BatchPool#disk_encryption}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#display_name BatchPool#display_name}.

---

##### `extensions`<sup>Optional</sup> <a name="extensions" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.extensions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensions">BatchPoolExtensions</a>]]

extensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#extensions BatchPool#extensions}

---

##### `fixed_scale`<sup>Optional</sup> <a name="fixed_scale" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.fixedScale"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScale">BatchPoolFixedScale</a>

fixed_scale block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#fixed_scale BatchPool#fixed_scale}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#id BatchPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentity">BatchPoolIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#identity BatchPool#identity}

---

##### `inter_node_communication`<sup>Optional</sup> <a name="inter_node_communication" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.interNodeCommunication"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#inter_node_communication BatchPool#inter_node_communication}.

---

##### `license_type`<sup>Optional</sup> <a name="license_type" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.licenseType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#license_type BatchPool#license_type}.

---

##### `max_tasks_per_node`<sup>Optional</sup> <a name="max_tasks_per_node" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.maxTasksPerNode"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#max_tasks_per_node BatchPool#max_tasks_per_node}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.metadata"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#metadata BatchPool#metadata}.

---

##### `mount`<sup>Optional</sup> <a name="mount" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.mount"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMount">BatchPoolMount</a>]]

mount block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#mount BatchPool#mount}

---

##### `network_configuration`<sup>Optional</sup> <a name="network_configuration" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.networkConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration">BatchPoolNetworkConfiguration</a>

network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#network_configuration BatchPool#network_configuration}

---

##### `node_placement`<sup>Optional</sup> <a name="node_placement" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.nodePlacement"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacement">BatchPoolNodePlacement</a>]]

node_placement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#node_placement BatchPool#node_placement}

---

##### `os_disk_placement`<sup>Optional</sup> <a name="os_disk_placement" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.osDiskPlacement"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#os_disk_placement BatchPool#os_disk_placement}.

---

##### `start_task`<sup>Optional</sup> <a name="start_task" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.startTask"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTask">BatchPoolStartTask</a>

start_task block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#start_task BatchPool#start_task}

---

##### `stop_pending_resize_operation`<sup>Optional</sup> <a name="stop_pending_resize_operation" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.stopPendingResizeOperation"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#stop_pending_resize_operation BatchPool#stop_pending_resize_operation}.

---

##### `target_node_communication_mode`<sup>Optional</sup> <a name="target_node_communication_mode" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.targetNodeCommunicationMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#target_node_communication_mode BatchPool#target_node_communication_mode}.

---

##### `task_scheduling_policy`<sup>Optional</sup> <a name="task_scheduling_policy" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.taskSchedulingPolicy"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicy">BatchPoolTaskSchedulingPolicy</a>]]

task_scheduling_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#task_scheduling_policy BatchPool#task_scheduling_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeouts">BatchPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#timeouts BatchPool#timeouts}

---

##### `user_accounts`<sup>Optional</sup> <a name="user_accounts" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.userAccounts"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts">BatchPoolUserAccounts</a>]]

user_accounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#user_accounts BatchPool#user_accounts}

---

##### `windows`<sup>Optional</sup> <a name="windows" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.windows"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindows">BatchPoolWindows</a>]]

windows block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#windows BatchPool#windows}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.putAutoScale">put_auto_scale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.putCertificate">put_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.putContainerConfiguration">put_container_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.putDataDisks">put_data_disks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.putDiskEncryption">put_disk_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.putExtensions">put_extensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.putFixedScale">put_fixed_scale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.putIdentity">put_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.putMount">put_mount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.putNetworkConfiguration">put_network_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.putNodePlacement">put_node_placement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.putStartTask">put_start_task</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.putStorageImageReference">put_storage_image_reference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.putTaskSchedulingPolicy">put_task_scheduling_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.putUserAccounts">put_user_accounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.putWindows">put_windows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetAutoScale">reset_auto_scale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetCertificate">reset_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetContainerConfiguration">reset_container_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetDataDisks">reset_data_disks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetDiskEncryption">reset_disk_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetExtensions">reset_extensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetFixedScale">reset_fixed_scale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetIdentity">reset_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetInterNodeCommunication">reset_inter_node_communication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetLicenseType">reset_license_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetMaxTasksPerNode">reset_max_tasks_per_node</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetMount">reset_mount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetNetworkConfiguration">reset_network_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetNodePlacement">reset_node_placement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetOsDiskPlacement">reset_os_disk_placement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetStartTask">reset_start_task</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetStopPendingResizeOperation">reset_stop_pending_resize_operation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetTargetNodeCommunicationMode">reset_target_node_communication_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetTaskSchedulingPolicy">reset_task_scheduling_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetUserAccounts">reset_user_accounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetWindows">reset_windows</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.batchPool.BatchPool.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.batchPool.BatchPool.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.batchPool.BatchPool.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPool.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.batchPool.BatchPool.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.batchPool.BatchPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.batchPool.BatchPool.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.batchPool.BatchPool.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.batchPool.BatchPool.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.batchPool.BatchPool.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.batchPool.BatchPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.batchPool.BatchPool.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.batchPool.BatchPool.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.batchPool.BatchPool.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.batchPool.BatchPool.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.batchPool.BatchPool.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.batchPool.BatchPool.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.batchPool.BatchPool.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.batchPool.BatchPool.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.batchPool.BatchPool.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.batchPool.BatchPool.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.batchPool.BatchPool.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_auto_scale` <a name="put_auto_scale" id="@cdktf/provider-azurerm.batchPool.BatchPool.putAutoScale"></a>

```python
def put_auto_scale(
  formula: str,
  evaluation_interval: str = None
) -> None
```

###### `formula`<sup>Required</sup> <a name="formula" id="@cdktf/provider-azurerm.batchPool.BatchPool.putAutoScale.parameter.formula"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#formula BatchPool#formula}.

---

###### `evaluation_interval`<sup>Optional</sup> <a name="evaluation_interval" id="@cdktf/provider-azurerm.batchPool.BatchPool.putAutoScale.parameter.evaluationInterval"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#evaluation_interval BatchPool#evaluation_interval}.

---

##### `put_certificate` <a name="put_certificate" id="@cdktf/provider-azurerm.batchPool.BatchPool.putCertificate"></a>

```python
def put_certificate(
  value: typing.Union[IResolvable, typing.List[BatchPoolCertificate]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPool.putCertificate.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificate">BatchPoolCertificate</a>]]

---

##### `put_container_configuration` <a name="put_container_configuration" id="@cdktf/provider-azurerm.batchPool.BatchPool.putContainerConfiguration"></a>

```python
def put_container_configuration(
  container_image_names: typing.List[str] = None,
  container_registries: typing.Union[IResolvable, typing.List[BatchPoolContainerConfigurationContainerRegistries]] = None,
  type: str = None
) -> None
```

###### `container_image_names`<sup>Optional</sup> <a name="container_image_names" id="@cdktf/provider-azurerm.batchPool.BatchPool.putContainerConfiguration.parameter.containerImageNames"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#container_image_names BatchPool#container_image_names}.

---

###### `container_registries`<sup>Optional</sup> <a name="container_registries" id="@cdktf/provider-azurerm.batchPool.BatchPool.putContainerConfiguration.parameter.containerRegistries"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistries">BatchPoolContainerConfigurationContainerRegistries</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#container_registries BatchPool#container_registries}.

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-azurerm.batchPool.BatchPool.putContainerConfiguration.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#type BatchPool#type}.

---

##### `put_data_disks` <a name="put_data_disks" id="@cdktf/provider-azurerm.batchPool.BatchPool.putDataDisks"></a>

```python
def put_data_disks(
  value: typing.Union[IResolvable, typing.List[BatchPoolDataDisks]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPool.putDataDisks.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisks">BatchPoolDataDisks</a>]]

---

##### `put_disk_encryption` <a name="put_disk_encryption" id="@cdktf/provider-azurerm.batchPool.BatchPool.putDiskEncryption"></a>

```python
def put_disk_encryption(
  value: typing.Union[IResolvable, typing.List[BatchPoolDiskEncryption]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPool.putDiskEncryption.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryption">BatchPoolDiskEncryption</a>]]

---

##### `put_extensions` <a name="put_extensions" id="@cdktf/provider-azurerm.batchPool.BatchPool.putExtensions"></a>

```python
def put_extensions(
  value: typing.Union[IResolvable, typing.List[BatchPoolExtensions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPool.putExtensions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensions">BatchPoolExtensions</a>]]

---

##### `put_fixed_scale` <a name="put_fixed_scale" id="@cdktf/provider-azurerm.batchPool.BatchPool.putFixedScale"></a>

```python
def put_fixed_scale(
  node_deallocation_method: str = None,
  resize_timeout: str = None,
  target_dedicated_nodes: typing.Union[int, float] = None,
  target_low_priority_nodes: typing.Union[int, float] = None
) -> None
```

###### `node_deallocation_method`<sup>Optional</sup> <a name="node_deallocation_method" id="@cdktf/provider-azurerm.batchPool.BatchPool.putFixedScale.parameter.nodeDeallocationMethod"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#node_deallocation_method BatchPool#node_deallocation_method}.

---

###### `resize_timeout`<sup>Optional</sup> <a name="resize_timeout" id="@cdktf/provider-azurerm.batchPool.BatchPool.putFixedScale.parameter.resizeTimeout"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#resize_timeout BatchPool#resize_timeout}.

---

###### `target_dedicated_nodes`<sup>Optional</sup> <a name="target_dedicated_nodes" id="@cdktf/provider-azurerm.batchPool.BatchPool.putFixedScale.parameter.targetDedicatedNodes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#target_dedicated_nodes BatchPool#target_dedicated_nodes}.

---

###### `target_low_priority_nodes`<sup>Optional</sup> <a name="target_low_priority_nodes" id="@cdktf/provider-azurerm.batchPool.BatchPool.putFixedScale.parameter.targetLowPriorityNodes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#target_low_priority_nodes BatchPool#target_low_priority_nodes}.

---

##### `put_identity` <a name="put_identity" id="@cdktf/provider-azurerm.batchPool.BatchPool.putIdentity"></a>

```python
def put_identity(
  identity_ids: typing.List[str],
  type: str
) -> None
```

###### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.batchPool.BatchPool.putIdentity.parameter.identityIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#identity_ids BatchPool#identity_ids}.

---

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.batchPool.BatchPool.putIdentity.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#type BatchPool#type}.

---

##### `put_mount` <a name="put_mount" id="@cdktf/provider-azurerm.batchPool.BatchPool.putMount"></a>

```python
def put_mount(
  value: typing.Union[IResolvable, typing.List[BatchPoolMount]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPool.putMount.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMount">BatchPoolMount</a>]]

---

##### `put_network_configuration` <a name="put_network_configuration" id="@cdktf/provider-azurerm.batchPool.BatchPool.putNetworkConfiguration"></a>

```python
def put_network_configuration(
  accelerated_networking_enabled: typing.Union[bool, IResolvable] = None,
  dynamic_vnet_assignment_scope: str = None,
  endpoint_configuration: typing.Union[IResolvable, typing.List[BatchPoolNetworkConfigurationEndpointConfiguration]] = None,
  public_address_provisioning_type: str = None,
  public_ips: typing.List[str] = None,
  subnet_id: str = None
) -> None
```

###### `accelerated_networking_enabled`<sup>Optional</sup> <a name="accelerated_networking_enabled" id="@cdktf/provider-azurerm.batchPool.BatchPool.putNetworkConfiguration.parameter.acceleratedNetworkingEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#accelerated_networking_enabled BatchPool#accelerated_networking_enabled}.

---

###### `dynamic_vnet_assignment_scope`<sup>Optional</sup> <a name="dynamic_vnet_assignment_scope" id="@cdktf/provider-azurerm.batchPool.BatchPool.putNetworkConfiguration.parameter.dynamicVnetAssignmentScope"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#dynamic_vnet_assignment_scope BatchPool#dynamic_vnet_assignment_scope}.

---

###### `endpoint_configuration`<sup>Optional</sup> <a name="endpoint_configuration" id="@cdktf/provider-azurerm.batchPool.BatchPool.putNetworkConfiguration.parameter.endpointConfiguration"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfiguration">BatchPoolNetworkConfigurationEndpointConfiguration</a>]]

endpoint_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#endpoint_configuration BatchPool#endpoint_configuration}

---

###### `public_address_provisioning_type`<sup>Optional</sup> <a name="public_address_provisioning_type" id="@cdktf/provider-azurerm.batchPool.BatchPool.putNetworkConfiguration.parameter.publicAddressProvisioningType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#public_address_provisioning_type BatchPool#public_address_provisioning_type}.

---

###### `public_ips`<sup>Optional</sup> <a name="public_ips" id="@cdktf/provider-azurerm.batchPool.BatchPool.putNetworkConfiguration.parameter.publicIps"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#public_ips BatchPool#public_ips}.

---

###### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.batchPool.BatchPool.putNetworkConfiguration.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#subnet_id BatchPool#subnet_id}.

---

##### `put_node_placement` <a name="put_node_placement" id="@cdktf/provider-azurerm.batchPool.BatchPool.putNodePlacement"></a>

```python
def put_node_placement(
  value: typing.Union[IResolvable, typing.List[BatchPoolNodePlacement]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPool.putNodePlacement.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacement">BatchPoolNodePlacement</a>]]

---

##### `put_start_task` <a name="put_start_task" id="@cdktf/provider-azurerm.batchPool.BatchPool.putStartTask"></a>

```python
def put_start_task(
  command_line: str,
  user_identity: BatchPoolStartTaskUserIdentity,
  common_environment_properties: typing.Mapping[str] = None,
  container: typing.Union[IResolvable, typing.List[BatchPoolStartTaskContainer]] = None,
  resource_file: typing.Union[IResolvable, typing.List[BatchPoolStartTaskResourceFile]] = None,
  task_retry_maximum: typing.Union[int, float] = None,
  wait_for_success: typing.Union[bool, IResolvable] = None
) -> None
```

###### `command_line`<sup>Required</sup> <a name="command_line" id="@cdktf/provider-azurerm.batchPool.BatchPool.putStartTask.parameter.commandLine"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#command_line BatchPool#command_line}.

---

###### `user_identity`<sup>Required</sup> <a name="user_identity" id="@cdktf/provider-azurerm.batchPool.BatchPool.putStartTask.parameter.userIdentity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentity">BatchPoolStartTaskUserIdentity</a>

user_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#user_identity BatchPool#user_identity}

---

###### `common_environment_properties`<sup>Optional</sup> <a name="common_environment_properties" id="@cdktf/provider-azurerm.batchPool.BatchPool.putStartTask.parameter.commonEnvironmentProperties"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#common_environment_properties BatchPool#common_environment_properties}.

---

###### `container`<sup>Optional</sup> <a name="container" id="@cdktf/provider-azurerm.batchPool.BatchPool.putStartTask.parameter.container"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainer">BatchPoolStartTaskContainer</a>]]

container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#container BatchPool#container}

---

###### `resource_file`<sup>Optional</sup> <a name="resource_file" id="@cdktf/provider-azurerm.batchPool.BatchPool.putStartTask.parameter.resourceFile"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile">BatchPoolStartTaskResourceFile</a>]]

resource_file block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#resource_file BatchPool#resource_file}

---

###### `task_retry_maximum`<sup>Optional</sup> <a name="task_retry_maximum" id="@cdktf/provider-azurerm.batchPool.BatchPool.putStartTask.parameter.taskRetryMaximum"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#task_retry_maximum BatchPool#task_retry_maximum}.

---

###### `wait_for_success`<sup>Optional</sup> <a name="wait_for_success" id="@cdktf/provider-azurerm.batchPool.BatchPool.putStartTask.parameter.waitForSuccess"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#wait_for_success BatchPool#wait_for_success}.

---

##### `put_storage_image_reference` <a name="put_storage_image_reference" id="@cdktf/provider-azurerm.batchPool.BatchPool.putStorageImageReference"></a>

```python
def put_storage_image_reference(
  id: str = None,
  offer: str = None,
  publisher: str = None,
  sku: str = None,
  version: str = None
) -> None
```

###### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.batchPool.BatchPool.putStorageImageReference.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#id BatchPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

###### `offer`<sup>Optional</sup> <a name="offer" id="@cdktf/provider-azurerm.batchPool.BatchPool.putStorageImageReference.parameter.offer"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#offer BatchPool#offer}.

---

###### `publisher`<sup>Optional</sup> <a name="publisher" id="@cdktf/provider-azurerm.batchPool.BatchPool.putStorageImageReference.parameter.publisher"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#publisher BatchPool#publisher}.

---

###### `sku`<sup>Optional</sup> <a name="sku" id="@cdktf/provider-azurerm.batchPool.BatchPool.putStorageImageReference.parameter.sku"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#sku BatchPool#sku}.

---

###### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurerm.batchPool.BatchPool.putStorageImageReference.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#version BatchPool#version}.

---

##### `put_task_scheduling_policy` <a name="put_task_scheduling_policy" id="@cdktf/provider-azurerm.batchPool.BatchPool.putTaskSchedulingPolicy"></a>

```python
def put_task_scheduling_policy(
  value: typing.Union[IResolvable, typing.List[BatchPoolTaskSchedulingPolicy]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPool.putTaskSchedulingPolicy.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicy">BatchPoolTaskSchedulingPolicy</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.batchPool.BatchPool.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.batchPool.BatchPool.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#create BatchPool#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.batchPool.BatchPool.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#delete BatchPool#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.batchPool.BatchPool.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#read BatchPool#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.batchPool.BatchPool.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#update BatchPool#update}.

---

##### `put_user_accounts` <a name="put_user_accounts" id="@cdktf/provider-azurerm.batchPool.BatchPool.putUserAccounts"></a>

```python
def put_user_accounts(
  value: typing.Union[IResolvable, typing.List[BatchPoolUserAccounts]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPool.putUserAccounts.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts">BatchPoolUserAccounts</a>]]

---

##### `put_windows` <a name="put_windows" id="@cdktf/provider-azurerm.batchPool.BatchPool.putWindows"></a>

```python
def put_windows(
  value: typing.Union[IResolvable, typing.List[BatchPoolWindows]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPool.putWindows.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindows">BatchPoolWindows</a>]]

---

##### `reset_auto_scale` <a name="reset_auto_scale" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetAutoScale"></a>

```python
def reset_auto_scale() -> None
```

##### `reset_certificate` <a name="reset_certificate" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetCertificate"></a>

```python
def reset_certificate() -> None
```

##### `reset_container_configuration` <a name="reset_container_configuration" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetContainerConfiguration"></a>

```python
def reset_container_configuration() -> None
```

##### `reset_data_disks` <a name="reset_data_disks" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetDataDisks"></a>

```python
def reset_data_disks() -> None
```

##### `reset_disk_encryption` <a name="reset_disk_encryption" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetDiskEncryption"></a>

```python
def reset_disk_encryption() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_extensions` <a name="reset_extensions" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetExtensions"></a>

```python
def reset_extensions() -> None
```

##### `reset_fixed_scale` <a name="reset_fixed_scale" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetFixedScale"></a>

```python
def reset_fixed_scale() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity` <a name="reset_identity" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetIdentity"></a>

```python
def reset_identity() -> None
```

##### `reset_inter_node_communication` <a name="reset_inter_node_communication" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetInterNodeCommunication"></a>

```python
def reset_inter_node_communication() -> None
```

##### `reset_license_type` <a name="reset_license_type" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetLicenseType"></a>

```python
def reset_license_type() -> None
```

##### `reset_max_tasks_per_node` <a name="reset_max_tasks_per_node" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetMaxTasksPerNode"></a>

```python
def reset_max_tasks_per_node() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_mount` <a name="reset_mount" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetMount"></a>

```python
def reset_mount() -> None
```

##### `reset_network_configuration` <a name="reset_network_configuration" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetNetworkConfiguration"></a>

```python
def reset_network_configuration() -> None
```

##### `reset_node_placement` <a name="reset_node_placement" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetNodePlacement"></a>

```python
def reset_node_placement() -> None
```

##### `reset_os_disk_placement` <a name="reset_os_disk_placement" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetOsDiskPlacement"></a>

```python
def reset_os_disk_placement() -> None
```

##### `reset_start_task` <a name="reset_start_task" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetStartTask"></a>

```python
def reset_start_task() -> None
```

##### `reset_stop_pending_resize_operation` <a name="reset_stop_pending_resize_operation" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetStopPendingResizeOperation"></a>

```python
def reset_stop_pending_resize_operation() -> None
```

##### `reset_target_node_communication_mode` <a name="reset_target_node_communication_mode" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetTargetNodeCommunicationMode"></a>

```python
def reset_target_node_communication_mode() -> None
```

##### `reset_task_scheduling_policy` <a name="reset_task_scheduling_policy" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetTaskSchedulingPolicy"></a>

```python
def reset_task_scheduling_policy() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_user_accounts` <a name="reset_user_accounts" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetUserAccounts"></a>

```python
def reset_user_accounts() -> None
```

##### `reset_windows` <a name="reset_windows" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetWindows"></a>

```python
def reset_windows() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a BatchPool resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.batchPool.BatchPool.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPool.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.batchPool.BatchPool.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.batchPool.BatchPool.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPool.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.batchPool.BatchPool.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.batchPool.BatchPool.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPool.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.batchPool.BatchPool.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.batchPool.BatchPool.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPool.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a BatchPool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.batchPool.BatchPool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.batchPool.BatchPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BatchPool to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.batchPool.BatchPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BatchPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.batchPool.BatchPool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BatchPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.autoScale">auto_scale</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference">BatchPoolAutoScaleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.certificate">certificate</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList">BatchPoolCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.containerConfiguration">container_configuration</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference">BatchPoolContainerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.dataDisks">data_disks</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList">BatchPoolDataDisksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.diskEncryption">disk_encryption</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList">BatchPoolDiskEncryptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.extensions">extensions</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList">BatchPoolExtensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.fixedScale">fixed_scale</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference">BatchPoolFixedScaleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference">BatchPoolIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.mount">mount</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountList">BatchPoolMountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.networkConfiguration">network_configuration</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference">BatchPoolNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.nodePlacement">node_placement</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList">BatchPoolNodePlacementList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.startTask">start_task</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference">BatchPoolStartTaskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.storageImageReference">storage_image_reference</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference">BatchPoolStorageImageReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.taskSchedulingPolicy">task_scheduling_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList">BatchPoolTaskSchedulingPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference">BatchPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.userAccounts">user_accounts</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList">BatchPoolUserAccountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.windows">windows</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList">BatchPoolWindowsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.accountNameInput">account_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.autoScaleInput">auto_scale_input</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScale">BatchPoolAutoScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.certificateInput">certificate_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificate">BatchPoolCertificate</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.containerConfigurationInput">container_configuration_input</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfiguration">BatchPoolContainerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.dataDisksInput">data_disks_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisks">BatchPoolDataDisks</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.diskEncryptionInput">disk_encryption_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryption">BatchPoolDiskEncryption</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.extensionsInput">extensions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensions">BatchPoolExtensions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.fixedScaleInput">fixed_scale_input</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScale">BatchPoolFixedScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.identityInput">identity_input</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentity">BatchPoolIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.interNodeCommunicationInput">inter_node_communication_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.licenseTypeInput">license_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.maxTasksPerNodeInput">max_tasks_per_node_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.metadataInput">metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.mountInput">mount_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMount">BatchPoolMount</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.networkConfigurationInput">network_configuration_input</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration">BatchPoolNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.nodeAgentSkuIdInput">node_agent_sku_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.nodePlacementInput">node_placement_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacement">BatchPoolNodePlacement</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.osDiskPlacementInput">os_disk_placement_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.startTaskInput">start_task_input</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTask">BatchPoolStartTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.stopPendingResizeOperationInput">stop_pending_resize_operation_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.storageImageReferenceInput">storage_image_reference_input</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference">BatchPoolStorageImageReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.targetNodeCommunicationModeInput">target_node_communication_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.taskSchedulingPolicyInput">task_scheduling_policy_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicy">BatchPoolTaskSchedulingPolicy</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeouts">BatchPoolTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.userAccountsInput">user_accounts_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts">BatchPoolUserAccounts</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.vmSizeInput">vm_size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.windowsInput">windows_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindows">BatchPoolWindows</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.accountName">account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.interNodeCommunication">inter_node_communication</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.licenseType">license_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.maxTasksPerNode">max_tasks_per_node</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.nodeAgentSkuId">node_agent_sku_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.osDiskPlacement">os_disk_placement</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.stopPendingResizeOperation">stop_pending_resize_operation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.targetNodeCommunicationMode">target_node_communication_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.vmSize">vm_size</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `auto_scale`<sup>Required</sup> <a name="auto_scale" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.autoScale"></a>

```python
auto_scale: BatchPoolAutoScaleOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference">BatchPoolAutoScaleOutputReference</a>

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.certificate"></a>

```python
certificate: BatchPoolCertificateList
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList">BatchPoolCertificateList</a>

---

##### `container_configuration`<sup>Required</sup> <a name="container_configuration" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.containerConfiguration"></a>

```python
container_configuration: BatchPoolContainerConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference">BatchPoolContainerConfigurationOutputReference</a>

---

##### `data_disks`<sup>Required</sup> <a name="data_disks" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.dataDisks"></a>

```python
data_disks: BatchPoolDataDisksList
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList">BatchPoolDataDisksList</a>

---

##### `disk_encryption`<sup>Required</sup> <a name="disk_encryption" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.diskEncryption"></a>

```python
disk_encryption: BatchPoolDiskEncryptionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList">BatchPoolDiskEncryptionList</a>

---

##### `extensions`<sup>Required</sup> <a name="extensions" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.extensions"></a>

```python
extensions: BatchPoolExtensionsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList">BatchPoolExtensionsList</a>

---

##### `fixed_scale`<sup>Required</sup> <a name="fixed_scale" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.fixedScale"></a>

```python
fixed_scale: BatchPoolFixedScaleOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference">BatchPoolFixedScaleOutputReference</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.identity"></a>

```python
identity: BatchPoolIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference">BatchPoolIdentityOutputReference</a>

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.mount"></a>

```python
mount: BatchPoolMountList
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountList">BatchPoolMountList</a>

---

##### `network_configuration`<sup>Required</sup> <a name="network_configuration" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.networkConfiguration"></a>

```python
network_configuration: BatchPoolNetworkConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference">BatchPoolNetworkConfigurationOutputReference</a>

---

##### `node_placement`<sup>Required</sup> <a name="node_placement" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.nodePlacement"></a>

```python
node_placement: BatchPoolNodePlacementList
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList">BatchPoolNodePlacementList</a>

---

##### `start_task`<sup>Required</sup> <a name="start_task" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.startTask"></a>

```python
start_task: BatchPoolStartTaskOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference">BatchPoolStartTaskOutputReference</a>

---

##### `storage_image_reference`<sup>Required</sup> <a name="storage_image_reference" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.storageImageReference"></a>

```python
storage_image_reference: BatchPoolStorageImageReferenceOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference">BatchPoolStorageImageReferenceOutputReference</a>

---

##### `task_scheduling_policy`<sup>Required</sup> <a name="task_scheduling_policy" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.taskSchedulingPolicy"></a>

```python
task_scheduling_policy: BatchPoolTaskSchedulingPolicyList
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList">BatchPoolTaskSchedulingPolicyList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.timeouts"></a>

```python
timeouts: BatchPoolTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference">BatchPoolTimeoutsOutputReference</a>

---

##### `user_accounts`<sup>Required</sup> <a name="user_accounts" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.userAccounts"></a>

```python
user_accounts: BatchPoolUserAccountsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList">BatchPoolUserAccountsList</a>

---

##### `windows`<sup>Required</sup> <a name="windows" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.windows"></a>

```python
windows: BatchPoolWindowsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList">BatchPoolWindowsList</a>

---

##### `account_name_input`<sup>Optional</sup> <a name="account_name_input" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.accountNameInput"></a>

```python
account_name_input: str
```

- *Type:* str

---

##### `auto_scale_input`<sup>Optional</sup> <a name="auto_scale_input" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.autoScaleInput"></a>

```python
auto_scale_input: BatchPoolAutoScale
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScale">BatchPoolAutoScale</a>

---

##### `certificate_input`<sup>Optional</sup> <a name="certificate_input" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.certificateInput"></a>

```python
certificate_input: typing.Union[IResolvable, typing.List[BatchPoolCertificate]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificate">BatchPoolCertificate</a>]]

---

##### `container_configuration_input`<sup>Optional</sup> <a name="container_configuration_input" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.containerConfigurationInput"></a>

```python
container_configuration_input: BatchPoolContainerConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfiguration">BatchPoolContainerConfiguration</a>

---

##### `data_disks_input`<sup>Optional</sup> <a name="data_disks_input" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.dataDisksInput"></a>

```python
data_disks_input: typing.Union[IResolvable, typing.List[BatchPoolDataDisks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisks">BatchPoolDataDisks</a>]]

---

##### `disk_encryption_input`<sup>Optional</sup> <a name="disk_encryption_input" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.diskEncryptionInput"></a>

```python
disk_encryption_input: typing.Union[IResolvable, typing.List[BatchPoolDiskEncryption]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryption">BatchPoolDiskEncryption</a>]]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `extensions_input`<sup>Optional</sup> <a name="extensions_input" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.extensionsInput"></a>

```python
extensions_input: typing.Union[IResolvable, typing.List[BatchPoolExtensions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensions">BatchPoolExtensions</a>]]

---

##### `fixed_scale_input`<sup>Optional</sup> <a name="fixed_scale_input" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.fixedScaleInput"></a>

```python
fixed_scale_input: BatchPoolFixedScale
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScale">BatchPoolFixedScale</a>

---

##### `identity_input`<sup>Optional</sup> <a name="identity_input" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.identityInput"></a>

```python
identity_input: BatchPoolIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentity">BatchPoolIdentity</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `inter_node_communication_input`<sup>Optional</sup> <a name="inter_node_communication_input" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.interNodeCommunicationInput"></a>

```python
inter_node_communication_input: str
```

- *Type:* str

---

##### `license_type_input`<sup>Optional</sup> <a name="license_type_input" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.licenseTypeInput"></a>

```python
license_type_input: str
```

- *Type:* str

---

##### `max_tasks_per_node_input`<sup>Optional</sup> <a name="max_tasks_per_node_input" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.maxTasksPerNodeInput"></a>

```python
max_tasks_per_node_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.metadataInput"></a>

```python
metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `mount_input`<sup>Optional</sup> <a name="mount_input" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.mountInput"></a>

```python
mount_input: typing.Union[IResolvable, typing.List[BatchPoolMount]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMount">BatchPoolMount</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_configuration_input`<sup>Optional</sup> <a name="network_configuration_input" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.networkConfigurationInput"></a>

```python
network_configuration_input: BatchPoolNetworkConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration">BatchPoolNetworkConfiguration</a>

---

##### `node_agent_sku_id_input`<sup>Optional</sup> <a name="node_agent_sku_id_input" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.nodeAgentSkuIdInput"></a>

```python
node_agent_sku_id_input: str
```

- *Type:* str

---

##### `node_placement_input`<sup>Optional</sup> <a name="node_placement_input" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.nodePlacementInput"></a>

```python
node_placement_input: typing.Union[IResolvable, typing.List[BatchPoolNodePlacement]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacement">BatchPoolNodePlacement</a>]]

---

##### `os_disk_placement_input`<sup>Optional</sup> <a name="os_disk_placement_input" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.osDiskPlacementInput"></a>

```python
os_disk_placement_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `start_task_input`<sup>Optional</sup> <a name="start_task_input" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.startTaskInput"></a>

```python
start_task_input: BatchPoolStartTask
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTask">BatchPoolStartTask</a>

---

##### `stop_pending_resize_operation_input`<sup>Optional</sup> <a name="stop_pending_resize_operation_input" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.stopPendingResizeOperationInput"></a>

```python
stop_pending_resize_operation_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `storage_image_reference_input`<sup>Optional</sup> <a name="storage_image_reference_input" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.storageImageReferenceInput"></a>

```python
storage_image_reference_input: BatchPoolStorageImageReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference">BatchPoolStorageImageReference</a>

---

##### `target_node_communication_mode_input`<sup>Optional</sup> <a name="target_node_communication_mode_input" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.targetNodeCommunicationModeInput"></a>

```python
target_node_communication_mode_input: str
```

- *Type:* str

---

##### `task_scheduling_policy_input`<sup>Optional</sup> <a name="task_scheduling_policy_input" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.taskSchedulingPolicyInput"></a>

```python
task_scheduling_policy_input: typing.Union[IResolvable, typing.List[BatchPoolTaskSchedulingPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicy">BatchPoolTaskSchedulingPolicy</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, BatchPoolTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeouts">BatchPoolTimeouts</a>]

---

##### `user_accounts_input`<sup>Optional</sup> <a name="user_accounts_input" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.userAccountsInput"></a>

```python
user_accounts_input: typing.Union[IResolvable, typing.List[BatchPoolUserAccounts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts">BatchPoolUserAccounts</a>]]

---

##### `vm_size_input`<sup>Optional</sup> <a name="vm_size_input" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.vmSizeInput"></a>

```python
vm_size_input: str
```

- *Type:* str

---

##### `windows_input`<sup>Optional</sup> <a name="windows_input" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.windowsInput"></a>

```python
windows_input: typing.Union[IResolvable, typing.List[BatchPoolWindows]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindows">BatchPoolWindows</a>]]

---

##### `account_name`<sup>Required</sup> <a name="account_name" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.accountName"></a>

```python
account_name: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `inter_node_communication`<sup>Required</sup> <a name="inter_node_communication" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.interNodeCommunication"></a>

```python
inter_node_communication: str
```

- *Type:* str

---

##### `license_type`<sup>Required</sup> <a name="license_type" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.licenseType"></a>

```python
license_type: str
```

- *Type:* str

---

##### `max_tasks_per_node`<sup>Required</sup> <a name="max_tasks_per_node" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.maxTasksPerNode"></a>

```python
max_tasks_per_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `node_agent_sku_id`<sup>Required</sup> <a name="node_agent_sku_id" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.nodeAgentSkuId"></a>

```python
node_agent_sku_id: str
```

- *Type:* str

---

##### `os_disk_placement`<sup>Required</sup> <a name="os_disk_placement" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.osDiskPlacement"></a>

```python
os_disk_placement: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `stop_pending_resize_operation`<sup>Required</sup> <a name="stop_pending_resize_operation" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.stopPendingResizeOperation"></a>

```python
stop_pending_resize_operation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `target_node_communication_mode`<sup>Required</sup> <a name="target_node_communication_mode" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.targetNodeCommunicationMode"></a>

```python
target_node_communication_mode: str
```

- *Type:* str

---

##### `vm_size`<sup>Required</sup> <a name="vm_size" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.vmSize"></a>

```python
vm_size: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BatchPoolAutoScale <a name="BatchPoolAutoScale" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScale"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScale.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolAutoScale(
  formula: str,
  evaluation_interval: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScale.property.formula">formula</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#formula BatchPool#formula}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScale.property.evaluationInterval">evaluation_interval</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#evaluation_interval BatchPool#evaluation_interval}. |

---

##### `formula`<sup>Required</sup> <a name="formula" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScale.property.formula"></a>

```python
formula: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#formula BatchPool#formula}.

---

##### `evaluation_interval`<sup>Optional</sup> <a name="evaluation_interval" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScale.property.evaluationInterval"></a>

```python
evaluation_interval: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#evaluation_interval BatchPool#evaluation_interval}.

---

### BatchPoolCertificate <a name="BatchPoolCertificate" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificate.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolCertificate(
  id: str,
  store_location: str,
  store_name: str = None,
  visibility: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificate.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#id BatchPool#id}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificate.property.storeLocation">store_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#store_location BatchPool#store_location}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificate.property.storeName">store_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#store_name BatchPool#store_name}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificate.property.visibility">visibility</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#visibility BatchPool#visibility}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificate.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#id BatchPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `store_location`<sup>Required</sup> <a name="store_location" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificate.property.storeLocation"></a>

```python
store_location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#store_location BatchPool#store_location}.

---

##### `store_name`<sup>Optional</sup> <a name="store_name" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificate.property.storeName"></a>

```python
store_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#store_name BatchPool#store_name}.

---

##### `visibility`<sup>Optional</sup> <a name="visibility" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificate.property.visibility"></a>

```python
visibility: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#visibility BatchPool#visibility}.

---

### BatchPoolConfig <a name="BatchPoolConfig" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_name: str,
  name: str,
  node_agent_sku_id: str,
  resource_group_name: str,
  storage_image_reference: BatchPoolStorageImageReference,
  vm_size: str,
  auto_scale: BatchPoolAutoScale = None,
  certificate: typing.Union[IResolvable, typing.List[BatchPoolCertificate]] = None,
  container_configuration: BatchPoolContainerConfiguration = None,
  data_disks: typing.Union[IResolvable, typing.List[BatchPoolDataDisks]] = None,
  disk_encryption: typing.Union[IResolvable, typing.List[BatchPoolDiskEncryption]] = None,
  display_name: str = None,
  extensions: typing.Union[IResolvable, typing.List[BatchPoolExtensions]] = None,
  fixed_scale: BatchPoolFixedScale = None,
  id: str = None,
  identity: BatchPoolIdentity = None,
  inter_node_communication: str = None,
  license_type: str = None,
  max_tasks_per_node: typing.Union[int, float] = None,
  metadata: typing.Mapping[str] = None,
  mount: typing.Union[IResolvable, typing.List[BatchPoolMount]] = None,
  network_configuration: BatchPoolNetworkConfiguration = None,
  node_placement: typing.Union[IResolvable, typing.List[BatchPoolNodePlacement]] = None,
  os_disk_placement: str = None,
  start_task: BatchPoolStartTask = None,
  stop_pending_resize_operation: typing.Union[bool, IResolvable] = None,
  target_node_communication_mode: str = None,
  task_scheduling_policy: typing.Union[IResolvable, typing.List[BatchPoolTaskSchedulingPolicy]] = None,
  timeouts: BatchPoolTimeouts = None,
  user_accounts: typing.Union[IResolvable, typing.List[BatchPoolUserAccounts]] = None,
  windows: typing.Union[IResolvable, typing.List[BatchPoolWindows]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.accountName">account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#account_name BatchPool#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#name BatchPool#name}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.nodeAgentSkuId">node_agent_sku_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#node_agent_sku_id BatchPool#node_agent_sku_id}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#resource_group_name BatchPool#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.storageImageReference">storage_image_reference</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference">BatchPoolStorageImageReference</a></code> | storage_image_reference block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.vmSize">vm_size</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#vm_size BatchPool#vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.autoScale">auto_scale</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScale">BatchPoolAutoScale</a></code> | auto_scale block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.certificate">certificate</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificate">BatchPoolCertificate</a>]]</code> | certificate block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.containerConfiguration">container_configuration</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfiguration">BatchPoolContainerConfiguration</a></code> | container_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.dataDisks">data_disks</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisks">BatchPoolDataDisks</a>]]</code> | data_disks block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.diskEncryption">disk_encryption</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryption">BatchPoolDiskEncryption</a>]]</code> | disk_encryption block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#display_name BatchPool#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.extensions">extensions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensions">BatchPoolExtensions</a>]]</code> | extensions block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.fixedScale">fixed_scale</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScale">BatchPoolFixedScale</a></code> | fixed_scale block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#id BatchPool#id}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentity">BatchPoolIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.interNodeCommunication">inter_node_communication</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#inter_node_communication BatchPool#inter_node_communication}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.licenseType">license_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#license_type BatchPool#license_type}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.maxTasksPerNode">max_tasks_per_node</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#max_tasks_per_node BatchPool#max_tasks_per_node}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#metadata BatchPool#metadata}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.mount">mount</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMount">BatchPoolMount</a>]]</code> | mount block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.networkConfiguration">network_configuration</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration">BatchPoolNetworkConfiguration</a></code> | network_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.nodePlacement">node_placement</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacement">BatchPoolNodePlacement</a>]]</code> | node_placement block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.osDiskPlacement">os_disk_placement</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#os_disk_placement BatchPool#os_disk_placement}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.startTask">start_task</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTask">BatchPoolStartTask</a></code> | start_task block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.stopPendingResizeOperation">stop_pending_resize_operation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#stop_pending_resize_operation BatchPool#stop_pending_resize_operation}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.targetNodeCommunicationMode">target_node_communication_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#target_node_communication_mode BatchPool#target_node_communication_mode}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.taskSchedulingPolicy">task_scheduling_policy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicy">BatchPoolTaskSchedulingPolicy</a>]]</code> | task_scheduling_policy block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeouts">BatchPoolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.userAccounts">user_accounts</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts">BatchPoolUserAccounts</a>]]</code> | user_accounts block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.windows">windows</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindows">BatchPoolWindows</a>]]</code> | windows block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_name`<sup>Required</sup> <a name="account_name" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.accountName"></a>

```python
account_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#account_name BatchPool#account_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#name BatchPool#name}.

---

##### `node_agent_sku_id`<sup>Required</sup> <a name="node_agent_sku_id" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.nodeAgentSkuId"></a>

```python
node_agent_sku_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#node_agent_sku_id BatchPool#node_agent_sku_id}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#resource_group_name BatchPool#resource_group_name}.

---

##### `storage_image_reference`<sup>Required</sup> <a name="storage_image_reference" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.storageImageReference"></a>

```python
storage_image_reference: BatchPoolStorageImageReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference">BatchPoolStorageImageReference</a>

storage_image_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#storage_image_reference BatchPool#storage_image_reference}

---

##### `vm_size`<sup>Required</sup> <a name="vm_size" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.vmSize"></a>

```python
vm_size: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#vm_size BatchPool#vm_size}.

---

##### `auto_scale`<sup>Optional</sup> <a name="auto_scale" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.autoScale"></a>

```python
auto_scale: BatchPoolAutoScale
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScale">BatchPoolAutoScale</a>

auto_scale block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#auto_scale BatchPool#auto_scale}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.certificate"></a>

```python
certificate: typing.Union[IResolvable, typing.List[BatchPoolCertificate]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificate">BatchPoolCertificate</a>]]

certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#certificate BatchPool#certificate}

---

##### `container_configuration`<sup>Optional</sup> <a name="container_configuration" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.containerConfiguration"></a>

```python
container_configuration: BatchPoolContainerConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfiguration">BatchPoolContainerConfiguration</a>

container_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#container_configuration BatchPool#container_configuration}

---

##### `data_disks`<sup>Optional</sup> <a name="data_disks" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.dataDisks"></a>

```python
data_disks: typing.Union[IResolvable, typing.List[BatchPoolDataDisks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisks">BatchPoolDataDisks</a>]]

data_disks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#data_disks BatchPool#data_disks}

---

##### `disk_encryption`<sup>Optional</sup> <a name="disk_encryption" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.diskEncryption"></a>

```python
disk_encryption: typing.Union[IResolvable, typing.List[BatchPoolDiskEncryption]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryption">BatchPoolDiskEncryption</a>]]

disk_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#disk_encryption BatchPool#disk_encryption}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#display_name BatchPool#display_name}.

---

##### `extensions`<sup>Optional</sup> <a name="extensions" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.extensions"></a>

```python
extensions: typing.Union[IResolvable, typing.List[BatchPoolExtensions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensions">BatchPoolExtensions</a>]]

extensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#extensions BatchPool#extensions}

---

##### `fixed_scale`<sup>Optional</sup> <a name="fixed_scale" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.fixedScale"></a>

```python
fixed_scale: BatchPoolFixedScale
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScale">BatchPoolFixedScale</a>

fixed_scale block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#fixed_scale BatchPool#fixed_scale}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#id BatchPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.identity"></a>

```python
identity: BatchPoolIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentity">BatchPoolIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#identity BatchPool#identity}

---

##### `inter_node_communication`<sup>Optional</sup> <a name="inter_node_communication" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.interNodeCommunication"></a>

```python
inter_node_communication: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#inter_node_communication BatchPool#inter_node_communication}.

---

##### `license_type`<sup>Optional</sup> <a name="license_type" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.licenseType"></a>

```python
license_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#license_type BatchPool#license_type}.

---

##### `max_tasks_per_node`<sup>Optional</sup> <a name="max_tasks_per_node" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.maxTasksPerNode"></a>

```python
max_tasks_per_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#max_tasks_per_node BatchPool#max_tasks_per_node}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#metadata BatchPool#metadata}.

---

##### `mount`<sup>Optional</sup> <a name="mount" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.mount"></a>

```python
mount: typing.Union[IResolvable, typing.List[BatchPoolMount]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMount">BatchPoolMount</a>]]

mount block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#mount BatchPool#mount}

---

##### `network_configuration`<sup>Optional</sup> <a name="network_configuration" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.networkConfiguration"></a>

```python
network_configuration: BatchPoolNetworkConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration">BatchPoolNetworkConfiguration</a>

network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#network_configuration BatchPool#network_configuration}

---

##### `node_placement`<sup>Optional</sup> <a name="node_placement" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.nodePlacement"></a>

```python
node_placement: typing.Union[IResolvable, typing.List[BatchPoolNodePlacement]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacement">BatchPoolNodePlacement</a>]]

node_placement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#node_placement BatchPool#node_placement}

---

##### `os_disk_placement`<sup>Optional</sup> <a name="os_disk_placement" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.osDiskPlacement"></a>

```python
os_disk_placement: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#os_disk_placement BatchPool#os_disk_placement}.

---

##### `start_task`<sup>Optional</sup> <a name="start_task" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.startTask"></a>

```python
start_task: BatchPoolStartTask
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTask">BatchPoolStartTask</a>

start_task block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#start_task BatchPool#start_task}

---

##### `stop_pending_resize_operation`<sup>Optional</sup> <a name="stop_pending_resize_operation" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.stopPendingResizeOperation"></a>

```python
stop_pending_resize_operation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#stop_pending_resize_operation BatchPool#stop_pending_resize_operation}.

---

##### `target_node_communication_mode`<sup>Optional</sup> <a name="target_node_communication_mode" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.targetNodeCommunicationMode"></a>

```python
target_node_communication_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#target_node_communication_mode BatchPool#target_node_communication_mode}.

---

##### `task_scheduling_policy`<sup>Optional</sup> <a name="task_scheduling_policy" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.taskSchedulingPolicy"></a>

```python
task_scheduling_policy: typing.Union[IResolvable, typing.List[BatchPoolTaskSchedulingPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicy">BatchPoolTaskSchedulingPolicy</a>]]

task_scheduling_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#task_scheduling_policy BatchPool#task_scheduling_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.timeouts"></a>

```python
timeouts: BatchPoolTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeouts">BatchPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#timeouts BatchPool#timeouts}

---

##### `user_accounts`<sup>Optional</sup> <a name="user_accounts" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.userAccounts"></a>

```python
user_accounts: typing.Union[IResolvable, typing.List[BatchPoolUserAccounts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts">BatchPoolUserAccounts</a>]]

user_accounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#user_accounts BatchPool#user_accounts}

---

##### `windows`<sup>Optional</sup> <a name="windows" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.windows"></a>

```python
windows: typing.Union[IResolvable, typing.List[BatchPoolWindows]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindows">BatchPoolWindows</a>]]

windows block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#windows BatchPool#windows}

---

### BatchPoolContainerConfiguration <a name="BatchPoolContainerConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolContainerConfiguration(
  container_image_names: typing.List[str] = None,
  container_registries: typing.Union[IResolvable, typing.List[BatchPoolContainerConfigurationContainerRegistries]] = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfiguration.property.containerImageNames">container_image_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#container_image_names BatchPool#container_image_names}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfiguration.property.containerRegistries">container_registries</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistries">BatchPoolContainerConfigurationContainerRegistries</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#container_registries BatchPool#container_registries}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfiguration.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#type BatchPool#type}. |

---

##### `container_image_names`<sup>Optional</sup> <a name="container_image_names" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfiguration.property.containerImageNames"></a>

```python
container_image_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#container_image_names BatchPool#container_image_names}.

---

##### `container_registries`<sup>Optional</sup> <a name="container_registries" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfiguration.property.containerRegistries"></a>

```python
container_registries: typing.Union[IResolvable, typing.List[BatchPoolContainerConfigurationContainerRegistries]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistries">BatchPoolContainerConfigurationContainerRegistries</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#container_registries BatchPool#container_registries}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfiguration.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#type BatchPool#type}.

---

### BatchPoolContainerConfigurationContainerRegistries <a name="BatchPoolContainerConfigurationContainerRegistries" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistries.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolContainerConfigurationContainerRegistries(
  password: str = None,
  registry_server: str = None,
  user_assigned_identity_id: str = None,
  user_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistries.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#password BatchPool#password}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistries.property.registryServer">registry_server</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#registry_server BatchPool#registry_server}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistries.property.userAssignedIdentityId">user_assigned_identity_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#user_assigned_identity_id BatchPool#user_assigned_identity_id}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistries.property.userName">user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#user_name BatchPool#user_name}. |

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistries.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#password BatchPool#password}.

---

##### `registry_server`<sup>Optional</sup> <a name="registry_server" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistries.property.registryServer"></a>

```python
registry_server: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#registry_server BatchPool#registry_server}.

---

##### `user_assigned_identity_id`<sup>Optional</sup> <a name="user_assigned_identity_id" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistries.property.userAssignedIdentityId"></a>

```python
user_assigned_identity_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#user_assigned_identity_id BatchPool#user_assigned_identity_id}.

---

##### `user_name`<sup>Optional</sup> <a name="user_name" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistries.property.userName"></a>

```python
user_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#user_name BatchPool#user_name}.

---

### BatchPoolDataDisks <a name="BatchPoolDataDisks" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisks.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolDataDisks(
  disk_size_gb: typing.Union[int, float],
  lun: typing.Union[int, float],
  caching: str = None,
  storage_account_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisks.property.diskSizeGb">disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#disk_size_gb BatchPool#disk_size_gb}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisks.property.lun">lun</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#lun BatchPool#lun}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisks.property.caching">caching</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#caching BatchPool#caching}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisks.property.storageAccountType">storage_account_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#storage_account_type BatchPool#storage_account_type}. |

---

##### `disk_size_gb`<sup>Required</sup> <a name="disk_size_gb" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisks.property.diskSizeGb"></a>

```python
disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#disk_size_gb BatchPool#disk_size_gb}.

---

##### `lun`<sup>Required</sup> <a name="lun" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisks.property.lun"></a>

```python
lun: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#lun BatchPool#lun}.

---

##### `caching`<sup>Optional</sup> <a name="caching" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisks.property.caching"></a>

```python
caching: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#caching BatchPool#caching}.

---

##### `storage_account_type`<sup>Optional</sup> <a name="storage_account_type" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisks.property.storageAccountType"></a>

```python
storage_account_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#storage_account_type BatchPool#storage_account_type}.

---

### BatchPoolDiskEncryption <a name="BatchPoolDiskEncryption" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryption.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolDiskEncryption(
  disk_encryption_target: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryption.property.diskEncryptionTarget">disk_encryption_target</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#disk_encryption_target BatchPool#disk_encryption_target}. |

---

##### `disk_encryption_target`<sup>Required</sup> <a name="disk_encryption_target" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryption.property.diskEncryptionTarget"></a>

```python
disk_encryption_target: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#disk_encryption_target BatchPool#disk_encryption_target}.

---

### BatchPoolExtensions <a name="BatchPoolExtensions" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensions.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolExtensions(
  name: str,
  publisher: str,
  type: str,
  automatic_upgrade_enabled: typing.Union[bool, IResolvable] = None,
  auto_upgrade_minor_version: typing.Union[bool, IResolvable] = None,
  protected_settings: str = None,
  provision_after_extensions: typing.List[str] = None,
  settings_json: str = None,
  type_handler_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensions.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#name BatchPool#name}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensions.property.publisher">publisher</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#publisher BatchPool#publisher}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensions.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#type BatchPool#type}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensions.property.automaticUpgradeEnabled">automatic_upgrade_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#automatic_upgrade_enabled BatchPool#automatic_upgrade_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensions.property.autoUpgradeMinorVersion">auto_upgrade_minor_version</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#auto_upgrade_minor_version BatchPool#auto_upgrade_minor_version}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensions.property.protectedSettings">protected_settings</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#protected_settings BatchPool#protected_settings}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensions.property.provisionAfterExtensions">provision_after_extensions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#provision_after_extensions BatchPool#provision_after_extensions}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensions.property.settingsJson">settings_json</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#settings_json BatchPool#settings_json}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensions.property.typeHandlerVersion">type_handler_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#type_handler_version BatchPool#type_handler_version}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensions.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#name BatchPool#name}.

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensions.property.publisher"></a>

```python
publisher: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#publisher BatchPool#publisher}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensions.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#type BatchPool#type}.

---

##### `automatic_upgrade_enabled`<sup>Optional</sup> <a name="automatic_upgrade_enabled" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensions.property.automaticUpgradeEnabled"></a>

```python
automatic_upgrade_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#automatic_upgrade_enabled BatchPool#automatic_upgrade_enabled}.

---

##### `auto_upgrade_minor_version`<sup>Optional</sup> <a name="auto_upgrade_minor_version" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensions.property.autoUpgradeMinorVersion"></a>

```python
auto_upgrade_minor_version: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#auto_upgrade_minor_version BatchPool#auto_upgrade_minor_version}.

---

##### `protected_settings`<sup>Optional</sup> <a name="protected_settings" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensions.property.protectedSettings"></a>

```python
protected_settings: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#protected_settings BatchPool#protected_settings}.

---

##### `provision_after_extensions`<sup>Optional</sup> <a name="provision_after_extensions" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensions.property.provisionAfterExtensions"></a>

```python
provision_after_extensions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#provision_after_extensions BatchPool#provision_after_extensions}.

---

##### `settings_json`<sup>Optional</sup> <a name="settings_json" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensions.property.settingsJson"></a>

```python
settings_json: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#settings_json BatchPool#settings_json}.

---

##### `type_handler_version`<sup>Optional</sup> <a name="type_handler_version" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensions.property.typeHandlerVersion"></a>

```python
type_handler_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#type_handler_version BatchPool#type_handler_version}.

---

### BatchPoolFixedScale <a name="BatchPoolFixedScale" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScale"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScale.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolFixedScale(
  node_deallocation_method: str = None,
  resize_timeout: str = None,
  target_dedicated_nodes: typing.Union[int, float] = None,
  target_low_priority_nodes: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScale.property.nodeDeallocationMethod">node_deallocation_method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#node_deallocation_method BatchPool#node_deallocation_method}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScale.property.resizeTimeout">resize_timeout</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#resize_timeout BatchPool#resize_timeout}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScale.property.targetDedicatedNodes">target_dedicated_nodes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#target_dedicated_nodes BatchPool#target_dedicated_nodes}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScale.property.targetLowPriorityNodes">target_low_priority_nodes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#target_low_priority_nodes BatchPool#target_low_priority_nodes}. |

---

##### `node_deallocation_method`<sup>Optional</sup> <a name="node_deallocation_method" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScale.property.nodeDeallocationMethod"></a>

```python
node_deallocation_method: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#node_deallocation_method BatchPool#node_deallocation_method}.

---

##### `resize_timeout`<sup>Optional</sup> <a name="resize_timeout" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScale.property.resizeTimeout"></a>

```python
resize_timeout: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#resize_timeout BatchPool#resize_timeout}.

---

##### `target_dedicated_nodes`<sup>Optional</sup> <a name="target_dedicated_nodes" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScale.property.targetDedicatedNodes"></a>

```python
target_dedicated_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#target_dedicated_nodes BatchPool#target_dedicated_nodes}.

---

##### `target_low_priority_nodes`<sup>Optional</sup> <a name="target_low_priority_nodes" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScale.property.targetLowPriorityNodes"></a>

```python
target_low_priority_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#target_low_priority_nodes BatchPool#target_low_priority_nodes}.

---

### BatchPoolIdentity <a name="BatchPoolIdentity" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolIdentity(
  identity_ids: typing.List[str],
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentity.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#identity_ids BatchPool#identity_ids}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentity.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#type BatchPool#type}. |

---

##### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentity.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#identity_ids BatchPool#identity_ids}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentity.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#type BatchPool#type}.

---

### BatchPoolMount <a name="BatchPoolMount" id="@cdktf/provider-azurerm.batchPool.BatchPoolMount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolMount.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolMount(
  azure_blob_file_system: BatchPoolMountAzureBlobFileSystem = None,
  azure_file_share: typing.Union[IResolvable, typing.List[BatchPoolMountAzureFileShare]] = None,
  cifs_mount: typing.Union[IResolvable, typing.List[BatchPoolMountCifsMount]] = None,
  nfs_mount: typing.Union[IResolvable, typing.List[BatchPoolMountNfsMount]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMount.property.azureBlobFileSystem">azure_blob_file_system</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem">BatchPoolMountAzureBlobFileSystem</a></code> | azure_blob_file_system block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMount.property.azureFileShare">azure_file_share</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShare">BatchPoolMountAzureFileShare</a>]]</code> | azure_file_share block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMount.property.cifsMount">cifs_mount</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMount">BatchPoolMountCifsMount</a>]]</code> | cifs_mount block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMount.property.nfsMount">nfs_mount</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMount">BatchPoolMountNfsMount</a>]]</code> | nfs_mount block. |

---

##### `azure_blob_file_system`<sup>Optional</sup> <a name="azure_blob_file_system" id="@cdktf/provider-azurerm.batchPool.BatchPoolMount.property.azureBlobFileSystem"></a>

```python
azure_blob_file_system: BatchPoolMountAzureBlobFileSystem
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem">BatchPoolMountAzureBlobFileSystem</a>

azure_blob_file_system block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#azure_blob_file_system BatchPool#azure_blob_file_system}

---

##### `azure_file_share`<sup>Optional</sup> <a name="azure_file_share" id="@cdktf/provider-azurerm.batchPool.BatchPoolMount.property.azureFileShare"></a>

```python
azure_file_share: typing.Union[IResolvable, typing.List[BatchPoolMountAzureFileShare]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShare">BatchPoolMountAzureFileShare</a>]]

azure_file_share block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#azure_file_share BatchPool#azure_file_share}

---

##### `cifs_mount`<sup>Optional</sup> <a name="cifs_mount" id="@cdktf/provider-azurerm.batchPool.BatchPoolMount.property.cifsMount"></a>

```python
cifs_mount: typing.Union[IResolvable, typing.List[BatchPoolMountCifsMount]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMount">BatchPoolMountCifsMount</a>]]

cifs_mount block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#cifs_mount BatchPool#cifs_mount}

---

##### `nfs_mount`<sup>Optional</sup> <a name="nfs_mount" id="@cdktf/provider-azurerm.batchPool.BatchPoolMount.property.nfsMount"></a>

```python
nfs_mount: typing.Union[IResolvable, typing.List[BatchPoolMountNfsMount]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMount">BatchPoolMountNfsMount</a>]]

nfs_mount block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#nfs_mount BatchPool#nfs_mount}

---

### BatchPoolMountAzureBlobFileSystem <a name="BatchPoolMountAzureBlobFileSystem" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolMountAzureBlobFileSystem(
  account_name: str,
  container_name: str,
  relative_mount_path: str,
  account_key: str = None,
  blobfuse_options: str = None,
  identity_id: str = None,
  sas_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem.property.accountName">account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#account_name BatchPool#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem.property.containerName">container_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#container_name BatchPool#container_name}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem.property.relativeMountPath">relative_mount_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#relative_mount_path BatchPool#relative_mount_path}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem.property.accountKey">account_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#account_key BatchPool#account_key}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem.property.blobfuseOptions">blobfuse_options</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#blobfuse_options BatchPool#blobfuse_options}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem.property.identityId">identity_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#identity_id BatchPool#identity_id}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem.property.sasKey">sas_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#sas_key BatchPool#sas_key}. |

---

##### `account_name`<sup>Required</sup> <a name="account_name" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem.property.accountName"></a>

```python
account_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#account_name BatchPool#account_name}.

---

##### `container_name`<sup>Required</sup> <a name="container_name" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem.property.containerName"></a>

```python
container_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#container_name BatchPool#container_name}.

---

##### `relative_mount_path`<sup>Required</sup> <a name="relative_mount_path" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem.property.relativeMountPath"></a>

```python
relative_mount_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#relative_mount_path BatchPool#relative_mount_path}.

---

##### `account_key`<sup>Optional</sup> <a name="account_key" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem.property.accountKey"></a>

```python
account_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#account_key BatchPool#account_key}.

---

##### `blobfuse_options`<sup>Optional</sup> <a name="blobfuse_options" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem.property.blobfuseOptions"></a>

```python
blobfuse_options: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#blobfuse_options BatchPool#blobfuse_options}.

---

##### `identity_id`<sup>Optional</sup> <a name="identity_id" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem.property.identityId"></a>

```python
identity_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#identity_id BatchPool#identity_id}.

---

##### `sas_key`<sup>Optional</sup> <a name="sas_key" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem.property.sasKey"></a>

```python
sas_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#sas_key BatchPool#sas_key}.

---

### BatchPoolMountAzureFileShare <a name="BatchPoolMountAzureFileShare" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShare"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShare.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolMountAzureFileShare(
  account_key: str,
  account_name: str,
  azure_file_url: str,
  relative_mount_path: str,
  mount_options: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShare.property.accountKey">account_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#account_key BatchPool#account_key}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShare.property.accountName">account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#account_name BatchPool#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShare.property.azureFileUrl">azure_file_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#azure_file_url BatchPool#azure_file_url}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShare.property.relativeMountPath">relative_mount_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#relative_mount_path BatchPool#relative_mount_path}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShare.property.mountOptions">mount_options</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#mount_options BatchPool#mount_options}. |

---

##### `account_key`<sup>Required</sup> <a name="account_key" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShare.property.accountKey"></a>

```python
account_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#account_key BatchPool#account_key}.

---

##### `account_name`<sup>Required</sup> <a name="account_name" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShare.property.accountName"></a>

```python
account_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#account_name BatchPool#account_name}.

---

##### `azure_file_url`<sup>Required</sup> <a name="azure_file_url" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShare.property.azureFileUrl"></a>

```python
azure_file_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#azure_file_url BatchPool#azure_file_url}.

---

##### `relative_mount_path`<sup>Required</sup> <a name="relative_mount_path" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShare.property.relativeMountPath"></a>

```python
relative_mount_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#relative_mount_path BatchPool#relative_mount_path}.

---

##### `mount_options`<sup>Optional</sup> <a name="mount_options" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShare.property.mountOptions"></a>

```python
mount_options: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#mount_options BatchPool#mount_options}.

---

### BatchPoolMountCifsMount <a name="BatchPoolMountCifsMount" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMount.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolMountCifsMount(
  password: str,
  relative_mount_path: str,
  source: str,
  user_name: str,
  mount_options: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMount.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#password BatchPool#password}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMount.property.relativeMountPath">relative_mount_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#relative_mount_path BatchPool#relative_mount_path}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMount.property.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#source BatchPool#source}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMount.property.userName">user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#user_name BatchPool#user_name}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMount.property.mountOptions">mount_options</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#mount_options BatchPool#mount_options}. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMount.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#password BatchPool#password}.

---

##### `relative_mount_path`<sup>Required</sup> <a name="relative_mount_path" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMount.property.relativeMountPath"></a>

```python
relative_mount_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#relative_mount_path BatchPool#relative_mount_path}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMount.property.source"></a>

```python
source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#source BatchPool#source}.

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMount.property.userName"></a>

```python
user_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#user_name BatchPool#user_name}.

---

##### `mount_options`<sup>Optional</sup> <a name="mount_options" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMount.property.mountOptions"></a>

```python
mount_options: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#mount_options BatchPool#mount_options}.

---

### BatchPoolMountNfsMount <a name="BatchPoolMountNfsMount" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMount.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolMountNfsMount(
  relative_mount_path: str,
  source: str,
  mount_options: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMount.property.relativeMountPath">relative_mount_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#relative_mount_path BatchPool#relative_mount_path}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMount.property.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#source BatchPool#source}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMount.property.mountOptions">mount_options</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#mount_options BatchPool#mount_options}. |

---

##### `relative_mount_path`<sup>Required</sup> <a name="relative_mount_path" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMount.property.relativeMountPath"></a>

```python
relative_mount_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#relative_mount_path BatchPool#relative_mount_path}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMount.property.source"></a>

```python
source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#source BatchPool#source}.

---

##### `mount_options`<sup>Optional</sup> <a name="mount_options" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMount.property.mountOptions"></a>

```python
mount_options: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#mount_options BatchPool#mount_options}.

---

### BatchPoolNetworkConfiguration <a name="BatchPoolNetworkConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolNetworkConfiguration(
  accelerated_networking_enabled: typing.Union[bool, IResolvable] = None,
  dynamic_vnet_assignment_scope: str = None,
  endpoint_configuration: typing.Union[IResolvable, typing.List[BatchPoolNetworkConfigurationEndpointConfiguration]] = None,
  public_address_provisioning_type: str = None,
  public_ips: typing.List[str] = None,
  subnet_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration.property.acceleratedNetworkingEnabled">accelerated_networking_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#accelerated_networking_enabled BatchPool#accelerated_networking_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration.property.dynamicVnetAssignmentScope">dynamic_vnet_assignment_scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#dynamic_vnet_assignment_scope BatchPool#dynamic_vnet_assignment_scope}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration.property.endpointConfiguration">endpoint_configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfiguration">BatchPoolNetworkConfigurationEndpointConfiguration</a>]]</code> | endpoint_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration.property.publicAddressProvisioningType">public_address_provisioning_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#public_address_provisioning_type BatchPool#public_address_provisioning_type}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration.property.publicIps">public_ips</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#public_ips BatchPool#public_ips}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#subnet_id BatchPool#subnet_id}. |

---

##### `accelerated_networking_enabled`<sup>Optional</sup> <a name="accelerated_networking_enabled" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration.property.acceleratedNetworkingEnabled"></a>

```python
accelerated_networking_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#accelerated_networking_enabled BatchPool#accelerated_networking_enabled}.

---

##### `dynamic_vnet_assignment_scope`<sup>Optional</sup> <a name="dynamic_vnet_assignment_scope" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration.property.dynamicVnetAssignmentScope"></a>

```python
dynamic_vnet_assignment_scope: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#dynamic_vnet_assignment_scope BatchPool#dynamic_vnet_assignment_scope}.

---

##### `endpoint_configuration`<sup>Optional</sup> <a name="endpoint_configuration" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration.property.endpointConfiguration"></a>

```python
endpoint_configuration: typing.Union[IResolvable, typing.List[BatchPoolNetworkConfigurationEndpointConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfiguration">BatchPoolNetworkConfigurationEndpointConfiguration</a>]]

endpoint_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#endpoint_configuration BatchPool#endpoint_configuration}

---

##### `public_address_provisioning_type`<sup>Optional</sup> <a name="public_address_provisioning_type" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration.property.publicAddressProvisioningType"></a>

```python
public_address_provisioning_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#public_address_provisioning_type BatchPool#public_address_provisioning_type}.

---

##### `public_ips`<sup>Optional</sup> <a name="public_ips" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration.property.publicIps"></a>

```python
public_ips: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#public_ips BatchPool#public_ips}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#subnet_id BatchPool#subnet_id}.

---

### BatchPoolNetworkConfigurationEndpointConfiguration <a name="BatchPoolNetworkConfigurationEndpointConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolNetworkConfigurationEndpointConfiguration(
  backend_port: typing.Union[int, float],
  frontend_port_range: str,
  name: str,
  protocol: str,
  network_security_group_rules: typing.Union[IResolvable, typing.List[BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfiguration.property.backendPort">backend_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#backend_port BatchPool#backend_port}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfiguration.property.frontendPortRange">frontend_port_range</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#frontend_port_range BatchPool#frontend_port_range}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfiguration.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#name BatchPool#name}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfiguration.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#protocol BatchPool#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfiguration.property.networkSecurityGroupRules">network_security_group_rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules">BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules</a>]]</code> | network_security_group_rules block. |

---

##### `backend_port`<sup>Required</sup> <a name="backend_port" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfiguration.property.backendPort"></a>

```python
backend_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#backend_port BatchPool#backend_port}.

---

##### `frontend_port_range`<sup>Required</sup> <a name="frontend_port_range" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfiguration.property.frontendPortRange"></a>

```python
frontend_port_range: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#frontend_port_range BatchPool#frontend_port_range}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfiguration.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#name BatchPool#name}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfiguration.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#protocol BatchPool#protocol}.

---

##### `network_security_group_rules`<sup>Optional</sup> <a name="network_security_group_rules" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfiguration.property.networkSecurityGroupRules"></a>

```python
network_security_group_rules: typing.Union[IResolvable, typing.List[BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules">BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules</a>]]

network_security_group_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#network_security_group_rules BatchPool#network_security_group_rules}

---

### BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules <a name="BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules(
  access: str,
  priority: typing.Union[int, float],
  source_address_prefix: str,
  source_port_ranges: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules.property.access">access</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#access BatchPool#access}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#priority BatchPool#priority}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules.property.sourceAddressPrefix">source_address_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#source_address_prefix BatchPool#source_address_prefix}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules.property.sourcePortRanges">source_port_ranges</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#source_port_ranges BatchPool#source_port_ranges}. |

---

##### `access`<sup>Required</sup> <a name="access" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules.property.access"></a>

```python
access: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#access BatchPool#access}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#priority BatchPool#priority}.

---

##### `source_address_prefix`<sup>Required</sup> <a name="source_address_prefix" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules.property.sourceAddressPrefix"></a>

```python
source_address_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#source_address_prefix BatchPool#source_address_prefix}.

---

##### `source_port_ranges`<sup>Optional</sup> <a name="source_port_ranges" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules.property.sourcePortRanges"></a>

```python
source_port_ranges: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#source_port_ranges BatchPool#source_port_ranges}.

---

### BatchPoolNodePlacement <a name="BatchPoolNodePlacement" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacement.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolNodePlacement(
  policy: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacement.property.policy">policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#policy BatchPool#policy}. |

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacement.property.policy"></a>

```python
policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#policy BatchPool#policy}.

---

### BatchPoolStartTask <a name="BatchPoolStartTask" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTask.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolStartTask(
  command_line: str,
  user_identity: BatchPoolStartTaskUserIdentity,
  common_environment_properties: typing.Mapping[str] = None,
  container: typing.Union[IResolvable, typing.List[BatchPoolStartTaskContainer]] = None,
  resource_file: typing.Union[IResolvable, typing.List[BatchPoolStartTaskResourceFile]] = None,
  task_retry_maximum: typing.Union[int, float] = None,
  wait_for_success: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTask.property.commandLine">command_line</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#command_line BatchPool#command_line}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTask.property.userIdentity">user_identity</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentity">BatchPoolStartTaskUserIdentity</a></code> | user_identity block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTask.property.commonEnvironmentProperties">common_environment_properties</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#common_environment_properties BatchPool#common_environment_properties}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTask.property.container">container</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainer">BatchPoolStartTaskContainer</a>]]</code> | container block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTask.property.resourceFile">resource_file</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile">BatchPoolStartTaskResourceFile</a>]]</code> | resource_file block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTask.property.taskRetryMaximum">task_retry_maximum</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#task_retry_maximum BatchPool#task_retry_maximum}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTask.property.waitForSuccess">wait_for_success</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#wait_for_success BatchPool#wait_for_success}. |

---

##### `command_line`<sup>Required</sup> <a name="command_line" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTask.property.commandLine"></a>

```python
command_line: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#command_line BatchPool#command_line}.

---

##### `user_identity`<sup>Required</sup> <a name="user_identity" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTask.property.userIdentity"></a>

```python
user_identity: BatchPoolStartTaskUserIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentity">BatchPoolStartTaskUserIdentity</a>

user_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#user_identity BatchPool#user_identity}

---

##### `common_environment_properties`<sup>Optional</sup> <a name="common_environment_properties" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTask.property.commonEnvironmentProperties"></a>

```python
common_environment_properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#common_environment_properties BatchPool#common_environment_properties}.

---

##### `container`<sup>Optional</sup> <a name="container" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTask.property.container"></a>

```python
container: typing.Union[IResolvable, typing.List[BatchPoolStartTaskContainer]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainer">BatchPoolStartTaskContainer</a>]]

container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#container BatchPool#container}

---

##### `resource_file`<sup>Optional</sup> <a name="resource_file" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTask.property.resourceFile"></a>

```python
resource_file: typing.Union[IResolvable, typing.List[BatchPoolStartTaskResourceFile]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile">BatchPoolStartTaskResourceFile</a>]]

resource_file block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#resource_file BatchPool#resource_file}

---

##### `task_retry_maximum`<sup>Optional</sup> <a name="task_retry_maximum" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTask.property.taskRetryMaximum"></a>

```python
task_retry_maximum: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#task_retry_maximum BatchPool#task_retry_maximum}.

---

##### `wait_for_success`<sup>Optional</sup> <a name="wait_for_success" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTask.property.waitForSuccess"></a>

```python
wait_for_success: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#wait_for_success BatchPool#wait_for_success}.

---

### BatchPoolStartTaskContainer <a name="BatchPoolStartTaskContainer" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainer.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolStartTaskContainer(
  image_name: str,
  registry: typing.Union[IResolvable, typing.List[BatchPoolStartTaskContainerRegistry]] = None,
  run_options: str = None,
  working_directory: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainer.property.imageName">image_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#image_name BatchPool#image_name}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainer.property.registry">registry</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistry">BatchPoolStartTaskContainerRegistry</a>]]</code> | registry block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainer.property.runOptions">run_options</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#run_options BatchPool#run_options}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainer.property.workingDirectory">working_directory</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#working_directory BatchPool#working_directory}. |

---

##### `image_name`<sup>Required</sup> <a name="image_name" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainer.property.imageName"></a>

```python
image_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#image_name BatchPool#image_name}.

---

##### `registry`<sup>Optional</sup> <a name="registry" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainer.property.registry"></a>

```python
registry: typing.Union[IResolvable, typing.List[BatchPoolStartTaskContainerRegistry]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistry">BatchPoolStartTaskContainerRegistry</a>]]

registry block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#registry BatchPool#registry}

---

##### `run_options`<sup>Optional</sup> <a name="run_options" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainer.property.runOptions"></a>

```python
run_options: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#run_options BatchPool#run_options}.

---

##### `working_directory`<sup>Optional</sup> <a name="working_directory" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainer.property.workingDirectory"></a>

```python
working_directory: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#working_directory BatchPool#working_directory}.

---

### BatchPoolStartTaskContainerRegistry <a name="BatchPoolStartTaskContainerRegistry" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistry.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolStartTaskContainerRegistry(
  registry_server: str,
  password: str = None,
  user_assigned_identity_id: str = None,
  user_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistry.property.registryServer">registry_server</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#registry_server BatchPool#registry_server}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistry.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#password BatchPool#password}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistry.property.userAssignedIdentityId">user_assigned_identity_id</a></code> | <code>str</code> | The User Assigned Identity to use for Container Registry access. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistry.property.userName">user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#user_name BatchPool#user_name}. |

---

##### `registry_server`<sup>Required</sup> <a name="registry_server" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistry.property.registryServer"></a>

```python
registry_server: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#registry_server BatchPool#registry_server}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistry.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#password BatchPool#password}.

---

##### `user_assigned_identity_id`<sup>Optional</sup> <a name="user_assigned_identity_id" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistry.property.userAssignedIdentityId"></a>

```python
user_assigned_identity_id: str
```

- *Type:* str

The User Assigned Identity to use for Container Registry access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#user_assigned_identity_id BatchPool#user_assigned_identity_id}

---

##### `user_name`<sup>Optional</sup> <a name="user_name" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistry.property.userName"></a>

```python
user_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#user_name BatchPool#user_name}.

---

### BatchPoolStartTaskResourceFile <a name="BatchPoolStartTaskResourceFile" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolStartTaskResourceFile(
  auto_storage_container_name: str = None,
  blob_prefix: str = None,
  file_mode: str = None,
  file_path: str = None,
  http_url: str = None,
  storage_container_url: str = None,
  user_assigned_identity_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile.property.autoStorageContainerName">auto_storage_container_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#auto_storage_container_name BatchPool#auto_storage_container_name}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile.property.blobPrefix">blob_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#blob_prefix BatchPool#blob_prefix}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile.property.fileMode">file_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#file_mode BatchPool#file_mode}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile.property.filePath">file_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#file_path BatchPool#file_path}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile.property.httpUrl">http_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#http_url BatchPool#http_url}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile.property.storageContainerUrl">storage_container_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#storage_container_url BatchPool#storage_container_url}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile.property.userAssignedIdentityId">user_assigned_identity_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#user_assigned_identity_id BatchPool#user_assigned_identity_id}. |

---

##### `auto_storage_container_name`<sup>Optional</sup> <a name="auto_storage_container_name" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile.property.autoStorageContainerName"></a>

```python
auto_storage_container_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#auto_storage_container_name BatchPool#auto_storage_container_name}.

---

##### `blob_prefix`<sup>Optional</sup> <a name="blob_prefix" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile.property.blobPrefix"></a>

```python
blob_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#blob_prefix BatchPool#blob_prefix}.

---

##### `file_mode`<sup>Optional</sup> <a name="file_mode" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile.property.fileMode"></a>

```python
file_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#file_mode BatchPool#file_mode}.

---

##### `file_path`<sup>Optional</sup> <a name="file_path" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile.property.filePath"></a>

```python
file_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#file_path BatchPool#file_path}.

---

##### `http_url`<sup>Optional</sup> <a name="http_url" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile.property.httpUrl"></a>

```python
http_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#http_url BatchPool#http_url}.

---

##### `storage_container_url`<sup>Optional</sup> <a name="storage_container_url" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile.property.storageContainerUrl"></a>

```python
storage_container_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#storage_container_url BatchPool#storage_container_url}.

---

##### `user_assigned_identity_id`<sup>Optional</sup> <a name="user_assigned_identity_id" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile.property.userAssignedIdentityId"></a>

```python
user_assigned_identity_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#user_assigned_identity_id BatchPool#user_assigned_identity_id}.

---

### BatchPoolStartTaskUserIdentity <a name="BatchPoolStartTaskUserIdentity" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolStartTaskUserIdentity(
  auto_user: BatchPoolStartTaskUserIdentityAutoUser = None,
  user_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentity.property.autoUser">auto_user</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUser">BatchPoolStartTaskUserIdentityAutoUser</a></code> | auto_user block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentity.property.userName">user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#user_name BatchPool#user_name}. |

---

##### `auto_user`<sup>Optional</sup> <a name="auto_user" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentity.property.autoUser"></a>

```python
auto_user: BatchPoolStartTaskUserIdentityAutoUser
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUser">BatchPoolStartTaskUserIdentityAutoUser</a>

auto_user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#auto_user BatchPool#auto_user}

---

##### `user_name`<sup>Optional</sup> <a name="user_name" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentity.property.userName"></a>

```python
user_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#user_name BatchPool#user_name}.

---

### BatchPoolStartTaskUserIdentityAutoUser <a name="BatchPoolStartTaskUserIdentityAutoUser" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUser.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolStartTaskUserIdentityAutoUser(
  elevation_level: str = None,
  scope: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUser.property.elevationLevel">elevation_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#elevation_level BatchPool#elevation_level}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUser.property.scope">scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#scope BatchPool#scope}. |

---

##### `elevation_level`<sup>Optional</sup> <a name="elevation_level" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUser.property.elevationLevel"></a>

```python
elevation_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#elevation_level BatchPool#elevation_level}.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUser.property.scope"></a>

```python
scope: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#scope BatchPool#scope}.

---

### BatchPoolStorageImageReference <a name="BatchPoolStorageImageReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolStorageImageReference(
  id: str = None,
  offer: str = None,
  publisher: str = None,
  sku: str = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#id BatchPool#id}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference.property.offer">offer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#offer BatchPool#offer}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference.property.publisher">publisher</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#publisher BatchPool#publisher}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference.property.sku">sku</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#sku BatchPool#sku}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#version BatchPool#version}. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#id BatchPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `offer`<sup>Optional</sup> <a name="offer" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference.property.offer"></a>

```python
offer: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#offer BatchPool#offer}.

---

##### `publisher`<sup>Optional</sup> <a name="publisher" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference.property.publisher"></a>

```python
publisher: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#publisher BatchPool#publisher}.

---

##### `sku`<sup>Optional</sup> <a name="sku" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference.property.sku"></a>

```python
sku: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#sku BatchPool#sku}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#version BatchPool#version}.

---

### BatchPoolTaskSchedulingPolicy <a name="BatchPoolTaskSchedulingPolicy" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolTaskSchedulingPolicy(
  node_fill_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicy.property.nodeFillType">node_fill_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#node_fill_type BatchPool#node_fill_type}. |

---

##### `node_fill_type`<sup>Optional</sup> <a name="node_fill_type" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicy.property.nodeFillType"></a>

```python
node_fill_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#node_fill_type BatchPool#node_fill_type}.

---

### BatchPoolTimeouts <a name="BatchPoolTimeouts" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#create BatchPool#create}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#delete BatchPool#delete}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#read BatchPool#read}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#update BatchPool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#create BatchPool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#delete BatchPool#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#read BatchPool#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#update BatchPool#update}.

---

### BatchPoolUserAccounts <a name="BatchPoolUserAccounts" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolUserAccounts(
  elevation_level: str,
  name: str,
  password: str,
  linux_user_configuration: typing.Union[IResolvable, typing.List[BatchPoolUserAccountsLinuxUserConfiguration]] = None,
  windows_user_configuration: typing.Union[IResolvable, typing.List[BatchPoolUserAccountsWindowsUserConfiguration]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts.property.elevationLevel">elevation_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#elevation_level BatchPool#elevation_level}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#name BatchPool#name}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#password BatchPool#password}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts.property.linuxUserConfiguration">linux_user_configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfiguration">BatchPoolUserAccountsLinuxUserConfiguration</a>]]</code> | linux_user_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts.property.windowsUserConfiguration">windows_user_configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfiguration">BatchPoolUserAccountsWindowsUserConfiguration</a>]]</code> | windows_user_configuration block. |

---

##### `elevation_level`<sup>Required</sup> <a name="elevation_level" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts.property.elevationLevel"></a>

```python
elevation_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#elevation_level BatchPool#elevation_level}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#name BatchPool#name}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#password BatchPool#password}.

---

##### `linux_user_configuration`<sup>Optional</sup> <a name="linux_user_configuration" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts.property.linuxUserConfiguration"></a>

```python
linux_user_configuration: typing.Union[IResolvable, typing.List[BatchPoolUserAccountsLinuxUserConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfiguration">BatchPoolUserAccountsLinuxUserConfiguration</a>]]

linux_user_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#linux_user_configuration BatchPool#linux_user_configuration}

---

##### `windows_user_configuration`<sup>Optional</sup> <a name="windows_user_configuration" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts.property.windowsUserConfiguration"></a>

```python
windows_user_configuration: typing.Union[IResolvable, typing.List[BatchPoolUserAccountsWindowsUserConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfiguration">BatchPoolUserAccountsWindowsUserConfiguration</a>]]

windows_user_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#windows_user_configuration BatchPool#windows_user_configuration}

---

### BatchPoolUserAccountsLinuxUserConfiguration <a name="BatchPoolUserAccountsLinuxUserConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolUserAccountsLinuxUserConfiguration(
  gid: typing.Union[int, float] = None,
  ssh_private_key: str = None,
  uid: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfiguration.property.gid">gid</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#gid BatchPool#gid}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfiguration.property.sshPrivateKey">ssh_private_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#ssh_private_key BatchPool#ssh_private_key}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfiguration.property.uid">uid</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#uid BatchPool#uid}. |

---

##### `gid`<sup>Optional</sup> <a name="gid" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfiguration.property.gid"></a>

```python
gid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#gid BatchPool#gid}.

---

##### `ssh_private_key`<sup>Optional</sup> <a name="ssh_private_key" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfiguration.property.sshPrivateKey"></a>

```python
ssh_private_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#ssh_private_key BatchPool#ssh_private_key}.

---

##### `uid`<sup>Optional</sup> <a name="uid" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfiguration.property.uid"></a>

```python
uid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#uid BatchPool#uid}.

---

### BatchPoolUserAccountsWindowsUserConfiguration <a name="BatchPoolUserAccountsWindowsUserConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolUserAccountsWindowsUserConfiguration(
  login_mode: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfiguration.property.loginMode">login_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#login_mode BatchPool#login_mode}. |

---

##### `login_mode`<sup>Required</sup> <a name="login_mode" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfiguration.property.loginMode"></a>

```python
login_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#login_mode BatchPool#login_mode}.

---

### BatchPoolWindows <a name="BatchPoolWindows" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindows"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindows.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolWindows(
  enable_automatic_updates: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindows.property.enableAutomaticUpdates">enable_automatic_updates</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#enable_automatic_updates BatchPool#enable_automatic_updates}. |

---

##### `enable_automatic_updates`<sup>Optional</sup> <a name="enable_automatic_updates" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindows.property.enableAutomaticUpdates"></a>

```python
enable_automatic_updates: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#enable_automatic_updates BatchPool#enable_automatic_updates}.

---

## Classes <a name="Classes" id="Classes"></a>

### BatchPoolAutoScaleOutputReference <a name="BatchPoolAutoScaleOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolAutoScaleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.resetEvaluationInterval">reset_evaluation_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_evaluation_interval` <a name="reset_evaluation_interval" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.resetEvaluationInterval"></a>

```python
def reset_evaluation_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.property.evaluationIntervalInput">evaluation_interval_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.property.formulaInput">formula_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.property.evaluationInterval">evaluation_interval</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.property.formula">formula</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScale">BatchPoolAutoScale</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `evaluation_interval_input`<sup>Optional</sup> <a name="evaluation_interval_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.property.evaluationIntervalInput"></a>

```python
evaluation_interval_input: str
```

- *Type:* str

---

##### `formula_input`<sup>Optional</sup> <a name="formula_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.property.formulaInput"></a>

```python
formula_input: str
```

- *Type:* str

---

##### `evaluation_interval`<sup>Required</sup> <a name="evaluation_interval" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.property.evaluationInterval"></a>

```python
evaluation_interval: str
```

- *Type:* str

---

##### `formula`<sup>Required</sup> <a name="formula" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.property.formula"></a>

```python
formula: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.property.internalValue"></a>

```python
internal_value: BatchPoolAutoScale
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScale">BatchPoolAutoScale</a>

---


### BatchPoolCertificateList <a name="BatchPoolCertificateList" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolCertificateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BatchPoolCertificateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificate">BatchPoolCertificate</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BatchPoolCertificate]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificate">BatchPoolCertificate</a>]]

---


### BatchPoolCertificateOutputReference <a name="BatchPoolCertificateOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolCertificateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.resetStoreName">reset_store_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.resetVisibility">reset_visibility</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_store_name` <a name="reset_store_name" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.resetStoreName"></a>

```python
def reset_store_name() -> None
```

##### `reset_visibility` <a name="reset_visibility" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.resetVisibility"></a>

```python
def reset_visibility() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.storeLocationInput">store_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.storeNameInput">store_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.visibilityInput">visibility_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.storeLocation">store_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.storeName">store_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.visibility">visibility</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificate">BatchPoolCertificate</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `store_location_input`<sup>Optional</sup> <a name="store_location_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.storeLocationInput"></a>

```python
store_location_input: str
```

- *Type:* str

---

##### `store_name_input`<sup>Optional</sup> <a name="store_name_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.storeNameInput"></a>

```python
store_name_input: str
```

- *Type:* str

---

##### `visibility_input`<sup>Optional</sup> <a name="visibility_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.visibilityInput"></a>

```python
visibility_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `store_location`<sup>Required</sup> <a name="store_location" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.storeLocation"></a>

```python
store_location: str
```

- *Type:* str

---

##### `store_name`<sup>Required</sup> <a name="store_name" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.storeName"></a>

```python
store_name: str
```

- *Type:* str

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.visibility"></a>

```python
visibility: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BatchPoolCertificate]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificate">BatchPoolCertificate</a>]

---


### BatchPoolContainerConfigurationContainerRegistriesList <a name="BatchPoolContainerConfigurationContainerRegistriesList" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolContainerConfigurationContainerRegistriesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BatchPoolContainerConfigurationContainerRegistriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistries">BatchPoolContainerConfigurationContainerRegistries</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BatchPoolContainerConfigurationContainerRegistries]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistries">BatchPoolContainerConfigurationContainerRegistries</a>]]

---


### BatchPoolContainerConfigurationContainerRegistriesOutputReference <a name="BatchPoolContainerConfigurationContainerRegistriesOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.resetRegistryServer">reset_registry_server</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.resetUserAssignedIdentityId">reset_user_assigned_identity_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.resetUserName">reset_user_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_password` <a name="reset_password" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_registry_server` <a name="reset_registry_server" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.resetRegistryServer"></a>

```python
def reset_registry_server() -> None
```

##### `reset_user_assigned_identity_id` <a name="reset_user_assigned_identity_id" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.resetUserAssignedIdentityId"></a>

```python
def reset_user_assigned_identity_id() -> None
```

##### `reset_user_name` <a name="reset_user_name" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.resetUserName"></a>

```python
def reset_user_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.registryServerInput">registry_server_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.userAssignedIdentityIdInput">user_assigned_identity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.userNameInput">user_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.registryServer">registry_server</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.userAssignedIdentityId">user_assigned_identity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.userName">user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistries">BatchPoolContainerConfigurationContainerRegistries</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `registry_server_input`<sup>Optional</sup> <a name="registry_server_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.registryServerInput"></a>

```python
registry_server_input: str
```

- *Type:* str

---

##### `user_assigned_identity_id_input`<sup>Optional</sup> <a name="user_assigned_identity_id_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.userAssignedIdentityIdInput"></a>

```python
user_assigned_identity_id_input: str
```

- *Type:* str

---

##### `user_name_input`<sup>Optional</sup> <a name="user_name_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.userNameInput"></a>

```python
user_name_input: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `registry_server`<sup>Required</sup> <a name="registry_server" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.registryServer"></a>

```python
registry_server: str
```

- *Type:* str

---

##### `user_assigned_identity_id`<sup>Required</sup> <a name="user_assigned_identity_id" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.userAssignedIdentityId"></a>

```python
user_assigned_identity_id: str
```

- *Type:* str

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BatchPoolContainerConfigurationContainerRegistries]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistries">BatchPoolContainerConfigurationContainerRegistries</a>]

---


### BatchPoolContainerConfigurationOutputReference <a name="BatchPoolContainerConfigurationOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolContainerConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.putContainerRegistries">put_container_registries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.resetContainerImageNames">reset_container_image_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.resetContainerRegistries">reset_container_registries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_container_registries` <a name="put_container_registries" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.putContainerRegistries"></a>

```python
def put_container_registries(
  value: typing.Union[IResolvable, typing.List[BatchPoolContainerConfigurationContainerRegistries]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.putContainerRegistries.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistries">BatchPoolContainerConfigurationContainerRegistries</a>]]

---

##### `reset_container_image_names` <a name="reset_container_image_names" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.resetContainerImageNames"></a>

```python
def reset_container_image_names() -> None
```

##### `reset_container_registries` <a name="reset_container_registries" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.resetContainerRegistries"></a>

```python
def reset_container_registries() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.property.containerRegistries">container_registries</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList">BatchPoolContainerConfigurationContainerRegistriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.property.containerImageNamesInput">container_image_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.property.containerRegistriesInput">container_registries_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistries">BatchPoolContainerConfigurationContainerRegistries</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.property.containerImageNames">container_image_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfiguration">BatchPoolContainerConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `container_registries`<sup>Required</sup> <a name="container_registries" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.property.containerRegistries"></a>

```python
container_registries: BatchPoolContainerConfigurationContainerRegistriesList
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList">BatchPoolContainerConfigurationContainerRegistriesList</a>

---

##### `container_image_names_input`<sup>Optional</sup> <a name="container_image_names_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.property.containerImageNamesInput"></a>

```python
container_image_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `container_registries_input`<sup>Optional</sup> <a name="container_registries_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.property.containerRegistriesInput"></a>

```python
container_registries_input: typing.Union[IResolvable, typing.List[BatchPoolContainerConfigurationContainerRegistries]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistries">BatchPoolContainerConfigurationContainerRegistries</a>]]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `container_image_names`<sup>Required</sup> <a name="container_image_names" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.property.containerImageNames"></a>

```python
container_image_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: BatchPoolContainerConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfiguration">BatchPoolContainerConfiguration</a>

---


### BatchPoolDataDisksList <a name="BatchPoolDataDisksList" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolDataDisksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BatchPoolDataDisksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisks">BatchPoolDataDisks</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BatchPoolDataDisks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisks">BatchPoolDataDisks</a>]]

---


### BatchPoolDataDisksOutputReference <a name="BatchPoolDataDisksOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolDataDisksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.resetCaching">reset_caching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.resetStorageAccountType">reset_storage_account_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_caching` <a name="reset_caching" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.resetCaching"></a>

```python
def reset_caching() -> None
```

##### `reset_storage_account_type` <a name="reset_storage_account_type" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.resetStorageAccountType"></a>

```python
def reset_storage_account_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.cachingInput">caching_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.diskSizeGbInput">disk_size_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.lunInput">lun_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.storageAccountTypeInput">storage_account_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.caching">caching</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.diskSizeGb">disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.lun">lun</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.storageAccountType">storage_account_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisks">BatchPoolDataDisks</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `caching_input`<sup>Optional</sup> <a name="caching_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.cachingInput"></a>

```python
caching_input: str
```

- *Type:* str

---

##### `disk_size_gb_input`<sup>Optional</sup> <a name="disk_size_gb_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.diskSizeGbInput"></a>

```python
disk_size_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lun_input`<sup>Optional</sup> <a name="lun_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.lunInput"></a>

```python
lun_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_account_type_input`<sup>Optional</sup> <a name="storage_account_type_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.storageAccountTypeInput"></a>

```python
storage_account_type_input: str
```

- *Type:* str

---

##### `caching`<sup>Required</sup> <a name="caching" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.caching"></a>

```python
caching: str
```

- *Type:* str

---

##### `disk_size_gb`<sup>Required</sup> <a name="disk_size_gb" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.diskSizeGb"></a>

```python
disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lun`<sup>Required</sup> <a name="lun" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.lun"></a>

```python
lun: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_account_type`<sup>Required</sup> <a name="storage_account_type" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.storageAccountType"></a>

```python
storage_account_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BatchPoolDataDisks]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisks">BatchPoolDataDisks</a>]

---


### BatchPoolDiskEncryptionList <a name="BatchPoolDiskEncryptionList" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolDiskEncryptionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BatchPoolDiskEncryptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryption">BatchPoolDiskEncryption</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BatchPoolDiskEncryption]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryption">BatchPoolDiskEncryption</a>]]

---


### BatchPoolDiskEncryptionOutputReference <a name="BatchPoolDiskEncryptionOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolDiskEncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.property.diskEncryptionTargetInput">disk_encryption_target_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.property.diskEncryptionTarget">disk_encryption_target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryption">BatchPoolDiskEncryption</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disk_encryption_target_input`<sup>Optional</sup> <a name="disk_encryption_target_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.property.diskEncryptionTargetInput"></a>

```python
disk_encryption_target_input: str
```

- *Type:* str

---

##### `disk_encryption_target`<sup>Required</sup> <a name="disk_encryption_target" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.property.diskEncryptionTarget"></a>

```python
disk_encryption_target: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BatchPoolDiskEncryption]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryption">BatchPoolDiskEncryption</a>]

---


### BatchPoolExtensionsList <a name="BatchPoolExtensionsList" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolExtensionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BatchPoolExtensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensions">BatchPoolExtensions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BatchPoolExtensions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensions">BatchPoolExtensions</a>]]

---


### BatchPoolExtensionsOutputReference <a name="BatchPoolExtensionsOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolExtensionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.resetAutomaticUpgradeEnabled">reset_automatic_upgrade_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.resetAutoUpgradeMinorVersion">reset_auto_upgrade_minor_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.resetProtectedSettings">reset_protected_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.resetProvisionAfterExtensions">reset_provision_after_extensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.resetSettingsJson">reset_settings_json</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.resetTypeHandlerVersion">reset_type_handler_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_automatic_upgrade_enabled` <a name="reset_automatic_upgrade_enabled" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.resetAutomaticUpgradeEnabled"></a>

```python
def reset_automatic_upgrade_enabled() -> None
```

##### `reset_auto_upgrade_minor_version` <a name="reset_auto_upgrade_minor_version" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.resetAutoUpgradeMinorVersion"></a>

```python
def reset_auto_upgrade_minor_version() -> None
```

##### `reset_protected_settings` <a name="reset_protected_settings" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.resetProtectedSettings"></a>

```python
def reset_protected_settings() -> None
```

##### `reset_provision_after_extensions` <a name="reset_provision_after_extensions" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.resetProvisionAfterExtensions"></a>

```python
def reset_provision_after_extensions() -> None
```

##### `reset_settings_json` <a name="reset_settings_json" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.resetSettingsJson"></a>

```python
def reset_settings_json() -> None
```

##### `reset_type_handler_version` <a name="reset_type_handler_version" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.resetTypeHandlerVersion"></a>

```python
def reset_type_handler_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.automaticUpgradeEnabledInput">automatic_upgrade_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.autoUpgradeMinorVersionInput">auto_upgrade_minor_version_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.protectedSettingsInput">protected_settings_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.provisionAfterExtensionsInput">provision_after_extensions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.publisherInput">publisher_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.settingsJsonInput">settings_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.typeHandlerVersionInput">type_handler_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.automaticUpgradeEnabled">automatic_upgrade_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.autoUpgradeMinorVersion">auto_upgrade_minor_version</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.protectedSettings">protected_settings</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.provisionAfterExtensions">provision_after_extensions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.publisher">publisher</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.settingsJson">settings_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.typeHandlerVersion">type_handler_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensions">BatchPoolExtensions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `automatic_upgrade_enabled_input`<sup>Optional</sup> <a name="automatic_upgrade_enabled_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.automaticUpgradeEnabledInput"></a>

```python
automatic_upgrade_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_upgrade_minor_version_input`<sup>Optional</sup> <a name="auto_upgrade_minor_version_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.autoUpgradeMinorVersionInput"></a>

```python
auto_upgrade_minor_version_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `protected_settings_input`<sup>Optional</sup> <a name="protected_settings_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.protectedSettingsInput"></a>

```python
protected_settings_input: str
```

- *Type:* str

---

##### `provision_after_extensions_input`<sup>Optional</sup> <a name="provision_after_extensions_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.provisionAfterExtensionsInput"></a>

```python
provision_after_extensions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `publisher_input`<sup>Optional</sup> <a name="publisher_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.publisherInput"></a>

```python
publisher_input: str
```

- *Type:* str

---

##### `settings_json_input`<sup>Optional</sup> <a name="settings_json_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.settingsJsonInput"></a>

```python
settings_json_input: str
```

- *Type:* str

---

##### `type_handler_version_input`<sup>Optional</sup> <a name="type_handler_version_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.typeHandlerVersionInput"></a>

```python
type_handler_version_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `automatic_upgrade_enabled`<sup>Required</sup> <a name="automatic_upgrade_enabled" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.automaticUpgradeEnabled"></a>

```python
automatic_upgrade_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_upgrade_minor_version`<sup>Required</sup> <a name="auto_upgrade_minor_version" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.autoUpgradeMinorVersion"></a>

```python
auto_upgrade_minor_version: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `protected_settings`<sup>Required</sup> <a name="protected_settings" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.protectedSettings"></a>

```python
protected_settings: str
```

- *Type:* str

---

##### `provision_after_extensions`<sup>Required</sup> <a name="provision_after_extensions" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.provisionAfterExtensions"></a>

```python
provision_after_extensions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.publisher"></a>

```python
publisher: str
```

- *Type:* str

---

##### `settings_json`<sup>Required</sup> <a name="settings_json" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.settingsJson"></a>

```python
settings_json: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `type_handler_version`<sup>Required</sup> <a name="type_handler_version" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.typeHandlerVersion"></a>

```python
type_handler_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BatchPoolExtensions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensions">BatchPoolExtensions</a>]

---


### BatchPoolFixedScaleOutputReference <a name="BatchPoolFixedScaleOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolFixedScaleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.resetNodeDeallocationMethod">reset_node_deallocation_method</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.resetResizeTimeout">reset_resize_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.resetTargetDedicatedNodes">reset_target_dedicated_nodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.resetTargetLowPriorityNodes">reset_target_low_priority_nodes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_node_deallocation_method` <a name="reset_node_deallocation_method" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.resetNodeDeallocationMethod"></a>

```python
def reset_node_deallocation_method() -> None
```

##### `reset_resize_timeout` <a name="reset_resize_timeout" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.resetResizeTimeout"></a>

```python
def reset_resize_timeout() -> None
```

##### `reset_target_dedicated_nodes` <a name="reset_target_dedicated_nodes" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.resetTargetDedicatedNodes"></a>

```python
def reset_target_dedicated_nodes() -> None
```

##### `reset_target_low_priority_nodes` <a name="reset_target_low_priority_nodes" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.resetTargetLowPriorityNodes"></a>

```python
def reset_target_low_priority_nodes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.nodeDeallocationMethodInput">node_deallocation_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.resizeTimeoutInput">resize_timeout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.targetDedicatedNodesInput">target_dedicated_nodes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.targetLowPriorityNodesInput">target_low_priority_nodes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.nodeDeallocationMethod">node_deallocation_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.resizeTimeout">resize_timeout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.targetDedicatedNodes">target_dedicated_nodes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.targetLowPriorityNodes">target_low_priority_nodes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScale">BatchPoolFixedScale</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `node_deallocation_method_input`<sup>Optional</sup> <a name="node_deallocation_method_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.nodeDeallocationMethodInput"></a>

```python
node_deallocation_method_input: str
```

- *Type:* str

---

##### `resize_timeout_input`<sup>Optional</sup> <a name="resize_timeout_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.resizeTimeoutInput"></a>

```python
resize_timeout_input: str
```

- *Type:* str

---

##### `target_dedicated_nodes_input`<sup>Optional</sup> <a name="target_dedicated_nodes_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.targetDedicatedNodesInput"></a>

```python
target_dedicated_nodes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_low_priority_nodes_input`<sup>Optional</sup> <a name="target_low_priority_nodes_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.targetLowPriorityNodesInput"></a>

```python
target_low_priority_nodes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `node_deallocation_method`<sup>Required</sup> <a name="node_deallocation_method" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.nodeDeallocationMethod"></a>

```python
node_deallocation_method: str
```

- *Type:* str

---

##### `resize_timeout`<sup>Required</sup> <a name="resize_timeout" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.resizeTimeout"></a>

```python
resize_timeout: str
```

- *Type:* str

---

##### `target_dedicated_nodes`<sup>Required</sup> <a name="target_dedicated_nodes" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.targetDedicatedNodes"></a>

```python
target_dedicated_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_low_priority_nodes`<sup>Required</sup> <a name="target_low_priority_nodes" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.targetLowPriorityNodes"></a>

```python
target_low_priority_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.internalValue"></a>

```python
internal_value: BatchPoolFixedScale
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScale">BatchPoolFixedScale</a>

---


### BatchPoolIdentityOutputReference <a name="BatchPoolIdentityOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.property.identityIdsInput">identity_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentity">BatchPoolIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identity_ids_input`<sup>Optional</sup> <a name="identity_ids_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.property.identityIdsInput"></a>

```python
identity_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.property.internalValue"></a>

```python
internal_value: BatchPoolIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentity">BatchPoolIdentity</a>

---


### BatchPoolMountAzureBlobFileSystemOutputReference <a name="BatchPoolMountAzureBlobFileSystemOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolMountAzureBlobFileSystemOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.resetAccountKey">reset_account_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.resetBlobfuseOptions">reset_blobfuse_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.resetIdentityId">reset_identity_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.resetSasKey">reset_sas_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_account_key` <a name="reset_account_key" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.resetAccountKey"></a>

```python
def reset_account_key() -> None
```

##### `reset_blobfuse_options` <a name="reset_blobfuse_options" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.resetBlobfuseOptions"></a>

```python
def reset_blobfuse_options() -> None
```

##### `reset_identity_id` <a name="reset_identity_id" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.resetIdentityId"></a>

```python
def reset_identity_id() -> None
```

##### `reset_sas_key` <a name="reset_sas_key" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.resetSasKey"></a>

```python
def reset_sas_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.accountKeyInput">account_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.accountNameInput">account_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.blobfuseOptionsInput">blobfuse_options_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.containerNameInput">container_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.identityIdInput">identity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.relativeMountPathInput">relative_mount_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.sasKeyInput">sas_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.accountKey">account_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.accountName">account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.blobfuseOptions">blobfuse_options</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.containerName">container_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.identityId">identity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.relativeMountPath">relative_mount_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.sasKey">sas_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem">BatchPoolMountAzureBlobFileSystem</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_key_input`<sup>Optional</sup> <a name="account_key_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.accountKeyInput"></a>

```python
account_key_input: str
```

- *Type:* str

---

##### `account_name_input`<sup>Optional</sup> <a name="account_name_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.accountNameInput"></a>

```python
account_name_input: str
```

- *Type:* str

---

##### `blobfuse_options_input`<sup>Optional</sup> <a name="blobfuse_options_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.blobfuseOptionsInput"></a>

```python
blobfuse_options_input: str
```

- *Type:* str

---

##### `container_name_input`<sup>Optional</sup> <a name="container_name_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.containerNameInput"></a>

```python
container_name_input: str
```

- *Type:* str

---

##### `identity_id_input`<sup>Optional</sup> <a name="identity_id_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.identityIdInput"></a>

```python
identity_id_input: str
```

- *Type:* str

---

##### `relative_mount_path_input`<sup>Optional</sup> <a name="relative_mount_path_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.relativeMountPathInput"></a>

```python
relative_mount_path_input: str
```

- *Type:* str

---

##### `sas_key_input`<sup>Optional</sup> <a name="sas_key_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.sasKeyInput"></a>

```python
sas_key_input: str
```

- *Type:* str

---

##### `account_key`<sup>Required</sup> <a name="account_key" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.accountKey"></a>

```python
account_key: str
```

- *Type:* str

---

##### `account_name`<sup>Required</sup> <a name="account_name" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.accountName"></a>

```python
account_name: str
```

- *Type:* str

---

##### `blobfuse_options`<sup>Required</sup> <a name="blobfuse_options" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.blobfuseOptions"></a>

```python
blobfuse_options: str
```

- *Type:* str

---

##### `container_name`<sup>Required</sup> <a name="container_name" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.containerName"></a>

```python
container_name: str
```

- *Type:* str

---

##### `identity_id`<sup>Required</sup> <a name="identity_id" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.identityId"></a>

```python
identity_id: str
```

- *Type:* str

---

##### `relative_mount_path`<sup>Required</sup> <a name="relative_mount_path" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.relativeMountPath"></a>

```python
relative_mount_path: str
```

- *Type:* str

---

##### `sas_key`<sup>Required</sup> <a name="sas_key" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.sasKey"></a>

```python
sas_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.internalValue"></a>

```python
internal_value: BatchPoolMountAzureBlobFileSystem
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem">BatchPoolMountAzureBlobFileSystem</a>

---


### BatchPoolMountAzureFileShareList <a name="BatchPoolMountAzureFileShareList" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolMountAzureFileShareList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BatchPoolMountAzureFileShareOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShare">BatchPoolMountAzureFileShare</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BatchPoolMountAzureFileShare]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShare">BatchPoolMountAzureFileShare</a>]]

---


### BatchPoolMountAzureFileShareOutputReference <a name="BatchPoolMountAzureFileShareOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolMountAzureFileShareOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.resetMountOptions">reset_mount_options</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_mount_options` <a name="reset_mount_options" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.resetMountOptions"></a>

```python
def reset_mount_options() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.accountKeyInput">account_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.accountNameInput">account_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.azureFileUrlInput">azure_file_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.mountOptionsInput">mount_options_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.relativeMountPathInput">relative_mount_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.accountKey">account_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.accountName">account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.azureFileUrl">azure_file_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.mountOptions">mount_options</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.relativeMountPath">relative_mount_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShare">BatchPoolMountAzureFileShare</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_key_input`<sup>Optional</sup> <a name="account_key_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.accountKeyInput"></a>

```python
account_key_input: str
```

- *Type:* str

---

##### `account_name_input`<sup>Optional</sup> <a name="account_name_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.accountNameInput"></a>

```python
account_name_input: str
```

- *Type:* str

---

##### `azure_file_url_input`<sup>Optional</sup> <a name="azure_file_url_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.azureFileUrlInput"></a>

```python
azure_file_url_input: str
```

- *Type:* str

---

##### `mount_options_input`<sup>Optional</sup> <a name="mount_options_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.mountOptionsInput"></a>

```python
mount_options_input: str
```

- *Type:* str

---

##### `relative_mount_path_input`<sup>Optional</sup> <a name="relative_mount_path_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.relativeMountPathInput"></a>

```python
relative_mount_path_input: str
```

- *Type:* str

---

##### `account_key`<sup>Required</sup> <a name="account_key" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.accountKey"></a>

```python
account_key: str
```

- *Type:* str

---

##### `account_name`<sup>Required</sup> <a name="account_name" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.accountName"></a>

```python
account_name: str
```

- *Type:* str

---

##### `azure_file_url`<sup>Required</sup> <a name="azure_file_url" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.azureFileUrl"></a>

```python
azure_file_url: str
```

- *Type:* str

---

##### `mount_options`<sup>Required</sup> <a name="mount_options" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.mountOptions"></a>

```python
mount_options: str
```

- *Type:* str

---

##### `relative_mount_path`<sup>Required</sup> <a name="relative_mount_path" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.relativeMountPath"></a>

```python
relative_mount_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BatchPoolMountAzureFileShare]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShare">BatchPoolMountAzureFileShare</a>]

---


### BatchPoolMountCifsMountList <a name="BatchPoolMountCifsMountList" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolMountCifsMountList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BatchPoolMountCifsMountOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMount">BatchPoolMountCifsMount</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BatchPoolMountCifsMount]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMount">BatchPoolMountCifsMount</a>]]

---


### BatchPoolMountCifsMountOutputReference <a name="BatchPoolMountCifsMountOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolMountCifsMountOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.resetMountOptions">reset_mount_options</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_mount_options` <a name="reset_mount_options" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.resetMountOptions"></a>

```python
def reset_mount_options() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.mountOptionsInput">mount_options_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.relativeMountPathInput">relative_mount_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.userNameInput">user_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.mountOptions">mount_options</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.relativeMountPath">relative_mount_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.userName">user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMount">BatchPoolMountCifsMount</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mount_options_input`<sup>Optional</sup> <a name="mount_options_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.mountOptionsInput"></a>

```python
mount_options_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `relative_mount_path_input`<sup>Optional</sup> <a name="relative_mount_path_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.relativeMountPathInput"></a>

```python
relative_mount_path_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `user_name_input`<sup>Optional</sup> <a name="user_name_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.userNameInput"></a>

```python
user_name_input: str
```

- *Type:* str

---

##### `mount_options`<sup>Required</sup> <a name="mount_options" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.mountOptions"></a>

```python
mount_options: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `relative_mount_path`<sup>Required</sup> <a name="relative_mount_path" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.relativeMountPath"></a>

```python
relative_mount_path: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BatchPoolMountCifsMount]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMount">BatchPoolMountCifsMount</a>]

---


### BatchPoolMountList <a name="BatchPoolMountList" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolMountList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BatchPoolMountOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMount">BatchPoolMount</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BatchPoolMount]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMount">BatchPoolMount</a>]]

---


### BatchPoolMountNfsMountList <a name="BatchPoolMountNfsMountList" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolMountNfsMountList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BatchPoolMountNfsMountOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMount">BatchPoolMountNfsMount</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BatchPoolMountNfsMount]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMount">BatchPoolMountNfsMount</a>]]

---


### BatchPoolMountNfsMountOutputReference <a name="BatchPoolMountNfsMountOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolMountNfsMountOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.resetMountOptions">reset_mount_options</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_mount_options` <a name="reset_mount_options" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.resetMountOptions"></a>

```python
def reset_mount_options() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.property.mountOptionsInput">mount_options_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.property.relativeMountPathInput">relative_mount_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.property.mountOptions">mount_options</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.property.relativeMountPath">relative_mount_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMount">BatchPoolMountNfsMount</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mount_options_input`<sup>Optional</sup> <a name="mount_options_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.property.mountOptionsInput"></a>

```python
mount_options_input: str
```

- *Type:* str

---

##### `relative_mount_path_input`<sup>Optional</sup> <a name="relative_mount_path_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.property.relativeMountPathInput"></a>

```python
relative_mount_path_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `mount_options`<sup>Required</sup> <a name="mount_options" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.property.mountOptions"></a>

```python
mount_options: str
```

- *Type:* str

---

##### `relative_mount_path`<sup>Required</sup> <a name="relative_mount_path" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.property.relativeMountPath"></a>

```python
relative_mount_path: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BatchPoolMountNfsMount]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMount">BatchPoolMountNfsMount</a>]

---


### BatchPoolMountOutputReference <a name="BatchPoolMountOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolMountOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.putAzureBlobFileSystem">put_azure_blob_file_system</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.putAzureFileShare">put_azure_file_share</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.putCifsMount">put_cifs_mount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.putNfsMount">put_nfs_mount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.resetAzureBlobFileSystem">reset_azure_blob_file_system</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.resetAzureFileShare">reset_azure_file_share</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.resetCifsMount">reset_cifs_mount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.resetNfsMount">reset_nfs_mount</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_azure_blob_file_system` <a name="put_azure_blob_file_system" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.putAzureBlobFileSystem"></a>

```python
def put_azure_blob_file_system(
  account_name: str,
  container_name: str,
  relative_mount_path: str,
  account_key: str = None,
  blobfuse_options: str = None,
  identity_id: str = None,
  sas_key: str = None
) -> None
```

###### `account_name`<sup>Required</sup> <a name="account_name" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.putAzureBlobFileSystem.parameter.accountName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#account_name BatchPool#account_name}.

---

###### `container_name`<sup>Required</sup> <a name="container_name" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.putAzureBlobFileSystem.parameter.containerName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#container_name BatchPool#container_name}.

---

###### `relative_mount_path`<sup>Required</sup> <a name="relative_mount_path" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.putAzureBlobFileSystem.parameter.relativeMountPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#relative_mount_path BatchPool#relative_mount_path}.

---

###### `account_key`<sup>Optional</sup> <a name="account_key" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.putAzureBlobFileSystem.parameter.accountKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#account_key BatchPool#account_key}.

---

###### `blobfuse_options`<sup>Optional</sup> <a name="blobfuse_options" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.putAzureBlobFileSystem.parameter.blobfuseOptions"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#blobfuse_options BatchPool#blobfuse_options}.

---

###### `identity_id`<sup>Optional</sup> <a name="identity_id" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.putAzureBlobFileSystem.parameter.identityId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#identity_id BatchPool#identity_id}.

---

###### `sas_key`<sup>Optional</sup> <a name="sas_key" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.putAzureBlobFileSystem.parameter.sasKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#sas_key BatchPool#sas_key}.

---

##### `put_azure_file_share` <a name="put_azure_file_share" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.putAzureFileShare"></a>

```python
def put_azure_file_share(
  value: typing.Union[IResolvable, typing.List[BatchPoolMountAzureFileShare]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.putAzureFileShare.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShare">BatchPoolMountAzureFileShare</a>]]

---

##### `put_cifs_mount` <a name="put_cifs_mount" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.putCifsMount"></a>

```python
def put_cifs_mount(
  value: typing.Union[IResolvable, typing.List[BatchPoolMountCifsMount]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.putCifsMount.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMount">BatchPoolMountCifsMount</a>]]

---

##### `put_nfs_mount` <a name="put_nfs_mount" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.putNfsMount"></a>

```python
def put_nfs_mount(
  value: typing.Union[IResolvable, typing.List[BatchPoolMountNfsMount]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.putNfsMount.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMount">BatchPoolMountNfsMount</a>]]

---

##### `reset_azure_blob_file_system` <a name="reset_azure_blob_file_system" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.resetAzureBlobFileSystem"></a>

```python
def reset_azure_blob_file_system() -> None
```

##### `reset_azure_file_share` <a name="reset_azure_file_share" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.resetAzureFileShare"></a>

```python
def reset_azure_file_share() -> None
```

##### `reset_cifs_mount` <a name="reset_cifs_mount" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.resetCifsMount"></a>

```python
def reset_cifs_mount() -> None
```

##### `reset_nfs_mount` <a name="reset_nfs_mount" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.resetNfsMount"></a>

```python
def reset_nfs_mount() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.azureBlobFileSystem">azure_blob_file_system</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference">BatchPoolMountAzureBlobFileSystemOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.azureFileShare">azure_file_share</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList">BatchPoolMountAzureFileShareList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.cifsMount">cifs_mount</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList">BatchPoolMountCifsMountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.nfsMount">nfs_mount</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList">BatchPoolMountNfsMountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.azureBlobFileSystemInput">azure_blob_file_system_input</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem">BatchPoolMountAzureBlobFileSystem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.azureFileShareInput">azure_file_share_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShare">BatchPoolMountAzureFileShare</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.cifsMountInput">cifs_mount_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMount">BatchPoolMountCifsMount</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.nfsMountInput">nfs_mount_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMount">BatchPoolMountNfsMount</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMount">BatchPoolMount</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `azure_blob_file_system`<sup>Required</sup> <a name="azure_blob_file_system" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.azureBlobFileSystem"></a>

```python
azure_blob_file_system: BatchPoolMountAzureBlobFileSystemOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference">BatchPoolMountAzureBlobFileSystemOutputReference</a>

---

##### `azure_file_share`<sup>Required</sup> <a name="azure_file_share" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.azureFileShare"></a>

```python
azure_file_share: BatchPoolMountAzureFileShareList
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList">BatchPoolMountAzureFileShareList</a>

---

##### `cifs_mount`<sup>Required</sup> <a name="cifs_mount" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.cifsMount"></a>

```python
cifs_mount: BatchPoolMountCifsMountList
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList">BatchPoolMountCifsMountList</a>

---

##### `nfs_mount`<sup>Required</sup> <a name="nfs_mount" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.nfsMount"></a>

```python
nfs_mount: BatchPoolMountNfsMountList
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList">BatchPoolMountNfsMountList</a>

---

##### `azure_blob_file_system_input`<sup>Optional</sup> <a name="azure_blob_file_system_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.azureBlobFileSystemInput"></a>

```python
azure_blob_file_system_input: BatchPoolMountAzureBlobFileSystem
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem">BatchPoolMountAzureBlobFileSystem</a>

---

##### `azure_file_share_input`<sup>Optional</sup> <a name="azure_file_share_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.azureFileShareInput"></a>

```python
azure_file_share_input: typing.Union[IResolvable, typing.List[BatchPoolMountAzureFileShare]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShare">BatchPoolMountAzureFileShare</a>]]

---

##### `cifs_mount_input`<sup>Optional</sup> <a name="cifs_mount_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.cifsMountInput"></a>

```python
cifs_mount_input: typing.Union[IResolvable, typing.List[BatchPoolMountCifsMount]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMount">BatchPoolMountCifsMount</a>]]

---

##### `nfs_mount_input`<sup>Optional</sup> <a name="nfs_mount_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.nfsMountInput"></a>

```python
nfs_mount_input: typing.Union[IResolvable, typing.List[BatchPoolMountNfsMount]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMount">BatchPoolMountNfsMount</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BatchPoolMount]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMount">BatchPoolMount</a>]

---


### BatchPoolNetworkConfigurationEndpointConfigurationList <a name="BatchPoolNetworkConfigurationEndpointConfigurationList" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BatchPoolNetworkConfigurationEndpointConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfiguration">BatchPoolNetworkConfigurationEndpointConfiguration</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BatchPoolNetworkConfigurationEndpointConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfiguration">BatchPoolNetworkConfigurationEndpointConfiguration</a>]]

---


### BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList <a name="BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules">BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules">BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules</a>]]

---


### BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference <a name="BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.resetSourcePortRanges">reset_source_port_ranges</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_source_port_ranges` <a name="reset_source_port_ranges" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.resetSourcePortRanges"></a>

```python
def reset_source_port_ranges() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.accessInput">access_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.sourceAddressPrefixInput">source_address_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.sourcePortRangesInput">source_port_ranges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.access">access</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.sourceAddressPrefix">source_address_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.sourcePortRanges">source_port_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules">BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_input`<sup>Optional</sup> <a name="access_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.accessInput"></a>

```python
access_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source_address_prefix_input`<sup>Optional</sup> <a name="source_address_prefix_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.sourceAddressPrefixInput"></a>

```python
source_address_prefix_input: str
```

- *Type:* str

---

##### `source_port_ranges_input`<sup>Optional</sup> <a name="source_port_ranges_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.sourcePortRangesInput"></a>

```python
source_port_ranges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `access`<sup>Required</sup> <a name="access" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.access"></a>

```python
access: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source_address_prefix`<sup>Required</sup> <a name="source_address_prefix" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.sourceAddressPrefix"></a>

```python
source_address_prefix: str
```

- *Type:* str

---

##### `source_port_ranges`<sup>Required</sup> <a name="source_port_ranges" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.sourcePortRanges"></a>

```python
source_port_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules">BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules</a>]

---


### BatchPoolNetworkConfigurationEndpointConfigurationOutputReference <a name="BatchPoolNetworkConfigurationEndpointConfigurationOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.putNetworkSecurityGroupRules">put_network_security_group_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.resetNetworkSecurityGroupRules">reset_network_security_group_rules</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_network_security_group_rules` <a name="put_network_security_group_rules" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.putNetworkSecurityGroupRules"></a>

```python
def put_network_security_group_rules(
  value: typing.Union[IResolvable, typing.List[BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.putNetworkSecurityGroupRules.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules">BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules</a>]]

---

##### `reset_network_security_group_rules` <a name="reset_network_security_group_rules" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.resetNetworkSecurityGroupRules"></a>

```python
def reset_network_security_group_rules() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.networkSecurityGroupRules">network_security_group_rules</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList">BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.backendPortInput">backend_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.frontendPortRangeInput">frontend_port_range_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.networkSecurityGroupRulesInput">network_security_group_rules_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules">BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.backendPort">backend_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.frontendPortRange">frontend_port_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfiguration">BatchPoolNetworkConfigurationEndpointConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network_security_group_rules`<sup>Required</sup> <a name="network_security_group_rules" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.networkSecurityGroupRules"></a>

```python
network_security_group_rules: BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList">BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList</a>

---

##### `backend_port_input`<sup>Optional</sup> <a name="backend_port_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.backendPortInput"></a>

```python
backend_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `frontend_port_range_input`<sup>Optional</sup> <a name="frontend_port_range_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.frontendPortRangeInput"></a>

```python
frontend_port_range_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_security_group_rules_input`<sup>Optional</sup> <a name="network_security_group_rules_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.networkSecurityGroupRulesInput"></a>

```python
network_security_group_rules_input: typing.Union[IResolvable, typing.List[BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules">BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules</a>]]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `backend_port`<sup>Required</sup> <a name="backend_port" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.backendPort"></a>

```python
backend_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `frontend_port_range`<sup>Required</sup> <a name="frontend_port_range" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.frontendPortRange"></a>

```python
frontend_port_range: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BatchPoolNetworkConfigurationEndpointConfiguration]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfiguration">BatchPoolNetworkConfigurationEndpointConfiguration</a>]

---


### BatchPoolNetworkConfigurationOutputReference <a name="BatchPoolNetworkConfigurationOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolNetworkConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.putEndpointConfiguration">put_endpoint_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.resetAcceleratedNetworkingEnabled">reset_accelerated_networking_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.resetDynamicVnetAssignmentScope">reset_dynamic_vnet_assignment_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.resetEndpointConfiguration">reset_endpoint_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.resetPublicAddressProvisioningType">reset_public_address_provisioning_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.resetPublicIps">reset_public_ips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.resetSubnetId">reset_subnet_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_endpoint_configuration` <a name="put_endpoint_configuration" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.putEndpointConfiguration"></a>

```python
def put_endpoint_configuration(
  value: typing.Union[IResolvable, typing.List[BatchPoolNetworkConfigurationEndpointConfiguration]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.putEndpointConfiguration.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfiguration">BatchPoolNetworkConfigurationEndpointConfiguration</a>]]

---

##### `reset_accelerated_networking_enabled` <a name="reset_accelerated_networking_enabled" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.resetAcceleratedNetworkingEnabled"></a>

```python
def reset_accelerated_networking_enabled() -> None
```

##### `reset_dynamic_vnet_assignment_scope` <a name="reset_dynamic_vnet_assignment_scope" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.resetDynamicVnetAssignmentScope"></a>

```python
def reset_dynamic_vnet_assignment_scope() -> None
```

##### `reset_endpoint_configuration` <a name="reset_endpoint_configuration" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.resetEndpointConfiguration"></a>

```python
def reset_endpoint_configuration() -> None
```

##### `reset_public_address_provisioning_type` <a name="reset_public_address_provisioning_type" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.resetPublicAddressProvisioningType"></a>

```python
def reset_public_address_provisioning_type() -> None
```

##### `reset_public_ips` <a name="reset_public_ips" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.resetPublicIps"></a>

```python
def reset_public_ips() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.endpointConfiguration">endpoint_configuration</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList">BatchPoolNetworkConfigurationEndpointConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.acceleratedNetworkingEnabledInput">accelerated_networking_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.dynamicVnetAssignmentScopeInput">dynamic_vnet_assignment_scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.endpointConfigurationInput">endpoint_configuration_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfiguration">BatchPoolNetworkConfigurationEndpointConfiguration</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.publicAddressProvisioningTypeInput">public_address_provisioning_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.publicIpsInput">public_ips_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.acceleratedNetworkingEnabled">accelerated_networking_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.dynamicVnetAssignmentScope">dynamic_vnet_assignment_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.publicAddressProvisioningType">public_address_provisioning_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.publicIps">public_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration">BatchPoolNetworkConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `endpoint_configuration`<sup>Required</sup> <a name="endpoint_configuration" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.endpointConfiguration"></a>

```python
endpoint_configuration: BatchPoolNetworkConfigurationEndpointConfigurationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList">BatchPoolNetworkConfigurationEndpointConfigurationList</a>

---

##### `accelerated_networking_enabled_input`<sup>Optional</sup> <a name="accelerated_networking_enabled_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.acceleratedNetworkingEnabledInput"></a>

```python
accelerated_networking_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dynamic_vnet_assignment_scope_input`<sup>Optional</sup> <a name="dynamic_vnet_assignment_scope_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.dynamicVnetAssignmentScopeInput"></a>

```python
dynamic_vnet_assignment_scope_input: str
```

- *Type:* str

---

##### `endpoint_configuration_input`<sup>Optional</sup> <a name="endpoint_configuration_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.endpointConfigurationInput"></a>

```python
endpoint_configuration_input: typing.Union[IResolvable, typing.List[BatchPoolNetworkConfigurationEndpointConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfiguration">BatchPoolNetworkConfigurationEndpointConfiguration</a>]]

---

##### `public_address_provisioning_type_input`<sup>Optional</sup> <a name="public_address_provisioning_type_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.publicAddressProvisioningTypeInput"></a>

```python
public_address_provisioning_type_input: str
```

- *Type:* str

---

##### `public_ips_input`<sup>Optional</sup> <a name="public_ips_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.publicIpsInput"></a>

```python
public_ips_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `accelerated_networking_enabled`<sup>Required</sup> <a name="accelerated_networking_enabled" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.acceleratedNetworkingEnabled"></a>

```python
accelerated_networking_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dynamic_vnet_assignment_scope`<sup>Required</sup> <a name="dynamic_vnet_assignment_scope" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.dynamicVnetAssignmentScope"></a>

```python
dynamic_vnet_assignment_scope: str
```

- *Type:* str

---

##### `public_address_provisioning_type`<sup>Required</sup> <a name="public_address_provisioning_type" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.publicAddressProvisioningType"></a>

```python
public_address_provisioning_type: str
```

- *Type:* str

---

##### `public_ips`<sup>Required</sup> <a name="public_ips" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.publicIps"></a>

```python
public_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: BatchPoolNetworkConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration">BatchPoolNetworkConfiguration</a>

---


### BatchPoolNodePlacementList <a name="BatchPoolNodePlacementList" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolNodePlacementList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BatchPoolNodePlacementOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacement">BatchPoolNodePlacement</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BatchPoolNodePlacement]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacement">BatchPoolNodePlacement</a>]]

---


### BatchPoolNodePlacementOutputReference <a name="BatchPoolNodePlacementOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolNodePlacementOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.resetPolicy">reset_policy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_policy` <a name="reset_policy" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.resetPolicy"></a>

```python
def reset_policy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.property.policyInput">policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.property.policy">policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacement">BatchPoolNodePlacement</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `policy_input`<sup>Optional</sup> <a name="policy_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.property.policyInput"></a>

```python
policy_input: str
```

- *Type:* str

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.property.policy"></a>

```python
policy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BatchPoolNodePlacement]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacement">BatchPoolNodePlacement</a>]

---


### BatchPoolStartTaskContainerList <a name="BatchPoolStartTaskContainerList" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolStartTaskContainerList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BatchPoolStartTaskContainerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainer">BatchPoolStartTaskContainer</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BatchPoolStartTaskContainer]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainer">BatchPoolStartTaskContainer</a>]]

---


### BatchPoolStartTaskContainerOutputReference <a name="BatchPoolStartTaskContainerOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolStartTaskContainerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.putRegistry">put_registry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.resetRegistry">reset_registry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.resetRunOptions">reset_run_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.resetWorkingDirectory">reset_working_directory</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_registry` <a name="put_registry" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.putRegistry"></a>

```python
def put_registry(
  value: typing.Union[IResolvable, typing.List[BatchPoolStartTaskContainerRegistry]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.putRegistry.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistry">BatchPoolStartTaskContainerRegistry</a>]]

---

##### `reset_registry` <a name="reset_registry" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.resetRegistry"></a>

```python
def reset_registry() -> None
```

##### `reset_run_options` <a name="reset_run_options" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.resetRunOptions"></a>

```python
def reset_run_options() -> None
```

##### `reset_working_directory` <a name="reset_working_directory" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.resetWorkingDirectory"></a>

```python
def reset_working_directory() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.registry">registry</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList">BatchPoolStartTaskContainerRegistryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.imageNameInput">image_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.registryInput">registry_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistry">BatchPoolStartTaskContainerRegistry</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.runOptionsInput">run_options_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.workingDirectoryInput">working_directory_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.imageName">image_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.runOptions">run_options</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.workingDirectory">working_directory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainer">BatchPoolStartTaskContainer</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `registry`<sup>Required</sup> <a name="registry" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.registry"></a>

```python
registry: BatchPoolStartTaskContainerRegistryList
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList">BatchPoolStartTaskContainerRegistryList</a>

---

##### `image_name_input`<sup>Optional</sup> <a name="image_name_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.imageNameInput"></a>

```python
image_name_input: str
```

- *Type:* str

---

##### `registry_input`<sup>Optional</sup> <a name="registry_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.registryInput"></a>

```python
registry_input: typing.Union[IResolvable, typing.List[BatchPoolStartTaskContainerRegistry]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistry">BatchPoolStartTaskContainerRegistry</a>]]

---

##### `run_options_input`<sup>Optional</sup> <a name="run_options_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.runOptionsInput"></a>

```python
run_options_input: str
```

- *Type:* str

---

##### `working_directory_input`<sup>Optional</sup> <a name="working_directory_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.workingDirectoryInput"></a>

```python
working_directory_input: str
```

- *Type:* str

---

##### `image_name`<sup>Required</sup> <a name="image_name" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.imageName"></a>

```python
image_name: str
```

- *Type:* str

---

##### `run_options`<sup>Required</sup> <a name="run_options" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.runOptions"></a>

```python
run_options: str
```

- *Type:* str

---

##### `working_directory`<sup>Required</sup> <a name="working_directory" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.workingDirectory"></a>

```python
working_directory: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BatchPoolStartTaskContainer]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainer">BatchPoolStartTaskContainer</a>]

---


### BatchPoolStartTaskContainerRegistryList <a name="BatchPoolStartTaskContainerRegistryList" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolStartTaskContainerRegistryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BatchPoolStartTaskContainerRegistryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistry">BatchPoolStartTaskContainerRegistry</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BatchPoolStartTaskContainerRegistry]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistry">BatchPoolStartTaskContainerRegistry</a>]]

---


### BatchPoolStartTaskContainerRegistryOutputReference <a name="BatchPoolStartTaskContainerRegistryOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolStartTaskContainerRegistryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.resetUserAssignedIdentityId">reset_user_assigned_identity_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.resetUserName">reset_user_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_password` <a name="reset_password" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_user_assigned_identity_id` <a name="reset_user_assigned_identity_id" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.resetUserAssignedIdentityId"></a>

```python
def reset_user_assigned_identity_id() -> None
```

##### `reset_user_name` <a name="reset_user_name" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.resetUserName"></a>

```python
def reset_user_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.registryServerInput">registry_server_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.userAssignedIdentityIdInput">user_assigned_identity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.userNameInput">user_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.registryServer">registry_server</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.userAssignedIdentityId">user_assigned_identity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.userName">user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistry">BatchPoolStartTaskContainerRegistry</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `registry_server_input`<sup>Optional</sup> <a name="registry_server_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.registryServerInput"></a>

```python
registry_server_input: str
```

- *Type:* str

---

##### `user_assigned_identity_id_input`<sup>Optional</sup> <a name="user_assigned_identity_id_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.userAssignedIdentityIdInput"></a>

```python
user_assigned_identity_id_input: str
```

- *Type:* str

---

##### `user_name_input`<sup>Optional</sup> <a name="user_name_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.userNameInput"></a>

```python
user_name_input: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `registry_server`<sup>Required</sup> <a name="registry_server" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.registryServer"></a>

```python
registry_server: str
```

- *Type:* str

---

##### `user_assigned_identity_id`<sup>Required</sup> <a name="user_assigned_identity_id" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.userAssignedIdentityId"></a>

```python
user_assigned_identity_id: str
```

- *Type:* str

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BatchPoolStartTaskContainerRegistry]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistry">BatchPoolStartTaskContainerRegistry</a>]

---


### BatchPoolStartTaskOutputReference <a name="BatchPoolStartTaskOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolStartTaskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.putContainer">put_container</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.putResourceFile">put_resource_file</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.putUserIdentity">put_user_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.resetCommonEnvironmentProperties">reset_common_environment_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.resetContainer">reset_container</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.resetResourceFile">reset_resource_file</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.resetTaskRetryMaximum">reset_task_retry_maximum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.resetWaitForSuccess">reset_wait_for_success</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_container` <a name="put_container" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.putContainer"></a>

```python
def put_container(
  value: typing.Union[IResolvable, typing.List[BatchPoolStartTaskContainer]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.putContainer.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainer">BatchPoolStartTaskContainer</a>]]

---

##### `put_resource_file` <a name="put_resource_file" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.putResourceFile"></a>

```python
def put_resource_file(
  value: typing.Union[IResolvable, typing.List[BatchPoolStartTaskResourceFile]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.putResourceFile.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile">BatchPoolStartTaskResourceFile</a>]]

---

##### `put_user_identity` <a name="put_user_identity" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.putUserIdentity"></a>

```python
def put_user_identity(
  auto_user: BatchPoolStartTaskUserIdentityAutoUser = None,
  user_name: str = None
) -> None
```

###### `auto_user`<sup>Optional</sup> <a name="auto_user" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.putUserIdentity.parameter.autoUser"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUser">BatchPoolStartTaskUserIdentityAutoUser</a>

auto_user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#auto_user BatchPool#auto_user}

---

###### `user_name`<sup>Optional</sup> <a name="user_name" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.putUserIdentity.parameter.userName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#user_name BatchPool#user_name}.

---

##### `reset_common_environment_properties` <a name="reset_common_environment_properties" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.resetCommonEnvironmentProperties"></a>

```python
def reset_common_environment_properties() -> None
```

##### `reset_container` <a name="reset_container" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.resetContainer"></a>

```python
def reset_container() -> None
```

##### `reset_resource_file` <a name="reset_resource_file" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.resetResourceFile"></a>

```python
def reset_resource_file() -> None
```

##### `reset_task_retry_maximum` <a name="reset_task_retry_maximum" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.resetTaskRetryMaximum"></a>

```python
def reset_task_retry_maximum() -> None
```

##### `reset_wait_for_success` <a name="reset_wait_for_success" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.resetWaitForSuccess"></a>

```python
def reset_wait_for_success() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.container">container</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList">BatchPoolStartTaskContainerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.resourceFile">resource_file</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList">BatchPoolStartTaskResourceFileList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.userIdentity">user_identity</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference">BatchPoolStartTaskUserIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.commandLineInput">command_line_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.commonEnvironmentPropertiesInput">common_environment_properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.containerInput">container_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainer">BatchPoolStartTaskContainer</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.resourceFileInput">resource_file_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile">BatchPoolStartTaskResourceFile</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.taskRetryMaximumInput">task_retry_maximum_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.userIdentityInput">user_identity_input</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentity">BatchPoolStartTaskUserIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.waitForSuccessInput">wait_for_success_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.commandLine">command_line</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.commonEnvironmentProperties">common_environment_properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.taskRetryMaximum">task_retry_maximum</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.waitForSuccess">wait_for_success</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTask">BatchPoolStartTask</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.container"></a>

```python
container: BatchPoolStartTaskContainerList
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList">BatchPoolStartTaskContainerList</a>

---

##### `resource_file`<sup>Required</sup> <a name="resource_file" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.resourceFile"></a>

```python
resource_file: BatchPoolStartTaskResourceFileList
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList">BatchPoolStartTaskResourceFileList</a>

---

##### `user_identity`<sup>Required</sup> <a name="user_identity" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.userIdentity"></a>

```python
user_identity: BatchPoolStartTaskUserIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference">BatchPoolStartTaskUserIdentityOutputReference</a>

---

##### `command_line_input`<sup>Optional</sup> <a name="command_line_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.commandLineInput"></a>

```python
command_line_input: str
```

- *Type:* str

---

##### `common_environment_properties_input`<sup>Optional</sup> <a name="common_environment_properties_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.commonEnvironmentPropertiesInput"></a>

```python
common_environment_properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `container_input`<sup>Optional</sup> <a name="container_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.containerInput"></a>

```python
container_input: typing.Union[IResolvable, typing.List[BatchPoolStartTaskContainer]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainer">BatchPoolStartTaskContainer</a>]]

---

##### `resource_file_input`<sup>Optional</sup> <a name="resource_file_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.resourceFileInput"></a>

```python
resource_file_input: typing.Union[IResolvable, typing.List[BatchPoolStartTaskResourceFile]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile">BatchPoolStartTaskResourceFile</a>]]

---

##### `task_retry_maximum_input`<sup>Optional</sup> <a name="task_retry_maximum_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.taskRetryMaximumInput"></a>

```python
task_retry_maximum_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_identity_input`<sup>Optional</sup> <a name="user_identity_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.userIdentityInput"></a>

```python
user_identity_input: BatchPoolStartTaskUserIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentity">BatchPoolStartTaskUserIdentity</a>

---

##### `wait_for_success_input`<sup>Optional</sup> <a name="wait_for_success_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.waitForSuccessInput"></a>

```python
wait_for_success_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `command_line`<sup>Required</sup> <a name="command_line" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.commandLine"></a>

```python
command_line: str
```

- *Type:* str

---

##### `common_environment_properties`<sup>Required</sup> <a name="common_environment_properties" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.commonEnvironmentProperties"></a>

```python
common_environment_properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `task_retry_maximum`<sup>Required</sup> <a name="task_retry_maximum" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.taskRetryMaximum"></a>

```python
task_retry_maximum: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `wait_for_success`<sup>Required</sup> <a name="wait_for_success" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.waitForSuccess"></a>

```python
wait_for_success: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.internalValue"></a>

```python
internal_value: BatchPoolStartTask
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTask">BatchPoolStartTask</a>

---


### BatchPoolStartTaskResourceFileList <a name="BatchPoolStartTaskResourceFileList" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolStartTaskResourceFileList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BatchPoolStartTaskResourceFileOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile">BatchPoolStartTaskResourceFile</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BatchPoolStartTaskResourceFile]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile">BatchPoolStartTaskResourceFile</a>]]

---


### BatchPoolStartTaskResourceFileOutputReference <a name="BatchPoolStartTaskResourceFileOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolStartTaskResourceFileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.resetAutoStorageContainerName">reset_auto_storage_container_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.resetBlobPrefix">reset_blob_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.resetFileMode">reset_file_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.resetFilePath">reset_file_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.resetHttpUrl">reset_http_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.resetStorageContainerUrl">reset_storage_container_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.resetUserAssignedIdentityId">reset_user_assigned_identity_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_auto_storage_container_name` <a name="reset_auto_storage_container_name" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.resetAutoStorageContainerName"></a>

```python
def reset_auto_storage_container_name() -> None
```

##### `reset_blob_prefix` <a name="reset_blob_prefix" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.resetBlobPrefix"></a>

```python
def reset_blob_prefix() -> None
```

##### `reset_file_mode` <a name="reset_file_mode" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.resetFileMode"></a>

```python
def reset_file_mode() -> None
```

##### `reset_file_path` <a name="reset_file_path" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.resetFilePath"></a>

```python
def reset_file_path() -> None
```

##### `reset_http_url` <a name="reset_http_url" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.resetHttpUrl"></a>

```python
def reset_http_url() -> None
```

##### `reset_storage_container_url` <a name="reset_storage_container_url" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.resetStorageContainerUrl"></a>

```python
def reset_storage_container_url() -> None
```

##### `reset_user_assigned_identity_id` <a name="reset_user_assigned_identity_id" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.resetUserAssignedIdentityId"></a>

```python
def reset_user_assigned_identity_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.autoStorageContainerNameInput">auto_storage_container_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.blobPrefixInput">blob_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.fileModeInput">file_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.filePathInput">file_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.httpUrlInput">http_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.storageContainerUrlInput">storage_container_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.userAssignedIdentityIdInput">user_assigned_identity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.autoStorageContainerName">auto_storage_container_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.blobPrefix">blob_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.fileMode">file_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.filePath">file_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.httpUrl">http_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.storageContainerUrl">storage_container_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.userAssignedIdentityId">user_assigned_identity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile">BatchPoolStartTaskResourceFile</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_storage_container_name_input`<sup>Optional</sup> <a name="auto_storage_container_name_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.autoStorageContainerNameInput"></a>

```python
auto_storage_container_name_input: str
```

- *Type:* str

---

##### `blob_prefix_input`<sup>Optional</sup> <a name="blob_prefix_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.blobPrefixInput"></a>

```python
blob_prefix_input: str
```

- *Type:* str

---

##### `file_mode_input`<sup>Optional</sup> <a name="file_mode_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.fileModeInput"></a>

```python
file_mode_input: str
```

- *Type:* str

---

##### `file_path_input`<sup>Optional</sup> <a name="file_path_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.filePathInput"></a>

```python
file_path_input: str
```

- *Type:* str

---

##### `http_url_input`<sup>Optional</sup> <a name="http_url_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.httpUrlInput"></a>

```python
http_url_input: str
```

- *Type:* str

---

##### `storage_container_url_input`<sup>Optional</sup> <a name="storage_container_url_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.storageContainerUrlInput"></a>

```python
storage_container_url_input: str
```

- *Type:* str

---

##### `user_assigned_identity_id_input`<sup>Optional</sup> <a name="user_assigned_identity_id_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.userAssignedIdentityIdInput"></a>

```python
user_assigned_identity_id_input: str
```

- *Type:* str

---

##### `auto_storage_container_name`<sup>Required</sup> <a name="auto_storage_container_name" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.autoStorageContainerName"></a>

```python
auto_storage_container_name: str
```

- *Type:* str

---

##### `blob_prefix`<sup>Required</sup> <a name="blob_prefix" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.blobPrefix"></a>

```python
blob_prefix: str
```

- *Type:* str

---

##### `file_mode`<sup>Required</sup> <a name="file_mode" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.fileMode"></a>

```python
file_mode: str
```

- *Type:* str

---

##### `file_path`<sup>Required</sup> <a name="file_path" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.filePath"></a>

```python
file_path: str
```

- *Type:* str

---

##### `http_url`<sup>Required</sup> <a name="http_url" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.httpUrl"></a>

```python
http_url: str
```

- *Type:* str

---

##### `storage_container_url`<sup>Required</sup> <a name="storage_container_url" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.storageContainerUrl"></a>

```python
storage_container_url: str
```

- *Type:* str

---

##### `user_assigned_identity_id`<sup>Required</sup> <a name="user_assigned_identity_id" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.userAssignedIdentityId"></a>

```python
user_assigned_identity_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BatchPoolStartTaskResourceFile]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile">BatchPoolStartTaskResourceFile</a>]

---


### BatchPoolStartTaskUserIdentityAutoUserOutputReference <a name="BatchPoolStartTaskUserIdentityAutoUserOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.resetElevationLevel">reset_elevation_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.resetScope">reset_scope</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_elevation_level` <a name="reset_elevation_level" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.resetElevationLevel"></a>

```python
def reset_elevation_level() -> None
```

##### `reset_scope` <a name="reset_scope" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.resetScope"></a>

```python
def reset_scope() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.property.elevationLevelInput">elevation_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.property.elevationLevel">elevation_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUser">BatchPoolStartTaskUserIdentityAutoUser</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `elevation_level_input`<sup>Optional</sup> <a name="elevation_level_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.property.elevationLevelInput"></a>

```python
elevation_level_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `elevation_level`<sup>Required</sup> <a name="elevation_level" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.property.elevationLevel"></a>

```python
elevation_level: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.property.internalValue"></a>

```python
internal_value: BatchPoolStartTaskUserIdentityAutoUser
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUser">BatchPoolStartTaskUserIdentityAutoUser</a>

---


### BatchPoolStartTaskUserIdentityOutputReference <a name="BatchPoolStartTaskUserIdentityOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolStartTaskUserIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.putAutoUser">put_auto_user</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.resetAutoUser">reset_auto_user</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.resetUserName">reset_user_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_auto_user` <a name="put_auto_user" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.putAutoUser"></a>

```python
def put_auto_user(
  elevation_level: str = None,
  scope: str = None
) -> None
```

###### `elevation_level`<sup>Optional</sup> <a name="elevation_level" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.putAutoUser.parameter.elevationLevel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#elevation_level BatchPool#elevation_level}.

---

###### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.putAutoUser.parameter.scope"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/batch_pool#scope BatchPool#scope}.

---

##### `reset_auto_user` <a name="reset_auto_user" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.resetAutoUser"></a>

```python
def reset_auto_user() -> None
```

##### `reset_user_name` <a name="reset_user_name" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.resetUserName"></a>

```python
def reset_user_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.property.autoUser">auto_user</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference">BatchPoolStartTaskUserIdentityAutoUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.property.autoUserInput">auto_user_input</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUser">BatchPoolStartTaskUserIdentityAutoUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.property.userNameInput">user_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.property.userName">user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentity">BatchPoolStartTaskUserIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_user`<sup>Required</sup> <a name="auto_user" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.property.autoUser"></a>

```python
auto_user: BatchPoolStartTaskUserIdentityAutoUserOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference">BatchPoolStartTaskUserIdentityAutoUserOutputReference</a>

---

##### `auto_user_input`<sup>Optional</sup> <a name="auto_user_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.property.autoUserInput"></a>

```python
auto_user_input: BatchPoolStartTaskUserIdentityAutoUser
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUser">BatchPoolStartTaskUserIdentityAutoUser</a>

---

##### `user_name_input`<sup>Optional</sup> <a name="user_name_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.property.userNameInput"></a>

```python
user_name_input: str
```

- *Type:* str

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.property.internalValue"></a>

```python
internal_value: BatchPoolStartTaskUserIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentity">BatchPoolStartTaskUserIdentity</a>

---


### BatchPoolStorageImageReferenceOutputReference <a name="BatchPoolStorageImageReferenceOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolStorageImageReferenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.resetOffer">reset_offer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.resetPublisher">reset_publisher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.resetSku">reset_sku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_offer` <a name="reset_offer" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.resetOffer"></a>

```python
def reset_offer() -> None
```

##### `reset_publisher` <a name="reset_publisher" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.resetPublisher"></a>

```python
def reset_publisher() -> None
```

##### `reset_sku` <a name="reset_sku" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.resetSku"></a>

```python
def reset_sku() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.offerInput">offer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.publisherInput">publisher_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.skuInput">sku_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.offer">offer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.publisher">publisher</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.sku">sku</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference">BatchPoolStorageImageReference</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `offer_input`<sup>Optional</sup> <a name="offer_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.offerInput"></a>

```python
offer_input: str
```

- *Type:* str

---

##### `publisher_input`<sup>Optional</sup> <a name="publisher_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.publisherInput"></a>

```python
publisher_input: str
```

- *Type:* str

---

##### `sku_input`<sup>Optional</sup> <a name="sku_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.skuInput"></a>

```python
sku_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `offer`<sup>Required</sup> <a name="offer" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.offer"></a>

```python
offer: str
```

- *Type:* str

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.publisher"></a>

```python
publisher: str
```

- *Type:* str

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.sku"></a>

```python
sku: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.internalValue"></a>

```python
internal_value: BatchPoolStorageImageReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference">BatchPoolStorageImageReference</a>

---


### BatchPoolTaskSchedulingPolicyList <a name="BatchPoolTaskSchedulingPolicyList" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolTaskSchedulingPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BatchPoolTaskSchedulingPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicy">BatchPoolTaskSchedulingPolicy</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BatchPoolTaskSchedulingPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicy">BatchPoolTaskSchedulingPolicy</a>]]

---


### BatchPoolTaskSchedulingPolicyOutputReference <a name="BatchPoolTaskSchedulingPolicyOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolTaskSchedulingPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.resetNodeFillType">reset_node_fill_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_node_fill_type` <a name="reset_node_fill_type" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.resetNodeFillType"></a>

```python
def reset_node_fill_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.property.nodeFillTypeInput">node_fill_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.property.nodeFillType">node_fill_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicy">BatchPoolTaskSchedulingPolicy</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `node_fill_type_input`<sup>Optional</sup> <a name="node_fill_type_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.property.nodeFillTypeInput"></a>

```python
node_fill_type_input: str
```

- *Type:* str

---

##### `node_fill_type`<sup>Required</sup> <a name="node_fill_type" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.property.nodeFillType"></a>

```python
node_fill_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BatchPoolTaskSchedulingPolicy]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicy">BatchPoolTaskSchedulingPolicy</a>]

---


### BatchPoolTimeoutsOutputReference <a name="BatchPoolTimeoutsOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeouts">BatchPoolTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BatchPoolTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeouts">BatchPoolTimeouts</a>]

---


### BatchPoolUserAccountsLinuxUserConfigurationList <a name="BatchPoolUserAccountsLinuxUserConfigurationList" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolUserAccountsLinuxUserConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BatchPoolUserAccountsLinuxUserConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfiguration">BatchPoolUserAccountsLinuxUserConfiguration</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BatchPoolUserAccountsLinuxUserConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfiguration">BatchPoolUserAccountsLinuxUserConfiguration</a>]]

---


### BatchPoolUserAccountsLinuxUserConfigurationOutputReference <a name="BatchPoolUserAccountsLinuxUserConfigurationOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.resetGid">reset_gid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.resetSshPrivateKey">reset_ssh_private_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.resetUid">reset_uid</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_gid` <a name="reset_gid" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.resetGid"></a>

```python
def reset_gid() -> None
```

##### `reset_ssh_private_key` <a name="reset_ssh_private_key" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.resetSshPrivateKey"></a>

```python
def reset_ssh_private_key() -> None
```

##### `reset_uid` <a name="reset_uid" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.resetUid"></a>

```python
def reset_uid() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.gidInput">gid_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.sshPrivateKeyInput">ssh_private_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.uidInput">uid_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.gid">gid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.sshPrivateKey">ssh_private_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.uid">uid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfiguration">BatchPoolUserAccountsLinuxUserConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gid_input`<sup>Optional</sup> <a name="gid_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.gidInput"></a>

```python
gid_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ssh_private_key_input`<sup>Optional</sup> <a name="ssh_private_key_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.sshPrivateKeyInput"></a>

```python
ssh_private_key_input: str
```

- *Type:* str

---

##### `uid_input`<sup>Optional</sup> <a name="uid_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.uidInput"></a>

```python
uid_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `gid`<sup>Required</sup> <a name="gid" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.gid"></a>

```python
gid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ssh_private_key`<sup>Required</sup> <a name="ssh_private_key" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.sshPrivateKey"></a>

```python
ssh_private_key: str
```

- *Type:* str

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.uid"></a>

```python
uid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BatchPoolUserAccountsLinuxUserConfiguration]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfiguration">BatchPoolUserAccountsLinuxUserConfiguration</a>]

---


### BatchPoolUserAccountsList <a name="BatchPoolUserAccountsList" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolUserAccountsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BatchPoolUserAccountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts">BatchPoolUserAccounts</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BatchPoolUserAccounts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts">BatchPoolUserAccounts</a>]]

---


### BatchPoolUserAccountsOutputReference <a name="BatchPoolUserAccountsOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolUserAccountsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.putLinuxUserConfiguration">put_linux_user_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.putWindowsUserConfiguration">put_windows_user_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.resetLinuxUserConfiguration">reset_linux_user_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.resetWindowsUserConfiguration">reset_windows_user_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_linux_user_configuration` <a name="put_linux_user_configuration" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.putLinuxUserConfiguration"></a>

```python
def put_linux_user_configuration(
  value: typing.Union[IResolvable, typing.List[BatchPoolUserAccountsLinuxUserConfiguration]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.putLinuxUserConfiguration.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfiguration">BatchPoolUserAccountsLinuxUserConfiguration</a>]]

---

##### `put_windows_user_configuration` <a name="put_windows_user_configuration" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.putWindowsUserConfiguration"></a>

```python
def put_windows_user_configuration(
  value: typing.Union[IResolvable, typing.List[BatchPoolUserAccountsWindowsUserConfiguration]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.putWindowsUserConfiguration.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfiguration">BatchPoolUserAccountsWindowsUserConfiguration</a>]]

---

##### `reset_linux_user_configuration` <a name="reset_linux_user_configuration" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.resetLinuxUserConfiguration"></a>

```python
def reset_linux_user_configuration() -> None
```

##### `reset_windows_user_configuration` <a name="reset_windows_user_configuration" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.resetWindowsUserConfiguration"></a>

```python
def reset_windows_user_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.linuxUserConfiguration">linux_user_configuration</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList">BatchPoolUserAccountsLinuxUserConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.windowsUserConfiguration">windows_user_configuration</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList">BatchPoolUserAccountsWindowsUserConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.elevationLevelInput">elevation_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.linuxUserConfigurationInput">linux_user_configuration_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfiguration">BatchPoolUserAccountsLinuxUserConfiguration</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.windowsUserConfigurationInput">windows_user_configuration_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfiguration">BatchPoolUserAccountsWindowsUserConfiguration</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.elevationLevel">elevation_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts">BatchPoolUserAccounts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `linux_user_configuration`<sup>Required</sup> <a name="linux_user_configuration" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.linuxUserConfiguration"></a>

```python
linux_user_configuration: BatchPoolUserAccountsLinuxUserConfigurationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList">BatchPoolUserAccountsLinuxUserConfigurationList</a>

---

##### `windows_user_configuration`<sup>Required</sup> <a name="windows_user_configuration" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.windowsUserConfiguration"></a>

```python
windows_user_configuration: BatchPoolUserAccountsWindowsUserConfigurationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList">BatchPoolUserAccountsWindowsUserConfigurationList</a>

---

##### `elevation_level_input`<sup>Optional</sup> <a name="elevation_level_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.elevationLevelInput"></a>

```python
elevation_level_input: str
```

- *Type:* str

---

##### `linux_user_configuration_input`<sup>Optional</sup> <a name="linux_user_configuration_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.linuxUserConfigurationInput"></a>

```python
linux_user_configuration_input: typing.Union[IResolvable, typing.List[BatchPoolUserAccountsLinuxUserConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfiguration">BatchPoolUserAccountsLinuxUserConfiguration</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `windows_user_configuration_input`<sup>Optional</sup> <a name="windows_user_configuration_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.windowsUserConfigurationInput"></a>

```python
windows_user_configuration_input: typing.Union[IResolvable, typing.List[BatchPoolUserAccountsWindowsUserConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfiguration">BatchPoolUserAccountsWindowsUserConfiguration</a>]]

---

##### `elevation_level`<sup>Required</sup> <a name="elevation_level" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.elevationLevel"></a>

```python
elevation_level: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BatchPoolUserAccounts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts">BatchPoolUserAccounts</a>]

---


### BatchPoolUserAccountsWindowsUserConfigurationList <a name="BatchPoolUserAccountsWindowsUserConfigurationList" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolUserAccountsWindowsUserConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BatchPoolUserAccountsWindowsUserConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfiguration">BatchPoolUserAccountsWindowsUserConfiguration</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BatchPoolUserAccountsWindowsUserConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfiguration">BatchPoolUserAccountsWindowsUserConfiguration</a>]]

---


### BatchPoolUserAccountsWindowsUserConfigurationOutputReference <a name="BatchPoolUserAccountsWindowsUserConfigurationOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.property.loginModeInput">login_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.property.loginMode">login_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfiguration">BatchPoolUserAccountsWindowsUserConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `login_mode_input`<sup>Optional</sup> <a name="login_mode_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.property.loginModeInput"></a>

```python
login_mode_input: str
```

- *Type:* str

---

##### `login_mode`<sup>Required</sup> <a name="login_mode" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.property.loginMode"></a>

```python
login_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BatchPoolUserAccountsWindowsUserConfiguration]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfiguration">BatchPoolUserAccountsWindowsUserConfiguration</a>]

---


### BatchPoolWindowsList <a name="BatchPoolWindowsList" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolWindowsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BatchPoolWindowsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindows">BatchPoolWindows</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BatchPoolWindows]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindows">BatchPoolWindows</a>]]

---


### BatchPoolWindowsOutputReference <a name="BatchPoolWindowsOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_pool

batchPool.BatchPoolWindowsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.resetEnableAutomaticUpdates">reset_enable_automatic_updates</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_automatic_updates` <a name="reset_enable_automatic_updates" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.resetEnableAutomaticUpdates"></a>

```python
def reset_enable_automatic_updates() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.property.enableAutomaticUpdatesInput">enable_automatic_updates_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.property.enableAutomaticUpdates">enable_automatic_updates</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindows">BatchPoolWindows</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_automatic_updates_input`<sup>Optional</sup> <a name="enable_automatic_updates_input" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.property.enableAutomaticUpdatesInput"></a>

```python
enable_automatic_updates_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_automatic_updates`<sup>Required</sup> <a name="enable_automatic_updates" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.property.enableAutomaticUpdates"></a>

```python
enable_automatic_updates: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BatchPoolWindows]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindows">BatchPoolWindows</a>]

---



