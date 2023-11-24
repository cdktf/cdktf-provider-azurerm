# `azurerm_synapse_spark_pool`

Refer to the Terraform Registory for docs: [`azurerm_synapse_spark_pool`](https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool).

# `synapseSparkPool` Submodule <a name="`synapseSparkPool` Submodule" id="@cdktf/provider-azurerm.synapseSparkPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SynapseSparkPool <a name="SynapseSparkPool" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool azurerm_synapse_spark_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.synapse_spark_pool.SynapseSparkPool;

SynapseSparkPool.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .nodeSize(java.lang.String)
    .nodeSizeFamily(java.lang.String)
    .synapseWorkspaceId(java.lang.String)
//  .autoPause(SynapseSparkPoolAutoPause)
//  .autoScale(SynapseSparkPoolAutoScale)
//  .cacheSize(java.lang.Number)
//  .computeIsolationEnabled(java.lang.Boolean)
//  .computeIsolationEnabled(IResolvable)
//  .dynamicExecutorAllocationEnabled(java.lang.Boolean)
//  .dynamicExecutorAllocationEnabled(IResolvable)
//  .id(java.lang.String)
//  .libraryRequirement(SynapseSparkPoolLibraryRequirement)
//  .maxExecutors(java.lang.Number)
//  .minExecutors(java.lang.Number)
//  .nodeCount(java.lang.Number)
//  .sessionLevelPackagesEnabled(java.lang.Boolean)
//  .sessionLevelPackagesEnabled(IResolvable)
//  .sparkConfig(SynapseSparkPoolSparkConfig)
//  .sparkEventsFolder(java.lang.String)
//  .sparkLogFolder(java.lang.String)
//  .sparkVersion(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(SynapseSparkPoolTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#name SynapseSparkPool#name}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.nodeSize">nodeSize</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#node_size SynapseSparkPool#node_size}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.nodeSizeFamily">nodeSizeFamily</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#node_size_family SynapseSparkPool#node_size_family}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.synapseWorkspaceId">synapseWorkspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#synapse_workspace_id SynapseSparkPool#synapse_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.autoPause">autoPause</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPause">SynapseSparkPoolAutoPause</a></code> | auto_pause block. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.autoScale">autoScale</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScale">SynapseSparkPoolAutoScale</a></code> | auto_scale block. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.cacheSize">cacheSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#cache_size SynapseSparkPool#cache_size}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.computeIsolationEnabled">computeIsolationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#compute_isolation_enabled SynapseSparkPool#compute_isolation_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.dynamicExecutorAllocationEnabled">dynamicExecutorAllocationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#dynamic_executor_allocation_enabled SynapseSparkPool#dynamic_executor_allocation_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#id SynapseSparkPool#id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.libraryRequirement">libraryRequirement</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirement">SynapseSparkPoolLibraryRequirement</a></code> | library_requirement block. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.maxExecutors">maxExecutors</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#max_executors SynapseSparkPool#max_executors}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.minExecutors">minExecutors</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#min_executors SynapseSparkPool#min_executors}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#node_count SynapseSparkPool#node_count}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.sessionLevelPackagesEnabled">sessionLevelPackagesEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#session_level_packages_enabled SynapseSparkPool#session_level_packages_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.sparkConfig">sparkConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfig">SynapseSparkPoolSparkConfig</a></code> | spark_config block. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.sparkEventsFolder">sparkEventsFolder</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#spark_events_folder SynapseSparkPool#spark_events_folder}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.sparkLogFolder">sparkLogFolder</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#spark_log_folder SynapseSparkPool#spark_log_folder}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.sparkVersion">sparkVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#spark_version SynapseSparkPool#spark_version}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#tags SynapseSparkPool#tags}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeouts">SynapseSparkPoolTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#name SynapseSparkPool#name}.

---

##### `nodeSize`<sup>Required</sup> <a name="nodeSize" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.nodeSize"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#node_size SynapseSparkPool#node_size}.

---

##### `nodeSizeFamily`<sup>Required</sup> <a name="nodeSizeFamily" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.nodeSizeFamily"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#node_size_family SynapseSparkPool#node_size_family}.

---

##### `synapseWorkspaceId`<sup>Required</sup> <a name="synapseWorkspaceId" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.synapseWorkspaceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#synapse_workspace_id SynapseSparkPool#synapse_workspace_id}.

---

##### `autoPause`<sup>Optional</sup> <a name="autoPause" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.autoPause"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPause">SynapseSparkPoolAutoPause</a>

auto_pause block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#auto_pause SynapseSparkPool#auto_pause}

---

##### `autoScale`<sup>Optional</sup> <a name="autoScale" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.autoScale"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScale">SynapseSparkPoolAutoScale</a>

auto_scale block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#auto_scale SynapseSparkPool#auto_scale}

---

##### `cacheSize`<sup>Optional</sup> <a name="cacheSize" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.cacheSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#cache_size SynapseSparkPool#cache_size}.

---

##### `computeIsolationEnabled`<sup>Optional</sup> <a name="computeIsolationEnabled" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.computeIsolationEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#compute_isolation_enabled SynapseSparkPool#compute_isolation_enabled}.

---

##### `dynamicExecutorAllocationEnabled`<sup>Optional</sup> <a name="dynamicExecutorAllocationEnabled" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.dynamicExecutorAllocationEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#dynamic_executor_allocation_enabled SynapseSparkPool#dynamic_executor_allocation_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#id SynapseSparkPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `libraryRequirement`<sup>Optional</sup> <a name="libraryRequirement" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.libraryRequirement"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirement">SynapseSparkPoolLibraryRequirement</a>

library_requirement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#library_requirement SynapseSparkPool#library_requirement}

---

##### `maxExecutors`<sup>Optional</sup> <a name="maxExecutors" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.maxExecutors"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#max_executors SynapseSparkPool#max_executors}.

---

##### `minExecutors`<sup>Optional</sup> <a name="minExecutors" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.minExecutors"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#min_executors SynapseSparkPool#min_executors}.

---

##### `nodeCount`<sup>Optional</sup> <a name="nodeCount" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.nodeCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#node_count SynapseSparkPool#node_count}.

---

##### `sessionLevelPackagesEnabled`<sup>Optional</sup> <a name="sessionLevelPackagesEnabled" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.sessionLevelPackagesEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#session_level_packages_enabled SynapseSparkPool#session_level_packages_enabled}.

---

##### `sparkConfig`<sup>Optional</sup> <a name="sparkConfig" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.sparkConfig"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfig">SynapseSparkPoolSparkConfig</a>

spark_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#spark_config SynapseSparkPool#spark_config}

---

##### `sparkEventsFolder`<sup>Optional</sup> <a name="sparkEventsFolder" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.sparkEventsFolder"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#spark_events_folder SynapseSparkPool#spark_events_folder}.

---

##### `sparkLogFolder`<sup>Optional</sup> <a name="sparkLogFolder" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.sparkLogFolder"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#spark_log_folder SynapseSparkPool#spark_log_folder}.

---

##### `sparkVersion`<sup>Optional</sup> <a name="sparkVersion" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.sparkVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#spark_version SynapseSparkPool#spark_version}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#tags SynapseSparkPool#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeouts">SynapseSparkPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#timeouts SynapseSparkPool#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.putAutoPause">putAutoPause</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.putAutoScale">putAutoScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.putLibraryRequirement">putLibraryRequirement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.putSparkConfig">putSparkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetAutoPause">resetAutoPause</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetAutoScale">resetAutoScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetCacheSize">resetCacheSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetComputeIsolationEnabled">resetComputeIsolationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetDynamicExecutorAllocationEnabled">resetDynamicExecutorAllocationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetLibraryRequirement">resetLibraryRequirement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetMaxExecutors">resetMaxExecutors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetMinExecutors">resetMinExecutors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetNodeCount">resetNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetSessionLevelPackagesEnabled">resetSessionLevelPackagesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetSparkConfig">resetSparkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetSparkEventsFolder">resetSparkEventsFolder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetSparkLogFolder">resetSparkLogFolder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetSparkVersion">resetSparkVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putAutoPause` <a name="putAutoPause" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.putAutoPause"></a>

```java
public void putAutoPause(SynapseSparkPoolAutoPause value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.putAutoPause.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPause">SynapseSparkPoolAutoPause</a>

---

##### `putAutoScale` <a name="putAutoScale" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.putAutoScale"></a>

```java
public void putAutoScale(SynapseSparkPoolAutoScale value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.putAutoScale.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScale">SynapseSparkPoolAutoScale</a>

---

##### `putLibraryRequirement` <a name="putLibraryRequirement" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.putLibraryRequirement"></a>

```java
public void putLibraryRequirement(SynapseSparkPoolLibraryRequirement value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.putLibraryRequirement.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirement">SynapseSparkPoolLibraryRequirement</a>

---

##### `putSparkConfig` <a name="putSparkConfig" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.putSparkConfig"></a>

```java
public void putSparkConfig(SynapseSparkPoolSparkConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.putSparkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfig">SynapseSparkPoolSparkConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.putTimeouts"></a>

```java
public void putTimeouts(SynapseSparkPoolTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeouts">SynapseSparkPoolTimeouts</a>

---

##### `resetAutoPause` <a name="resetAutoPause" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetAutoPause"></a>

```java
public void resetAutoPause()
```

##### `resetAutoScale` <a name="resetAutoScale" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetAutoScale"></a>

```java
public void resetAutoScale()
```

##### `resetCacheSize` <a name="resetCacheSize" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetCacheSize"></a>

```java
public void resetCacheSize()
```

##### `resetComputeIsolationEnabled` <a name="resetComputeIsolationEnabled" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetComputeIsolationEnabled"></a>

```java
public void resetComputeIsolationEnabled()
```

##### `resetDynamicExecutorAllocationEnabled` <a name="resetDynamicExecutorAllocationEnabled" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetDynamicExecutorAllocationEnabled"></a>

```java
public void resetDynamicExecutorAllocationEnabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetId"></a>

```java
public void resetId()
```

##### `resetLibraryRequirement` <a name="resetLibraryRequirement" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetLibraryRequirement"></a>

```java
public void resetLibraryRequirement()
```

##### `resetMaxExecutors` <a name="resetMaxExecutors" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetMaxExecutors"></a>

```java
public void resetMaxExecutors()
```

##### `resetMinExecutors` <a name="resetMinExecutors" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetMinExecutors"></a>

```java
public void resetMinExecutors()
```

##### `resetNodeCount` <a name="resetNodeCount" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetNodeCount"></a>

```java
public void resetNodeCount()
```

##### `resetSessionLevelPackagesEnabled` <a name="resetSessionLevelPackagesEnabled" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetSessionLevelPackagesEnabled"></a>

```java
public void resetSessionLevelPackagesEnabled()
```

##### `resetSparkConfig` <a name="resetSparkConfig" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetSparkConfig"></a>

```java
public void resetSparkConfig()
```

##### `resetSparkEventsFolder` <a name="resetSparkEventsFolder" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetSparkEventsFolder"></a>

```java
public void resetSparkEventsFolder()
```

##### `resetSparkLogFolder` <a name="resetSparkLogFolder" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetSparkLogFolder"></a>

```java
public void resetSparkLogFolder()
```

##### `resetSparkVersion` <a name="resetSparkVersion" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetSparkVersion"></a>

```java
public void resetSparkVersion()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SynapseSparkPool resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.synapse_spark_pool.SynapseSparkPool;

SynapseSparkPool.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.synapse_spark_pool.SynapseSparkPool;

SynapseSparkPool.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.synapse_spark_pool.SynapseSparkPool;

SynapseSparkPool.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.synapse_spark_pool.SynapseSparkPool;

SynapseSparkPool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SynapseSparkPool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SynapseSparkPool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SynapseSparkPool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SynapseSparkPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SynapseSparkPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.autoPause">autoPause</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference">SynapseSparkPoolAutoPauseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.autoScale">autoScale</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference">SynapseSparkPoolAutoScaleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.libraryRequirement">libraryRequirement</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference">SynapseSparkPoolLibraryRequirementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.sparkConfig">sparkConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference">SynapseSparkPoolSparkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference">SynapseSparkPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.autoPauseInput">autoPauseInput</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPause">SynapseSparkPoolAutoPause</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.autoScaleInput">autoScaleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScale">SynapseSparkPoolAutoScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.cacheSizeInput">cacheSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.computeIsolationEnabledInput">computeIsolationEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.dynamicExecutorAllocationEnabledInput">dynamicExecutorAllocationEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.libraryRequirementInput">libraryRequirementInput</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirement">SynapseSparkPoolLibraryRequirement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.maxExecutorsInput">maxExecutorsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.minExecutorsInput">minExecutorsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.nodeCountInput">nodeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.nodeSizeFamilyInput">nodeSizeFamilyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.nodeSizeInput">nodeSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.sessionLevelPackagesEnabledInput">sessionLevelPackagesEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.sparkConfigInput">sparkConfigInput</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfig">SynapseSparkPoolSparkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.sparkEventsFolderInput">sparkEventsFolderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.sparkLogFolderInput">sparkLogFolderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.sparkVersionInput">sparkVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.synapseWorkspaceIdInput">synapseWorkspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeouts">SynapseSparkPoolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.cacheSize">cacheSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.computeIsolationEnabled">computeIsolationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.dynamicExecutorAllocationEnabled">dynamicExecutorAllocationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.maxExecutors">maxExecutors</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.minExecutors">minExecutors</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.nodeSize">nodeSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.nodeSizeFamily">nodeSizeFamily</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.sessionLevelPackagesEnabled">sessionLevelPackagesEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.sparkEventsFolder">sparkEventsFolder</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.sparkLogFolder">sparkLogFolder</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.sparkVersion">sparkVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.synapseWorkspaceId">synapseWorkspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `autoPause`<sup>Required</sup> <a name="autoPause" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.autoPause"></a>

```java
public SynapseSparkPoolAutoPauseOutputReference getAutoPause();
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference">SynapseSparkPoolAutoPauseOutputReference</a>

---

##### `autoScale`<sup>Required</sup> <a name="autoScale" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.autoScale"></a>

```java
public SynapseSparkPoolAutoScaleOutputReference getAutoScale();
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference">SynapseSparkPoolAutoScaleOutputReference</a>

---

##### `libraryRequirement`<sup>Required</sup> <a name="libraryRequirement" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.libraryRequirement"></a>

```java
public SynapseSparkPoolLibraryRequirementOutputReference getLibraryRequirement();
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference">SynapseSparkPoolLibraryRequirementOutputReference</a>

---

##### `sparkConfig`<sup>Required</sup> <a name="sparkConfig" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.sparkConfig"></a>

```java
public SynapseSparkPoolSparkConfigOutputReference getSparkConfig();
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference">SynapseSparkPoolSparkConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.timeouts"></a>

```java
public SynapseSparkPoolTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference">SynapseSparkPoolTimeoutsOutputReference</a>

---

##### `autoPauseInput`<sup>Optional</sup> <a name="autoPauseInput" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.autoPauseInput"></a>

```java
public SynapseSparkPoolAutoPause getAutoPauseInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPause">SynapseSparkPoolAutoPause</a>

---

##### `autoScaleInput`<sup>Optional</sup> <a name="autoScaleInput" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.autoScaleInput"></a>

```java
public SynapseSparkPoolAutoScale getAutoScaleInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScale">SynapseSparkPoolAutoScale</a>

---

##### `cacheSizeInput`<sup>Optional</sup> <a name="cacheSizeInput" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.cacheSizeInput"></a>

```java
public java.lang.Number getCacheSizeInput();
```

- *Type:* java.lang.Number

---

##### `computeIsolationEnabledInput`<sup>Optional</sup> <a name="computeIsolationEnabledInput" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.computeIsolationEnabledInput"></a>

```java
public java.lang.Object getComputeIsolationEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dynamicExecutorAllocationEnabledInput`<sup>Optional</sup> <a name="dynamicExecutorAllocationEnabledInput" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.dynamicExecutorAllocationEnabledInput"></a>

```java
public java.lang.Object getDynamicExecutorAllocationEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `libraryRequirementInput`<sup>Optional</sup> <a name="libraryRequirementInput" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.libraryRequirementInput"></a>

```java
public SynapseSparkPoolLibraryRequirement getLibraryRequirementInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirement">SynapseSparkPoolLibraryRequirement</a>

---

##### `maxExecutorsInput`<sup>Optional</sup> <a name="maxExecutorsInput" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.maxExecutorsInput"></a>

```java
public java.lang.Number getMaxExecutorsInput();
```

- *Type:* java.lang.Number

---

##### `minExecutorsInput`<sup>Optional</sup> <a name="minExecutorsInput" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.minExecutorsInput"></a>

```java
public java.lang.Number getMinExecutorsInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nodeCountInput`<sup>Optional</sup> <a name="nodeCountInput" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.nodeCountInput"></a>

```java
public java.lang.Number getNodeCountInput();
```

- *Type:* java.lang.Number

---

##### `nodeSizeFamilyInput`<sup>Optional</sup> <a name="nodeSizeFamilyInput" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.nodeSizeFamilyInput"></a>

```java
public java.lang.String getNodeSizeFamilyInput();
```

- *Type:* java.lang.String

---

##### `nodeSizeInput`<sup>Optional</sup> <a name="nodeSizeInput" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.nodeSizeInput"></a>

```java
public java.lang.String getNodeSizeInput();
```

- *Type:* java.lang.String

---

##### `sessionLevelPackagesEnabledInput`<sup>Optional</sup> <a name="sessionLevelPackagesEnabledInput" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.sessionLevelPackagesEnabledInput"></a>

```java
public java.lang.Object getSessionLevelPackagesEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sparkConfigInput`<sup>Optional</sup> <a name="sparkConfigInput" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.sparkConfigInput"></a>

```java
public SynapseSparkPoolSparkConfig getSparkConfigInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfig">SynapseSparkPoolSparkConfig</a>

---

##### `sparkEventsFolderInput`<sup>Optional</sup> <a name="sparkEventsFolderInput" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.sparkEventsFolderInput"></a>

```java
public java.lang.String getSparkEventsFolderInput();
```

- *Type:* java.lang.String

---

##### `sparkLogFolderInput`<sup>Optional</sup> <a name="sparkLogFolderInput" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.sparkLogFolderInput"></a>

```java
public java.lang.String getSparkLogFolderInput();
```

- *Type:* java.lang.String

---

##### `sparkVersionInput`<sup>Optional</sup> <a name="sparkVersionInput" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.sparkVersionInput"></a>

```java
public java.lang.String getSparkVersionInput();
```

- *Type:* java.lang.String

---

##### `synapseWorkspaceIdInput`<sup>Optional</sup> <a name="synapseWorkspaceIdInput" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.synapseWorkspaceIdInput"></a>

```java
public java.lang.String getSynapseWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeouts">SynapseSparkPoolTimeouts</a>

---

##### `cacheSize`<sup>Required</sup> <a name="cacheSize" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.cacheSize"></a>

```java
public java.lang.Number getCacheSize();
```

- *Type:* java.lang.Number

---

##### `computeIsolationEnabled`<sup>Required</sup> <a name="computeIsolationEnabled" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.computeIsolationEnabled"></a>

```java
public java.lang.Object getComputeIsolationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dynamicExecutorAllocationEnabled`<sup>Required</sup> <a name="dynamicExecutorAllocationEnabled" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.dynamicExecutorAllocationEnabled"></a>

```java
public java.lang.Object getDynamicExecutorAllocationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `maxExecutors`<sup>Required</sup> <a name="maxExecutors" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.maxExecutors"></a>

```java
public java.lang.Number getMaxExecutors();
```

- *Type:* java.lang.Number

---

##### `minExecutors`<sup>Required</sup> <a name="minExecutors" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.minExecutors"></a>

```java
public java.lang.Number getMinExecutors();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.nodeCount"></a>

```java
public java.lang.Number getNodeCount();
```

- *Type:* java.lang.Number

---

##### `nodeSize`<sup>Required</sup> <a name="nodeSize" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.nodeSize"></a>

```java
public java.lang.String getNodeSize();
```

- *Type:* java.lang.String

---

##### `nodeSizeFamily`<sup>Required</sup> <a name="nodeSizeFamily" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.nodeSizeFamily"></a>

```java
public java.lang.String getNodeSizeFamily();
```

- *Type:* java.lang.String

---

##### `sessionLevelPackagesEnabled`<sup>Required</sup> <a name="sessionLevelPackagesEnabled" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.sessionLevelPackagesEnabled"></a>

```java
public java.lang.Object getSessionLevelPackagesEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sparkEventsFolder`<sup>Required</sup> <a name="sparkEventsFolder" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.sparkEventsFolder"></a>

```java
public java.lang.String getSparkEventsFolder();
```

- *Type:* java.lang.String

---

##### `sparkLogFolder`<sup>Required</sup> <a name="sparkLogFolder" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.sparkLogFolder"></a>

```java
public java.lang.String getSparkLogFolder();
```

- *Type:* java.lang.String

---

##### `sparkVersion`<sup>Required</sup> <a name="sparkVersion" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.sparkVersion"></a>

```java
public java.lang.String getSparkVersion();
```

- *Type:* java.lang.String

---

##### `synapseWorkspaceId`<sup>Required</sup> <a name="synapseWorkspaceId" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.synapseWorkspaceId"></a>

```java
public java.lang.String getSynapseWorkspaceId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SynapseSparkPoolAutoPause <a name="SynapseSparkPoolAutoPause" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPause"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPause.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.synapse_spark_pool.SynapseSparkPoolAutoPause;

SynapseSparkPoolAutoPause.builder()
    .delayInMinutes(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPause.property.delayInMinutes">delayInMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#delay_in_minutes SynapseSparkPool#delay_in_minutes}. |

---

##### `delayInMinutes`<sup>Required</sup> <a name="delayInMinutes" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPause.property.delayInMinutes"></a>

```java
public java.lang.Number getDelayInMinutes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#delay_in_minutes SynapseSparkPool#delay_in_minutes}.

---

### SynapseSparkPoolAutoScale <a name="SynapseSparkPoolAutoScale" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScale"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScale.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.synapse_spark_pool.SynapseSparkPoolAutoScale;

SynapseSparkPoolAutoScale.builder()
    .maxNodeCount(java.lang.Number)
    .minNodeCount(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScale.property.maxNodeCount">maxNodeCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#max_node_count SynapseSparkPool#max_node_count}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScale.property.minNodeCount">minNodeCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#min_node_count SynapseSparkPool#min_node_count}. |

---

##### `maxNodeCount`<sup>Required</sup> <a name="maxNodeCount" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScale.property.maxNodeCount"></a>

```java
public java.lang.Number getMaxNodeCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#max_node_count SynapseSparkPool#max_node_count}.

---

##### `minNodeCount`<sup>Required</sup> <a name="minNodeCount" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScale.property.minNodeCount"></a>

```java
public java.lang.Number getMinNodeCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#min_node_count SynapseSparkPool#min_node_count}.

---

### SynapseSparkPoolConfig <a name="SynapseSparkPoolConfig" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.synapse_spark_pool.SynapseSparkPoolConfig;

SynapseSparkPoolConfig.builder()
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
    .name(java.lang.String)
    .nodeSize(java.lang.String)
    .nodeSizeFamily(java.lang.String)
    .synapseWorkspaceId(java.lang.String)
//  .autoPause(SynapseSparkPoolAutoPause)
//  .autoScale(SynapseSparkPoolAutoScale)
//  .cacheSize(java.lang.Number)
//  .computeIsolationEnabled(java.lang.Boolean)
//  .computeIsolationEnabled(IResolvable)
//  .dynamicExecutorAllocationEnabled(java.lang.Boolean)
//  .dynamicExecutorAllocationEnabled(IResolvable)
//  .id(java.lang.String)
//  .libraryRequirement(SynapseSparkPoolLibraryRequirement)
//  .maxExecutors(java.lang.Number)
//  .minExecutors(java.lang.Number)
//  .nodeCount(java.lang.Number)
//  .sessionLevelPackagesEnabled(java.lang.Boolean)
//  .sessionLevelPackagesEnabled(IResolvable)
//  .sparkConfig(SynapseSparkPoolSparkConfig)
//  .sparkEventsFolder(java.lang.String)
//  .sparkLogFolder(java.lang.String)
//  .sparkVersion(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(SynapseSparkPoolTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#name SynapseSparkPool#name}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.nodeSize">nodeSize</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#node_size SynapseSparkPool#node_size}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.nodeSizeFamily">nodeSizeFamily</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#node_size_family SynapseSparkPool#node_size_family}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.synapseWorkspaceId">synapseWorkspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#synapse_workspace_id SynapseSparkPool#synapse_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.autoPause">autoPause</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPause">SynapseSparkPoolAutoPause</a></code> | auto_pause block. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.autoScale">autoScale</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScale">SynapseSparkPoolAutoScale</a></code> | auto_scale block. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.cacheSize">cacheSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#cache_size SynapseSparkPool#cache_size}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.computeIsolationEnabled">computeIsolationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#compute_isolation_enabled SynapseSparkPool#compute_isolation_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.dynamicExecutorAllocationEnabled">dynamicExecutorAllocationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#dynamic_executor_allocation_enabled SynapseSparkPool#dynamic_executor_allocation_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#id SynapseSparkPool#id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.libraryRequirement">libraryRequirement</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirement">SynapseSparkPoolLibraryRequirement</a></code> | library_requirement block. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.maxExecutors">maxExecutors</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#max_executors SynapseSparkPool#max_executors}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.minExecutors">minExecutors</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#min_executors SynapseSparkPool#min_executors}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#node_count SynapseSparkPool#node_count}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.sessionLevelPackagesEnabled">sessionLevelPackagesEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#session_level_packages_enabled SynapseSparkPool#session_level_packages_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.sparkConfig">sparkConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfig">SynapseSparkPoolSparkConfig</a></code> | spark_config block. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.sparkEventsFolder">sparkEventsFolder</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#spark_events_folder SynapseSparkPool#spark_events_folder}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.sparkLogFolder">sparkLogFolder</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#spark_log_folder SynapseSparkPool#spark_log_folder}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.sparkVersion">sparkVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#spark_version SynapseSparkPool#spark_version}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#tags SynapseSparkPool#tags}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeouts">SynapseSparkPoolTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#name SynapseSparkPool#name}.

---

##### `nodeSize`<sup>Required</sup> <a name="nodeSize" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.nodeSize"></a>

```java
public java.lang.String getNodeSize();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#node_size SynapseSparkPool#node_size}.

---

##### `nodeSizeFamily`<sup>Required</sup> <a name="nodeSizeFamily" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.nodeSizeFamily"></a>

```java
public java.lang.String getNodeSizeFamily();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#node_size_family SynapseSparkPool#node_size_family}.

---

##### `synapseWorkspaceId`<sup>Required</sup> <a name="synapseWorkspaceId" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.synapseWorkspaceId"></a>

```java
public java.lang.String getSynapseWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#synapse_workspace_id SynapseSparkPool#synapse_workspace_id}.

---

##### `autoPause`<sup>Optional</sup> <a name="autoPause" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.autoPause"></a>

```java
public SynapseSparkPoolAutoPause getAutoPause();
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPause">SynapseSparkPoolAutoPause</a>

auto_pause block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#auto_pause SynapseSparkPool#auto_pause}

---

##### `autoScale`<sup>Optional</sup> <a name="autoScale" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.autoScale"></a>

```java
public SynapseSparkPoolAutoScale getAutoScale();
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScale">SynapseSparkPoolAutoScale</a>

auto_scale block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#auto_scale SynapseSparkPool#auto_scale}

---

##### `cacheSize`<sup>Optional</sup> <a name="cacheSize" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.cacheSize"></a>

```java
public java.lang.Number getCacheSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#cache_size SynapseSparkPool#cache_size}.

---

##### `computeIsolationEnabled`<sup>Optional</sup> <a name="computeIsolationEnabled" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.computeIsolationEnabled"></a>

```java
public java.lang.Object getComputeIsolationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#compute_isolation_enabled SynapseSparkPool#compute_isolation_enabled}.

---

##### `dynamicExecutorAllocationEnabled`<sup>Optional</sup> <a name="dynamicExecutorAllocationEnabled" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.dynamicExecutorAllocationEnabled"></a>

```java
public java.lang.Object getDynamicExecutorAllocationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#dynamic_executor_allocation_enabled SynapseSparkPool#dynamic_executor_allocation_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#id SynapseSparkPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `libraryRequirement`<sup>Optional</sup> <a name="libraryRequirement" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.libraryRequirement"></a>

```java
public SynapseSparkPoolLibraryRequirement getLibraryRequirement();
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirement">SynapseSparkPoolLibraryRequirement</a>

library_requirement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#library_requirement SynapseSparkPool#library_requirement}

---

##### `maxExecutors`<sup>Optional</sup> <a name="maxExecutors" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.maxExecutors"></a>

```java
public java.lang.Number getMaxExecutors();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#max_executors SynapseSparkPool#max_executors}.

---

##### `minExecutors`<sup>Optional</sup> <a name="minExecutors" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.minExecutors"></a>

```java
public java.lang.Number getMinExecutors();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#min_executors SynapseSparkPool#min_executors}.

---

##### `nodeCount`<sup>Optional</sup> <a name="nodeCount" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.nodeCount"></a>

```java
public java.lang.Number getNodeCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#node_count SynapseSparkPool#node_count}.

---

##### `sessionLevelPackagesEnabled`<sup>Optional</sup> <a name="sessionLevelPackagesEnabled" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.sessionLevelPackagesEnabled"></a>

```java
public java.lang.Object getSessionLevelPackagesEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#session_level_packages_enabled SynapseSparkPool#session_level_packages_enabled}.

---

##### `sparkConfig`<sup>Optional</sup> <a name="sparkConfig" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.sparkConfig"></a>

```java
public SynapseSparkPoolSparkConfig getSparkConfig();
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfig">SynapseSparkPoolSparkConfig</a>

spark_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#spark_config SynapseSparkPool#spark_config}

---

##### `sparkEventsFolder`<sup>Optional</sup> <a name="sparkEventsFolder" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.sparkEventsFolder"></a>

```java
public java.lang.String getSparkEventsFolder();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#spark_events_folder SynapseSparkPool#spark_events_folder}.

---

##### `sparkLogFolder`<sup>Optional</sup> <a name="sparkLogFolder" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.sparkLogFolder"></a>

```java
public java.lang.String getSparkLogFolder();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#spark_log_folder SynapseSparkPool#spark_log_folder}.

---

##### `sparkVersion`<sup>Optional</sup> <a name="sparkVersion" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.sparkVersion"></a>

```java
public java.lang.String getSparkVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#spark_version SynapseSparkPool#spark_version}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#tags SynapseSparkPool#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.timeouts"></a>

```java
public SynapseSparkPoolTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeouts">SynapseSparkPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#timeouts SynapseSparkPool#timeouts}

---

### SynapseSparkPoolLibraryRequirement <a name="SynapseSparkPoolLibraryRequirement" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirement.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.synapse_spark_pool.SynapseSparkPoolLibraryRequirement;

SynapseSparkPoolLibraryRequirement.builder()
    .content(java.lang.String)
    .filename(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirement.property.content">content</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#content SynapseSparkPool#content}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirement.property.filename">filename</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#filename SynapseSparkPool#filename}. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirement.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#content SynapseSparkPool#content}.

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirement.property.filename"></a>

```java
public java.lang.String getFilename();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#filename SynapseSparkPool#filename}.

---

### SynapseSparkPoolSparkConfig <a name="SynapseSparkPoolSparkConfig" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.synapse_spark_pool.SynapseSparkPoolSparkConfig;

SynapseSparkPoolSparkConfig.builder()
    .content(java.lang.String)
    .filename(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfig.property.content">content</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#content SynapseSparkPool#content}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfig.property.filename">filename</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#filename SynapseSparkPool#filename}. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfig.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#content SynapseSparkPool#content}.

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfig.property.filename"></a>

```java
public java.lang.String getFilename();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#filename SynapseSparkPool#filename}.

---

### SynapseSparkPoolTimeouts <a name="SynapseSparkPoolTimeouts" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.synapse_spark_pool.SynapseSparkPoolTimeouts;

SynapseSparkPoolTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#create SynapseSparkPool#create}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#delete SynapseSparkPool#delete}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#read SynapseSparkPool#read}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#update SynapseSparkPool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#create SynapseSparkPool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#delete SynapseSparkPool#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#read SynapseSparkPool#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/synapse_spark_pool#update SynapseSparkPool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SynapseSparkPoolAutoPauseOutputReference <a name="SynapseSparkPoolAutoPauseOutputReference" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.synapse_spark_pool.SynapseSparkPoolAutoPauseOutputReference;

new SynapseSparkPoolAutoPauseOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.property.delayInMinutesInput">delayInMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.property.delayInMinutes">delayInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPause">SynapseSparkPoolAutoPause</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `delayInMinutesInput`<sup>Optional</sup> <a name="delayInMinutesInput" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.property.delayInMinutesInput"></a>

```java
public java.lang.Number getDelayInMinutesInput();
```

- *Type:* java.lang.Number

---

##### `delayInMinutes`<sup>Required</sup> <a name="delayInMinutes" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.property.delayInMinutes"></a>

```java
public java.lang.Number getDelayInMinutes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.property.internalValue"></a>

```java
public SynapseSparkPoolAutoPause getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPause">SynapseSparkPoolAutoPause</a>

---


### SynapseSparkPoolAutoScaleOutputReference <a name="SynapseSparkPoolAutoScaleOutputReference" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.synapse_spark_pool.SynapseSparkPoolAutoScaleOutputReference;

new SynapseSparkPoolAutoScaleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.property.maxNodeCountInput">maxNodeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.property.minNodeCountInput">minNodeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.property.maxNodeCount">maxNodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.property.minNodeCount">minNodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScale">SynapseSparkPoolAutoScale</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxNodeCountInput`<sup>Optional</sup> <a name="maxNodeCountInput" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.property.maxNodeCountInput"></a>

```java
public java.lang.Number getMaxNodeCountInput();
```

- *Type:* java.lang.Number

---

##### `minNodeCountInput`<sup>Optional</sup> <a name="minNodeCountInput" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.property.minNodeCountInput"></a>

```java
public java.lang.Number getMinNodeCountInput();
```

- *Type:* java.lang.Number

---

##### `maxNodeCount`<sup>Required</sup> <a name="maxNodeCount" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.property.maxNodeCount"></a>

```java
public java.lang.Number getMaxNodeCount();
```

- *Type:* java.lang.Number

---

##### `minNodeCount`<sup>Required</sup> <a name="minNodeCount" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.property.minNodeCount"></a>

```java
public java.lang.Number getMinNodeCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.property.internalValue"></a>

```java
public SynapseSparkPoolAutoScale getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScale">SynapseSparkPoolAutoScale</a>

---


### SynapseSparkPoolLibraryRequirementOutputReference <a name="SynapseSparkPoolLibraryRequirementOutputReference" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.synapse_spark_pool.SynapseSparkPoolLibraryRequirementOutputReference;

new SynapseSparkPoolLibraryRequirementOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.property.filenameInput">filenameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.property.filename">filename</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirement">SynapseSparkPoolLibraryRequirement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `filenameInput`<sup>Optional</sup> <a name="filenameInput" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.property.filenameInput"></a>

```java
public java.lang.String getFilenameInput();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.property.filename"></a>

```java
public java.lang.String getFilename();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.property.internalValue"></a>

```java
public SynapseSparkPoolLibraryRequirement getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirement">SynapseSparkPoolLibraryRequirement</a>

---


### SynapseSparkPoolSparkConfigOutputReference <a name="SynapseSparkPoolSparkConfigOutputReference" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.synapse_spark_pool.SynapseSparkPoolSparkConfigOutputReference;

new SynapseSparkPoolSparkConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.property.filenameInput">filenameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.property.filename">filename</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfig">SynapseSparkPoolSparkConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `filenameInput`<sup>Optional</sup> <a name="filenameInput" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.property.filenameInput"></a>

```java
public java.lang.String getFilenameInput();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.property.filename"></a>

```java
public java.lang.String getFilename();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.property.internalValue"></a>

```java
public SynapseSparkPoolSparkConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfig">SynapseSparkPoolSparkConfig</a>

---


### SynapseSparkPoolTimeoutsOutputReference <a name="SynapseSparkPoolTimeoutsOutputReference" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.synapse_spark_pool.SynapseSparkPoolTimeoutsOutputReference;

new SynapseSparkPoolTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeouts">SynapseSparkPoolTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeouts">SynapseSparkPoolTimeouts</a>

---



