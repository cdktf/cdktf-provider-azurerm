# `batchPool` Submodule <a name="`batchPool` Submodule" id="@cdktf/provider-azurerm.batchPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BatchPool <a name="BatchPool" id="@cdktf/provider-azurerm.batchPool.BatchPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool azurerm_batch_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPool;

BatchPool.Builder.create(Construct scope, java.lang.String id)
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
    .accountName(java.lang.String)
    .name(java.lang.String)
    .nodeAgentSkuId(java.lang.String)
    .resourceGroupName(java.lang.String)
    .storageImageReference(BatchPoolStorageImageReference)
    .vmSize(java.lang.String)
//  .autoScale(BatchPoolAutoScale)
//  .certificate(IResolvable)
//  .certificate(java.util.List<BatchPoolCertificate>)
//  .containerConfiguration(BatchPoolContainerConfiguration)
//  .dataDisks(IResolvable)
//  .dataDisks(java.util.List<BatchPoolDataDisks>)
//  .diskEncryption(IResolvable)
//  .diskEncryption(java.util.List<BatchPoolDiskEncryption>)
//  .displayName(java.lang.String)
//  .extensions(IResolvable)
//  .extensions(java.util.List<BatchPoolExtensions>)
//  .fixedScale(BatchPoolFixedScale)
//  .id(java.lang.String)
//  .identity(BatchPoolIdentity)
//  .interNodeCommunication(java.lang.String)
//  .licenseType(java.lang.String)
//  .maxTasksPerNode(java.lang.Number)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
//  .mount(IResolvable)
//  .mount(java.util.List<BatchPoolMount>)
//  .networkConfiguration(BatchPoolNetworkConfiguration)
//  .nodePlacement(IResolvable)
//  .nodePlacement(java.util.List<BatchPoolNodePlacement>)
//  .osDiskPlacement(java.lang.String)
//  .startTask(BatchPoolStartTask)
//  .stopPendingResizeOperation(java.lang.Boolean)
//  .stopPendingResizeOperation(IResolvable)
//  .targetNodeCommunicationMode(java.lang.String)
//  .taskSchedulingPolicy(IResolvable)
//  .taskSchedulingPolicy(java.util.List<BatchPoolTaskSchedulingPolicy>)
//  .timeouts(BatchPoolTimeouts)
//  .userAccounts(IResolvable)
//  .userAccounts(java.util.List<BatchPoolUserAccounts>)
//  .windows(IResolvable)
//  .windows(java.util.List<BatchPoolWindows>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.accountName">accountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#account_name BatchPool#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#name BatchPool#name}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.nodeAgentSkuId">nodeAgentSkuId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#node_agent_sku_id BatchPool#node_agent_sku_id}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#resource_group_name BatchPool#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.storageImageReference">storageImageReference</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference">BatchPoolStorageImageReference</a></code> | storage_image_reference block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.vmSize">vmSize</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#vm_size BatchPool#vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.autoScale">autoScale</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScale">BatchPoolAutoScale</a></code> | auto_scale block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.certificate">certificate</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificate">BatchPoolCertificate</a>></code> | certificate block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.containerConfiguration">containerConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfiguration">BatchPoolContainerConfiguration</a></code> | container_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.dataDisks">dataDisks</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisks">BatchPoolDataDisks</a>></code> | data_disks block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.diskEncryption">diskEncryption</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryption">BatchPoolDiskEncryption</a>></code> | disk_encryption block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#display_name BatchPool#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.extensions">extensions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensions">BatchPoolExtensions</a>></code> | extensions block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.fixedScale">fixedScale</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScale">BatchPoolFixedScale</a></code> | fixed_scale block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#id BatchPool#id}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentity">BatchPoolIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.interNodeCommunication">interNodeCommunication</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#inter_node_communication BatchPool#inter_node_communication}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.licenseType">licenseType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#license_type BatchPool#license_type}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.maxTasksPerNode">maxTasksPerNode</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#max_tasks_per_node BatchPool#max_tasks_per_node}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#metadata BatchPool#metadata}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.mount">mount</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMount">BatchPoolMount</a>></code> | mount block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration">BatchPoolNetworkConfiguration</a></code> | network_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.nodePlacement">nodePlacement</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacement">BatchPoolNodePlacement</a>></code> | node_placement block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.osDiskPlacement">osDiskPlacement</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#os_disk_placement BatchPool#os_disk_placement}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.startTask">startTask</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTask">BatchPoolStartTask</a></code> | start_task block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.stopPendingResizeOperation">stopPendingResizeOperation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#stop_pending_resize_operation BatchPool#stop_pending_resize_operation}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.targetNodeCommunicationMode">targetNodeCommunicationMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#target_node_communication_mode BatchPool#target_node_communication_mode}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.taskSchedulingPolicy">taskSchedulingPolicy</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicy">BatchPoolTaskSchedulingPolicy</a>></code> | task_scheduling_policy block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeouts">BatchPoolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.userAccounts">userAccounts</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts">BatchPoolUserAccounts</a>></code> | user_accounts block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.windows">windows</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindows">BatchPoolWindows</a>></code> | windows block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.accountName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#account_name BatchPool#account_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#name BatchPool#name}.

---

##### `nodeAgentSkuId`<sup>Required</sup> <a name="nodeAgentSkuId" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.nodeAgentSkuId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#node_agent_sku_id BatchPool#node_agent_sku_id}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#resource_group_name BatchPool#resource_group_name}.

---

##### `storageImageReference`<sup>Required</sup> <a name="storageImageReference" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.storageImageReference"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference">BatchPoolStorageImageReference</a>

storage_image_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#storage_image_reference BatchPool#storage_image_reference}

---

##### `vmSize`<sup>Required</sup> <a name="vmSize" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.vmSize"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#vm_size BatchPool#vm_size}.

---

##### `autoScale`<sup>Optional</sup> <a name="autoScale" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.autoScale"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScale">BatchPoolAutoScale</a>

auto_scale block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#auto_scale BatchPool#auto_scale}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.certificate"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificate">BatchPoolCertificate</a>>

certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#certificate BatchPool#certificate}

---

##### `containerConfiguration`<sup>Optional</sup> <a name="containerConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.containerConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfiguration">BatchPoolContainerConfiguration</a>

container_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#container_configuration BatchPool#container_configuration}

---

##### `dataDisks`<sup>Optional</sup> <a name="dataDisks" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.dataDisks"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisks">BatchPoolDataDisks</a>>

data_disks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#data_disks BatchPool#data_disks}

---

##### `diskEncryption`<sup>Optional</sup> <a name="diskEncryption" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.diskEncryption"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryption">BatchPoolDiskEncryption</a>>

disk_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#disk_encryption BatchPool#disk_encryption}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#display_name BatchPool#display_name}.

---

##### `extensions`<sup>Optional</sup> <a name="extensions" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.extensions"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensions">BatchPoolExtensions</a>>

extensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#extensions BatchPool#extensions}

---

##### `fixedScale`<sup>Optional</sup> <a name="fixedScale" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.fixedScale"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScale">BatchPoolFixedScale</a>

fixed_scale block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#fixed_scale BatchPool#fixed_scale}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#id BatchPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentity">BatchPoolIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#identity BatchPool#identity}

---

##### `interNodeCommunication`<sup>Optional</sup> <a name="interNodeCommunication" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.interNodeCommunication"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#inter_node_communication BatchPool#inter_node_communication}.

---

##### `licenseType`<sup>Optional</sup> <a name="licenseType" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.licenseType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#license_type BatchPool#license_type}.

---

##### `maxTasksPerNode`<sup>Optional</sup> <a name="maxTasksPerNode" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.maxTasksPerNode"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#max_tasks_per_node BatchPool#max_tasks_per_node}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.metadata"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#metadata BatchPool#metadata}.

---

##### `mount`<sup>Optional</sup> <a name="mount" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.mount"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMount">BatchPoolMount</a>>

mount block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#mount BatchPool#mount}

---

##### `networkConfiguration`<sup>Optional</sup> <a name="networkConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.networkConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration">BatchPoolNetworkConfiguration</a>

network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#network_configuration BatchPool#network_configuration}

---

##### `nodePlacement`<sup>Optional</sup> <a name="nodePlacement" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.nodePlacement"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacement">BatchPoolNodePlacement</a>>

node_placement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#node_placement BatchPool#node_placement}

---

##### `osDiskPlacement`<sup>Optional</sup> <a name="osDiskPlacement" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.osDiskPlacement"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#os_disk_placement BatchPool#os_disk_placement}.

---

##### `startTask`<sup>Optional</sup> <a name="startTask" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.startTask"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTask">BatchPoolStartTask</a>

start_task block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#start_task BatchPool#start_task}

---

##### `stopPendingResizeOperation`<sup>Optional</sup> <a name="stopPendingResizeOperation" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.stopPendingResizeOperation"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#stop_pending_resize_operation BatchPool#stop_pending_resize_operation}.

---

##### `targetNodeCommunicationMode`<sup>Optional</sup> <a name="targetNodeCommunicationMode" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.targetNodeCommunicationMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#target_node_communication_mode BatchPool#target_node_communication_mode}.

---

##### `taskSchedulingPolicy`<sup>Optional</sup> <a name="taskSchedulingPolicy" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.taskSchedulingPolicy"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicy">BatchPoolTaskSchedulingPolicy</a>>

task_scheduling_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#task_scheduling_policy BatchPool#task_scheduling_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeouts">BatchPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#timeouts BatchPool#timeouts}

---

##### `userAccounts`<sup>Optional</sup> <a name="userAccounts" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.userAccounts"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts">BatchPoolUserAccounts</a>>

user_accounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#user_accounts BatchPool#user_accounts}

---

##### `windows`<sup>Optional</sup> <a name="windows" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.windows"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindows">BatchPoolWindows</a>>

windows block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#windows BatchPool#windows}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.putAutoScale">putAutoScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.putCertificate">putCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.putContainerConfiguration">putContainerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.putDataDisks">putDataDisks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.putDiskEncryption">putDiskEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.putExtensions">putExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.putFixedScale">putFixedScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.putMount">putMount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.putNetworkConfiguration">putNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.putNodePlacement">putNodePlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.putStartTask">putStartTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.putStorageImageReference">putStorageImageReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.putTaskSchedulingPolicy">putTaskSchedulingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.putUserAccounts">putUserAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.putWindows">putWindows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetAutoScale">resetAutoScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetContainerConfiguration">resetContainerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetDataDisks">resetDataDisks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetDiskEncryption">resetDiskEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetExtensions">resetExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetFixedScale">resetFixedScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetInterNodeCommunication">resetInterNodeCommunication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetLicenseType">resetLicenseType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetMaxTasksPerNode">resetMaxTasksPerNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetMount">resetMount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetNetworkConfiguration">resetNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetNodePlacement">resetNodePlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetOsDiskPlacement">resetOsDiskPlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetStartTask">resetStartTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetStopPendingResizeOperation">resetStopPendingResizeOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetTargetNodeCommunicationMode">resetTargetNodeCommunicationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetTaskSchedulingPolicy">resetTaskSchedulingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetUserAccounts">resetUserAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetWindows">resetWindows</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPool.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.batchPool.BatchPool.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.batchPool.BatchPool.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPool.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.batchPool.BatchPool.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.batchPool.BatchPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.batchPool.BatchPool.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.batchPool.BatchPool.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.batchPool.BatchPool.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.batchPool.BatchPool.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.batchPool.BatchPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.batchPool.BatchPool.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.batchPool.BatchPool.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.batchPool.BatchPool.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.batchPool.BatchPool.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.batchPool.BatchPool.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.batchPool.BatchPool.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.batchPool.BatchPool.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.batchPool.BatchPool.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.batchPool.BatchPool.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.batchPool.BatchPool.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.batchPool.BatchPool.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAutoScale` <a name="putAutoScale" id="@cdktf/provider-azurerm.batchPool.BatchPool.putAutoScale"></a>

```java
public void putAutoScale(BatchPoolAutoScale value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPool.putAutoScale.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScale">BatchPoolAutoScale</a>

---

##### `putCertificate` <a name="putCertificate" id="@cdktf/provider-azurerm.batchPool.BatchPool.putCertificate"></a>

```java
public void putCertificate(IResolvable OR java.util.List<BatchPoolCertificate> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPool.putCertificate.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificate">BatchPoolCertificate</a>>

---

##### `putContainerConfiguration` <a name="putContainerConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPool.putContainerConfiguration"></a>

```java
public void putContainerConfiguration(BatchPoolContainerConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPool.putContainerConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfiguration">BatchPoolContainerConfiguration</a>

---

##### `putDataDisks` <a name="putDataDisks" id="@cdktf/provider-azurerm.batchPool.BatchPool.putDataDisks"></a>

```java
public void putDataDisks(IResolvable OR java.util.List<BatchPoolDataDisks> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPool.putDataDisks.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisks">BatchPoolDataDisks</a>>

---

##### `putDiskEncryption` <a name="putDiskEncryption" id="@cdktf/provider-azurerm.batchPool.BatchPool.putDiskEncryption"></a>

```java
public void putDiskEncryption(IResolvable OR java.util.List<BatchPoolDiskEncryption> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPool.putDiskEncryption.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryption">BatchPoolDiskEncryption</a>>

---

##### `putExtensions` <a name="putExtensions" id="@cdktf/provider-azurerm.batchPool.BatchPool.putExtensions"></a>

```java
public void putExtensions(IResolvable OR java.util.List<BatchPoolExtensions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPool.putExtensions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensions">BatchPoolExtensions</a>>

---

##### `putFixedScale` <a name="putFixedScale" id="@cdktf/provider-azurerm.batchPool.BatchPool.putFixedScale"></a>

```java
public void putFixedScale(BatchPoolFixedScale value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPool.putFixedScale.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScale">BatchPoolFixedScale</a>

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.batchPool.BatchPool.putIdentity"></a>

```java
public void putIdentity(BatchPoolIdentity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPool.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentity">BatchPoolIdentity</a>

---

##### `putMount` <a name="putMount" id="@cdktf/provider-azurerm.batchPool.BatchPool.putMount"></a>

```java
public void putMount(IResolvable OR java.util.List<BatchPoolMount> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPool.putMount.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMount">BatchPoolMount</a>>

---

##### `putNetworkConfiguration` <a name="putNetworkConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPool.putNetworkConfiguration"></a>

```java
public void putNetworkConfiguration(BatchPoolNetworkConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPool.putNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration">BatchPoolNetworkConfiguration</a>

---

##### `putNodePlacement` <a name="putNodePlacement" id="@cdktf/provider-azurerm.batchPool.BatchPool.putNodePlacement"></a>

```java
public void putNodePlacement(IResolvable OR java.util.List<BatchPoolNodePlacement> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPool.putNodePlacement.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacement">BatchPoolNodePlacement</a>>

---

##### `putStartTask` <a name="putStartTask" id="@cdktf/provider-azurerm.batchPool.BatchPool.putStartTask"></a>

```java
public void putStartTask(BatchPoolStartTask value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPool.putStartTask.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTask">BatchPoolStartTask</a>

---

##### `putStorageImageReference` <a name="putStorageImageReference" id="@cdktf/provider-azurerm.batchPool.BatchPool.putStorageImageReference"></a>

```java
public void putStorageImageReference(BatchPoolStorageImageReference value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPool.putStorageImageReference.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference">BatchPoolStorageImageReference</a>

---

##### `putTaskSchedulingPolicy` <a name="putTaskSchedulingPolicy" id="@cdktf/provider-azurerm.batchPool.BatchPool.putTaskSchedulingPolicy"></a>

```java
public void putTaskSchedulingPolicy(IResolvable OR java.util.List<BatchPoolTaskSchedulingPolicy> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPool.putTaskSchedulingPolicy.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicy">BatchPoolTaskSchedulingPolicy</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.batchPool.BatchPool.putTimeouts"></a>

```java
public void putTimeouts(BatchPoolTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeouts">BatchPoolTimeouts</a>

---

##### `putUserAccounts` <a name="putUserAccounts" id="@cdktf/provider-azurerm.batchPool.BatchPool.putUserAccounts"></a>

```java
public void putUserAccounts(IResolvable OR java.util.List<BatchPoolUserAccounts> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPool.putUserAccounts.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts">BatchPoolUserAccounts</a>>

---

##### `putWindows` <a name="putWindows" id="@cdktf/provider-azurerm.batchPool.BatchPool.putWindows"></a>

```java
public void putWindows(IResolvable OR java.util.List<BatchPoolWindows> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPool.putWindows.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindows">BatchPoolWindows</a>>

---

##### `resetAutoScale` <a name="resetAutoScale" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetAutoScale"></a>

```java
public void resetAutoScale()
```

##### `resetCertificate` <a name="resetCertificate" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetCertificate"></a>

```java
public void resetCertificate()
```

##### `resetContainerConfiguration` <a name="resetContainerConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetContainerConfiguration"></a>

```java
public void resetContainerConfiguration()
```

##### `resetDataDisks` <a name="resetDataDisks" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetDataDisks"></a>

```java
public void resetDataDisks()
```

##### `resetDiskEncryption` <a name="resetDiskEncryption" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetDiskEncryption"></a>

```java
public void resetDiskEncryption()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetExtensions` <a name="resetExtensions" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetExtensions"></a>

```java
public void resetExtensions()
```

##### `resetFixedScale` <a name="resetFixedScale" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetFixedScale"></a>

```java
public void resetFixedScale()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetId"></a>

```java
public void resetId()
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetIdentity"></a>

```java
public void resetIdentity()
```

##### `resetInterNodeCommunication` <a name="resetInterNodeCommunication" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetInterNodeCommunication"></a>

```java
public void resetInterNodeCommunication()
```

##### `resetLicenseType` <a name="resetLicenseType" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetLicenseType"></a>

```java
public void resetLicenseType()
```

##### `resetMaxTasksPerNode` <a name="resetMaxTasksPerNode" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetMaxTasksPerNode"></a>

```java
public void resetMaxTasksPerNode()
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetMetadata"></a>

```java
public void resetMetadata()
```

##### `resetMount` <a name="resetMount" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetMount"></a>

```java
public void resetMount()
```

##### `resetNetworkConfiguration` <a name="resetNetworkConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetNetworkConfiguration"></a>

```java
public void resetNetworkConfiguration()
```

##### `resetNodePlacement` <a name="resetNodePlacement" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetNodePlacement"></a>

```java
public void resetNodePlacement()
```

##### `resetOsDiskPlacement` <a name="resetOsDiskPlacement" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetOsDiskPlacement"></a>

```java
public void resetOsDiskPlacement()
```

##### `resetStartTask` <a name="resetStartTask" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetStartTask"></a>

```java
public void resetStartTask()
```

##### `resetStopPendingResizeOperation` <a name="resetStopPendingResizeOperation" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetStopPendingResizeOperation"></a>

```java
public void resetStopPendingResizeOperation()
```

##### `resetTargetNodeCommunicationMode` <a name="resetTargetNodeCommunicationMode" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetTargetNodeCommunicationMode"></a>

```java
public void resetTargetNodeCommunicationMode()
```

##### `resetTaskSchedulingPolicy` <a name="resetTaskSchedulingPolicy" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetTaskSchedulingPolicy"></a>

```java
public void resetTaskSchedulingPolicy()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUserAccounts` <a name="resetUserAccounts" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetUserAccounts"></a>

```java
public void resetUserAccounts()
```

##### `resetWindows` <a name="resetWindows" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetWindows"></a>

```java
public void resetWindows()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BatchPool resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.batchPool.BatchPool.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPool;

BatchPool.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.batchPool.BatchPool.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPool;

BatchPool.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.batchPool.BatchPool.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPool.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPool;

BatchPool.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.batchPool.BatchPool.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.batchPool.BatchPool.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPool;

BatchPool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BatchPool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a BatchPool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.batchPool.BatchPool.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.batchPool.BatchPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BatchPool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.batchPool.BatchPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BatchPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.batchPool.BatchPool.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the BatchPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.autoScale">autoScale</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference">BatchPoolAutoScaleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.certificate">certificate</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList">BatchPoolCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.containerConfiguration">containerConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference">BatchPoolContainerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.dataDisks">dataDisks</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList">BatchPoolDataDisksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.diskEncryption">diskEncryption</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList">BatchPoolDiskEncryptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.extensions">extensions</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList">BatchPoolExtensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.fixedScale">fixedScale</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference">BatchPoolFixedScaleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference">BatchPoolIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.mount">mount</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountList">BatchPoolMountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference">BatchPoolNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.nodePlacement">nodePlacement</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList">BatchPoolNodePlacementList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.startTask">startTask</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference">BatchPoolStartTaskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.storageImageReference">storageImageReference</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference">BatchPoolStorageImageReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.taskSchedulingPolicy">taskSchedulingPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList">BatchPoolTaskSchedulingPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference">BatchPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.userAccounts">userAccounts</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList">BatchPoolUserAccountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.windows">windows</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList">BatchPoolWindowsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.accountNameInput">accountNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.autoScaleInput">autoScaleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScale">BatchPoolAutoScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.certificateInput">certificateInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificate">BatchPoolCertificate</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.containerConfigurationInput">containerConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfiguration">BatchPoolContainerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.dataDisksInput">dataDisksInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisks">BatchPoolDataDisks</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.diskEncryptionInput">diskEncryptionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryption">BatchPoolDiskEncryption</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.extensionsInput">extensionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensions">BatchPoolExtensions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.fixedScaleInput">fixedScaleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScale">BatchPoolFixedScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentity">BatchPoolIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.interNodeCommunicationInput">interNodeCommunicationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.licenseTypeInput">licenseTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.maxTasksPerNodeInput">maxTasksPerNodeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.metadataInput">metadataInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.mountInput">mountInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMount">BatchPoolMount</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.networkConfigurationInput">networkConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration">BatchPoolNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.nodeAgentSkuIdInput">nodeAgentSkuIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.nodePlacementInput">nodePlacementInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacement">BatchPoolNodePlacement</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.osDiskPlacementInput">osDiskPlacementInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.startTaskInput">startTaskInput</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTask">BatchPoolStartTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.stopPendingResizeOperationInput">stopPendingResizeOperationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.storageImageReferenceInput">storageImageReferenceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference">BatchPoolStorageImageReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.targetNodeCommunicationModeInput">targetNodeCommunicationModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.taskSchedulingPolicyInput">taskSchedulingPolicyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicy">BatchPoolTaskSchedulingPolicy</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeouts">BatchPoolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.userAccountsInput">userAccountsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts">BatchPoolUserAccounts</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.vmSizeInput">vmSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.windowsInput">windowsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindows">BatchPoolWindows</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.accountName">accountName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.interNodeCommunication">interNodeCommunication</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.licenseType">licenseType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.maxTasksPerNode">maxTasksPerNode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.nodeAgentSkuId">nodeAgentSkuId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.osDiskPlacement">osDiskPlacement</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.stopPendingResizeOperation">stopPendingResizeOperation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.targetNodeCommunicationMode">targetNodeCommunicationMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.vmSize">vmSize</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `autoScale`<sup>Required</sup> <a name="autoScale" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.autoScale"></a>

```java
public BatchPoolAutoScaleOutputReference getAutoScale();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference">BatchPoolAutoScaleOutputReference</a>

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.certificate"></a>

```java
public BatchPoolCertificateList getCertificate();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList">BatchPoolCertificateList</a>

---

##### `containerConfiguration`<sup>Required</sup> <a name="containerConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.containerConfiguration"></a>

```java
public BatchPoolContainerConfigurationOutputReference getContainerConfiguration();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference">BatchPoolContainerConfigurationOutputReference</a>

---

##### `dataDisks`<sup>Required</sup> <a name="dataDisks" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.dataDisks"></a>

```java
public BatchPoolDataDisksList getDataDisks();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList">BatchPoolDataDisksList</a>

---

##### `diskEncryption`<sup>Required</sup> <a name="diskEncryption" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.diskEncryption"></a>

```java
public BatchPoolDiskEncryptionList getDiskEncryption();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList">BatchPoolDiskEncryptionList</a>

---

##### `extensions`<sup>Required</sup> <a name="extensions" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.extensions"></a>

```java
public BatchPoolExtensionsList getExtensions();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList">BatchPoolExtensionsList</a>

---

##### `fixedScale`<sup>Required</sup> <a name="fixedScale" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.fixedScale"></a>

```java
public BatchPoolFixedScaleOutputReference getFixedScale();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference">BatchPoolFixedScaleOutputReference</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.identity"></a>

```java
public BatchPoolIdentityOutputReference getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference">BatchPoolIdentityOutputReference</a>

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.mount"></a>

```java
public BatchPoolMountList getMount();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountList">BatchPoolMountList</a>

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.networkConfiguration"></a>

```java
public BatchPoolNetworkConfigurationOutputReference getNetworkConfiguration();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference">BatchPoolNetworkConfigurationOutputReference</a>

---

##### `nodePlacement`<sup>Required</sup> <a name="nodePlacement" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.nodePlacement"></a>

```java
public BatchPoolNodePlacementList getNodePlacement();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList">BatchPoolNodePlacementList</a>

---

##### `startTask`<sup>Required</sup> <a name="startTask" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.startTask"></a>

```java
public BatchPoolStartTaskOutputReference getStartTask();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference">BatchPoolStartTaskOutputReference</a>

---

##### `storageImageReference`<sup>Required</sup> <a name="storageImageReference" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.storageImageReference"></a>

```java
public BatchPoolStorageImageReferenceOutputReference getStorageImageReference();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference">BatchPoolStorageImageReferenceOutputReference</a>

---

##### `taskSchedulingPolicy`<sup>Required</sup> <a name="taskSchedulingPolicy" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.taskSchedulingPolicy"></a>

```java
public BatchPoolTaskSchedulingPolicyList getTaskSchedulingPolicy();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList">BatchPoolTaskSchedulingPolicyList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.timeouts"></a>

```java
public BatchPoolTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference">BatchPoolTimeoutsOutputReference</a>

---

##### `userAccounts`<sup>Required</sup> <a name="userAccounts" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.userAccounts"></a>

```java
public BatchPoolUserAccountsList getUserAccounts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList">BatchPoolUserAccountsList</a>

---

##### `windows`<sup>Required</sup> <a name="windows" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.windows"></a>

```java
public BatchPoolWindowsList getWindows();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList">BatchPoolWindowsList</a>

---

##### `accountNameInput`<sup>Optional</sup> <a name="accountNameInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.accountNameInput"></a>

```java
public java.lang.String getAccountNameInput();
```

- *Type:* java.lang.String

---

##### `autoScaleInput`<sup>Optional</sup> <a name="autoScaleInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.autoScaleInput"></a>

```java
public BatchPoolAutoScale getAutoScaleInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScale">BatchPoolAutoScale</a>

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.certificateInput"></a>

```java
public java.lang.Object getCertificateInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificate">BatchPoolCertificate</a>>

---

##### `containerConfigurationInput`<sup>Optional</sup> <a name="containerConfigurationInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.containerConfigurationInput"></a>

```java
public BatchPoolContainerConfiguration getContainerConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfiguration">BatchPoolContainerConfiguration</a>

---

##### `dataDisksInput`<sup>Optional</sup> <a name="dataDisksInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.dataDisksInput"></a>

```java
public java.lang.Object getDataDisksInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisks">BatchPoolDataDisks</a>>

---

##### `diskEncryptionInput`<sup>Optional</sup> <a name="diskEncryptionInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.diskEncryptionInput"></a>

```java
public java.lang.Object getDiskEncryptionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryption">BatchPoolDiskEncryption</a>>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `extensionsInput`<sup>Optional</sup> <a name="extensionsInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.extensionsInput"></a>

```java
public java.lang.Object getExtensionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensions">BatchPoolExtensions</a>>

---

##### `fixedScaleInput`<sup>Optional</sup> <a name="fixedScaleInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.fixedScaleInput"></a>

```java
public BatchPoolFixedScale getFixedScaleInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScale">BatchPoolFixedScale</a>

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.identityInput"></a>

```java
public BatchPoolIdentity getIdentityInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentity">BatchPoolIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `interNodeCommunicationInput`<sup>Optional</sup> <a name="interNodeCommunicationInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.interNodeCommunicationInput"></a>

```java
public java.lang.String getInterNodeCommunicationInput();
```

- *Type:* java.lang.String

---

##### `licenseTypeInput`<sup>Optional</sup> <a name="licenseTypeInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.licenseTypeInput"></a>

```java
public java.lang.String getLicenseTypeInput();
```

- *Type:* java.lang.String

---

##### `maxTasksPerNodeInput`<sup>Optional</sup> <a name="maxTasksPerNodeInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.maxTasksPerNodeInput"></a>

```java
public java.lang.Number getMaxTasksPerNodeInput();
```

- *Type:* java.lang.Number

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.metadataInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadataInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.mountInput"></a>

```java
public java.lang.Object getMountInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMount">BatchPoolMount</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkConfigurationInput`<sup>Optional</sup> <a name="networkConfigurationInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.networkConfigurationInput"></a>

```java
public BatchPoolNetworkConfiguration getNetworkConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration">BatchPoolNetworkConfiguration</a>

---

##### `nodeAgentSkuIdInput`<sup>Optional</sup> <a name="nodeAgentSkuIdInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.nodeAgentSkuIdInput"></a>

```java
public java.lang.String getNodeAgentSkuIdInput();
```

- *Type:* java.lang.String

---

##### `nodePlacementInput`<sup>Optional</sup> <a name="nodePlacementInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.nodePlacementInput"></a>

```java
public java.lang.Object getNodePlacementInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacement">BatchPoolNodePlacement</a>>

---

##### `osDiskPlacementInput`<sup>Optional</sup> <a name="osDiskPlacementInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.osDiskPlacementInput"></a>

```java
public java.lang.String getOsDiskPlacementInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `startTaskInput`<sup>Optional</sup> <a name="startTaskInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.startTaskInput"></a>

```java
public BatchPoolStartTask getStartTaskInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTask">BatchPoolStartTask</a>

---

##### `stopPendingResizeOperationInput`<sup>Optional</sup> <a name="stopPendingResizeOperationInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.stopPendingResizeOperationInput"></a>

```java
public java.lang.Object getStopPendingResizeOperationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `storageImageReferenceInput`<sup>Optional</sup> <a name="storageImageReferenceInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.storageImageReferenceInput"></a>

```java
public BatchPoolStorageImageReference getStorageImageReferenceInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference">BatchPoolStorageImageReference</a>

---

##### `targetNodeCommunicationModeInput`<sup>Optional</sup> <a name="targetNodeCommunicationModeInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.targetNodeCommunicationModeInput"></a>

```java
public java.lang.String getTargetNodeCommunicationModeInput();
```

- *Type:* java.lang.String

---

##### `taskSchedulingPolicyInput`<sup>Optional</sup> <a name="taskSchedulingPolicyInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.taskSchedulingPolicyInput"></a>

```java
public java.lang.Object getTaskSchedulingPolicyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicy">BatchPoolTaskSchedulingPolicy</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeouts">BatchPoolTimeouts</a>

---

##### `userAccountsInput`<sup>Optional</sup> <a name="userAccountsInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.userAccountsInput"></a>

```java
public java.lang.Object getUserAccountsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts">BatchPoolUserAccounts</a>>

---

##### `vmSizeInput`<sup>Optional</sup> <a name="vmSizeInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.vmSizeInput"></a>

```java
public java.lang.String getVmSizeInput();
```

- *Type:* java.lang.String

---

##### `windowsInput`<sup>Optional</sup> <a name="windowsInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.windowsInput"></a>

```java
public java.lang.Object getWindowsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindows">BatchPoolWindows</a>>

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.accountName"></a>

```java
public java.lang.String getAccountName();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `interNodeCommunication`<sup>Required</sup> <a name="interNodeCommunication" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.interNodeCommunication"></a>

```java
public java.lang.String getInterNodeCommunication();
```

- *Type:* java.lang.String

---

##### `licenseType`<sup>Required</sup> <a name="licenseType" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.licenseType"></a>

```java
public java.lang.String getLicenseType();
```

- *Type:* java.lang.String

---

##### `maxTasksPerNode`<sup>Required</sup> <a name="maxTasksPerNode" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.maxTasksPerNode"></a>

```java
public java.lang.Number getMaxTasksPerNode();
```

- *Type:* java.lang.Number

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nodeAgentSkuId`<sup>Required</sup> <a name="nodeAgentSkuId" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.nodeAgentSkuId"></a>

```java
public java.lang.String getNodeAgentSkuId();
```

- *Type:* java.lang.String

---

##### `osDiskPlacement`<sup>Required</sup> <a name="osDiskPlacement" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.osDiskPlacement"></a>

```java
public java.lang.String getOsDiskPlacement();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `stopPendingResizeOperation`<sup>Required</sup> <a name="stopPendingResizeOperation" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.stopPendingResizeOperation"></a>

```java
public java.lang.Object getStopPendingResizeOperation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `targetNodeCommunicationMode`<sup>Required</sup> <a name="targetNodeCommunicationMode" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.targetNodeCommunicationMode"></a>

```java
public java.lang.String getTargetNodeCommunicationMode();
```

- *Type:* java.lang.String

---

##### `vmSize`<sup>Required</sup> <a name="vmSize" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.vmSize"></a>

```java
public java.lang.String getVmSize();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BatchPoolAutoScale <a name="BatchPoolAutoScale" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScale"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScale.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolAutoScale;

BatchPoolAutoScale.builder()
    .formula(java.lang.String)
//  .evaluationInterval(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScale.property.formula">formula</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#formula BatchPool#formula}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScale.property.evaluationInterval">evaluationInterval</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#evaluation_interval BatchPool#evaluation_interval}. |

---

##### `formula`<sup>Required</sup> <a name="formula" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScale.property.formula"></a>

```java
public java.lang.String getFormula();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#formula BatchPool#formula}.

---

##### `evaluationInterval`<sup>Optional</sup> <a name="evaluationInterval" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScale.property.evaluationInterval"></a>

```java
public java.lang.String getEvaluationInterval();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#evaluation_interval BatchPool#evaluation_interval}.

---

### BatchPoolCertificate <a name="BatchPoolCertificate" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolCertificate;

BatchPoolCertificate.builder()
    .id(java.lang.String)
    .storeLocation(java.lang.String)
//  .storeName(java.lang.String)
//  .visibility(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificate.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#id BatchPool#id}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificate.property.storeLocation">storeLocation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#store_location BatchPool#store_location}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificate.property.storeName">storeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#store_name BatchPool#store_name}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificate.property.visibility">visibility</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#visibility BatchPool#visibility}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#id BatchPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `storeLocation`<sup>Required</sup> <a name="storeLocation" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificate.property.storeLocation"></a>

```java
public java.lang.String getStoreLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#store_location BatchPool#store_location}.

---

##### `storeName`<sup>Optional</sup> <a name="storeName" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificate.property.storeName"></a>

```java
public java.lang.String getStoreName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#store_name BatchPool#store_name}.

---

##### `visibility`<sup>Optional</sup> <a name="visibility" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificate.property.visibility"></a>

```java
public java.util.List<java.lang.String> getVisibility();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#visibility BatchPool#visibility}.

---

### BatchPoolConfig <a name="BatchPoolConfig" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolConfig;

BatchPoolConfig.builder()
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
    .accountName(java.lang.String)
    .name(java.lang.String)
    .nodeAgentSkuId(java.lang.String)
    .resourceGroupName(java.lang.String)
    .storageImageReference(BatchPoolStorageImageReference)
    .vmSize(java.lang.String)
//  .autoScale(BatchPoolAutoScale)
//  .certificate(IResolvable)
//  .certificate(java.util.List<BatchPoolCertificate>)
//  .containerConfiguration(BatchPoolContainerConfiguration)
//  .dataDisks(IResolvable)
//  .dataDisks(java.util.List<BatchPoolDataDisks>)
//  .diskEncryption(IResolvable)
//  .diskEncryption(java.util.List<BatchPoolDiskEncryption>)
//  .displayName(java.lang.String)
//  .extensions(IResolvable)
//  .extensions(java.util.List<BatchPoolExtensions>)
//  .fixedScale(BatchPoolFixedScale)
//  .id(java.lang.String)
//  .identity(BatchPoolIdentity)
//  .interNodeCommunication(java.lang.String)
//  .licenseType(java.lang.String)
//  .maxTasksPerNode(java.lang.Number)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
//  .mount(IResolvable)
//  .mount(java.util.List<BatchPoolMount>)
//  .networkConfiguration(BatchPoolNetworkConfiguration)
//  .nodePlacement(IResolvable)
//  .nodePlacement(java.util.List<BatchPoolNodePlacement>)
//  .osDiskPlacement(java.lang.String)
//  .startTask(BatchPoolStartTask)
//  .stopPendingResizeOperation(java.lang.Boolean)
//  .stopPendingResizeOperation(IResolvable)
//  .targetNodeCommunicationMode(java.lang.String)
//  .taskSchedulingPolicy(IResolvable)
//  .taskSchedulingPolicy(java.util.List<BatchPoolTaskSchedulingPolicy>)
//  .timeouts(BatchPoolTimeouts)
//  .userAccounts(IResolvable)
//  .userAccounts(java.util.List<BatchPoolUserAccounts>)
//  .windows(IResolvable)
//  .windows(java.util.List<BatchPoolWindows>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.accountName">accountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#account_name BatchPool#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#name BatchPool#name}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.nodeAgentSkuId">nodeAgentSkuId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#node_agent_sku_id BatchPool#node_agent_sku_id}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#resource_group_name BatchPool#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.storageImageReference">storageImageReference</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference">BatchPoolStorageImageReference</a></code> | storage_image_reference block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.vmSize">vmSize</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#vm_size BatchPool#vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.autoScale">autoScale</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScale">BatchPoolAutoScale</a></code> | auto_scale block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.certificate">certificate</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificate">BatchPoolCertificate</a>></code> | certificate block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.containerConfiguration">containerConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfiguration">BatchPoolContainerConfiguration</a></code> | container_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.dataDisks">dataDisks</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisks">BatchPoolDataDisks</a>></code> | data_disks block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.diskEncryption">diskEncryption</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryption">BatchPoolDiskEncryption</a>></code> | disk_encryption block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#display_name BatchPool#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.extensions">extensions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensions">BatchPoolExtensions</a>></code> | extensions block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.fixedScale">fixedScale</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScale">BatchPoolFixedScale</a></code> | fixed_scale block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#id BatchPool#id}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentity">BatchPoolIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.interNodeCommunication">interNodeCommunication</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#inter_node_communication BatchPool#inter_node_communication}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.licenseType">licenseType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#license_type BatchPool#license_type}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.maxTasksPerNode">maxTasksPerNode</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#max_tasks_per_node BatchPool#max_tasks_per_node}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#metadata BatchPool#metadata}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.mount">mount</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMount">BatchPoolMount</a>></code> | mount block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration">BatchPoolNetworkConfiguration</a></code> | network_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.nodePlacement">nodePlacement</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacement">BatchPoolNodePlacement</a>></code> | node_placement block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.osDiskPlacement">osDiskPlacement</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#os_disk_placement BatchPool#os_disk_placement}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.startTask">startTask</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTask">BatchPoolStartTask</a></code> | start_task block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.stopPendingResizeOperation">stopPendingResizeOperation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#stop_pending_resize_operation BatchPool#stop_pending_resize_operation}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.targetNodeCommunicationMode">targetNodeCommunicationMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#target_node_communication_mode BatchPool#target_node_communication_mode}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.taskSchedulingPolicy">taskSchedulingPolicy</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicy">BatchPoolTaskSchedulingPolicy</a>></code> | task_scheduling_policy block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeouts">BatchPoolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.userAccounts">userAccounts</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts">BatchPoolUserAccounts</a>></code> | user_accounts block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.windows">windows</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindows">BatchPoolWindows</a>></code> | windows block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.accountName"></a>

```java
public java.lang.String getAccountName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#account_name BatchPool#account_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#name BatchPool#name}.

---

##### `nodeAgentSkuId`<sup>Required</sup> <a name="nodeAgentSkuId" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.nodeAgentSkuId"></a>

```java
public java.lang.String getNodeAgentSkuId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#node_agent_sku_id BatchPool#node_agent_sku_id}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#resource_group_name BatchPool#resource_group_name}.

---

##### `storageImageReference`<sup>Required</sup> <a name="storageImageReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.storageImageReference"></a>

```java
public BatchPoolStorageImageReference getStorageImageReference();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference">BatchPoolStorageImageReference</a>

storage_image_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#storage_image_reference BatchPool#storage_image_reference}

---

##### `vmSize`<sup>Required</sup> <a name="vmSize" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.vmSize"></a>

```java
public java.lang.String getVmSize();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#vm_size BatchPool#vm_size}.

---

##### `autoScale`<sup>Optional</sup> <a name="autoScale" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.autoScale"></a>

```java
public BatchPoolAutoScale getAutoScale();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScale">BatchPoolAutoScale</a>

auto_scale block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#auto_scale BatchPool#auto_scale}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.certificate"></a>

```java
public java.lang.Object getCertificate();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificate">BatchPoolCertificate</a>>

certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#certificate BatchPool#certificate}

---

##### `containerConfiguration`<sup>Optional</sup> <a name="containerConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.containerConfiguration"></a>

```java
public BatchPoolContainerConfiguration getContainerConfiguration();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfiguration">BatchPoolContainerConfiguration</a>

container_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#container_configuration BatchPool#container_configuration}

---

##### `dataDisks`<sup>Optional</sup> <a name="dataDisks" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.dataDisks"></a>

```java
public java.lang.Object getDataDisks();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisks">BatchPoolDataDisks</a>>

data_disks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#data_disks BatchPool#data_disks}

---

##### `diskEncryption`<sup>Optional</sup> <a name="diskEncryption" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.diskEncryption"></a>

```java
public java.lang.Object getDiskEncryption();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryption">BatchPoolDiskEncryption</a>>

disk_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#disk_encryption BatchPool#disk_encryption}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#display_name BatchPool#display_name}.

---

##### `extensions`<sup>Optional</sup> <a name="extensions" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.extensions"></a>

```java
public java.lang.Object getExtensions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensions">BatchPoolExtensions</a>>

extensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#extensions BatchPool#extensions}

---

##### `fixedScale`<sup>Optional</sup> <a name="fixedScale" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.fixedScale"></a>

```java
public BatchPoolFixedScale getFixedScale();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScale">BatchPoolFixedScale</a>

fixed_scale block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#fixed_scale BatchPool#fixed_scale}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#id BatchPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.identity"></a>

```java
public BatchPoolIdentity getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentity">BatchPoolIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#identity BatchPool#identity}

---

##### `interNodeCommunication`<sup>Optional</sup> <a name="interNodeCommunication" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.interNodeCommunication"></a>

```java
public java.lang.String getInterNodeCommunication();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#inter_node_communication BatchPool#inter_node_communication}.

---

##### `licenseType`<sup>Optional</sup> <a name="licenseType" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.licenseType"></a>

```java
public java.lang.String getLicenseType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#license_type BatchPool#license_type}.

---

##### `maxTasksPerNode`<sup>Optional</sup> <a name="maxTasksPerNode" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.maxTasksPerNode"></a>

```java
public java.lang.Number getMaxTasksPerNode();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#max_tasks_per_node BatchPool#max_tasks_per_node}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#metadata BatchPool#metadata}.

---

##### `mount`<sup>Optional</sup> <a name="mount" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.mount"></a>

```java
public java.lang.Object getMount();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMount">BatchPoolMount</a>>

mount block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#mount BatchPool#mount}

---

##### `networkConfiguration`<sup>Optional</sup> <a name="networkConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.networkConfiguration"></a>

```java
public BatchPoolNetworkConfiguration getNetworkConfiguration();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration">BatchPoolNetworkConfiguration</a>

network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#network_configuration BatchPool#network_configuration}

---

##### `nodePlacement`<sup>Optional</sup> <a name="nodePlacement" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.nodePlacement"></a>

```java
public java.lang.Object getNodePlacement();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacement">BatchPoolNodePlacement</a>>

node_placement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#node_placement BatchPool#node_placement}

---

##### `osDiskPlacement`<sup>Optional</sup> <a name="osDiskPlacement" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.osDiskPlacement"></a>

```java
public java.lang.String getOsDiskPlacement();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#os_disk_placement BatchPool#os_disk_placement}.

---

##### `startTask`<sup>Optional</sup> <a name="startTask" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.startTask"></a>

```java
public BatchPoolStartTask getStartTask();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTask">BatchPoolStartTask</a>

start_task block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#start_task BatchPool#start_task}

---

##### `stopPendingResizeOperation`<sup>Optional</sup> <a name="stopPendingResizeOperation" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.stopPendingResizeOperation"></a>

```java
public java.lang.Object getStopPendingResizeOperation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#stop_pending_resize_operation BatchPool#stop_pending_resize_operation}.

---

##### `targetNodeCommunicationMode`<sup>Optional</sup> <a name="targetNodeCommunicationMode" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.targetNodeCommunicationMode"></a>

```java
public java.lang.String getTargetNodeCommunicationMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#target_node_communication_mode BatchPool#target_node_communication_mode}.

---

##### `taskSchedulingPolicy`<sup>Optional</sup> <a name="taskSchedulingPolicy" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.taskSchedulingPolicy"></a>

```java
public java.lang.Object getTaskSchedulingPolicy();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicy">BatchPoolTaskSchedulingPolicy</a>>

task_scheduling_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#task_scheduling_policy BatchPool#task_scheduling_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.timeouts"></a>

```java
public BatchPoolTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeouts">BatchPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#timeouts BatchPool#timeouts}

---

##### `userAccounts`<sup>Optional</sup> <a name="userAccounts" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.userAccounts"></a>

```java
public java.lang.Object getUserAccounts();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts">BatchPoolUserAccounts</a>>

user_accounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#user_accounts BatchPool#user_accounts}

---

##### `windows`<sup>Optional</sup> <a name="windows" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.windows"></a>

```java
public java.lang.Object getWindows();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindows">BatchPoolWindows</a>>

windows block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#windows BatchPool#windows}

---

### BatchPoolContainerConfiguration <a name="BatchPoolContainerConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolContainerConfiguration;

BatchPoolContainerConfiguration.builder()
//  .containerImageNames(java.util.List<java.lang.String>)
//  .containerRegistries(IResolvable)
//  .containerRegistries(java.util.List<BatchPoolContainerConfigurationContainerRegistries>)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfiguration.property.containerImageNames">containerImageNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#container_image_names BatchPool#container_image_names}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfiguration.property.containerRegistries">containerRegistries</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistries">BatchPoolContainerConfigurationContainerRegistries</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#container_registries BatchPool#container_registries}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfiguration.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#type BatchPool#type}. |

---

##### `containerImageNames`<sup>Optional</sup> <a name="containerImageNames" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfiguration.property.containerImageNames"></a>

```java
public java.util.List<java.lang.String> getContainerImageNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#container_image_names BatchPool#container_image_names}.

---

##### `containerRegistries`<sup>Optional</sup> <a name="containerRegistries" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfiguration.property.containerRegistries"></a>

```java
public java.lang.Object getContainerRegistries();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistries">BatchPoolContainerConfigurationContainerRegistries</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#container_registries BatchPool#container_registries}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfiguration.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#type BatchPool#type}.

---

### BatchPoolContainerConfigurationContainerRegistries <a name="BatchPoolContainerConfigurationContainerRegistries" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistries.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolContainerConfigurationContainerRegistries;

BatchPoolContainerConfigurationContainerRegistries.builder()
//  .password(java.lang.String)
//  .registryServer(java.lang.String)
//  .userAssignedIdentityId(java.lang.String)
//  .userName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistries.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#password BatchPool#password}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistries.property.registryServer">registryServer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#registry_server BatchPool#registry_server}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistries.property.userAssignedIdentityId">userAssignedIdentityId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#user_assigned_identity_id BatchPool#user_assigned_identity_id}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistries.property.userName">userName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#user_name BatchPool#user_name}. |

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistries.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#password BatchPool#password}.

---

##### `registryServer`<sup>Optional</sup> <a name="registryServer" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistries.property.registryServer"></a>

```java
public java.lang.String getRegistryServer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#registry_server BatchPool#registry_server}.

---

##### `userAssignedIdentityId`<sup>Optional</sup> <a name="userAssignedIdentityId" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistries.property.userAssignedIdentityId"></a>

```java
public java.lang.String getUserAssignedIdentityId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#user_assigned_identity_id BatchPool#user_assigned_identity_id}.

---

##### `userName`<sup>Optional</sup> <a name="userName" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistries.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#user_name BatchPool#user_name}.

---

### BatchPoolDataDisks <a name="BatchPoolDataDisks" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisks.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolDataDisks;

BatchPoolDataDisks.builder()
    .diskSizeGb(java.lang.Number)
    .lun(java.lang.Number)
//  .caching(java.lang.String)
//  .storageAccountType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisks.property.diskSizeGb">diskSizeGb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#disk_size_gb BatchPool#disk_size_gb}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisks.property.lun">lun</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#lun BatchPool#lun}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisks.property.caching">caching</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#caching BatchPool#caching}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisks.property.storageAccountType">storageAccountType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#storage_account_type BatchPool#storage_account_type}. |

---

##### `diskSizeGb`<sup>Required</sup> <a name="diskSizeGb" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisks.property.diskSizeGb"></a>

```java
public java.lang.Number getDiskSizeGb();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#disk_size_gb BatchPool#disk_size_gb}.

---

##### `lun`<sup>Required</sup> <a name="lun" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisks.property.lun"></a>

```java
public java.lang.Number getLun();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#lun BatchPool#lun}.

---

##### `caching`<sup>Optional</sup> <a name="caching" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisks.property.caching"></a>

```java
public java.lang.String getCaching();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#caching BatchPool#caching}.

---

##### `storageAccountType`<sup>Optional</sup> <a name="storageAccountType" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisks.property.storageAccountType"></a>

```java
public java.lang.String getStorageAccountType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#storage_account_type BatchPool#storage_account_type}.

---

### BatchPoolDiskEncryption <a name="BatchPoolDiskEncryption" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryption.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolDiskEncryption;

BatchPoolDiskEncryption.builder()
    .diskEncryptionTarget(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryption.property.diskEncryptionTarget">diskEncryptionTarget</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#disk_encryption_target BatchPool#disk_encryption_target}. |

---

##### `diskEncryptionTarget`<sup>Required</sup> <a name="diskEncryptionTarget" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryption.property.diskEncryptionTarget"></a>

```java
public java.lang.String getDiskEncryptionTarget();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#disk_encryption_target BatchPool#disk_encryption_target}.

---

### BatchPoolExtensions <a name="BatchPoolExtensions" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolExtensions;

BatchPoolExtensions.builder()
    .name(java.lang.String)
    .publisher(java.lang.String)
    .type(java.lang.String)
//  .automaticUpgradeEnabled(java.lang.Boolean)
//  .automaticUpgradeEnabled(IResolvable)
//  .autoUpgradeMinorVersion(java.lang.Boolean)
//  .autoUpgradeMinorVersion(IResolvable)
//  .protectedSettings(java.lang.String)
//  .provisionAfterExtensions(java.util.List<java.lang.String>)
//  .settingsJson(java.lang.String)
//  .typeHandlerVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensions.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#name BatchPool#name}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensions.property.publisher">publisher</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#publisher BatchPool#publisher}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensions.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#type BatchPool#type}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensions.property.automaticUpgradeEnabled">automaticUpgradeEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#automatic_upgrade_enabled BatchPool#automatic_upgrade_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensions.property.autoUpgradeMinorVersion">autoUpgradeMinorVersion</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#auto_upgrade_minor_version BatchPool#auto_upgrade_minor_version}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensions.property.protectedSettings">protectedSettings</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#protected_settings BatchPool#protected_settings}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensions.property.provisionAfterExtensions">provisionAfterExtensions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#provision_after_extensions BatchPool#provision_after_extensions}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensions.property.settingsJson">settingsJson</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#settings_json BatchPool#settings_json}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensions.property.typeHandlerVersion">typeHandlerVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#type_handler_version BatchPool#type_handler_version}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensions.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#name BatchPool#name}.

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensions.property.publisher"></a>

```java
public java.lang.String getPublisher();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#publisher BatchPool#publisher}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensions.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#type BatchPool#type}.

---

##### `automaticUpgradeEnabled`<sup>Optional</sup> <a name="automaticUpgradeEnabled" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensions.property.automaticUpgradeEnabled"></a>

```java
public java.lang.Object getAutomaticUpgradeEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#automatic_upgrade_enabled BatchPool#automatic_upgrade_enabled}.

---

##### `autoUpgradeMinorVersion`<sup>Optional</sup> <a name="autoUpgradeMinorVersion" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensions.property.autoUpgradeMinorVersion"></a>

```java
public java.lang.Object getAutoUpgradeMinorVersion();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#auto_upgrade_minor_version BatchPool#auto_upgrade_minor_version}.

---

##### `protectedSettings`<sup>Optional</sup> <a name="protectedSettings" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensions.property.protectedSettings"></a>

```java
public java.lang.String getProtectedSettings();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#protected_settings BatchPool#protected_settings}.

---

##### `provisionAfterExtensions`<sup>Optional</sup> <a name="provisionAfterExtensions" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensions.property.provisionAfterExtensions"></a>

```java
public java.util.List<java.lang.String> getProvisionAfterExtensions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#provision_after_extensions BatchPool#provision_after_extensions}.

---

##### `settingsJson`<sup>Optional</sup> <a name="settingsJson" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensions.property.settingsJson"></a>

```java
public java.lang.String getSettingsJson();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#settings_json BatchPool#settings_json}.

---

##### `typeHandlerVersion`<sup>Optional</sup> <a name="typeHandlerVersion" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensions.property.typeHandlerVersion"></a>

```java
public java.lang.String getTypeHandlerVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#type_handler_version BatchPool#type_handler_version}.

---

### BatchPoolFixedScale <a name="BatchPoolFixedScale" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScale"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScale.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolFixedScale;

BatchPoolFixedScale.builder()
//  .nodeDeallocationMethod(java.lang.String)
//  .resizeTimeout(java.lang.String)
//  .targetDedicatedNodes(java.lang.Number)
//  .targetLowPriorityNodes(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScale.property.nodeDeallocationMethod">nodeDeallocationMethod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#node_deallocation_method BatchPool#node_deallocation_method}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScale.property.resizeTimeout">resizeTimeout</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#resize_timeout BatchPool#resize_timeout}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScale.property.targetDedicatedNodes">targetDedicatedNodes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#target_dedicated_nodes BatchPool#target_dedicated_nodes}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScale.property.targetLowPriorityNodes">targetLowPriorityNodes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#target_low_priority_nodes BatchPool#target_low_priority_nodes}. |

---

##### `nodeDeallocationMethod`<sup>Optional</sup> <a name="nodeDeallocationMethod" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScale.property.nodeDeallocationMethod"></a>

```java
public java.lang.String getNodeDeallocationMethod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#node_deallocation_method BatchPool#node_deallocation_method}.

---

##### `resizeTimeout`<sup>Optional</sup> <a name="resizeTimeout" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScale.property.resizeTimeout"></a>

```java
public java.lang.String getResizeTimeout();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#resize_timeout BatchPool#resize_timeout}.

---

##### `targetDedicatedNodes`<sup>Optional</sup> <a name="targetDedicatedNodes" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScale.property.targetDedicatedNodes"></a>

```java
public java.lang.Number getTargetDedicatedNodes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#target_dedicated_nodes BatchPool#target_dedicated_nodes}.

---

##### `targetLowPriorityNodes`<sup>Optional</sup> <a name="targetLowPriorityNodes" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScale.property.targetLowPriorityNodes"></a>

```java
public java.lang.Number getTargetLowPriorityNodes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#target_low_priority_nodes BatchPool#target_low_priority_nodes}.

---

### BatchPoolIdentity <a name="BatchPoolIdentity" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolIdentity;

BatchPoolIdentity.builder()
    .identityIds(java.util.List<java.lang.String>)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentity.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#identity_ids BatchPool#identity_ids}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentity.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#type BatchPool#type}. |

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentity.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#identity_ids BatchPool#identity_ids}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentity.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#type BatchPool#type}.

---

### BatchPoolMount <a name="BatchPoolMount" id="@cdktf/provider-azurerm.batchPool.BatchPoolMount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolMount.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolMount;

BatchPoolMount.builder()
//  .azureBlobFileSystem(BatchPoolMountAzureBlobFileSystem)
//  .azureFileShare(IResolvable)
//  .azureFileShare(java.util.List<BatchPoolMountAzureFileShare>)
//  .cifsMount(IResolvable)
//  .cifsMount(java.util.List<BatchPoolMountCifsMount>)
//  .nfsMount(IResolvable)
//  .nfsMount(java.util.List<BatchPoolMountNfsMount>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMount.property.azureBlobFileSystem">azureBlobFileSystem</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem">BatchPoolMountAzureBlobFileSystem</a></code> | azure_blob_file_system block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMount.property.azureFileShare">azureFileShare</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShare">BatchPoolMountAzureFileShare</a>></code> | azure_file_share block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMount.property.cifsMount">cifsMount</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMount">BatchPoolMountCifsMount</a>></code> | cifs_mount block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMount.property.nfsMount">nfsMount</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMount">BatchPoolMountNfsMount</a>></code> | nfs_mount block. |

---

##### `azureBlobFileSystem`<sup>Optional</sup> <a name="azureBlobFileSystem" id="@cdktf/provider-azurerm.batchPool.BatchPoolMount.property.azureBlobFileSystem"></a>

```java
public BatchPoolMountAzureBlobFileSystem getAzureBlobFileSystem();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem">BatchPoolMountAzureBlobFileSystem</a>

azure_blob_file_system block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#azure_blob_file_system BatchPool#azure_blob_file_system}

---

##### `azureFileShare`<sup>Optional</sup> <a name="azureFileShare" id="@cdktf/provider-azurerm.batchPool.BatchPoolMount.property.azureFileShare"></a>

```java
public java.lang.Object getAzureFileShare();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShare">BatchPoolMountAzureFileShare</a>>

azure_file_share block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#azure_file_share BatchPool#azure_file_share}

---

##### `cifsMount`<sup>Optional</sup> <a name="cifsMount" id="@cdktf/provider-azurerm.batchPool.BatchPoolMount.property.cifsMount"></a>

```java
public java.lang.Object getCifsMount();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMount">BatchPoolMountCifsMount</a>>

cifs_mount block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#cifs_mount BatchPool#cifs_mount}

---

##### `nfsMount`<sup>Optional</sup> <a name="nfsMount" id="@cdktf/provider-azurerm.batchPool.BatchPoolMount.property.nfsMount"></a>

```java
public java.lang.Object getNfsMount();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMount">BatchPoolMountNfsMount</a>>

nfs_mount block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#nfs_mount BatchPool#nfs_mount}

---

### BatchPoolMountAzureBlobFileSystem <a name="BatchPoolMountAzureBlobFileSystem" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolMountAzureBlobFileSystem;

BatchPoolMountAzureBlobFileSystem.builder()
    .accountName(java.lang.String)
    .containerName(java.lang.String)
    .relativeMountPath(java.lang.String)
//  .accountKey(java.lang.String)
//  .blobfuseOptions(java.lang.String)
//  .identityId(java.lang.String)
//  .sasKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem.property.accountName">accountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#account_name BatchPool#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem.property.containerName">containerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#container_name BatchPool#container_name}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem.property.relativeMountPath">relativeMountPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#relative_mount_path BatchPool#relative_mount_path}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem.property.accountKey">accountKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#account_key BatchPool#account_key}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem.property.blobfuseOptions">blobfuseOptions</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#blobfuse_options BatchPool#blobfuse_options}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem.property.identityId">identityId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#identity_id BatchPool#identity_id}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem.property.sasKey">sasKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#sas_key BatchPool#sas_key}. |

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem.property.accountName"></a>

```java
public java.lang.String getAccountName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#account_name BatchPool#account_name}.

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem.property.containerName"></a>

```java
public java.lang.String getContainerName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#container_name BatchPool#container_name}.

---

##### `relativeMountPath`<sup>Required</sup> <a name="relativeMountPath" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem.property.relativeMountPath"></a>

```java
public java.lang.String getRelativeMountPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#relative_mount_path BatchPool#relative_mount_path}.

---

##### `accountKey`<sup>Optional</sup> <a name="accountKey" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem.property.accountKey"></a>

```java
public java.lang.String getAccountKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#account_key BatchPool#account_key}.

---

##### `blobfuseOptions`<sup>Optional</sup> <a name="blobfuseOptions" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem.property.blobfuseOptions"></a>

```java
public java.lang.String getBlobfuseOptions();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#blobfuse_options BatchPool#blobfuse_options}.

---

##### `identityId`<sup>Optional</sup> <a name="identityId" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem.property.identityId"></a>

```java
public java.lang.String getIdentityId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#identity_id BatchPool#identity_id}.

---

##### `sasKey`<sup>Optional</sup> <a name="sasKey" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem.property.sasKey"></a>

```java
public java.lang.String getSasKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#sas_key BatchPool#sas_key}.

---

### BatchPoolMountAzureFileShare <a name="BatchPoolMountAzureFileShare" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShare"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShare.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolMountAzureFileShare;

BatchPoolMountAzureFileShare.builder()
    .accountKey(java.lang.String)
    .accountName(java.lang.String)
    .azureFileUrl(java.lang.String)
    .relativeMountPath(java.lang.String)
//  .mountOptions(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShare.property.accountKey">accountKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#account_key BatchPool#account_key}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShare.property.accountName">accountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#account_name BatchPool#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShare.property.azureFileUrl">azureFileUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#azure_file_url BatchPool#azure_file_url}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShare.property.relativeMountPath">relativeMountPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#relative_mount_path BatchPool#relative_mount_path}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShare.property.mountOptions">mountOptions</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#mount_options BatchPool#mount_options}. |

---

##### `accountKey`<sup>Required</sup> <a name="accountKey" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShare.property.accountKey"></a>

```java
public java.lang.String getAccountKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#account_key BatchPool#account_key}.

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShare.property.accountName"></a>

```java
public java.lang.String getAccountName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#account_name BatchPool#account_name}.

---

##### `azureFileUrl`<sup>Required</sup> <a name="azureFileUrl" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShare.property.azureFileUrl"></a>

```java
public java.lang.String getAzureFileUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#azure_file_url BatchPool#azure_file_url}.

---

##### `relativeMountPath`<sup>Required</sup> <a name="relativeMountPath" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShare.property.relativeMountPath"></a>

```java
public java.lang.String getRelativeMountPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#relative_mount_path BatchPool#relative_mount_path}.

---

##### `mountOptions`<sup>Optional</sup> <a name="mountOptions" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShare.property.mountOptions"></a>

```java
public java.lang.String getMountOptions();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#mount_options BatchPool#mount_options}.

---

### BatchPoolMountCifsMount <a name="BatchPoolMountCifsMount" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMount.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolMountCifsMount;

BatchPoolMountCifsMount.builder()
    .password(java.lang.String)
    .relativeMountPath(java.lang.String)
    .source(java.lang.String)
    .userName(java.lang.String)
//  .mountOptions(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMount.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#password BatchPool#password}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMount.property.relativeMountPath">relativeMountPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#relative_mount_path BatchPool#relative_mount_path}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMount.property.source">source</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#source BatchPool#source}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMount.property.userName">userName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#user_name BatchPool#user_name}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMount.property.mountOptions">mountOptions</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#mount_options BatchPool#mount_options}. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMount.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#password BatchPool#password}.

---

##### `relativeMountPath`<sup>Required</sup> <a name="relativeMountPath" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMount.property.relativeMountPath"></a>

```java
public java.lang.String getRelativeMountPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#relative_mount_path BatchPool#relative_mount_path}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMount.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#source BatchPool#source}.

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMount.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#user_name BatchPool#user_name}.

---

##### `mountOptions`<sup>Optional</sup> <a name="mountOptions" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMount.property.mountOptions"></a>

```java
public java.lang.String getMountOptions();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#mount_options BatchPool#mount_options}.

---

### BatchPoolMountNfsMount <a name="BatchPoolMountNfsMount" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMount.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolMountNfsMount;

BatchPoolMountNfsMount.builder()
    .relativeMountPath(java.lang.String)
    .source(java.lang.String)
//  .mountOptions(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMount.property.relativeMountPath">relativeMountPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#relative_mount_path BatchPool#relative_mount_path}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMount.property.source">source</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#source BatchPool#source}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMount.property.mountOptions">mountOptions</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#mount_options BatchPool#mount_options}. |

---

##### `relativeMountPath`<sup>Required</sup> <a name="relativeMountPath" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMount.property.relativeMountPath"></a>

```java
public java.lang.String getRelativeMountPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#relative_mount_path BatchPool#relative_mount_path}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMount.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#source BatchPool#source}.

---

##### `mountOptions`<sup>Optional</sup> <a name="mountOptions" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMount.property.mountOptions"></a>

```java
public java.lang.String getMountOptions();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#mount_options BatchPool#mount_options}.

---

### BatchPoolNetworkConfiguration <a name="BatchPoolNetworkConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolNetworkConfiguration;

BatchPoolNetworkConfiguration.builder()
//  .acceleratedNetworkingEnabled(java.lang.Boolean)
//  .acceleratedNetworkingEnabled(IResolvable)
//  .dynamicVnetAssignmentScope(java.lang.String)
//  .endpointConfiguration(IResolvable)
//  .endpointConfiguration(java.util.List<BatchPoolNetworkConfigurationEndpointConfiguration>)
//  .publicAddressProvisioningType(java.lang.String)
//  .publicIps(java.util.List<java.lang.String>)
//  .subnetId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration.property.acceleratedNetworkingEnabled">acceleratedNetworkingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#accelerated_networking_enabled BatchPool#accelerated_networking_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration.property.dynamicVnetAssignmentScope">dynamicVnetAssignmentScope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#dynamic_vnet_assignment_scope BatchPool#dynamic_vnet_assignment_scope}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration.property.endpointConfiguration">endpointConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfiguration">BatchPoolNetworkConfigurationEndpointConfiguration</a>></code> | endpoint_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration.property.publicAddressProvisioningType">publicAddressProvisioningType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#public_address_provisioning_type BatchPool#public_address_provisioning_type}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration.property.publicIps">publicIps</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#public_ips BatchPool#public_ips}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#subnet_id BatchPool#subnet_id}. |

---

##### `acceleratedNetworkingEnabled`<sup>Optional</sup> <a name="acceleratedNetworkingEnabled" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration.property.acceleratedNetworkingEnabled"></a>

```java
public java.lang.Object getAcceleratedNetworkingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#accelerated_networking_enabled BatchPool#accelerated_networking_enabled}.

---

##### `dynamicVnetAssignmentScope`<sup>Optional</sup> <a name="dynamicVnetAssignmentScope" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration.property.dynamicVnetAssignmentScope"></a>

```java
public java.lang.String getDynamicVnetAssignmentScope();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#dynamic_vnet_assignment_scope BatchPool#dynamic_vnet_assignment_scope}.

---

##### `endpointConfiguration`<sup>Optional</sup> <a name="endpointConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration.property.endpointConfiguration"></a>

```java
public java.lang.Object getEndpointConfiguration();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfiguration">BatchPoolNetworkConfigurationEndpointConfiguration</a>>

endpoint_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#endpoint_configuration BatchPool#endpoint_configuration}

---

##### `publicAddressProvisioningType`<sup>Optional</sup> <a name="publicAddressProvisioningType" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration.property.publicAddressProvisioningType"></a>

```java
public java.lang.String getPublicAddressProvisioningType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#public_address_provisioning_type BatchPool#public_address_provisioning_type}.

---

##### `publicIps`<sup>Optional</sup> <a name="publicIps" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration.property.publicIps"></a>

```java
public java.util.List<java.lang.String> getPublicIps();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#public_ips BatchPool#public_ips}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#subnet_id BatchPool#subnet_id}.

---

### BatchPoolNetworkConfigurationEndpointConfiguration <a name="BatchPoolNetworkConfigurationEndpointConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolNetworkConfigurationEndpointConfiguration;

BatchPoolNetworkConfigurationEndpointConfiguration.builder()
    .backendPort(java.lang.Number)
    .frontendPortRange(java.lang.String)
    .name(java.lang.String)
    .protocol(java.lang.String)
//  .networkSecurityGroupRules(IResolvable)
//  .networkSecurityGroupRules(java.util.List<BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfiguration.property.backendPort">backendPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#backend_port BatchPool#backend_port}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfiguration.property.frontendPortRange">frontendPortRange</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#frontend_port_range BatchPool#frontend_port_range}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfiguration.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#name BatchPool#name}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfiguration.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#protocol BatchPool#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfiguration.property.networkSecurityGroupRules">networkSecurityGroupRules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules">BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules</a>></code> | network_security_group_rules block. |

---

##### `backendPort`<sup>Required</sup> <a name="backendPort" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfiguration.property.backendPort"></a>

```java
public java.lang.Number getBackendPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#backend_port BatchPool#backend_port}.

---

##### `frontendPortRange`<sup>Required</sup> <a name="frontendPortRange" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfiguration.property.frontendPortRange"></a>

```java
public java.lang.String getFrontendPortRange();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#frontend_port_range BatchPool#frontend_port_range}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfiguration.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#name BatchPool#name}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfiguration.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#protocol BatchPool#protocol}.

---

##### `networkSecurityGroupRules`<sup>Optional</sup> <a name="networkSecurityGroupRules" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfiguration.property.networkSecurityGroupRules"></a>

```java
public java.lang.Object getNetworkSecurityGroupRules();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules">BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules</a>>

network_security_group_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#network_security_group_rules BatchPool#network_security_group_rules}

---

### BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules <a name="BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules;

BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules.builder()
    .access(java.lang.String)
    .priority(java.lang.Number)
    .sourceAddressPrefix(java.lang.String)
//  .sourcePortRanges(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules.property.access">access</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#access BatchPool#access}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules.property.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#priority BatchPool#priority}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules.property.sourceAddressPrefix">sourceAddressPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#source_address_prefix BatchPool#source_address_prefix}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules.property.sourcePortRanges">sourcePortRanges</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#source_port_ranges BatchPool#source_port_ranges}. |

---

##### `access`<sup>Required</sup> <a name="access" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules.property.access"></a>

```java
public java.lang.String getAccess();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#access BatchPool#access}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#priority BatchPool#priority}.

---

##### `sourceAddressPrefix`<sup>Required</sup> <a name="sourceAddressPrefix" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules.property.sourceAddressPrefix"></a>

```java
public java.lang.String getSourceAddressPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#source_address_prefix BatchPool#source_address_prefix}.

---

##### `sourcePortRanges`<sup>Optional</sup> <a name="sourcePortRanges" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules.property.sourcePortRanges"></a>

```java
public java.util.List<java.lang.String> getSourcePortRanges();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#source_port_ranges BatchPool#source_port_ranges}.

---

### BatchPoolNodePlacement <a name="BatchPoolNodePlacement" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacement.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolNodePlacement;

BatchPoolNodePlacement.builder()
//  .policy(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacement.property.policy">policy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#policy BatchPool#policy}. |

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacement.property.policy"></a>

```java
public java.lang.String getPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#policy BatchPool#policy}.

---

### BatchPoolStartTask <a name="BatchPoolStartTask" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTask.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolStartTask;

BatchPoolStartTask.builder()
    .commandLine(java.lang.String)
    .userIdentity(BatchPoolStartTaskUserIdentity)
//  .commonEnvironmentProperties(java.util.Map<java.lang.String, java.lang.String>)
//  .container(IResolvable)
//  .container(java.util.List<BatchPoolStartTaskContainer>)
//  .resourceFile(IResolvable)
//  .resourceFile(java.util.List<BatchPoolStartTaskResourceFile>)
//  .taskRetryMaximum(java.lang.Number)
//  .waitForSuccess(java.lang.Boolean)
//  .waitForSuccess(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTask.property.commandLine">commandLine</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#command_line BatchPool#command_line}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTask.property.userIdentity">userIdentity</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentity">BatchPoolStartTaskUserIdentity</a></code> | user_identity block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTask.property.commonEnvironmentProperties">commonEnvironmentProperties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#common_environment_properties BatchPool#common_environment_properties}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTask.property.container">container</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainer">BatchPoolStartTaskContainer</a>></code> | container block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTask.property.resourceFile">resourceFile</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile">BatchPoolStartTaskResourceFile</a>></code> | resource_file block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTask.property.taskRetryMaximum">taskRetryMaximum</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#task_retry_maximum BatchPool#task_retry_maximum}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTask.property.waitForSuccess">waitForSuccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#wait_for_success BatchPool#wait_for_success}. |

---

##### `commandLine`<sup>Required</sup> <a name="commandLine" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTask.property.commandLine"></a>

```java
public java.lang.String getCommandLine();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#command_line BatchPool#command_line}.

---

##### `userIdentity`<sup>Required</sup> <a name="userIdentity" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTask.property.userIdentity"></a>

```java
public BatchPoolStartTaskUserIdentity getUserIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentity">BatchPoolStartTaskUserIdentity</a>

user_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#user_identity BatchPool#user_identity}

---

##### `commonEnvironmentProperties`<sup>Optional</sup> <a name="commonEnvironmentProperties" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTask.property.commonEnvironmentProperties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCommonEnvironmentProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#common_environment_properties BatchPool#common_environment_properties}.

---

##### `container`<sup>Optional</sup> <a name="container" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTask.property.container"></a>

```java
public java.lang.Object getContainer();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainer">BatchPoolStartTaskContainer</a>>

container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#container BatchPool#container}

---

##### `resourceFile`<sup>Optional</sup> <a name="resourceFile" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTask.property.resourceFile"></a>

```java
public java.lang.Object getResourceFile();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile">BatchPoolStartTaskResourceFile</a>>

resource_file block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#resource_file BatchPool#resource_file}

---

##### `taskRetryMaximum`<sup>Optional</sup> <a name="taskRetryMaximum" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTask.property.taskRetryMaximum"></a>

```java
public java.lang.Number getTaskRetryMaximum();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#task_retry_maximum BatchPool#task_retry_maximum}.

---

##### `waitForSuccess`<sup>Optional</sup> <a name="waitForSuccess" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTask.property.waitForSuccess"></a>

```java
public java.lang.Object getWaitForSuccess();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#wait_for_success BatchPool#wait_for_success}.

---

### BatchPoolStartTaskContainer <a name="BatchPoolStartTaskContainer" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolStartTaskContainer;

BatchPoolStartTaskContainer.builder()
    .imageName(java.lang.String)
//  .registry(IResolvable)
//  .registry(java.util.List<BatchPoolStartTaskContainerRegistry>)
//  .runOptions(java.lang.String)
//  .workingDirectory(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainer.property.imageName">imageName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#image_name BatchPool#image_name}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainer.property.registry">registry</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistry">BatchPoolStartTaskContainerRegistry</a>></code> | registry block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainer.property.runOptions">runOptions</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#run_options BatchPool#run_options}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainer.property.workingDirectory">workingDirectory</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#working_directory BatchPool#working_directory}. |

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainer.property.imageName"></a>

```java
public java.lang.String getImageName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#image_name BatchPool#image_name}.

---

##### `registry`<sup>Optional</sup> <a name="registry" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainer.property.registry"></a>

```java
public java.lang.Object getRegistry();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistry">BatchPoolStartTaskContainerRegistry</a>>

registry block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#registry BatchPool#registry}

---

##### `runOptions`<sup>Optional</sup> <a name="runOptions" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainer.property.runOptions"></a>

```java
public java.lang.String getRunOptions();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#run_options BatchPool#run_options}.

---

##### `workingDirectory`<sup>Optional</sup> <a name="workingDirectory" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainer.property.workingDirectory"></a>

```java
public java.lang.String getWorkingDirectory();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#working_directory BatchPool#working_directory}.

---

### BatchPoolStartTaskContainerRegistry <a name="BatchPoolStartTaskContainerRegistry" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistry.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolStartTaskContainerRegistry;

BatchPoolStartTaskContainerRegistry.builder()
    .registryServer(java.lang.String)
//  .password(java.lang.String)
//  .userAssignedIdentityId(java.lang.String)
//  .userName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistry.property.registryServer">registryServer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#registry_server BatchPool#registry_server}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistry.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#password BatchPool#password}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistry.property.userAssignedIdentityId">userAssignedIdentityId</a></code> | <code>java.lang.String</code> | The User Assigned Identity to use for Container Registry access. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistry.property.userName">userName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#user_name BatchPool#user_name}. |

---

##### `registryServer`<sup>Required</sup> <a name="registryServer" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistry.property.registryServer"></a>

```java
public java.lang.String getRegistryServer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#registry_server BatchPool#registry_server}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistry.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#password BatchPool#password}.

---

##### `userAssignedIdentityId`<sup>Optional</sup> <a name="userAssignedIdentityId" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistry.property.userAssignedIdentityId"></a>

```java
public java.lang.String getUserAssignedIdentityId();
```

- *Type:* java.lang.String

The User Assigned Identity to use for Container Registry access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#user_assigned_identity_id BatchPool#user_assigned_identity_id}

---

##### `userName`<sup>Optional</sup> <a name="userName" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistry.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#user_name BatchPool#user_name}.

---

### BatchPoolStartTaskResourceFile <a name="BatchPoolStartTaskResourceFile" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolStartTaskResourceFile;

BatchPoolStartTaskResourceFile.builder()
//  .autoStorageContainerName(java.lang.String)
//  .blobPrefix(java.lang.String)
//  .fileMode(java.lang.String)
//  .filePath(java.lang.String)
//  .httpUrl(java.lang.String)
//  .storageContainerUrl(java.lang.String)
//  .userAssignedIdentityId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile.property.autoStorageContainerName">autoStorageContainerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#auto_storage_container_name BatchPool#auto_storage_container_name}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile.property.blobPrefix">blobPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#blob_prefix BatchPool#blob_prefix}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile.property.fileMode">fileMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#file_mode BatchPool#file_mode}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile.property.filePath">filePath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#file_path BatchPool#file_path}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile.property.httpUrl">httpUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#http_url BatchPool#http_url}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile.property.storageContainerUrl">storageContainerUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#storage_container_url BatchPool#storage_container_url}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile.property.userAssignedIdentityId">userAssignedIdentityId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#user_assigned_identity_id BatchPool#user_assigned_identity_id}. |

---

##### `autoStorageContainerName`<sup>Optional</sup> <a name="autoStorageContainerName" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile.property.autoStorageContainerName"></a>

```java
public java.lang.String getAutoStorageContainerName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#auto_storage_container_name BatchPool#auto_storage_container_name}.

---

##### `blobPrefix`<sup>Optional</sup> <a name="blobPrefix" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile.property.blobPrefix"></a>

```java
public java.lang.String getBlobPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#blob_prefix BatchPool#blob_prefix}.

---

##### `fileMode`<sup>Optional</sup> <a name="fileMode" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile.property.fileMode"></a>

```java
public java.lang.String getFileMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#file_mode BatchPool#file_mode}.

---

##### `filePath`<sup>Optional</sup> <a name="filePath" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile.property.filePath"></a>

```java
public java.lang.String getFilePath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#file_path BatchPool#file_path}.

---

##### `httpUrl`<sup>Optional</sup> <a name="httpUrl" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile.property.httpUrl"></a>

```java
public java.lang.String getHttpUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#http_url BatchPool#http_url}.

---

##### `storageContainerUrl`<sup>Optional</sup> <a name="storageContainerUrl" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile.property.storageContainerUrl"></a>

```java
public java.lang.String getStorageContainerUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#storage_container_url BatchPool#storage_container_url}.

---

##### `userAssignedIdentityId`<sup>Optional</sup> <a name="userAssignedIdentityId" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile.property.userAssignedIdentityId"></a>

```java
public java.lang.String getUserAssignedIdentityId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#user_assigned_identity_id BatchPool#user_assigned_identity_id}.

---

### BatchPoolStartTaskUserIdentity <a name="BatchPoolStartTaskUserIdentity" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolStartTaskUserIdentity;

BatchPoolStartTaskUserIdentity.builder()
//  .autoUser(BatchPoolStartTaskUserIdentityAutoUser)
//  .userName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentity.property.autoUser">autoUser</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUser">BatchPoolStartTaskUserIdentityAutoUser</a></code> | auto_user block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentity.property.userName">userName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#user_name BatchPool#user_name}. |

---

##### `autoUser`<sup>Optional</sup> <a name="autoUser" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentity.property.autoUser"></a>

```java
public BatchPoolStartTaskUserIdentityAutoUser getAutoUser();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUser">BatchPoolStartTaskUserIdentityAutoUser</a>

auto_user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#auto_user BatchPool#auto_user}

---

##### `userName`<sup>Optional</sup> <a name="userName" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentity.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#user_name BatchPool#user_name}.

---

### BatchPoolStartTaskUserIdentityAutoUser <a name="BatchPoolStartTaskUserIdentityAutoUser" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUser.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolStartTaskUserIdentityAutoUser;

BatchPoolStartTaskUserIdentityAutoUser.builder()
//  .elevationLevel(java.lang.String)
//  .scope(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUser.property.elevationLevel">elevationLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#elevation_level BatchPool#elevation_level}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUser.property.scope">scope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#scope BatchPool#scope}. |

---

##### `elevationLevel`<sup>Optional</sup> <a name="elevationLevel" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUser.property.elevationLevel"></a>

```java
public java.lang.String getElevationLevel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#elevation_level BatchPool#elevation_level}.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUser.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#scope BatchPool#scope}.

---

### BatchPoolStorageImageReference <a name="BatchPoolStorageImageReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolStorageImageReference;

BatchPoolStorageImageReference.builder()
//  .id(java.lang.String)
//  .offer(java.lang.String)
//  .publisher(java.lang.String)
//  .sku(java.lang.String)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#id BatchPool#id}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference.property.offer">offer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#offer BatchPool#offer}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference.property.publisher">publisher</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#publisher BatchPool#publisher}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference.property.sku">sku</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#sku BatchPool#sku}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#version BatchPool#version}. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#id BatchPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `offer`<sup>Optional</sup> <a name="offer" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference.property.offer"></a>

```java
public java.lang.String getOffer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#offer BatchPool#offer}.

---

##### `publisher`<sup>Optional</sup> <a name="publisher" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference.property.publisher"></a>

```java
public java.lang.String getPublisher();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#publisher BatchPool#publisher}.

---

##### `sku`<sup>Optional</sup> <a name="sku" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference.property.sku"></a>

```java
public java.lang.String getSku();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#sku BatchPool#sku}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#version BatchPool#version}.

---

### BatchPoolTaskSchedulingPolicy <a name="BatchPoolTaskSchedulingPolicy" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolTaskSchedulingPolicy;

BatchPoolTaskSchedulingPolicy.builder()
//  .nodeFillType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicy.property.nodeFillType">nodeFillType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#node_fill_type BatchPool#node_fill_type}. |

---

##### `nodeFillType`<sup>Optional</sup> <a name="nodeFillType" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicy.property.nodeFillType"></a>

```java
public java.lang.String getNodeFillType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#node_fill_type BatchPool#node_fill_type}.

---

### BatchPoolTimeouts <a name="BatchPoolTimeouts" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolTimeouts;

BatchPoolTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#create BatchPool#create}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#delete BatchPool#delete}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#read BatchPool#read}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#update BatchPool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#create BatchPool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#delete BatchPool#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#read BatchPool#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#update BatchPool#update}.

---

### BatchPoolUserAccounts <a name="BatchPoolUserAccounts" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolUserAccounts;

BatchPoolUserAccounts.builder()
    .elevationLevel(java.lang.String)
    .name(java.lang.String)
    .password(java.lang.String)
//  .linuxUserConfiguration(IResolvable)
//  .linuxUserConfiguration(java.util.List<BatchPoolUserAccountsLinuxUserConfiguration>)
//  .windowsUserConfiguration(IResolvable)
//  .windowsUserConfiguration(java.util.List<BatchPoolUserAccountsWindowsUserConfiguration>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts.property.elevationLevel">elevationLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#elevation_level BatchPool#elevation_level}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#name BatchPool#name}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#password BatchPool#password}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts.property.linuxUserConfiguration">linuxUserConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfiguration">BatchPoolUserAccountsLinuxUserConfiguration</a>></code> | linux_user_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts.property.windowsUserConfiguration">windowsUserConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfiguration">BatchPoolUserAccountsWindowsUserConfiguration</a>></code> | windows_user_configuration block. |

---

##### `elevationLevel`<sup>Required</sup> <a name="elevationLevel" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts.property.elevationLevel"></a>

```java
public java.lang.String getElevationLevel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#elevation_level BatchPool#elevation_level}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#name BatchPool#name}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#password BatchPool#password}.

---

##### `linuxUserConfiguration`<sup>Optional</sup> <a name="linuxUserConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts.property.linuxUserConfiguration"></a>

```java
public java.lang.Object getLinuxUserConfiguration();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfiguration">BatchPoolUserAccountsLinuxUserConfiguration</a>>

linux_user_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#linux_user_configuration BatchPool#linux_user_configuration}

---

##### `windowsUserConfiguration`<sup>Optional</sup> <a name="windowsUserConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts.property.windowsUserConfiguration"></a>

```java
public java.lang.Object getWindowsUserConfiguration();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfiguration">BatchPoolUserAccountsWindowsUserConfiguration</a>>

windows_user_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#windows_user_configuration BatchPool#windows_user_configuration}

---

### BatchPoolUserAccountsLinuxUserConfiguration <a name="BatchPoolUserAccountsLinuxUserConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolUserAccountsLinuxUserConfiguration;

BatchPoolUserAccountsLinuxUserConfiguration.builder()
//  .gid(java.lang.Number)
//  .sshPrivateKey(java.lang.String)
//  .uid(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfiguration.property.gid">gid</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#gid BatchPool#gid}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfiguration.property.sshPrivateKey">sshPrivateKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#ssh_private_key BatchPool#ssh_private_key}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfiguration.property.uid">uid</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#uid BatchPool#uid}. |

---

##### `gid`<sup>Optional</sup> <a name="gid" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfiguration.property.gid"></a>

```java
public java.lang.Number getGid();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#gid BatchPool#gid}.

---

##### `sshPrivateKey`<sup>Optional</sup> <a name="sshPrivateKey" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfiguration.property.sshPrivateKey"></a>

```java
public java.lang.String getSshPrivateKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#ssh_private_key BatchPool#ssh_private_key}.

---

##### `uid`<sup>Optional</sup> <a name="uid" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfiguration.property.uid"></a>

```java
public java.lang.Number getUid();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#uid BatchPool#uid}.

---

### BatchPoolUserAccountsWindowsUserConfiguration <a name="BatchPoolUserAccountsWindowsUserConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolUserAccountsWindowsUserConfiguration;

BatchPoolUserAccountsWindowsUserConfiguration.builder()
    .loginMode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfiguration.property.loginMode">loginMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#login_mode BatchPool#login_mode}. |

---

##### `loginMode`<sup>Required</sup> <a name="loginMode" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfiguration.property.loginMode"></a>

```java
public java.lang.String getLoginMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#login_mode BatchPool#login_mode}.

---

### BatchPoolWindows <a name="BatchPoolWindows" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindows"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindows.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolWindows;

BatchPoolWindows.builder()
//  .enableAutomaticUpdates(java.lang.Boolean)
//  .enableAutomaticUpdates(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindows.property.enableAutomaticUpdates">enableAutomaticUpdates</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#enable_automatic_updates BatchPool#enable_automatic_updates}. |

---

##### `enableAutomaticUpdates`<sup>Optional</sup> <a name="enableAutomaticUpdates" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindows.property.enableAutomaticUpdates"></a>

```java
public java.lang.Object getEnableAutomaticUpdates();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/batch_pool#enable_automatic_updates BatchPool#enable_automatic_updates}.

---

## Classes <a name="Classes" id="Classes"></a>

### BatchPoolAutoScaleOutputReference <a name="BatchPoolAutoScaleOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolAutoScaleOutputReference;

new BatchPoolAutoScaleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.resetEvaluationInterval">resetEvaluationInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEvaluationInterval` <a name="resetEvaluationInterval" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.resetEvaluationInterval"></a>

```java
public void resetEvaluationInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.property.evaluationIntervalInput">evaluationIntervalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.property.formulaInput">formulaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.property.evaluationInterval">evaluationInterval</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.property.formula">formula</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScale">BatchPoolAutoScale</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `evaluationIntervalInput`<sup>Optional</sup> <a name="evaluationIntervalInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.property.evaluationIntervalInput"></a>

```java
public java.lang.String getEvaluationIntervalInput();
```

- *Type:* java.lang.String

---

##### `formulaInput`<sup>Optional</sup> <a name="formulaInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.property.formulaInput"></a>

```java
public java.lang.String getFormulaInput();
```

- *Type:* java.lang.String

---

##### `evaluationInterval`<sup>Required</sup> <a name="evaluationInterval" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.property.evaluationInterval"></a>

```java
public java.lang.String getEvaluationInterval();
```

- *Type:* java.lang.String

---

##### `formula`<sup>Required</sup> <a name="formula" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.property.formula"></a>

```java
public java.lang.String getFormula();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.property.internalValue"></a>

```java
public BatchPoolAutoScale getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScale">BatchPoolAutoScale</a>

---


### BatchPoolCertificateList <a name="BatchPoolCertificateList" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolCertificateList;

new BatchPoolCertificateList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.get"></a>

```java
public BatchPoolCertificateOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificate">BatchPoolCertificate</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificate">BatchPoolCertificate</a>>

---


### BatchPoolCertificateOutputReference <a name="BatchPoolCertificateOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolCertificateOutputReference;

new BatchPoolCertificateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.resetStoreName">resetStoreName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.resetVisibility">resetVisibility</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStoreName` <a name="resetStoreName" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.resetStoreName"></a>

```java
public void resetStoreName()
```

##### `resetVisibility` <a name="resetVisibility" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.resetVisibility"></a>

```java
public void resetVisibility()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.storeLocationInput">storeLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.storeNameInput">storeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.visibilityInput">visibilityInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.storeLocation">storeLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.storeName">storeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.visibility">visibility</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificate">BatchPoolCertificate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `storeLocationInput`<sup>Optional</sup> <a name="storeLocationInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.storeLocationInput"></a>

```java
public java.lang.String getStoreLocationInput();
```

- *Type:* java.lang.String

---

##### `storeNameInput`<sup>Optional</sup> <a name="storeNameInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.storeNameInput"></a>

```java
public java.lang.String getStoreNameInput();
```

- *Type:* java.lang.String

---

##### `visibilityInput`<sup>Optional</sup> <a name="visibilityInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.visibilityInput"></a>

```java
public java.util.List<java.lang.String> getVisibilityInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `storeLocation`<sup>Required</sup> <a name="storeLocation" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.storeLocation"></a>

```java
public java.lang.String getStoreLocation();
```

- *Type:* java.lang.String

---

##### `storeName`<sup>Required</sup> <a name="storeName" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.storeName"></a>

```java
public java.lang.String getStoreName();
```

- *Type:* java.lang.String

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.visibility"></a>

```java
public java.util.List<java.lang.String> getVisibility();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificate">BatchPoolCertificate</a>

---


### BatchPoolContainerConfigurationContainerRegistriesList <a name="BatchPoolContainerConfigurationContainerRegistriesList" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolContainerConfigurationContainerRegistriesList;

new BatchPoolContainerConfigurationContainerRegistriesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.get"></a>

```java
public BatchPoolContainerConfigurationContainerRegistriesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistries">BatchPoolContainerConfigurationContainerRegistries</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistries">BatchPoolContainerConfigurationContainerRegistries</a>>

---


### BatchPoolContainerConfigurationContainerRegistriesOutputReference <a name="BatchPoolContainerConfigurationContainerRegistriesOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolContainerConfigurationContainerRegistriesOutputReference;

new BatchPoolContainerConfigurationContainerRegistriesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.resetRegistryServer">resetRegistryServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.resetUserAssignedIdentityId">resetUserAssignedIdentityId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.resetUserName">resetUserName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetRegistryServer` <a name="resetRegistryServer" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.resetRegistryServer"></a>

```java
public void resetRegistryServer()
```

##### `resetUserAssignedIdentityId` <a name="resetUserAssignedIdentityId" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.resetUserAssignedIdentityId"></a>

```java
public void resetUserAssignedIdentityId()
```

##### `resetUserName` <a name="resetUserName" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.resetUserName"></a>

```java
public void resetUserName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.registryServerInput">registryServerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.userAssignedIdentityIdInput">userAssignedIdentityIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.userNameInput">userNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.registryServer">registryServer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.userAssignedIdentityId">userAssignedIdentityId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.userName">userName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistries">BatchPoolContainerConfigurationContainerRegistries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `registryServerInput`<sup>Optional</sup> <a name="registryServerInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.registryServerInput"></a>

```java
public java.lang.String getRegistryServerInput();
```

- *Type:* java.lang.String

---

##### `userAssignedIdentityIdInput`<sup>Optional</sup> <a name="userAssignedIdentityIdInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.userAssignedIdentityIdInput"></a>

```java
public java.lang.String getUserAssignedIdentityIdInput();
```

- *Type:* java.lang.String

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.userNameInput"></a>

```java
public java.lang.String getUserNameInput();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `registryServer`<sup>Required</sup> <a name="registryServer" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.registryServer"></a>

```java
public java.lang.String getRegistryServer();
```

- *Type:* java.lang.String

---

##### `userAssignedIdentityId`<sup>Required</sup> <a name="userAssignedIdentityId" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.userAssignedIdentityId"></a>

```java
public java.lang.String getUserAssignedIdentityId();
```

- *Type:* java.lang.String

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistries">BatchPoolContainerConfigurationContainerRegistries</a>

---


### BatchPoolContainerConfigurationOutputReference <a name="BatchPoolContainerConfigurationOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolContainerConfigurationOutputReference;

new BatchPoolContainerConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.putContainerRegistries">putContainerRegistries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.resetContainerImageNames">resetContainerImageNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.resetContainerRegistries">resetContainerRegistries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContainerRegistries` <a name="putContainerRegistries" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.putContainerRegistries"></a>

```java
public void putContainerRegistries(IResolvable OR java.util.List<BatchPoolContainerConfigurationContainerRegistries> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.putContainerRegistries.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistries">BatchPoolContainerConfigurationContainerRegistries</a>>

---

##### `resetContainerImageNames` <a name="resetContainerImageNames" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.resetContainerImageNames"></a>

```java
public void resetContainerImageNames()
```

##### `resetContainerRegistries` <a name="resetContainerRegistries" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.resetContainerRegistries"></a>

```java
public void resetContainerRegistries()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.property.containerRegistries">containerRegistries</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList">BatchPoolContainerConfigurationContainerRegistriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.property.containerImageNamesInput">containerImageNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.property.containerRegistriesInput">containerRegistriesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistries">BatchPoolContainerConfigurationContainerRegistries</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.property.containerImageNames">containerImageNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfiguration">BatchPoolContainerConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containerRegistries`<sup>Required</sup> <a name="containerRegistries" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.property.containerRegistries"></a>

```java
public BatchPoolContainerConfigurationContainerRegistriesList getContainerRegistries();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList">BatchPoolContainerConfigurationContainerRegistriesList</a>

---

##### `containerImageNamesInput`<sup>Optional</sup> <a name="containerImageNamesInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.property.containerImageNamesInput"></a>

```java
public java.util.List<java.lang.String> getContainerImageNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `containerRegistriesInput`<sup>Optional</sup> <a name="containerRegistriesInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.property.containerRegistriesInput"></a>

```java
public java.lang.Object getContainerRegistriesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistries">BatchPoolContainerConfigurationContainerRegistries</a>>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `containerImageNames`<sup>Required</sup> <a name="containerImageNames" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.property.containerImageNames"></a>

```java
public java.util.List<java.lang.String> getContainerImageNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.property.internalValue"></a>

```java
public BatchPoolContainerConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfiguration">BatchPoolContainerConfiguration</a>

---


### BatchPoolDataDisksList <a name="BatchPoolDataDisksList" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolDataDisksList;

new BatchPoolDataDisksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.get"></a>

```java
public BatchPoolDataDisksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisks">BatchPoolDataDisks</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisks">BatchPoolDataDisks</a>>

---


### BatchPoolDataDisksOutputReference <a name="BatchPoolDataDisksOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolDataDisksOutputReference;

new BatchPoolDataDisksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.resetCaching">resetCaching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.resetStorageAccountType">resetStorageAccountType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCaching` <a name="resetCaching" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.resetCaching"></a>

```java
public void resetCaching()
```

##### `resetStorageAccountType` <a name="resetStorageAccountType" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.resetStorageAccountType"></a>

```java
public void resetStorageAccountType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.cachingInput">cachingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.diskSizeGbInput">diskSizeGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.lunInput">lunInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.storageAccountTypeInput">storageAccountTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.caching">caching</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.diskSizeGb">diskSizeGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.lun">lun</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.storageAccountType">storageAccountType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisks">BatchPoolDataDisks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cachingInput`<sup>Optional</sup> <a name="cachingInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.cachingInput"></a>

```java
public java.lang.String getCachingInput();
```

- *Type:* java.lang.String

---

##### `diskSizeGbInput`<sup>Optional</sup> <a name="diskSizeGbInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.diskSizeGbInput"></a>

```java
public java.lang.Number getDiskSizeGbInput();
```

- *Type:* java.lang.Number

---

##### `lunInput`<sup>Optional</sup> <a name="lunInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.lunInput"></a>

```java
public java.lang.Number getLunInput();
```

- *Type:* java.lang.Number

---

##### `storageAccountTypeInput`<sup>Optional</sup> <a name="storageAccountTypeInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.storageAccountTypeInput"></a>

```java
public java.lang.String getStorageAccountTypeInput();
```

- *Type:* java.lang.String

---

##### `caching`<sup>Required</sup> <a name="caching" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.caching"></a>

```java
public java.lang.String getCaching();
```

- *Type:* java.lang.String

---

##### `diskSizeGb`<sup>Required</sup> <a name="diskSizeGb" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.diskSizeGb"></a>

```java
public java.lang.Number getDiskSizeGb();
```

- *Type:* java.lang.Number

---

##### `lun`<sup>Required</sup> <a name="lun" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.lun"></a>

```java
public java.lang.Number getLun();
```

- *Type:* java.lang.Number

---

##### `storageAccountType`<sup>Required</sup> <a name="storageAccountType" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.storageAccountType"></a>

```java
public java.lang.String getStorageAccountType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisks">BatchPoolDataDisks</a>

---


### BatchPoolDiskEncryptionList <a name="BatchPoolDiskEncryptionList" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolDiskEncryptionList;

new BatchPoolDiskEncryptionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.get"></a>

```java
public BatchPoolDiskEncryptionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryption">BatchPoolDiskEncryption</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryption">BatchPoolDiskEncryption</a>>

---


### BatchPoolDiskEncryptionOutputReference <a name="BatchPoolDiskEncryptionOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolDiskEncryptionOutputReference;

new BatchPoolDiskEncryptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.property.diskEncryptionTargetInput">diskEncryptionTargetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.property.diskEncryptionTarget">diskEncryptionTarget</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryption">BatchPoolDiskEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `diskEncryptionTargetInput`<sup>Optional</sup> <a name="diskEncryptionTargetInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.property.diskEncryptionTargetInput"></a>

```java
public java.lang.String getDiskEncryptionTargetInput();
```

- *Type:* java.lang.String

---

##### `diskEncryptionTarget`<sup>Required</sup> <a name="diskEncryptionTarget" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.property.diskEncryptionTarget"></a>

```java
public java.lang.String getDiskEncryptionTarget();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryption">BatchPoolDiskEncryption</a>

---


### BatchPoolExtensionsList <a name="BatchPoolExtensionsList" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolExtensionsList;

new BatchPoolExtensionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.get"></a>

```java
public BatchPoolExtensionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensions">BatchPoolExtensions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensions">BatchPoolExtensions</a>>

---


### BatchPoolExtensionsOutputReference <a name="BatchPoolExtensionsOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolExtensionsOutputReference;

new BatchPoolExtensionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.resetAutomaticUpgradeEnabled">resetAutomaticUpgradeEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.resetAutoUpgradeMinorVersion">resetAutoUpgradeMinorVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.resetProtectedSettings">resetProtectedSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.resetProvisionAfterExtensions">resetProvisionAfterExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.resetSettingsJson">resetSettingsJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.resetTypeHandlerVersion">resetTypeHandlerVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutomaticUpgradeEnabled` <a name="resetAutomaticUpgradeEnabled" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.resetAutomaticUpgradeEnabled"></a>

```java
public void resetAutomaticUpgradeEnabled()
```

##### `resetAutoUpgradeMinorVersion` <a name="resetAutoUpgradeMinorVersion" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.resetAutoUpgradeMinorVersion"></a>

```java
public void resetAutoUpgradeMinorVersion()
```

##### `resetProtectedSettings` <a name="resetProtectedSettings" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.resetProtectedSettings"></a>

```java
public void resetProtectedSettings()
```

##### `resetProvisionAfterExtensions` <a name="resetProvisionAfterExtensions" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.resetProvisionAfterExtensions"></a>

```java
public void resetProvisionAfterExtensions()
```

##### `resetSettingsJson` <a name="resetSettingsJson" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.resetSettingsJson"></a>

```java
public void resetSettingsJson()
```

##### `resetTypeHandlerVersion` <a name="resetTypeHandlerVersion" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.resetTypeHandlerVersion"></a>

```java
public void resetTypeHandlerVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.automaticUpgradeEnabledInput">automaticUpgradeEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.autoUpgradeMinorVersionInput">autoUpgradeMinorVersionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.protectedSettingsInput">protectedSettingsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.provisionAfterExtensionsInput">provisionAfterExtensionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.publisherInput">publisherInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.settingsJsonInput">settingsJsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.typeHandlerVersionInput">typeHandlerVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.automaticUpgradeEnabled">automaticUpgradeEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.autoUpgradeMinorVersion">autoUpgradeMinorVersion</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.protectedSettings">protectedSettings</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.provisionAfterExtensions">provisionAfterExtensions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.publisher">publisher</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.settingsJson">settingsJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.typeHandlerVersion">typeHandlerVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensions">BatchPoolExtensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `automaticUpgradeEnabledInput`<sup>Optional</sup> <a name="automaticUpgradeEnabledInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.automaticUpgradeEnabledInput"></a>

```java
public java.lang.Object getAutomaticUpgradeEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoUpgradeMinorVersionInput`<sup>Optional</sup> <a name="autoUpgradeMinorVersionInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.autoUpgradeMinorVersionInput"></a>

```java
public java.lang.Object getAutoUpgradeMinorVersionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `protectedSettingsInput`<sup>Optional</sup> <a name="protectedSettingsInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.protectedSettingsInput"></a>

```java
public java.lang.String getProtectedSettingsInput();
```

- *Type:* java.lang.String

---

##### `provisionAfterExtensionsInput`<sup>Optional</sup> <a name="provisionAfterExtensionsInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.provisionAfterExtensionsInput"></a>

```java
public java.util.List<java.lang.String> getProvisionAfterExtensionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `publisherInput`<sup>Optional</sup> <a name="publisherInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.publisherInput"></a>

```java
public java.lang.String getPublisherInput();
```

- *Type:* java.lang.String

---

##### `settingsJsonInput`<sup>Optional</sup> <a name="settingsJsonInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.settingsJsonInput"></a>

```java
public java.lang.String getSettingsJsonInput();
```

- *Type:* java.lang.String

---

##### `typeHandlerVersionInput`<sup>Optional</sup> <a name="typeHandlerVersionInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.typeHandlerVersionInput"></a>

```java
public java.lang.String getTypeHandlerVersionInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `automaticUpgradeEnabled`<sup>Required</sup> <a name="automaticUpgradeEnabled" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.automaticUpgradeEnabled"></a>

```java
public java.lang.Object getAutomaticUpgradeEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoUpgradeMinorVersion`<sup>Required</sup> <a name="autoUpgradeMinorVersion" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.autoUpgradeMinorVersion"></a>

```java
public java.lang.Object getAutoUpgradeMinorVersion();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `protectedSettings`<sup>Required</sup> <a name="protectedSettings" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.protectedSettings"></a>

```java
public java.lang.String getProtectedSettings();
```

- *Type:* java.lang.String

---

##### `provisionAfterExtensions`<sup>Required</sup> <a name="provisionAfterExtensions" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.provisionAfterExtensions"></a>

```java
public java.util.List<java.lang.String> getProvisionAfterExtensions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.publisher"></a>

```java
public java.lang.String getPublisher();
```

- *Type:* java.lang.String

---

##### `settingsJson`<sup>Required</sup> <a name="settingsJson" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.settingsJson"></a>

```java
public java.lang.String getSettingsJson();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `typeHandlerVersion`<sup>Required</sup> <a name="typeHandlerVersion" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.typeHandlerVersion"></a>

```java
public java.lang.String getTypeHandlerVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensions">BatchPoolExtensions</a>

---


### BatchPoolFixedScaleOutputReference <a name="BatchPoolFixedScaleOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolFixedScaleOutputReference;

new BatchPoolFixedScaleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.resetNodeDeallocationMethod">resetNodeDeallocationMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.resetResizeTimeout">resetResizeTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.resetTargetDedicatedNodes">resetTargetDedicatedNodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.resetTargetLowPriorityNodes">resetTargetLowPriorityNodes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNodeDeallocationMethod` <a name="resetNodeDeallocationMethod" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.resetNodeDeallocationMethod"></a>

```java
public void resetNodeDeallocationMethod()
```

##### `resetResizeTimeout` <a name="resetResizeTimeout" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.resetResizeTimeout"></a>

```java
public void resetResizeTimeout()
```

##### `resetTargetDedicatedNodes` <a name="resetTargetDedicatedNodes" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.resetTargetDedicatedNodes"></a>

```java
public void resetTargetDedicatedNodes()
```

##### `resetTargetLowPriorityNodes` <a name="resetTargetLowPriorityNodes" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.resetTargetLowPriorityNodes"></a>

```java
public void resetTargetLowPriorityNodes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.nodeDeallocationMethodInput">nodeDeallocationMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.resizeTimeoutInput">resizeTimeoutInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.targetDedicatedNodesInput">targetDedicatedNodesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.targetLowPriorityNodesInput">targetLowPriorityNodesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.nodeDeallocationMethod">nodeDeallocationMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.resizeTimeout">resizeTimeout</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.targetDedicatedNodes">targetDedicatedNodes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.targetLowPriorityNodes">targetLowPriorityNodes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScale">BatchPoolFixedScale</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nodeDeallocationMethodInput`<sup>Optional</sup> <a name="nodeDeallocationMethodInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.nodeDeallocationMethodInput"></a>

```java
public java.lang.String getNodeDeallocationMethodInput();
```

- *Type:* java.lang.String

---

##### `resizeTimeoutInput`<sup>Optional</sup> <a name="resizeTimeoutInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.resizeTimeoutInput"></a>

```java
public java.lang.String getResizeTimeoutInput();
```

- *Type:* java.lang.String

---

##### `targetDedicatedNodesInput`<sup>Optional</sup> <a name="targetDedicatedNodesInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.targetDedicatedNodesInput"></a>

```java
public java.lang.Number getTargetDedicatedNodesInput();
```

- *Type:* java.lang.Number

---

##### `targetLowPriorityNodesInput`<sup>Optional</sup> <a name="targetLowPriorityNodesInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.targetLowPriorityNodesInput"></a>

```java
public java.lang.Number getTargetLowPriorityNodesInput();
```

- *Type:* java.lang.Number

---

##### `nodeDeallocationMethod`<sup>Required</sup> <a name="nodeDeallocationMethod" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.nodeDeallocationMethod"></a>

```java
public java.lang.String getNodeDeallocationMethod();
```

- *Type:* java.lang.String

---

##### `resizeTimeout`<sup>Required</sup> <a name="resizeTimeout" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.resizeTimeout"></a>

```java
public java.lang.String getResizeTimeout();
```

- *Type:* java.lang.String

---

##### `targetDedicatedNodes`<sup>Required</sup> <a name="targetDedicatedNodes" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.targetDedicatedNodes"></a>

```java
public java.lang.Number getTargetDedicatedNodes();
```

- *Type:* java.lang.Number

---

##### `targetLowPriorityNodes`<sup>Required</sup> <a name="targetLowPriorityNodes" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.targetLowPriorityNodes"></a>

```java
public java.lang.Number getTargetLowPriorityNodes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.internalValue"></a>

```java
public BatchPoolFixedScale getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScale">BatchPoolFixedScale</a>

---


### BatchPoolIdentityOutputReference <a name="BatchPoolIdentityOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolIdentityOutputReference;

new BatchPoolIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentity">BatchPoolIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.property.identityIdsInput"></a>

```java
public java.util.List<java.lang.String> getIdentityIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.property.internalValue"></a>

```java
public BatchPoolIdentity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentity">BatchPoolIdentity</a>

---


### BatchPoolMountAzureBlobFileSystemOutputReference <a name="BatchPoolMountAzureBlobFileSystemOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolMountAzureBlobFileSystemOutputReference;

new BatchPoolMountAzureBlobFileSystemOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.resetAccountKey">resetAccountKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.resetBlobfuseOptions">resetBlobfuseOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.resetIdentityId">resetIdentityId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.resetSasKey">resetSasKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccountKey` <a name="resetAccountKey" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.resetAccountKey"></a>

```java
public void resetAccountKey()
```

##### `resetBlobfuseOptions` <a name="resetBlobfuseOptions" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.resetBlobfuseOptions"></a>

```java
public void resetBlobfuseOptions()
```

##### `resetIdentityId` <a name="resetIdentityId" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.resetIdentityId"></a>

```java
public void resetIdentityId()
```

##### `resetSasKey` <a name="resetSasKey" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.resetSasKey"></a>

```java
public void resetSasKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.accountKeyInput">accountKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.accountNameInput">accountNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.blobfuseOptionsInput">blobfuseOptionsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.containerNameInput">containerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.identityIdInput">identityIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.relativeMountPathInput">relativeMountPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.sasKeyInput">sasKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.accountKey">accountKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.accountName">accountName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.blobfuseOptions">blobfuseOptions</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.containerName">containerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.identityId">identityId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.relativeMountPath">relativeMountPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.sasKey">sasKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem">BatchPoolMountAzureBlobFileSystem</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accountKeyInput`<sup>Optional</sup> <a name="accountKeyInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.accountKeyInput"></a>

```java
public java.lang.String getAccountKeyInput();
```

- *Type:* java.lang.String

---

##### `accountNameInput`<sup>Optional</sup> <a name="accountNameInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.accountNameInput"></a>

```java
public java.lang.String getAccountNameInput();
```

- *Type:* java.lang.String

---

##### `blobfuseOptionsInput`<sup>Optional</sup> <a name="blobfuseOptionsInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.blobfuseOptionsInput"></a>

```java
public java.lang.String getBlobfuseOptionsInput();
```

- *Type:* java.lang.String

---

##### `containerNameInput`<sup>Optional</sup> <a name="containerNameInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.containerNameInput"></a>

```java
public java.lang.String getContainerNameInput();
```

- *Type:* java.lang.String

---

##### `identityIdInput`<sup>Optional</sup> <a name="identityIdInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.identityIdInput"></a>

```java
public java.lang.String getIdentityIdInput();
```

- *Type:* java.lang.String

---

##### `relativeMountPathInput`<sup>Optional</sup> <a name="relativeMountPathInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.relativeMountPathInput"></a>

```java
public java.lang.String getRelativeMountPathInput();
```

- *Type:* java.lang.String

---

##### `sasKeyInput`<sup>Optional</sup> <a name="sasKeyInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.sasKeyInput"></a>

```java
public java.lang.String getSasKeyInput();
```

- *Type:* java.lang.String

---

##### `accountKey`<sup>Required</sup> <a name="accountKey" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.accountKey"></a>

```java
public java.lang.String getAccountKey();
```

- *Type:* java.lang.String

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.accountName"></a>

```java
public java.lang.String getAccountName();
```

- *Type:* java.lang.String

---

##### `blobfuseOptions`<sup>Required</sup> <a name="blobfuseOptions" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.blobfuseOptions"></a>

```java
public java.lang.String getBlobfuseOptions();
```

- *Type:* java.lang.String

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.containerName"></a>

```java
public java.lang.String getContainerName();
```

- *Type:* java.lang.String

---

##### `identityId`<sup>Required</sup> <a name="identityId" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.identityId"></a>

```java
public java.lang.String getIdentityId();
```

- *Type:* java.lang.String

---

##### `relativeMountPath`<sup>Required</sup> <a name="relativeMountPath" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.relativeMountPath"></a>

```java
public java.lang.String getRelativeMountPath();
```

- *Type:* java.lang.String

---

##### `sasKey`<sup>Required</sup> <a name="sasKey" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.sasKey"></a>

```java
public java.lang.String getSasKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.internalValue"></a>

```java
public BatchPoolMountAzureBlobFileSystem getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem">BatchPoolMountAzureBlobFileSystem</a>

---


### BatchPoolMountAzureFileShareList <a name="BatchPoolMountAzureFileShareList" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolMountAzureFileShareList;

new BatchPoolMountAzureFileShareList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.get"></a>

```java
public BatchPoolMountAzureFileShareOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShare">BatchPoolMountAzureFileShare</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShare">BatchPoolMountAzureFileShare</a>>

---


### BatchPoolMountAzureFileShareOutputReference <a name="BatchPoolMountAzureFileShareOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolMountAzureFileShareOutputReference;

new BatchPoolMountAzureFileShareOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.resetMountOptions">resetMountOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMountOptions` <a name="resetMountOptions" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.resetMountOptions"></a>

```java
public void resetMountOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.accountKeyInput">accountKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.accountNameInput">accountNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.azureFileUrlInput">azureFileUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.mountOptionsInput">mountOptionsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.relativeMountPathInput">relativeMountPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.accountKey">accountKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.accountName">accountName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.azureFileUrl">azureFileUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.mountOptions">mountOptions</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.relativeMountPath">relativeMountPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShare">BatchPoolMountAzureFileShare</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accountKeyInput`<sup>Optional</sup> <a name="accountKeyInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.accountKeyInput"></a>

```java
public java.lang.String getAccountKeyInput();
```

- *Type:* java.lang.String

---

##### `accountNameInput`<sup>Optional</sup> <a name="accountNameInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.accountNameInput"></a>

```java
public java.lang.String getAccountNameInput();
```

- *Type:* java.lang.String

---

##### `azureFileUrlInput`<sup>Optional</sup> <a name="azureFileUrlInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.azureFileUrlInput"></a>

```java
public java.lang.String getAzureFileUrlInput();
```

- *Type:* java.lang.String

---

##### `mountOptionsInput`<sup>Optional</sup> <a name="mountOptionsInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.mountOptionsInput"></a>

```java
public java.lang.String getMountOptionsInput();
```

- *Type:* java.lang.String

---

##### `relativeMountPathInput`<sup>Optional</sup> <a name="relativeMountPathInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.relativeMountPathInput"></a>

```java
public java.lang.String getRelativeMountPathInput();
```

- *Type:* java.lang.String

---

##### `accountKey`<sup>Required</sup> <a name="accountKey" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.accountKey"></a>

```java
public java.lang.String getAccountKey();
```

- *Type:* java.lang.String

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.accountName"></a>

```java
public java.lang.String getAccountName();
```

- *Type:* java.lang.String

---

##### `azureFileUrl`<sup>Required</sup> <a name="azureFileUrl" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.azureFileUrl"></a>

```java
public java.lang.String getAzureFileUrl();
```

- *Type:* java.lang.String

---

##### `mountOptions`<sup>Required</sup> <a name="mountOptions" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.mountOptions"></a>

```java
public java.lang.String getMountOptions();
```

- *Type:* java.lang.String

---

##### `relativeMountPath`<sup>Required</sup> <a name="relativeMountPath" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.relativeMountPath"></a>

```java
public java.lang.String getRelativeMountPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShare">BatchPoolMountAzureFileShare</a>

---


### BatchPoolMountCifsMountList <a name="BatchPoolMountCifsMountList" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolMountCifsMountList;

new BatchPoolMountCifsMountList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.get"></a>

```java
public BatchPoolMountCifsMountOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMount">BatchPoolMountCifsMount</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMount">BatchPoolMountCifsMount</a>>

---


### BatchPoolMountCifsMountOutputReference <a name="BatchPoolMountCifsMountOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolMountCifsMountOutputReference;

new BatchPoolMountCifsMountOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.resetMountOptions">resetMountOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMountOptions` <a name="resetMountOptions" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.resetMountOptions"></a>

```java
public void resetMountOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.mountOptionsInput">mountOptionsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.relativeMountPathInput">relativeMountPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.sourceInput">sourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.userNameInput">userNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.mountOptions">mountOptions</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.relativeMountPath">relativeMountPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.userName">userName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMount">BatchPoolMountCifsMount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mountOptionsInput`<sup>Optional</sup> <a name="mountOptionsInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.mountOptionsInput"></a>

```java
public java.lang.String getMountOptionsInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `relativeMountPathInput`<sup>Optional</sup> <a name="relativeMountPathInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.relativeMountPathInput"></a>

```java
public java.lang.String getRelativeMountPathInput();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.sourceInput"></a>

```java
public java.lang.String getSourceInput();
```

- *Type:* java.lang.String

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.userNameInput"></a>

```java
public java.lang.String getUserNameInput();
```

- *Type:* java.lang.String

---

##### `mountOptions`<sup>Required</sup> <a name="mountOptions" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.mountOptions"></a>

```java
public java.lang.String getMountOptions();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `relativeMountPath`<sup>Required</sup> <a name="relativeMountPath" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.relativeMountPath"></a>

```java
public java.lang.String getRelativeMountPath();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMount">BatchPoolMountCifsMount</a>

---


### BatchPoolMountList <a name="BatchPoolMountList" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolMountList;

new BatchPoolMountList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountList.get"></a>

```java
public BatchPoolMountOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMount">BatchPoolMount</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMount">BatchPoolMount</a>>

---


### BatchPoolMountNfsMountList <a name="BatchPoolMountNfsMountList" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolMountNfsMountList;

new BatchPoolMountNfsMountList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.get"></a>

```java
public BatchPoolMountNfsMountOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMount">BatchPoolMountNfsMount</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMount">BatchPoolMountNfsMount</a>>

---


### BatchPoolMountNfsMountOutputReference <a name="BatchPoolMountNfsMountOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolMountNfsMountOutputReference;

new BatchPoolMountNfsMountOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.resetMountOptions">resetMountOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMountOptions` <a name="resetMountOptions" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.resetMountOptions"></a>

```java
public void resetMountOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.property.mountOptionsInput">mountOptionsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.property.relativeMountPathInput">relativeMountPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.property.sourceInput">sourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.property.mountOptions">mountOptions</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.property.relativeMountPath">relativeMountPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMount">BatchPoolMountNfsMount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mountOptionsInput`<sup>Optional</sup> <a name="mountOptionsInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.property.mountOptionsInput"></a>

```java
public java.lang.String getMountOptionsInput();
```

- *Type:* java.lang.String

---

##### `relativeMountPathInput`<sup>Optional</sup> <a name="relativeMountPathInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.property.relativeMountPathInput"></a>

```java
public java.lang.String getRelativeMountPathInput();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.property.sourceInput"></a>

```java
public java.lang.String getSourceInput();
```

- *Type:* java.lang.String

---

##### `mountOptions`<sup>Required</sup> <a name="mountOptions" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.property.mountOptions"></a>

```java
public java.lang.String getMountOptions();
```

- *Type:* java.lang.String

---

##### `relativeMountPath`<sup>Required</sup> <a name="relativeMountPath" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.property.relativeMountPath"></a>

```java
public java.lang.String getRelativeMountPath();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMount">BatchPoolMountNfsMount</a>

---


### BatchPoolMountOutputReference <a name="BatchPoolMountOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolMountOutputReference;

new BatchPoolMountOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.putAzureBlobFileSystem">putAzureBlobFileSystem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.putAzureFileShare">putAzureFileShare</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.putCifsMount">putCifsMount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.putNfsMount">putNfsMount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.resetAzureBlobFileSystem">resetAzureBlobFileSystem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.resetAzureFileShare">resetAzureFileShare</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.resetCifsMount">resetCifsMount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.resetNfsMount">resetNfsMount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAzureBlobFileSystem` <a name="putAzureBlobFileSystem" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.putAzureBlobFileSystem"></a>

```java
public void putAzureBlobFileSystem(BatchPoolMountAzureBlobFileSystem value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.putAzureBlobFileSystem.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem">BatchPoolMountAzureBlobFileSystem</a>

---

##### `putAzureFileShare` <a name="putAzureFileShare" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.putAzureFileShare"></a>

```java
public void putAzureFileShare(IResolvable OR java.util.List<BatchPoolMountAzureFileShare> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.putAzureFileShare.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShare">BatchPoolMountAzureFileShare</a>>

---

##### `putCifsMount` <a name="putCifsMount" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.putCifsMount"></a>

```java
public void putCifsMount(IResolvable OR java.util.List<BatchPoolMountCifsMount> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.putCifsMount.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMount">BatchPoolMountCifsMount</a>>

---

##### `putNfsMount` <a name="putNfsMount" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.putNfsMount"></a>

```java
public void putNfsMount(IResolvable OR java.util.List<BatchPoolMountNfsMount> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.putNfsMount.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMount">BatchPoolMountNfsMount</a>>

---

##### `resetAzureBlobFileSystem` <a name="resetAzureBlobFileSystem" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.resetAzureBlobFileSystem"></a>

```java
public void resetAzureBlobFileSystem()
```

##### `resetAzureFileShare` <a name="resetAzureFileShare" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.resetAzureFileShare"></a>

```java
public void resetAzureFileShare()
```

##### `resetCifsMount` <a name="resetCifsMount" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.resetCifsMount"></a>

```java
public void resetCifsMount()
```

##### `resetNfsMount` <a name="resetNfsMount" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.resetNfsMount"></a>

```java
public void resetNfsMount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.azureBlobFileSystem">azureBlobFileSystem</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference">BatchPoolMountAzureBlobFileSystemOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.azureFileShare">azureFileShare</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList">BatchPoolMountAzureFileShareList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.cifsMount">cifsMount</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList">BatchPoolMountCifsMountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.nfsMount">nfsMount</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList">BatchPoolMountNfsMountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.azureBlobFileSystemInput">azureBlobFileSystemInput</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem">BatchPoolMountAzureBlobFileSystem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.azureFileShareInput">azureFileShareInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShare">BatchPoolMountAzureFileShare</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.cifsMountInput">cifsMountInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMount">BatchPoolMountCifsMount</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.nfsMountInput">nfsMountInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMount">BatchPoolMountNfsMount</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMount">BatchPoolMount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `azureBlobFileSystem`<sup>Required</sup> <a name="azureBlobFileSystem" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.azureBlobFileSystem"></a>

```java
public BatchPoolMountAzureBlobFileSystemOutputReference getAzureBlobFileSystem();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference">BatchPoolMountAzureBlobFileSystemOutputReference</a>

---

##### `azureFileShare`<sup>Required</sup> <a name="azureFileShare" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.azureFileShare"></a>

```java
public BatchPoolMountAzureFileShareList getAzureFileShare();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList">BatchPoolMountAzureFileShareList</a>

---

##### `cifsMount`<sup>Required</sup> <a name="cifsMount" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.cifsMount"></a>

```java
public BatchPoolMountCifsMountList getCifsMount();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList">BatchPoolMountCifsMountList</a>

---

##### `nfsMount`<sup>Required</sup> <a name="nfsMount" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.nfsMount"></a>

```java
public BatchPoolMountNfsMountList getNfsMount();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList">BatchPoolMountNfsMountList</a>

---

##### `azureBlobFileSystemInput`<sup>Optional</sup> <a name="azureBlobFileSystemInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.azureBlobFileSystemInput"></a>

```java
public BatchPoolMountAzureBlobFileSystem getAzureBlobFileSystemInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem">BatchPoolMountAzureBlobFileSystem</a>

---

##### `azureFileShareInput`<sup>Optional</sup> <a name="azureFileShareInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.azureFileShareInput"></a>

```java
public java.lang.Object getAzureFileShareInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShare">BatchPoolMountAzureFileShare</a>>

---

##### `cifsMountInput`<sup>Optional</sup> <a name="cifsMountInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.cifsMountInput"></a>

```java
public java.lang.Object getCifsMountInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMount">BatchPoolMountCifsMount</a>>

---

##### `nfsMountInput`<sup>Optional</sup> <a name="nfsMountInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.nfsMountInput"></a>

```java
public java.lang.Object getNfsMountInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMount">BatchPoolMountNfsMount</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMount">BatchPoolMount</a>

---


### BatchPoolNetworkConfigurationEndpointConfigurationList <a name="BatchPoolNetworkConfigurationEndpointConfigurationList" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolNetworkConfigurationEndpointConfigurationList;

new BatchPoolNetworkConfigurationEndpointConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.get"></a>

```java
public BatchPoolNetworkConfigurationEndpointConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfiguration">BatchPoolNetworkConfigurationEndpointConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfiguration">BatchPoolNetworkConfigurationEndpointConfiguration</a>>

---


### BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList <a name="BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList;

new BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.get"></a>

```java
public BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules">BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules">BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules</a>>

---


### BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference <a name="BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference;

new BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.resetSourcePortRanges">resetSourcePortRanges</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSourcePortRanges` <a name="resetSourcePortRanges" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.resetSourcePortRanges"></a>

```java
public void resetSourcePortRanges()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.accessInput">accessInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.sourceAddressPrefixInput">sourceAddressPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.sourcePortRangesInput">sourcePortRangesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.access">access</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.sourceAddressPrefix">sourceAddressPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.sourcePortRanges">sourcePortRanges</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules">BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessInput`<sup>Optional</sup> <a name="accessInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.accessInput"></a>

```java
public java.lang.String getAccessInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `sourceAddressPrefixInput`<sup>Optional</sup> <a name="sourceAddressPrefixInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.sourceAddressPrefixInput"></a>

```java
public java.lang.String getSourceAddressPrefixInput();
```

- *Type:* java.lang.String

---

##### `sourcePortRangesInput`<sup>Optional</sup> <a name="sourcePortRangesInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.sourcePortRangesInput"></a>

```java
public java.util.List<java.lang.String> getSourcePortRangesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `access`<sup>Required</sup> <a name="access" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.access"></a>

```java
public java.lang.String getAccess();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `sourceAddressPrefix`<sup>Required</sup> <a name="sourceAddressPrefix" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.sourceAddressPrefix"></a>

```java
public java.lang.String getSourceAddressPrefix();
```

- *Type:* java.lang.String

---

##### `sourcePortRanges`<sup>Required</sup> <a name="sourcePortRanges" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.sourcePortRanges"></a>

```java
public java.util.List<java.lang.String> getSourcePortRanges();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules">BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules</a>

---


### BatchPoolNetworkConfigurationEndpointConfigurationOutputReference <a name="BatchPoolNetworkConfigurationEndpointConfigurationOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference;

new BatchPoolNetworkConfigurationEndpointConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.putNetworkSecurityGroupRules">putNetworkSecurityGroupRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.resetNetworkSecurityGroupRules">resetNetworkSecurityGroupRules</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNetworkSecurityGroupRules` <a name="putNetworkSecurityGroupRules" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.putNetworkSecurityGroupRules"></a>

```java
public void putNetworkSecurityGroupRules(IResolvable OR java.util.List<BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.putNetworkSecurityGroupRules.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules">BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules</a>>

---

##### `resetNetworkSecurityGroupRules` <a name="resetNetworkSecurityGroupRules" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.resetNetworkSecurityGroupRules"></a>

```java
public void resetNetworkSecurityGroupRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.networkSecurityGroupRules">networkSecurityGroupRules</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList">BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.backendPortInput">backendPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.frontendPortRangeInput">frontendPortRangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.networkSecurityGroupRulesInput">networkSecurityGroupRulesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules">BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.backendPort">backendPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.frontendPortRange">frontendPortRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfiguration">BatchPoolNetworkConfigurationEndpointConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `networkSecurityGroupRules`<sup>Required</sup> <a name="networkSecurityGroupRules" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.networkSecurityGroupRules"></a>

```java
public BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList getNetworkSecurityGroupRules();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList">BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList</a>

---

##### `backendPortInput`<sup>Optional</sup> <a name="backendPortInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.backendPortInput"></a>

```java
public java.lang.Number getBackendPortInput();
```

- *Type:* java.lang.Number

---

##### `frontendPortRangeInput`<sup>Optional</sup> <a name="frontendPortRangeInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.frontendPortRangeInput"></a>

```java
public java.lang.String getFrontendPortRangeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkSecurityGroupRulesInput`<sup>Optional</sup> <a name="networkSecurityGroupRulesInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.networkSecurityGroupRulesInput"></a>

```java
public java.lang.Object getNetworkSecurityGroupRulesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules">BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules</a>>

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `backendPort`<sup>Required</sup> <a name="backendPort" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.backendPort"></a>

```java
public java.lang.Number getBackendPort();
```

- *Type:* java.lang.Number

---

##### `frontendPortRange`<sup>Required</sup> <a name="frontendPortRange" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.frontendPortRange"></a>

```java
public java.lang.String getFrontendPortRange();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfiguration">BatchPoolNetworkConfigurationEndpointConfiguration</a>

---


### BatchPoolNetworkConfigurationOutputReference <a name="BatchPoolNetworkConfigurationOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolNetworkConfigurationOutputReference;

new BatchPoolNetworkConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.putEndpointConfiguration">putEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.resetAcceleratedNetworkingEnabled">resetAcceleratedNetworkingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.resetDynamicVnetAssignmentScope">resetDynamicVnetAssignmentScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.resetEndpointConfiguration">resetEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.resetPublicAddressProvisioningType">resetPublicAddressProvisioningType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.resetPublicIps">resetPublicIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.resetSubnetId">resetSubnetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEndpointConfiguration` <a name="putEndpointConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.putEndpointConfiguration"></a>

```java
public void putEndpointConfiguration(IResolvable OR java.util.List<BatchPoolNetworkConfigurationEndpointConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.putEndpointConfiguration.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfiguration">BatchPoolNetworkConfigurationEndpointConfiguration</a>>

---

##### `resetAcceleratedNetworkingEnabled` <a name="resetAcceleratedNetworkingEnabled" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.resetAcceleratedNetworkingEnabled"></a>

```java
public void resetAcceleratedNetworkingEnabled()
```

##### `resetDynamicVnetAssignmentScope` <a name="resetDynamicVnetAssignmentScope" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.resetDynamicVnetAssignmentScope"></a>

```java
public void resetDynamicVnetAssignmentScope()
```

##### `resetEndpointConfiguration` <a name="resetEndpointConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.resetEndpointConfiguration"></a>

```java
public void resetEndpointConfiguration()
```

##### `resetPublicAddressProvisioningType` <a name="resetPublicAddressProvisioningType" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.resetPublicAddressProvisioningType"></a>

```java
public void resetPublicAddressProvisioningType()
```

##### `resetPublicIps` <a name="resetPublicIps" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.resetPublicIps"></a>

```java
public void resetPublicIps()
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.resetSubnetId"></a>

```java
public void resetSubnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.endpointConfiguration">endpointConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList">BatchPoolNetworkConfigurationEndpointConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.acceleratedNetworkingEnabledInput">acceleratedNetworkingEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.dynamicVnetAssignmentScopeInput">dynamicVnetAssignmentScopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.endpointConfigurationInput">endpointConfigurationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfiguration">BatchPoolNetworkConfigurationEndpointConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.publicAddressProvisioningTypeInput">publicAddressProvisioningTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.publicIpsInput">publicIpsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.acceleratedNetworkingEnabled">acceleratedNetworkingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.dynamicVnetAssignmentScope">dynamicVnetAssignmentScope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.publicAddressProvisioningType">publicAddressProvisioningType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.publicIps">publicIps</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration">BatchPoolNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endpointConfiguration`<sup>Required</sup> <a name="endpointConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.endpointConfiguration"></a>

```java
public BatchPoolNetworkConfigurationEndpointConfigurationList getEndpointConfiguration();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList">BatchPoolNetworkConfigurationEndpointConfigurationList</a>

---

##### `acceleratedNetworkingEnabledInput`<sup>Optional</sup> <a name="acceleratedNetworkingEnabledInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.acceleratedNetworkingEnabledInput"></a>

```java
public java.lang.Object getAcceleratedNetworkingEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dynamicVnetAssignmentScopeInput`<sup>Optional</sup> <a name="dynamicVnetAssignmentScopeInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.dynamicVnetAssignmentScopeInput"></a>

```java
public java.lang.String getDynamicVnetAssignmentScopeInput();
```

- *Type:* java.lang.String

---

##### `endpointConfigurationInput`<sup>Optional</sup> <a name="endpointConfigurationInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.endpointConfigurationInput"></a>

```java
public java.lang.Object getEndpointConfigurationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfiguration">BatchPoolNetworkConfigurationEndpointConfiguration</a>>

---

##### `publicAddressProvisioningTypeInput`<sup>Optional</sup> <a name="publicAddressProvisioningTypeInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.publicAddressProvisioningTypeInput"></a>

```java
public java.lang.String getPublicAddressProvisioningTypeInput();
```

- *Type:* java.lang.String

---

##### `publicIpsInput`<sup>Optional</sup> <a name="publicIpsInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.publicIpsInput"></a>

```java
public java.util.List<java.lang.String> getPublicIpsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `acceleratedNetworkingEnabled`<sup>Required</sup> <a name="acceleratedNetworkingEnabled" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.acceleratedNetworkingEnabled"></a>

```java
public java.lang.Object getAcceleratedNetworkingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dynamicVnetAssignmentScope`<sup>Required</sup> <a name="dynamicVnetAssignmentScope" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.dynamicVnetAssignmentScope"></a>

```java
public java.lang.String getDynamicVnetAssignmentScope();
```

- *Type:* java.lang.String

---

##### `publicAddressProvisioningType`<sup>Required</sup> <a name="publicAddressProvisioningType" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.publicAddressProvisioningType"></a>

```java
public java.lang.String getPublicAddressProvisioningType();
```

- *Type:* java.lang.String

---

##### `publicIps`<sup>Required</sup> <a name="publicIps" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.publicIps"></a>

```java
public java.util.List<java.lang.String> getPublicIps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.internalValue"></a>

```java
public BatchPoolNetworkConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration">BatchPoolNetworkConfiguration</a>

---


### BatchPoolNodePlacementList <a name="BatchPoolNodePlacementList" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolNodePlacementList;

new BatchPoolNodePlacementList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.get"></a>

```java
public BatchPoolNodePlacementOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacement">BatchPoolNodePlacement</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacement">BatchPoolNodePlacement</a>>

---


### BatchPoolNodePlacementOutputReference <a name="BatchPoolNodePlacementOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolNodePlacementOutputReference;

new BatchPoolNodePlacementOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.resetPolicy">resetPolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPolicy` <a name="resetPolicy" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.resetPolicy"></a>

```java
public void resetPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.property.policyInput">policyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.property.policy">policy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacement">BatchPoolNodePlacement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.property.policyInput"></a>

```java
public java.lang.String getPolicyInput();
```

- *Type:* java.lang.String

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.property.policy"></a>

```java
public java.lang.String getPolicy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacement">BatchPoolNodePlacement</a>

---


### BatchPoolStartTaskContainerList <a name="BatchPoolStartTaskContainerList" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolStartTaskContainerList;

new BatchPoolStartTaskContainerList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.get"></a>

```java
public BatchPoolStartTaskContainerOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainer">BatchPoolStartTaskContainer</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainer">BatchPoolStartTaskContainer</a>>

---


### BatchPoolStartTaskContainerOutputReference <a name="BatchPoolStartTaskContainerOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolStartTaskContainerOutputReference;

new BatchPoolStartTaskContainerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.putRegistry">putRegistry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.resetRegistry">resetRegistry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.resetRunOptions">resetRunOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.resetWorkingDirectory">resetWorkingDirectory</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRegistry` <a name="putRegistry" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.putRegistry"></a>

```java
public void putRegistry(IResolvable OR java.util.List<BatchPoolStartTaskContainerRegistry> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.putRegistry.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistry">BatchPoolStartTaskContainerRegistry</a>>

---

##### `resetRegistry` <a name="resetRegistry" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.resetRegistry"></a>

```java
public void resetRegistry()
```

##### `resetRunOptions` <a name="resetRunOptions" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.resetRunOptions"></a>

```java
public void resetRunOptions()
```

##### `resetWorkingDirectory` <a name="resetWorkingDirectory" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.resetWorkingDirectory"></a>

```java
public void resetWorkingDirectory()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.registry">registry</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList">BatchPoolStartTaskContainerRegistryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.imageNameInput">imageNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.registryInput">registryInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistry">BatchPoolStartTaskContainerRegistry</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.runOptionsInput">runOptionsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.workingDirectoryInput">workingDirectoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.imageName">imageName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.runOptions">runOptions</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.workingDirectory">workingDirectory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainer">BatchPoolStartTaskContainer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `registry`<sup>Required</sup> <a name="registry" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.registry"></a>

```java
public BatchPoolStartTaskContainerRegistryList getRegistry();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList">BatchPoolStartTaskContainerRegistryList</a>

---

##### `imageNameInput`<sup>Optional</sup> <a name="imageNameInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.imageNameInput"></a>

```java
public java.lang.String getImageNameInput();
```

- *Type:* java.lang.String

---

##### `registryInput`<sup>Optional</sup> <a name="registryInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.registryInput"></a>

```java
public java.lang.Object getRegistryInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistry">BatchPoolStartTaskContainerRegistry</a>>

---

##### `runOptionsInput`<sup>Optional</sup> <a name="runOptionsInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.runOptionsInput"></a>

```java
public java.lang.String getRunOptionsInput();
```

- *Type:* java.lang.String

---

##### `workingDirectoryInput`<sup>Optional</sup> <a name="workingDirectoryInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.workingDirectoryInput"></a>

```java
public java.lang.String getWorkingDirectoryInput();
```

- *Type:* java.lang.String

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.imageName"></a>

```java
public java.lang.String getImageName();
```

- *Type:* java.lang.String

---

##### `runOptions`<sup>Required</sup> <a name="runOptions" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.runOptions"></a>

```java
public java.lang.String getRunOptions();
```

- *Type:* java.lang.String

---

##### `workingDirectory`<sup>Required</sup> <a name="workingDirectory" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.workingDirectory"></a>

```java
public java.lang.String getWorkingDirectory();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainer">BatchPoolStartTaskContainer</a>

---


### BatchPoolStartTaskContainerRegistryList <a name="BatchPoolStartTaskContainerRegistryList" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolStartTaskContainerRegistryList;

new BatchPoolStartTaskContainerRegistryList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.get"></a>

```java
public BatchPoolStartTaskContainerRegistryOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistry">BatchPoolStartTaskContainerRegistry</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistry">BatchPoolStartTaskContainerRegistry</a>>

---


### BatchPoolStartTaskContainerRegistryOutputReference <a name="BatchPoolStartTaskContainerRegistryOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolStartTaskContainerRegistryOutputReference;

new BatchPoolStartTaskContainerRegistryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.resetUserAssignedIdentityId">resetUserAssignedIdentityId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.resetUserName">resetUserName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetUserAssignedIdentityId` <a name="resetUserAssignedIdentityId" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.resetUserAssignedIdentityId"></a>

```java
public void resetUserAssignedIdentityId()
```

##### `resetUserName` <a name="resetUserName" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.resetUserName"></a>

```java
public void resetUserName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.registryServerInput">registryServerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.userAssignedIdentityIdInput">userAssignedIdentityIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.userNameInput">userNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.registryServer">registryServer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.userAssignedIdentityId">userAssignedIdentityId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.userName">userName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistry">BatchPoolStartTaskContainerRegistry</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `registryServerInput`<sup>Optional</sup> <a name="registryServerInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.registryServerInput"></a>

```java
public java.lang.String getRegistryServerInput();
```

- *Type:* java.lang.String

---

##### `userAssignedIdentityIdInput`<sup>Optional</sup> <a name="userAssignedIdentityIdInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.userAssignedIdentityIdInput"></a>

```java
public java.lang.String getUserAssignedIdentityIdInput();
```

- *Type:* java.lang.String

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.userNameInput"></a>

```java
public java.lang.String getUserNameInput();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `registryServer`<sup>Required</sup> <a name="registryServer" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.registryServer"></a>

```java
public java.lang.String getRegistryServer();
```

- *Type:* java.lang.String

---

##### `userAssignedIdentityId`<sup>Required</sup> <a name="userAssignedIdentityId" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.userAssignedIdentityId"></a>

```java
public java.lang.String getUserAssignedIdentityId();
```

- *Type:* java.lang.String

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistry">BatchPoolStartTaskContainerRegistry</a>

---


### BatchPoolStartTaskOutputReference <a name="BatchPoolStartTaskOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolStartTaskOutputReference;

new BatchPoolStartTaskOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.putContainer">putContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.putResourceFile">putResourceFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.putUserIdentity">putUserIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.resetCommonEnvironmentProperties">resetCommonEnvironmentProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.resetContainer">resetContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.resetResourceFile">resetResourceFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.resetTaskRetryMaximum">resetTaskRetryMaximum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.resetWaitForSuccess">resetWaitForSuccess</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContainer` <a name="putContainer" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.putContainer"></a>

```java
public void putContainer(IResolvable OR java.util.List<BatchPoolStartTaskContainer> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.putContainer.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainer">BatchPoolStartTaskContainer</a>>

---

##### `putResourceFile` <a name="putResourceFile" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.putResourceFile"></a>

```java
public void putResourceFile(IResolvable OR java.util.List<BatchPoolStartTaskResourceFile> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.putResourceFile.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile">BatchPoolStartTaskResourceFile</a>>

---

##### `putUserIdentity` <a name="putUserIdentity" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.putUserIdentity"></a>

```java
public void putUserIdentity(BatchPoolStartTaskUserIdentity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.putUserIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentity">BatchPoolStartTaskUserIdentity</a>

---

##### `resetCommonEnvironmentProperties` <a name="resetCommonEnvironmentProperties" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.resetCommonEnvironmentProperties"></a>

```java
public void resetCommonEnvironmentProperties()
```

##### `resetContainer` <a name="resetContainer" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.resetContainer"></a>

```java
public void resetContainer()
```

##### `resetResourceFile` <a name="resetResourceFile" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.resetResourceFile"></a>

```java
public void resetResourceFile()
```

##### `resetTaskRetryMaximum` <a name="resetTaskRetryMaximum" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.resetTaskRetryMaximum"></a>

```java
public void resetTaskRetryMaximum()
```

##### `resetWaitForSuccess` <a name="resetWaitForSuccess" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.resetWaitForSuccess"></a>

```java
public void resetWaitForSuccess()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.container">container</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList">BatchPoolStartTaskContainerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.resourceFile">resourceFile</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList">BatchPoolStartTaskResourceFileList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.userIdentity">userIdentity</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference">BatchPoolStartTaskUserIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.commandLineInput">commandLineInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.commonEnvironmentPropertiesInput">commonEnvironmentPropertiesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.containerInput">containerInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainer">BatchPoolStartTaskContainer</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.resourceFileInput">resourceFileInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile">BatchPoolStartTaskResourceFile</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.taskRetryMaximumInput">taskRetryMaximumInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.userIdentityInput">userIdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentity">BatchPoolStartTaskUserIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.waitForSuccessInput">waitForSuccessInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.commandLine">commandLine</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.commonEnvironmentProperties">commonEnvironmentProperties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.taskRetryMaximum">taskRetryMaximum</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.waitForSuccess">waitForSuccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTask">BatchPoolStartTask</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.container"></a>

```java
public BatchPoolStartTaskContainerList getContainer();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList">BatchPoolStartTaskContainerList</a>

---

##### `resourceFile`<sup>Required</sup> <a name="resourceFile" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.resourceFile"></a>

```java
public BatchPoolStartTaskResourceFileList getResourceFile();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList">BatchPoolStartTaskResourceFileList</a>

---

##### `userIdentity`<sup>Required</sup> <a name="userIdentity" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.userIdentity"></a>

```java
public BatchPoolStartTaskUserIdentityOutputReference getUserIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference">BatchPoolStartTaskUserIdentityOutputReference</a>

---

##### `commandLineInput`<sup>Optional</sup> <a name="commandLineInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.commandLineInput"></a>

```java
public java.lang.String getCommandLineInput();
```

- *Type:* java.lang.String

---

##### `commonEnvironmentPropertiesInput`<sup>Optional</sup> <a name="commonEnvironmentPropertiesInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.commonEnvironmentPropertiesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCommonEnvironmentPropertiesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `containerInput`<sup>Optional</sup> <a name="containerInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.containerInput"></a>

```java
public java.lang.Object getContainerInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainer">BatchPoolStartTaskContainer</a>>

---

##### `resourceFileInput`<sup>Optional</sup> <a name="resourceFileInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.resourceFileInput"></a>

```java
public java.lang.Object getResourceFileInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile">BatchPoolStartTaskResourceFile</a>>

---

##### `taskRetryMaximumInput`<sup>Optional</sup> <a name="taskRetryMaximumInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.taskRetryMaximumInput"></a>

```java
public java.lang.Number getTaskRetryMaximumInput();
```

- *Type:* java.lang.Number

---

##### `userIdentityInput`<sup>Optional</sup> <a name="userIdentityInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.userIdentityInput"></a>

```java
public BatchPoolStartTaskUserIdentity getUserIdentityInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentity">BatchPoolStartTaskUserIdentity</a>

---

##### `waitForSuccessInput`<sup>Optional</sup> <a name="waitForSuccessInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.waitForSuccessInput"></a>

```java
public java.lang.Object getWaitForSuccessInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `commandLine`<sup>Required</sup> <a name="commandLine" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.commandLine"></a>

```java
public java.lang.String getCommandLine();
```

- *Type:* java.lang.String

---

##### `commonEnvironmentProperties`<sup>Required</sup> <a name="commonEnvironmentProperties" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.commonEnvironmentProperties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCommonEnvironmentProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `taskRetryMaximum`<sup>Required</sup> <a name="taskRetryMaximum" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.taskRetryMaximum"></a>

```java
public java.lang.Number getTaskRetryMaximum();
```

- *Type:* java.lang.Number

---

##### `waitForSuccess`<sup>Required</sup> <a name="waitForSuccess" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.waitForSuccess"></a>

```java
public java.lang.Object getWaitForSuccess();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.internalValue"></a>

```java
public BatchPoolStartTask getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTask">BatchPoolStartTask</a>

---


### BatchPoolStartTaskResourceFileList <a name="BatchPoolStartTaskResourceFileList" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolStartTaskResourceFileList;

new BatchPoolStartTaskResourceFileList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.get"></a>

```java
public BatchPoolStartTaskResourceFileOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile">BatchPoolStartTaskResourceFile</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile">BatchPoolStartTaskResourceFile</a>>

---


### BatchPoolStartTaskResourceFileOutputReference <a name="BatchPoolStartTaskResourceFileOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolStartTaskResourceFileOutputReference;

new BatchPoolStartTaskResourceFileOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.resetAutoStorageContainerName">resetAutoStorageContainerName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.resetBlobPrefix">resetBlobPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.resetFileMode">resetFileMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.resetFilePath">resetFilePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.resetHttpUrl">resetHttpUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.resetStorageContainerUrl">resetStorageContainerUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.resetUserAssignedIdentityId">resetUserAssignedIdentityId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutoStorageContainerName` <a name="resetAutoStorageContainerName" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.resetAutoStorageContainerName"></a>

```java
public void resetAutoStorageContainerName()
```

##### `resetBlobPrefix` <a name="resetBlobPrefix" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.resetBlobPrefix"></a>

```java
public void resetBlobPrefix()
```

##### `resetFileMode` <a name="resetFileMode" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.resetFileMode"></a>

```java
public void resetFileMode()
```

##### `resetFilePath` <a name="resetFilePath" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.resetFilePath"></a>

```java
public void resetFilePath()
```

##### `resetHttpUrl` <a name="resetHttpUrl" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.resetHttpUrl"></a>

```java
public void resetHttpUrl()
```

##### `resetStorageContainerUrl` <a name="resetStorageContainerUrl" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.resetStorageContainerUrl"></a>

```java
public void resetStorageContainerUrl()
```

##### `resetUserAssignedIdentityId` <a name="resetUserAssignedIdentityId" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.resetUserAssignedIdentityId"></a>

```java
public void resetUserAssignedIdentityId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.autoStorageContainerNameInput">autoStorageContainerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.blobPrefixInput">blobPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.fileModeInput">fileModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.filePathInput">filePathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.httpUrlInput">httpUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.storageContainerUrlInput">storageContainerUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.userAssignedIdentityIdInput">userAssignedIdentityIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.autoStorageContainerName">autoStorageContainerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.blobPrefix">blobPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.fileMode">fileMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.filePath">filePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.httpUrl">httpUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.storageContainerUrl">storageContainerUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.userAssignedIdentityId">userAssignedIdentityId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile">BatchPoolStartTaskResourceFile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoStorageContainerNameInput`<sup>Optional</sup> <a name="autoStorageContainerNameInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.autoStorageContainerNameInput"></a>

```java
public java.lang.String getAutoStorageContainerNameInput();
```

- *Type:* java.lang.String

---

##### `blobPrefixInput`<sup>Optional</sup> <a name="blobPrefixInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.blobPrefixInput"></a>

```java
public java.lang.String getBlobPrefixInput();
```

- *Type:* java.lang.String

---

##### `fileModeInput`<sup>Optional</sup> <a name="fileModeInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.fileModeInput"></a>

```java
public java.lang.String getFileModeInput();
```

- *Type:* java.lang.String

---

##### `filePathInput`<sup>Optional</sup> <a name="filePathInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.filePathInput"></a>

```java
public java.lang.String getFilePathInput();
```

- *Type:* java.lang.String

---

##### `httpUrlInput`<sup>Optional</sup> <a name="httpUrlInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.httpUrlInput"></a>

```java
public java.lang.String getHttpUrlInput();
```

- *Type:* java.lang.String

---

##### `storageContainerUrlInput`<sup>Optional</sup> <a name="storageContainerUrlInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.storageContainerUrlInput"></a>

```java
public java.lang.String getStorageContainerUrlInput();
```

- *Type:* java.lang.String

---

##### `userAssignedIdentityIdInput`<sup>Optional</sup> <a name="userAssignedIdentityIdInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.userAssignedIdentityIdInput"></a>

```java
public java.lang.String getUserAssignedIdentityIdInput();
```

- *Type:* java.lang.String

---

##### `autoStorageContainerName`<sup>Required</sup> <a name="autoStorageContainerName" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.autoStorageContainerName"></a>

```java
public java.lang.String getAutoStorageContainerName();
```

- *Type:* java.lang.String

---

##### `blobPrefix`<sup>Required</sup> <a name="blobPrefix" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.blobPrefix"></a>

```java
public java.lang.String getBlobPrefix();
```

- *Type:* java.lang.String

---

##### `fileMode`<sup>Required</sup> <a name="fileMode" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.fileMode"></a>

```java
public java.lang.String getFileMode();
```

- *Type:* java.lang.String

---

##### `filePath`<sup>Required</sup> <a name="filePath" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.filePath"></a>

```java
public java.lang.String getFilePath();
```

- *Type:* java.lang.String

---

##### `httpUrl`<sup>Required</sup> <a name="httpUrl" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.httpUrl"></a>

```java
public java.lang.String getHttpUrl();
```

- *Type:* java.lang.String

---

##### `storageContainerUrl`<sup>Required</sup> <a name="storageContainerUrl" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.storageContainerUrl"></a>

```java
public java.lang.String getStorageContainerUrl();
```

- *Type:* java.lang.String

---

##### `userAssignedIdentityId`<sup>Required</sup> <a name="userAssignedIdentityId" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.userAssignedIdentityId"></a>

```java
public java.lang.String getUserAssignedIdentityId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile">BatchPoolStartTaskResourceFile</a>

---


### BatchPoolStartTaskUserIdentityAutoUserOutputReference <a name="BatchPoolStartTaskUserIdentityAutoUserOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolStartTaskUserIdentityAutoUserOutputReference;

new BatchPoolStartTaskUserIdentityAutoUserOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.resetElevationLevel">resetElevationLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.resetScope">resetScope</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetElevationLevel` <a name="resetElevationLevel" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.resetElevationLevel"></a>

```java
public void resetElevationLevel()
```

##### `resetScope` <a name="resetScope" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.resetScope"></a>

```java
public void resetScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.property.elevationLevelInput">elevationLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.property.scopeInput">scopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.property.elevationLevel">elevationLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUser">BatchPoolStartTaskUserIdentityAutoUser</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `elevationLevelInput`<sup>Optional</sup> <a name="elevationLevelInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.property.elevationLevelInput"></a>

```java
public java.lang.String getElevationLevelInput();
```

- *Type:* java.lang.String

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.property.scopeInput"></a>

```java
public java.lang.String getScopeInput();
```

- *Type:* java.lang.String

---

##### `elevationLevel`<sup>Required</sup> <a name="elevationLevel" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.property.elevationLevel"></a>

```java
public java.lang.String getElevationLevel();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.property.internalValue"></a>

```java
public BatchPoolStartTaskUserIdentityAutoUser getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUser">BatchPoolStartTaskUserIdentityAutoUser</a>

---


### BatchPoolStartTaskUserIdentityOutputReference <a name="BatchPoolStartTaskUserIdentityOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolStartTaskUserIdentityOutputReference;

new BatchPoolStartTaskUserIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.putAutoUser">putAutoUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.resetAutoUser">resetAutoUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.resetUserName">resetUserName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAutoUser` <a name="putAutoUser" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.putAutoUser"></a>

```java
public void putAutoUser(BatchPoolStartTaskUserIdentityAutoUser value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.putAutoUser.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUser">BatchPoolStartTaskUserIdentityAutoUser</a>

---

##### `resetAutoUser` <a name="resetAutoUser" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.resetAutoUser"></a>

```java
public void resetAutoUser()
```

##### `resetUserName` <a name="resetUserName" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.resetUserName"></a>

```java
public void resetUserName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.property.autoUser">autoUser</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference">BatchPoolStartTaskUserIdentityAutoUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.property.autoUserInput">autoUserInput</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUser">BatchPoolStartTaskUserIdentityAutoUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.property.userNameInput">userNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.property.userName">userName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentity">BatchPoolStartTaskUserIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoUser`<sup>Required</sup> <a name="autoUser" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.property.autoUser"></a>

```java
public BatchPoolStartTaskUserIdentityAutoUserOutputReference getAutoUser();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference">BatchPoolStartTaskUserIdentityAutoUserOutputReference</a>

---

##### `autoUserInput`<sup>Optional</sup> <a name="autoUserInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.property.autoUserInput"></a>

```java
public BatchPoolStartTaskUserIdentityAutoUser getAutoUserInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUser">BatchPoolStartTaskUserIdentityAutoUser</a>

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.property.userNameInput"></a>

```java
public java.lang.String getUserNameInput();
```

- *Type:* java.lang.String

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.property.internalValue"></a>

```java
public BatchPoolStartTaskUserIdentity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentity">BatchPoolStartTaskUserIdentity</a>

---


### BatchPoolStorageImageReferenceOutputReference <a name="BatchPoolStorageImageReferenceOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolStorageImageReferenceOutputReference;

new BatchPoolStorageImageReferenceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.resetOffer">resetOffer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.resetPublisher">resetPublisher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.resetSku">resetSku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetOffer` <a name="resetOffer" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.resetOffer"></a>

```java
public void resetOffer()
```

##### `resetPublisher` <a name="resetPublisher" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.resetPublisher"></a>

```java
public void resetPublisher()
```

##### `resetSku` <a name="resetSku" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.resetSku"></a>

```java
public void resetSku()
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.offerInput">offerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.publisherInput">publisherInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.skuInput">skuInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.offer">offer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.publisher">publisher</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.sku">sku</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference">BatchPoolStorageImageReference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `offerInput`<sup>Optional</sup> <a name="offerInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.offerInput"></a>

```java
public java.lang.String getOfferInput();
```

- *Type:* java.lang.String

---

##### `publisherInput`<sup>Optional</sup> <a name="publisherInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.publisherInput"></a>

```java
public java.lang.String getPublisherInput();
```

- *Type:* java.lang.String

---

##### `skuInput`<sup>Optional</sup> <a name="skuInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.skuInput"></a>

```java
public java.lang.String getSkuInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `offer`<sup>Required</sup> <a name="offer" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.offer"></a>

```java
public java.lang.String getOffer();
```

- *Type:* java.lang.String

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.publisher"></a>

```java
public java.lang.String getPublisher();
```

- *Type:* java.lang.String

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.sku"></a>

```java
public java.lang.String getSku();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.internalValue"></a>

```java
public BatchPoolStorageImageReference getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference">BatchPoolStorageImageReference</a>

---


### BatchPoolTaskSchedulingPolicyList <a name="BatchPoolTaskSchedulingPolicyList" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolTaskSchedulingPolicyList;

new BatchPoolTaskSchedulingPolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.get"></a>

```java
public BatchPoolTaskSchedulingPolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicy">BatchPoolTaskSchedulingPolicy</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicy">BatchPoolTaskSchedulingPolicy</a>>

---


### BatchPoolTaskSchedulingPolicyOutputReference <a name="BatchPoolTaskSchedulingPolicyOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolTaskSchedulingPolicyOutputReference;

new BatchPoolTaskSchedulingPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.resetNodeFillType">resetNodeFillType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNodeFillType` <a name="resetNodeFillType" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.resetNodeFillType"></a>

```java
public void resetNodeFillType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.property.nodeFillTypeInput">nodeFillTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.property.nodeFillType">nodeFillType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicy">BatchPoolTaskSchedulingPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nodeFillTypeInput`<sup>Optional</sup> <a name="nodeFillTypeInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.property.nodeFillTypeInput"></a>

```java
public java.lang.String getNodeFillTypeInput();
```

- *Type:* java.lang.String

---

##### `nodeFillType`<sup>Required</sup> <a name="nodeFillType" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.property.nodeFillType"></a>

```java
public java.lang.String getNodeFillType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicy">BatchPoolTaskSchedulingPolicy</a>

---


### BatchPoolTimeoutsOutputReference <a name="BatchPoolTimeoutsOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolTimeoutsOutputReference;

new BatchPoolTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeouts">BatchPoolTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeouts">BatchPoolTimeouts</a>

---


### BatchPoolUserAccountsLinuxUserConfigurationList <a name="BatchPoolUserAccountsLinuxUserConfigurationList" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolUserAccountsLinuxUserConfigurationList;

new BatchPoolUserAccountsLinuxUserConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.get"></a>

```java
public BatchPoolUserAccountsLinuxUserConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfiguration">BatchPoolUserAccountsLinuxUserConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfiguration">BatchPoolUserAccountsLinuxUserConfiguration</a>>

---


### BatchPoolUserAccountsLinuxUserConfigurationOutputReference <a name="BatchPoolUserAccountsLinuxUserConfigurationOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference;

new BatchPoolUserAccountsLinuxUserConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.resetGid">resetGid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.resetSshPrivateKey">resetSshPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.resetUid">resetUid</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGid` <a name="resetGid" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.resetGid"></a>

```java
public void resetGid()
```

##### `resetSshPrivateKey` <a name="resetSshPrivateKey" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.resetSshPrivateKey"></a>

```java
public void resetSshPrivateKey()
```

##### `resetUid` <a name="resetUid" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.resetUid"></a>

```java
public void resetUid()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.gidInput">gidInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.sshPrivateKeyInput">sshPrivateKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.uidInput">uidInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.gid">gid</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.sshPrivateKey">sshPrivateKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.uid">uid</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfiguration">BatchPoolUserAccountsLinuxUserConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `gidInput`<sup>Optional</sup> <a name="gidInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.gidInput"></a>

```java
public java.lang.Number getGidInput();
```

- *Type:* java.lang.Number

---

##### `sshPrivateKeyInput`<sup>Optional</sup> <a name="sshPrivateKeyInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.sshPrivateKeyInput"></a>

```java
public java.lang.String getSshPrivateKeyInput();
```

- *Type:* java.lang.String

---

##### `uidInput`<sup>Optional</sup> <a name="uidInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.uidInput"></a>

```java
public java.lang.Number getUidInput();
```

- *Type:* java.lang.Number

---

##### `gid`<sup>Required</sup> <a name="gid" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.gid"></a>

```java
public java.lang.Number getGid();
```

- *Type:* java.lang.Number

---

##### `sshPrivateKey`<sup>Required</sup> <a name="sshPrivateKey" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.sshPrivateKey"></a>

```java
public java.lang.String getSshPrivateKey();
```

- *Type:* java.lang.String

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.uid"></a>

```java
public java.lang.Number getUid();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfiguration">BatchPoolUserAccountsLinuxUserConfiguration</a>

---


### BatchPoolUserAccountsList <a name="BatchPoolUserAccountsList" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolUserAccountsList;

new BatchPoolUserAccountsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.get"></a>

```java
public BatchPoolUserAccountsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts">BatchPoolUserAccounts</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts">BatchPoolUserAccounts</a>>

---


### BatchPoolUserAccountsOutputReference <a name="BatchPoolUserAccountsOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolUserAccountsOutputReference;

new BatchPoolUserAccountsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.putLinuxUserConfiguration">putLinuxUserConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.putWindowsUserConfiguration">putWindowsUserConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.resetLinuxUserConfiguration">resetLinuxUserConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.resetWindowsUserConfiguration">resetWindowsUserConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLinuxUserConfiguration` <a name="putLinuxUserConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.putLinuxUserConfiguration"></a>

```java
public void putLinuxUserConfiguration(IResolvable OR java.util.List<BatchPoolUserAccountsLinuxUserConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.putLinuxUserConfiguration.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfiguration">BatchPoolUserAccountsLinuxUserConfiguration</a>>

---

##### `putWindowsUserConfiguration` <a name="putWindowsUserConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.putWindowsUserConfiguration"></a>

```java
public void putWindowsUserConfiguration(IResolvable OR java.util.List<BatchPoolUserAccountsWindowsUserConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.putWindowsUserConfiguration.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfiguration">BatchPoolUserAccountsWindowsUserConfiguration</a>>

---

##### `resetLinuxUserConfiguration` <a name="resetLinuxUserConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.resetLinuxUserConfiguration"></a>

```java
public void resetLinuxUserConfiguration()
```

##### `resetWindowsUserConfiguration` <a name="resetWindowsUserConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.resetWindowsUserConfiguration"></a>

```java
public void resetWindowsUserConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.linuxUserConfiguration">linuxUserConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList">BatchPoolUserAccountsLinuxUserConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.windowsUserConfiguration">windowsUserConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList">BatchPoolUserAccountsWindowsUserConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.elevationLevelInput">elevationLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.linuxUserConfigurationInput">linuxUserConfigurationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfiguration">BatchPoolUserAccountsLinuxUserConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.windowsUserConfigurationInput">windowsUserConfigurationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfiguration">BatchPoolUserAccountsWindowsUserConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.elevationLevel">elevationLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts">BatchPoolUserAccounts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `linuxUserConfiguration`<sup>Required</sup> <a name="linuxUserConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.linuxUserConfiguration"></a>

```java
public BatchPoolUserAccountsLinuxUserConfigurationList getLinuxUserConfiguration();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList">BatchPoolUserAccountsLinuxUserConfigurationList</a>

---

##### `windowsUserConfiguration`<sup>Required</sup> <a name="windowsUserConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.windowsUserConfiguration"></a>

```java
public BatchPoolUserAccountsWindowsUserConfigurationList getWindowsUserConfiguration();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList">BatchPoolUserAccountsWindowsUserConfigurationList</a>

---

##### `elevationLevelInput`<sup>Optional</sup> <a name="elevationLevelInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.elevationLevelInput"></a>

```java
public java.lang.String getElevationLevelInput();
```

- *Type:* java.lang.String

---

##### `linuxUserConfigurationInput`<sup>Optional</sup> <a name="linuxUserConfigurationInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.linuxUserConfigurationInput"></a>

```java
public java.lang.Object getLinuxUserConfigurationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfiguration">BatchPoolUserAccountsLinuxUserConfiguration</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `windowsUserConfigurationInput`<sup>Optional</sup> <a name="windowsUserConfigurationInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.windowsUserConfigurationInput"></a>

```java
public java.lang.Object getWindowsUserConfigurationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfiguration">BatchPoolUserAccountsWindowsUserConfiguration</a>>

---

##### `elevationLevel`<sup>Required</sup> <a name="elevationLevel" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.elevationLevel"></a>

```java
public java.lang.String getElevationLevel();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts">BatchPoolUserAccounts</a>

---


### BatchPoolUserAccountsWindowsUserConfigurationList <a name="BatchPoolUserAccountsWindowsUserConfigurationList" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolUserAccountsWindowsUserConfigurationList;

new BatchPoolUserAccountsWindowsUserConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.get"></a>

```java
public BatchPoolUserAccountsWindowsUserConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfiguration">BatchPoolUserAccountsWindowsUserConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfiguration">BatchPoolUserAccountsWindowsUserConfiguration</a>>

---


### BatchPoolUserAccountsWindowsUserConfigurationOutputReference <a name="BatchPoolUserAccountsWindowsUserConfigurationOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference;

new BatchPoolUserAccountsWindowsUserConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.property.loginModeInput">loginModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.property.loginMode">loginMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfiguration">BatchPoolUserAccountsWindowsUserConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `loginModeInput`<sup>Optional</sup> <a name="loginModeInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.property.loginModeInput"></a>

```java
public java.lang.String getLoginModeInput();
```

- *Type:* java.lang.String

---

##### `loginMode`<sup>Required</sup> <a name="loginMode" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.property.loginMode"></a>

```java
public java.lang.String getLoginMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfiguration">BatchPoolUserAccountsWindowsUserConfiguration</a>

---


### BatchPoolWindowsList <a name="BatchPoolWindowsList" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolWindowsList;

new BatchPoolWindowsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.get"></a>

```java
public BatchPoolWindowsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindows">BatchPoolWindows</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindows">BatchPoolWindows</a>>

---


### BatchPoolWindowsOutputReference <a name="BatchPoolWindowsOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_pool.BatchPoolWindowsOutputReference;

new BatchPoolWindowsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.resetEnableAutomaticUpdates">resetEnableAutomaticUpdates</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableAutomaticUpdates` <a name="resetEnableAutomaticUpdates" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.resetEnableAutomaticUpdates"></a>

```java
public void resetEnableAutomaticUpdates()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.property.enableAutomaticUpdatesInput">enableAutomaticUpdatesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.property.enableAutomaticUpdates">enableAutomaticUpdates</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindows">BatchPoolWindows</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableAutomaticUpdatesInput`<sup>Optional</sup> <a name="enableAutomaticUpdatesInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.property.enableAutomaticUpdatesInput"></a>

```java
public java.lang.Object getEnableAutomaticUpdatesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableAutomaticUpdates`<sup>Required</sup> <a name="enableAutomaticUpdates" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.property.enableAutomaticUpdates"></a>

```java
public java.lang.Object getEnableAutomaticUpdates();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindows">BatchPoolWindows</a>

---



