# `synapseSparkPool` Submodule <a name="`synapseSparkPool` Submodule" id="@cdktf/provider-azurerm.synapseSparkPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SynapseSparkPool <a name="SynapseSparkPool" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool azurerm_synapse_spark_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_spark_pool

synapseSparkPool.SynapseSparkPool(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  node_size: str,
  node_size_family: str,
  spark_version: str,
  synapse_workspace_id: str,
  auto_pause: SynapseSparkPoolAutoPause = None,
  auto_scale: SynapseSparkPoolAutoScale = None,
  cache_size: typing.Union[int, float] = None,
  compute_isolation_enabled: typing.Union[bool, IResolvable] = None,
  dynamic_executor_allocation_enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  library_requirement: SynapseSparkPoolLibraryRequirement = None,
  max_executors: typing.Union[int, float] = None,
  min_executors: typing.Union[int, float] = None,
  node_count: typing.Union[int, float] = None,
  session_level_packages_enabled: typing.Union[bool, IResolvable] = None,
  spark_config: SynapseSparkPoolSparkConfig = None,
  spark_events_folder: str = None,
  spark_log_folder: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: SynapseSparkPoolTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#name SynapseSparkPool#name}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.nodeSize">node_size</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#node_size SynapseSparkPool#node_size}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.nodeSizeFamily">node_size_family</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#node_size_family SynapseSparkPool#node_size_family}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.sparkVersion">spark_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#spark_version SynapseSparkPool#spark_version}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.synapseWorkspaceId">synapse_workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#synapse_workspace_id SynapseSparkPool#synapse_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.autoPause">auto_pause</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPause">SynapseSparkPoolAutoPause</a></code> | auto_pause block. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.autoScale">auto_scale</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScale">SynapseSparkPoolAutoScale</a></code> | auto_scale block. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.cacheSize">cache_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#cache_size SynapseSparkPool#cache_size}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.computeIsolationEnabled">compute_isolation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#compute_isolation_enabled SynapseSparkPool#compute_isolation_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.dynamicExecutorAllocationEnabled">dynamic_executor_allocation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#dynamic_executor_allocation_enabled SynapseSparkPool#dynamic_executor_allocation_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#id SynapseSparkPool#id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.libraryRequirement">library_requirement</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirement">SynapseSparkPoolLibraryRequirement</a></code> | library_requirement block. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.maxExecutors">max_executors</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#max_executors SynapseSparkPool#max_executors}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.minExecutors">min_executors</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#min_executors SynapseSparkPool#min_executors}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#node_count SynapseSparkPool#node_count}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.sessionLevelPackagesEnabled">session_level_packages_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#session_level_packages_enabled SynapseSparkPool#session_level_packages_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.sparkConfig">spark_config</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfig">SynapseSparkPoolSparkConfig</a></code> | spark_config block. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.sparkEventsFolder">spark_events_folder</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#spark_events_folder SynapseSparkPool#spark_events_folder}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.sparkLogFolder">spark_log_folder</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#spark_log_folder SynapseSparkPool#spark_log_folder}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#tags SynapseSparkPool#tags}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeouts">SynapseSparkPoolTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#name SynapseSparkPool#name}.

---

##### `node_size`<sup>Required</sup> <a name="node_size" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.nodeSize"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#node_size SynapseSparkPool#node_size}.

---

##### `node_size_family`<sup>Required</sup> <a name="node_size_family" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.nodeSizeFamily"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#node_size_family SynapseSparkPool#node_size_family}.

---

##### `spark_version`<sup>Required</sup> <a name="spark_version" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.sparkVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#spark_version SynapseSparkPool#spark_version}.

---

##### `synapse_workspace_id`<sup>Required</sup> <a name="synapse_workspace_id" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.synapseWorkspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#synapse_workspace_id SynapseSparkPool#synapse_workspace_id}.

---

##### `auto_pause`<sup>Optional</sup> <a name="auto_pause" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.autoPause"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPause">SynapseSparkPoolAutoPause</a>

auto_pause block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#auto_pause SynapseSparkPool#auto_pause}

---

##### `auto_scale`<sup>Optional</sup> <a name="auto_scale" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.autoScale"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScale">SynapseSparkPoolAutoScale</a>

auto_scale block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#auto_scale SynapseSparkPool#auto_scale}

---

##### `cache_size`<sup>Optional</sup> <a name="cache_size" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.cacheSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#cache_size SynapseSparkPool#cache_size}.

---

##### `compute_isolation_enabled`<sup>Optional</sup> <a name="compute_isolation_enabled" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.computeIsolationEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#compute_isolation_enabled SynapseSparkPool#compute_isolation_enabled}.

---

##### `dynamic_executor_allocation_enabled`<sup>Optional</sup> <a name="dynamic_executor_allocation_enabled" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.dynamicExecutorAllocationEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#dynamic_executor_allocation_enabled SynapseSparkPool#dynamic_executor_allocation_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#id SynapseSparkPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `library_requirement`<sup>Optional</sup> <a name="library_requirement" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.libraryRequirement"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirement">SynapseSparkPoolLibraryRequirement</a>

library_requirement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#library_requirement SynapseSparkPool#library_requirement}

---

##### `max_executors`<sup>Optional</sup> <a name="max_executors" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.maxExecutors"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#max_executors SynapseSparkPool#max_executors}.

---

##### `min_executors`<sup>Optional</sup> <a name="min_executors" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.minExecutors"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#min_executors SynapseSparkPool#min_executors}.

---

##### `node_count`<sup>Optional</sup> <a name="node_count" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.nodeCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#node_count SynapseSparkPool#node_count}.

---

##### `session_level_packages_enabled`<sup>Optional</sup> <a name="session_level_packages_enabled" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.sessionLevelPackagesEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#session_level_packages_enabled SynapseSparkPool#session_level_packages_enabled}.

---

##### `spark_config`<sup>Optional</sup> <a name="spark_config" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.sparkConfig"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfig">SynapseSparkPoolSparkConfig</a>

spark_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#spark_config SynapseSparkPool#spark_config}

---

##### `spark_events_folder`<sup>Optional</sup> <a name="spark_events_folder" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.sparkEventsFolder"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#spark_events_folder SynapseSparkPool#spark_events_folder}.

---

##### `spark_log_folder`<sup>Optional</sup> <a name="spark_log_folder" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.sparkLogFolder"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#spark_log_folder SynapseSparkPool#spark_log_folder}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#tags SynapseSparkPool#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeouts">SynapseSparkPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#timeouts SynapseSparkPool#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.putAutoPause">put_auto_pause</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.putAutoScale">put_auto_scale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.putLibraryRequirement">put_library_requirement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.putSparkConfig">put_spark_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetAutoPause">reset_auto_pause</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetAutoScale">reset_auto_scale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetCacheSize">reset_cache_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetComputeIsolationEnabled">reset_compute_isolation_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetDynamicExecutorAllocationEnabled">reset_dynamic_executor_allocation_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetLibraryRequirement">reset_library_requirement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetMaxExecutors">reset_max_executors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetMinExecutors">reset_min_executors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetNodeCount">reset_node_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetSessionLevelPackagesEnabled">reset_session_level_packages_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetSparkConfig">reset_spark_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetSparkEventsFolder">reset_spark_events_folder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetSparkLogFolder">reset_spark_log_folder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_auto_pause` <a name="put_auto_pause" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.putAutoPause"></a>

```python
def put_auto_pause(
  delay_in_minutes: typing.Union[int, float]
) -> None
```

###### `delay_in_minutes`<sup>Required</sup> <a name="delay_in_minutes" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.putAutoPause.parameter.delayInMinutes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#delay_in_minutes SynapseSparkPool#delay_in_minutes}.

---

##### `put_auto_scale` <a name="put_auto_scale" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.putAutoScale"></a>

```python
def put_auto_scale(
  max_node_count: typing.Union[int, float],
  min_node_count: typing.Union[int, float]
) -> None
```

###### `max_node_count`<sup>Required</sup> <a name="max_node_count" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.putAutoScale.parameter.maxNodeCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#max_node_count SynapseSparkPool#max_node_count}.

---

###### `min_node_count`<sup>Required</sup> <a name="min_node_count" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.putAutoScale.parameter.minNodeCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#min_node_count SynapseSparkPool#min_node_count}.

---

##### `put_library_requirement` <a name="put_library_requirement" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.putLibraryRequirement"></a>

```python
def put_library_requirement(
  content: str,
  filename: str
) -> None
```

###### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.putLibraryRequirement.parameter.content"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#content SynapseSparkPool#content}.

---

###### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.putLibraryRequirement.parameter.filename"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#filename SynapseSparkPool#filename}.

---

##### `put_spark_config` <a name="put_spark_config" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.putSparkConfig"></a>

```python
def put_spark_config(
  content: str,
  filename: str
) -> None
```

###### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.putSparkConfig.parameter.content"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#content SynapseSparkPool#content}.

---

###### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.putSparkConfig.parameter.filename"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#filename SynapseSparkPool#filename}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#create SynapseSparkPool#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#delete SynapseSparkPool#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#read SynapseSparkPool#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#update SynapseSparkPool#update}.

---

##### `reset_auto_pause` <a name="reset_auto_pause" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetAutoPause"></a>

```python
def reset_auto_pause() -> None
```

##### `reset_auto_scale` <a name="reset_auto_scale" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetAutoScale"></a>

```python
def reset_auto_scale() -> None
```

##### `reset_cache_size` <a name="reset_cache_size" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetCacheSize"></a>

```python
def reset_cache_size() -> None
```

##### `reset_compute_isolation_enabled` <a name="reset_compute_isolation_enabled" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetComputeIsolationEnabled"></a>

```python
def reset_compute_isolation_enabled() -> None
```

##### `reset_dynamic_executor_allocation_enabled` <a name="reset_dynamic_executor_allocation_enabled" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetDynamicExecutorAllocationEnabled"></a>

```python
def reset_dynamic_executor_allocation_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_library_requirement` <a name="reset_library_requirement" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetLibraryRequirement"></a>

```python
def reset_library_requirement() -> None
```

##### `reset_max_executors` <a name="reset_max_executors" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetMaxExecutors"></a>

```python
def reset_max_executors() -> None
```

##### `reset_min_executors` <a name="reset_min_executors" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetMinExecutors"></a>

```python
def reset_min_executors() -> None
```

##### `reset_node_count` <a name="reset_node_count" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetNodeCount"></a>

```python
def reset_node_count() -> None
```

##### `reset_session_level_packages_enabled` <a name="reset_session_level_packages_enabled" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetSessionLevelPackagesEnabled"></a>

```python
def reset_session_level_packages_enabled() -> None
```

##### `reset_spark_config` <a name="reset_spark_config" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetSparkConfig"></a>

```python
def reset_spark_config() -> None
```

##### `reset_spark_events_folder` <a name="reset_spark_events_folder" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetSparkEventsFolder"></a>

```python
def reset_spark_events_folder() -> None
```

##### `reset_spark_log_folder` <a name="reset_spark_log_folder" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetSparkLogFolder"></a>

```python
def reset_spark_log_folder() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SynapseSparkPool resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_spark_pool

synapseSparkPool.SynapseSparkPool.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_spark_pool

synapseSparkPool.SynapseSparkPool.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_spark_pool

synapseSparkPool.SynapseSparkPool.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_spark_pool

synapseSparkPool.SynapseSparkPool.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SynapseSparkPool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SynapseSparkPool to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SynapseSparkPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SynapseSparkPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.autoPause">auto_pause</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference">SynapseSparkPoolAutoPauseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.autoScale">auto_scale</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference">SynapseSparkPoolAutoScaleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.libraryRequirement">library_requirement</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference">SynapseSparkPoolLibraryRequirementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.sparkConfig">spark_config</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference">SynapseSparkPoolSparkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference">SynapseSparkPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.autoPauseInput">auto_pause_input</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPause">SynapseSparkPoolAutoPause</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.autoScaleInput">auto_scale_input</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScale">SynapseSparkPoolAutoScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.cacheSizeInput">cache_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.computeIsolationEnabledInput">compute_isolation_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.dynamicExecutorAllocationEnabledInput">dynamic_executor_allocation_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.libraryRequirementInput">library_requirement_input</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirement">SynapseSparkPoolLibraryRequirement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.maxExecutorsInput">max_executors_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.minExecutorsInput">min_executors_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.nodeCountInput">node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.nodeSizeFamilyInput">node_size_family_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.nodeSizeInput">node_size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.sessionLevelPackagesEnabledInput">session_level_packages_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.sparkConfigInput">spark_config_input</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfig">SynapseSparkPoolSparkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.sparkEventsFolderInput">spark_events_folder_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.sparkLogFolderInput">spark_log_folder_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.sparkVersionInput">spark_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.synapseWorkspaceIdInput">synapse_workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeouts">SynapseSparkPoolTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.cacheSize">cache_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.computeIsolationEnabled">compute_isolation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.dynamicExecutorAllocationEnabled">dynamic_executor_allocation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.maxExecutors">max_executors</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.minExecutors">min_executors</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.nodeSize">node_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.nodeSizeFamily">node_size_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.sessionLevelPackagesEnabled">session_level_packages_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.sparkEventsFolder">spark_events_folder</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.sparkLogFolder">spark_log_folder</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.sparkVersion">spark_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.synapseWorkspaceId">synapse_workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `auto_pause`<sup>Required</sup> <a name="auto_pause" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.autoPause"></a>

```python
auto_pause: SynapseSparkPoolAutoPauseOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference">SynapseSparkPoolAutoPauseOutputReference</a>

---

##### `auto_scale`<sup>Required</sup> <a name="auto_scale" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.autoScale"></a>

```python
auto_scale: SynapseSparkPoolAutoScaleOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference">SynapseSparkPoolAutoScaleOutputReference</a>

---

##### `library_requirement`<sup>Required</sup> <a name="library_requirement" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.libraryRequirement"></a>

```python
library_requirement: SynapseSparkPoolLibraryRequirementOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference">SynapseSparkPoolLibraryRequirementOutputReference</a>

---

##### `spark_config`<sup>Required</sup> <a name="spark_config" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.sparkConfig"></a>

```python
spark_config: SynapseSparkPoolSparkConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference">SynapseSparkPoolSparkConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.timeouts"></a>

```python
timeouts: SynapseSparkPoolTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference">SynapseSparkPoolTimeoutsOutputReference</a>

---

##### `auto_pause_input`<sup>Optional</sup> <a name="auto_pause_input" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.autoPauseInput"></a>

```python
auto_pause_input: SynapseSparkPoolAutoPause
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPause">SynapseSparkPoolAutoPause</a>

---

##### `auto_scale_input`<sup>Optional</sup> <a name="auto_scale_input" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.autoScaleInput"></a>

```python
auto_scale_input: SynapseSparkPoolAutoScale
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScale">SynapseSparkPoolAutoScale</a>

---

##### `cache_size_input`<sup>Optional</sup> <a name="cache_size_input" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.cacheSizeInput"></a>

```python
cache_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `compute_isolation_enabled_input`<sup>Optional</sup> <a name="compute_isolation_enabled_input" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.computeIsolationEnabledInput"></a>

```python
compute_isolation_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dynamic_executor_allocation_enabled_input`<sup>Optional</sup> <a name="dynamic_executor_allocation_enabled_input" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.dynamicExecutorAllocationEnabledInput"></a>

```python
dynamic_executor_allocation_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `library_requirement_input`<sup>Optional</sup> <a name="library_requirement_input" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.libraryRequirementInput"></a>

```python
library_requirement_input: SynapseSparkPoolLibraryRequirement
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirement">SynapseSparkPoolLibraryRequirement</a>

---

##### `max_executors_input`<sup>Optional</sup> <a name="max_executors_input" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.maxExecutorsInput"></a>

```python
max_executors_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_executors_input`<sup>Optional</sup> <a name="min_executors_input" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.minExecutorsInput"></a>

```python
min_executors_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `node_count_input`<sup>Optional</sup> <a name="node_count_input" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.nodeCountInput"></a>

```python
node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `node_size_family_input`<sup>Optional</sup> <a name="node_size_family_input" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.nodeSizeFamilyInput"></a>

```python
node_size_family_input: str
```

- *Type:* str

---

##### `node_size_input`<sup>Optional</sup> <a name="node_size_input" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.nodeSizeInput"></a>

```python
node_size_input: str
```

- *Type:* str

---

##### `session_level_packages_enabled_input`<sup>Optional</sup> <a name="session_level_packages_enabled_input" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.sessionLevelPackagesEnabledInput"></a>

```python
session_level_packages_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `spark_config_input`<sup>Optional</sup> <a name="spark_config_input" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.sparkConfigInput"></a>

```python
spark_config_input: SynapseSparkPoolSparkConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfig">SynapseSparkPoolSparkConfig</a>

---

##### `spark_events_folder_input`<sup>Optional</sup> <a name="spark_events_folder_input" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.sparkEventsFolderInput"></a>

```python
spark_events_folder_input: str
```

- *Type:* str

---

##### `spark_log_folder_input`<sup>Optional</sup> <a name="spark_log_folder_input" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.sparkLogFolderInput"></a>

```python
spark_log_folder_input: str
```

- *Type:* str

---

##### `spark_version_input`<sup>Optional</sup> <a name="spark_version_input" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.sparkVersionInput"></a>

```python
spark_version_input: str
```

- *Type:* str

---

##### `synapse_workspace_id_input`<sup>Optional</sup> <a name="synapse_workspace_id_input" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.synapseWorkspaceIdInput"></a>

```python
synapse_workspace_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, SynapseSparkPoolTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeouts">SynapseSparkPoolTimeouts</a>]

---

##### `cache_size`<sup>Required</sup> <a name="cache_size" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.cacheSize"></a>

```python
cache_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `compute_isolation_enabled`<sup>Required</sup> <a name="compute_isolation_enabled" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.computeIsolationEnabled"></a>

```python
compute_isolation_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dynamic_executor_allocation_enabled`<sup>Required</sup> <a name="dynamic_executor_allocation_enabled" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.dynamicExecutorAllocationEnabled"></a>

```python
dynamic_executor_allocation_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `max_executors`<sup>Required</sup> <a name="max_executors" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.maxExecutors"></a>

```python
max_executors: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_executors`<sup>Required</sup> <a name="min_executors" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.minExecutors"></a>

```python
min_executors: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `node_size`<sup>Required</sup> <a name="node_size" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.nodeSize"></a>

```python
node_size: str
```

- *Type:* str

---

##### `node_size_family`<sup>Required</sup> <a name="node_size_family" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.nodeSizeFamily"></a>

```python
node_size_family: str
```

- *Type:* str

---

##### `session_level_packages_enabled`<sup>Required</sup> <a name="session_level_packages_enabled" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.sessionLevelPackagesEnabled"></a>

```python
session_level_packages_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `spark_events_folder`<sup>Required</sup> <a name="spark_events_folder" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.sparkEventsFolder"></a>

```python
spark_events_folder: str
```

- *Type:* str

---

##### `spark_log_folder`<sup>Required</sup> <a name="spark_log_folder" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.sparkLogFolder"></a>

```python
spark_log_folder: str
```

- *Type:* str

---

##### `spark_version`<sup>Required</sup> <a name="spark_version" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.sparkVersion"></a>

```python
spark_version: str
```

- *Type:* str

---

##### `synapse_workspace_id`<sup>Required</sup> <a name="synapse_workspace_id" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.synapseWorkspaceId"></a>

```python
synapse_workspace_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SynapseSparkPoolAutoPause <a name="SynapseSparkPoolAutoPause" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPause"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPause.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_spark_pool

synapseSparkPool.SynapseSparkPoolAutoPause(
  delay_in_minutes: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPause.property.delayInMinutes">delay_in_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#delay_in_minutes SynapseSparkPool#delay_in_minutes}. |

---

##### `delay_in_minutes`<sup>Required</sup> <a name="delay_in_minutes" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPause.property.delayInMinutes"></a>

```python
delay_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#delay_in_minutes SynapseSparkPool#delay_in_minutes}.

---

### SynapseSparkPoolAutoScale <a name="SynapseSparkPoolAutoScale" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScale"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScale.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_spark_pool

synapseSparkPool.SynapseSparkPoolAutoScale(
  max_node_count: typing.Union[int, float],
  min_node_count: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScale.property.maxNodeCount">max_node_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#max_node_count SynapseSparkPool#max_node_count}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScale.property.minNodeCount">min_node_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#min_node_count SynapseSparkPool#min_node_count}. |

---

##### `max_node_count`<sup>Required</sup> <a name="max_node_count" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScale.property.maxNodeCount"></a>

```python
max_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#max_node_count SynapseSparkPool#max_node_count}.

---

##### `min_node_count`<sup>Required</sup> <a name="min_node_count" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScale.property.minNodeCount"></a>

```python
min_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#min_node_count SynapseSparkPool#min_node_count}.

---

### SynapseSparkPoolConfig <a name="SynapseSparkPoolConfig" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_spark_pool

synapseSparkPool.SynapseSparkPoolConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  node_size: str,
  node_size_family: str,
  spark_version: str,
  synapse_workspace_id: str,
  auto_pause: SynapseSparkPoolAutoPause = None,
  auto_scale: SynapseSparkPoolAutoScale = None,
  cache_size: typing.Union[int, float] = None,
  compute_isolation_enabled: typing.Union[bool, IResolvable] = None,
  dynamic_executor_allocation_enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  library_requirement: SynapseSparkPoolLibraryRequirement = None,
  max_executors: typing.Union[int, float] = None,
  min_executors: typing.Union[int, float] = None,
  node_count: typing.Union[int, float] = None,
  session_level_packages_enabled: typing.Union[bool, IResolvable] = None,
  spark_config: SynapseSparkPoolSparkConfig = None,
  spark_events_folder: str = None,
  spark_log_folder: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: SynapseSparkPoolTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#name SynapseSparkPool#name}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.nodeSize">node_size</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#node_size SynapseSparkPool#node_size}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.nodeSizeFamily">node_size_family</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#node_size_family SynapseSparkPool#node_size_family}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.sparkVersion">spark_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#spark_version SynapseSparkPool#spark_version}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.synapseWorkspaceId">synapse_workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#synapse_workspace_id SynapseSparkPool#synapse_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.autoPause">auto_pause</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPause">SynapseSparkPoolAutoPause</a></code> | auto_pause block. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.autoScale">auto_scale</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScale">SynapseSparkPoolAutoScale</a></code> | auto_scale block. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.cacheSize">cache_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#cache_size SynapseSparkPool#cache_size}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.computeIsolationEnabled">compute_isolation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#compute_isolation_enabled SynapseSparkPool#compute_isolation_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.dynamicExecutorAllocationEnabled">dynamic_executor_allocation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#dynamic_executor_allocation_enabled SynapseSparkPool#dynamic_executor_allocation_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#id SynapseSparkPool#id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.libraryRequirement">library_requirement</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirement">SynapseSparkPoolLibraryRequirement</a></code> | library_requirement block. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.maxExecutors">max_executors</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#max_executors SynapseSparkPool#max_executors}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.minExecutors">min_executors</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#min_executors SynapseSparkPool#min_executors}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#node_count SynapseSparkPool#node_count}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.sessionLevelPackagesEnabled">session_level_packages_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#session_level_packages_enabled SynapseSparkPool#session_level_packages_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.sparkConfig">spark_config</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfig">SynapseSparkPoolSparkConfig</a></code> | spark_config block. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.sparkEventsFolder">spark_events_folder</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#spark_events_folder SynapseSparkPool#spark_events_folder}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.sparkLogFolder">spark_log_folder</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#spark_log_folder SynapseSparkPool#spark_log_folder}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#tags SynapseSparkPool#tags}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeouts">SynapseSparkPoolTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#name SynapseSparkPool#name}.

---

##### `node_size`<sup>Required</sup> <a name="node_size" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.nodeSize"></a>

```python
node_size: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#node_size SynapseSparkPool#node_size}.

---

##### `node_size_family`<sup>Required</sup> <a name="node_size_family" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.nodeSizeFamily"></a>

```python
node_size_family: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#node_size_family SynapseSparkPool#node_size_family}.

---

##### `spark_version`<sup>Required</sup> <a name="spark_version" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.sparkVersion"></a>

```python
spark_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#spark_version SynapseSparkPool#spark_version}.

---

##### `synapse_workspace_id`<sup>Required</sup> <a name="synapse_workspace_id" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.synapseWorkspaceId"></a>

```python
synapse_workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#synapse_workspace_id SynapseSparkPool#synapse_workspace_id}.

---

##### `auto_pause`<sup>Optional</sup> <a name="auto_pause" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.autoPause"></a>

```python
auto_pause: SynapseSparkPoolAutoPause
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPause">SynapseSparkPoolAutoPause</a>

auto_pause block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#auto_pause SynapseSparkPool#auto_pause}

---

##### `auto_scale`<sup>Optional</sup> <a name="auto_scale" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.autoScale"></a>

```python
auto_scale: SynapseSparkPoolAutoScale
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScale">SynapseSparkPoolAutoScale</a>

auto_scale block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#auto_scale SynapseSparkPool#auto_scale}

---

##### `cache_size`<sup>Optional</sup> <a name="cache_size" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.cacheSize"></a>

```python
cache_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#cache_size SynapseSparkPool#cache_size}.

---

##### `compute_isolation_enabled`<sup>Optional</sup> <a name="compute_isolation_enabled" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.computeIsolationEnabled"></a>

```python
compute_isolation_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#compute_isolation_enabled SynapseSparkPool#compute_isolation_enabled}.

---

##### `dynamic_executor_allocation_enabled`<sup>Optional</sup> <a name="dynamic_executor_allocation_enabled" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.dynamicExecutorAllocationEnabled"></a>

```python
dynamic_executor_allocation_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#dynamic_executor_allocation_enabled SynapseSparkPool#dynamic_executor_allocation_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#id SynapseSparkPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `library_requirement`<sup>Optional</sup> <a name="library_requirement" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.libraryRequirement"></a>

```python
library_requirement: SynapseSparkPoolLibraryRequirement
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirement">SynapseSparkPoolLibraryRequirement</a>

library_requirement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#library_requirement SynapseSparkPool#library_requirement}

---

##### `max_executors`<sup>Optional</sup> <a name="max_executors" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.maxExecutors"></a>

```python
max_executors: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#max_executors SynapseSparkPool#max_executors}.

---

##### `min_executors`<sup>Optional</sup> <a name="min_executors" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.minExecutors"></a>

```python
min_executors: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#min_executors SynapseSparkPool#min_executors}.

---

##### `node_count`<sup>Optional</sup> <a name="node_count" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#node_count SynapseSparkPool#node_count}.

---

##### `session_level_packages_enabled`<sup>Optional</sup> <a name="session_level_packages_enabled" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.sessionLevelPackagesEnabled"></a>

```python
session_level_packages_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#session_level_packages_enabled SynapseSparkPool#session_level_packages_enabled}.

---

##### `spark_config`<sup>Optional</sup> <a name="spark_config" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.sparkConfig"></a>

```python
spark_config: SynapseSparkPoolSparkConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfig">SynapseSparkPoolSparkConfig</a>

spark_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#spark_config SynapseSparkPool#spark_config}

---

##### `spark_events_folder`<sup>Optional</sup> <a name="spark_events_folder" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.sparkEventsFolder"></a>

```python
spark_events_folder: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#spark_events_folder SynapseSparkPool#spark_events_folder}.

---

##### `spark_log_folder`<sup>Optional</sup> <a name="spark_log_folder" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.sparkLogFolder"></a>

```python
spark_log_folder: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#spark_log_folder SynapseSparkPool#spark_log_folder}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#tags SynapseSparkPool#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.timeouts"></a>

```python
timeouts: SynapseSparkPoolTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeouts">SynapseSparkPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#timeouts SynapseSparkPool#timeouts}

---

### SynapseSparkPoolLibraryRequirement <a name="SynapseSparkPoolLibraryRequirement" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirement.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_spark_pool

synapseSparkPool.SynapseSparkPoolLibraryRequirement(
  content: str,
  filename: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirement.property.content">content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#content SynapseSparkPool#content}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirement.property.filename">filename</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#filename SynapseSparkPool#filename}. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirement.property.content"></a>

```python
content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#content SynapseSparkPool#content}.

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirement.property.filename"></a>

```python
filename: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#filename SynapseSparkPool#filename}.

---

### SynapseSparkPoolSparkConfig <a name="SynapseSparkPoolSparkConfig" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_spark_pool

synapseSparkPool.SynapseSparkPoolSparkConfig(
  content: str,
  filename: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfig.property.content">content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#content SynapseSparkPool#content}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfig.property.filename">filename</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#filename SynapseSparkPool#filename}. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfig.property.content"></a>

```python
content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#content SynapseSparkPool#content}.

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfig.property.filename"></a>

```python
filename: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#filename SynapseSparkPool#filename}.

---

### SynapseSparkPoolTimeouts <a name="SynapseSparkPoolTimeouts" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_spark_pool

synapseSparkPool.SynapseSparkPoolTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#create SynapseSparkPool#create}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#delete SynapseSparkPool#delete}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#read SynapseSparkPool#read}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#update SynapseSparkPool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#create SynapseSparkPool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#delete SynapseSparkPool#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#read SynapseSparkPool#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/synapse_spark_pool#update SynapseSparkPool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SynapseSparkPoolAutoPauseOutputReference <a name="SynapseSparkPoolAutoPauseOutputReference" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_spark_pool

synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.property.delayInMinutesInput">delay_in_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.property.delayInMinutes">delay_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPause">SynapseSparkPoolAutoPause</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delay_in_minutes_input`<sup>Optional</sup> <a name="delay_in_minutes_input" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.property.delayInMinutesInput"></a>

```python
delay_in_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `delay_in_minutes`<sup>Required</sup> <a name="delay_in_minutes" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.property.delayInMinutes"></a>

```python
delay_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.property.internalValue"></a>

```python
internal_value: SynapseSparkPoolAutoPause
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPause">SynapseSparkPoolAutoPause</a>

---


### SynapseSparkPoolAutoScaleOutputReference <a name="SynapseSparkPoolAutoScaleOutputReference" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_spark_pool

synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.property.maxNodeCountInput">max_node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.property.minNodeCountInput">min_node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.property.maxNodeCount">max_node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.property.minNodeCount">min_node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScale">SynapseSparkPoolAutoScale</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_node_count_input`<sup>Optional</sup> <a name="max_node_count_input" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.property.maxNodeCountInput"></a>

```python
max_node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_node_count_input`<sup>Optional</sup> <a name="min_node_count_input" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.property.minNodeCountInput"></a>

```python
min_node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_node_count`<sup>Required</sup> <a name="max_node_count" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.property.maxNodeCount"></a>

```python
max_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_node_count`<sup>Required</sup> <a name="min_node_count" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.property.minNodeCount"></a>

```python
min_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.property.internalValue"></a>

```python
internal_value: SynapseSparkPoolAutoScale
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScale">SynapseSparkPoolAutoScale</a>

---


### SynapseSparkPoolLibraryRequirementOutputReference <a name="SynapseSparkPoolLibraryRequirementOutputReference" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_spark_pool

synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.property.filenameInput">filename_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.property.filename">filename</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirement">SynapseSparkPoolLibraryRequirement</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `filename_input`<sup>Optional</sup> <a name="filename_input" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.property.filenameInput"></a>

```python
filename_input: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.property.filename"></a>

```python
filename: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.property.internalValue"></a>

```python
internal_value: SynapseSparkPoolLibraryRequirement
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirement">SynapseSparkPoolLibraryRequirement</a>

---


### SynapseSparkPoolSparkConfigOutputReference <a name="SynapseSparkPoolSparkConfigOutputReference" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_spark_pool

synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.property.filenameInput">filename_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.property.filename">filename</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfig">SynapseSparkPoolSparkConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `filename_input`<sup>Optional</sup> <a name="filename_input" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.property.filenameInput"></a>

```python
filename_input: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.property.filename"></a>

```python
filename: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.property.internalValue"></a>

```python
internal_value: SynapseSparkPoolSparkConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfig">SynapseSparkPoolSparkConfig</a>

---


### SynapseSparkPoolTimeoutsOutputReference <a name="SynapseSparkPoolTimeoutsOutputReference" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_spark_pool

synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeouts">SynapseSparkPoolTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SynapseSparkPoolTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeouts">SynapseSparkPoolTimeouts</a>]

---



