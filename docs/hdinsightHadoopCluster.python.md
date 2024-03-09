# `hdinsightHadoopCluster` Submodule <a name="`hdinsightHadoopCluster` Submodule" id="@cdktf/provider-azurerm.hdinsightHadoopCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HdinsightHadoopCluster <a name="HdinsightHadoopCluster" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster azurerm_hdinsight_hadoop_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hadoop_cluster

hdinsightHadoopCluster.HdinsightHadoopCluster(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_version: str,
  component_version: HdinsightHadoopClusterComponentVersion,
  gateway: HdinsightHadoopClusterGateway,
  location: str,
  name: str,
  resource_group_name: str,
  roles: HdinsightHadoopClusterRoles,
  tier: str,
  compute_isolation: HdinsightHadoopClusterComputeIsolation = None,
  disk_encryption: typing.Union[IResolvable, typing.List[HdinsightHadoopClusterDiskEncryption]] = None,
  extension: HdinsightHadoopClusterExtension = None,
  id: str = None,
  metastores: HdinsightHadoopClusterMetastores = None,
  monitor: HdinsightHadoopClusterMonitor = None,
  network: HdinsightHadoopClusterNetwork = None,
  security_profile: HdinsightHadoopClusterSecurityProfile = None,
  storage_account: typing.Union[IResolvable, typing.List[HdinsightHadoopClusterStorageAccount]] = None,
  storage_account_gen2: HdinsightHadoopClusterStorageAccountGen2 = None,
  tags: typing.Mapping[str] = None,
  timeouts: HdinsightHadoopClusterTimeouts = None,
  tls_min_version: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.Initializer.parameter.clusterVersion">cluster_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#cluster_version HdinsightHadoopCluster#cluster_version}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.Initializer.parameter.componentVersion">component_version</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersion">HdinsightHadoopClusterComponentVersion</a></code> | component_version block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.Initializer.parameter.gateway">gateway</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGateway">HdinsightHadoopClusterGateway</a></code> | gateway block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#location HdinsightHadoopCluster#location}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#name HdinsightHadoopCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#resource_group_name HdinsightHadoopCluster#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.Initializer.parameter.roles">roles</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRoles">HdinsightHadoopClusterRoles</a></code> | roles block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.Initializer.parameter.tier">tier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#tier HdinsightHadoopCluster#tier}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.Initializer.parameter.computeIsolation">compute_isolation</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolation">HdinsightHadoopClusterComputeIsolation</a></code> | compute_isolation block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.Initializer.parameter.diskEncryption">disk_encryption</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryption">HdinsightHadoopClusterDiskEncryption</a>]]</code> | disk_encryption block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.Initializer.parameter.extension">extension</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtension">HdinsightHadoopClusterExtension</a></code> | extension block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#id HdinsightHadoopCluster#id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.Initializer.parameter.metastores">metastores</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastores">HdinsightHadoopClusterMetastores</a></code> | metastores block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.Initializer.parameter.monitor">monitor</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitor">HdinsightHadoopClusterMonitor</a></code> | monitor block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.Initializer.parameter.network">network</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetwork">HdinsightHadoopClusterNetwork</a></code> | network block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.Initializer.parameter.securityProfile">security_profile</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfile">HdinsightHadoopClusterSecurityProfile</a></code> | security_profile block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.Initializer.parameter.storageAccount">storage_account</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccount">HdinsightHadoopClusterStorageAccount</a>]]</code> | storage_account block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.Initializer.parameter.storageAccountGen2">storage_account_gen2</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2">HdinsightHadoopClusterStorageAccountGen2</a></code> | storage_account_gen2 block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#tags HdinsightHadoopCluster#tags}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeouts">HdinsightHadoopClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.Initializer.parameter.tlsMinVersion">tls_min_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#tls_min_version HdinsightHadoopCluster#tls_min_version}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_version`<sup>Required</sup> <a name="cluster_version" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.Initializer.parameter.clusterVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#cluster_version HdinsightHadoopCluster#cluster_version}.

---

##### `component_version`<sup>Required</sup> <a name="component_version" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.Initializer.parameter.componentVersion"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersion">HdinsightHadoopClusterComponentVersion</a>

component_version block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#component_version HdinsightHadoopCluster#component_version}

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.Initializer.parameter.gateway"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGateway">HdinsightHadoopClusterGateway</a>

gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#gateway HdinsightHadoopCluster#gateway}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#location HdinsightHadoopCluster#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#name HdinsightHadoopCluster#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#resource_group_name HdinsightHadoopCluster#resource_group_name}.

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.Initializer.parameter.roles"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRoles">HdinsightHadoopClusterRoles</a>

roles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#roles HdinsightHadoopCluster#roles}

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.Initializer.parameter.tier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#tier HdinsightHadoopCluster#tier}.

---

##### `compute_isolation`<sup>Optional</sup> <a name="compute_isolation" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.Initializer.parameter.computeIsolation"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolation">HdinsightHadoopClusterComputeIsolation</a>

compute_isolation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#compute_isolation HdinsightHadoopCluster#compute_isolation}

---

##### `disk_encryption`<sup>Optional</sup> <a name="disk_encryption" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.Initializer.parameter.diskEncryption"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryption">HdinsightHadoopClusterDiskEncryption</a>]]

disk_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#disk_encryption HdinsightHadoopCluster#disk_encryption}

---

##### `extension`<sup>Optional</sup> <a name="extension" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.Initializer.parameter.extension"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtension">HdinsightHadoopClusterExtension</a>

extension block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#extension HdinsightHadoopCluster#extension}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#id HdinsightHadoopCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metastores`<sup>Optional</sup> <a name="metastores" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.Initializer.parameter.metastores"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastores">HdinsightHadoopClusterMetastores</a>

metastores block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#metastores HdinsightHadoopCluster#metastores}

---

##### `monitor`<sup>Optional</sup> <a name="monitor" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.Initializer.parameter.monitor"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitor">HdinsightHadoopClusterMonitor</a>

monitor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#monitor HdinsightHadoopCluster#monitor}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.Initializer.parameter.network"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetwork">HdinsightHadoopClusterNetwork</a>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#network HdinsightHadoopCluster#network}

---

##### `security_profile`<sup>Optional</sup> <a name="security_profile" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.Initializer.parameter.securityProfile"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfile">HdinsightHadoopClusterSecurityProfile</a>

security_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#security_profile HdinsightHadoopCluster#security_profile}

---

##### `storage_account`<sup>Optional</sup> <a name="storage_account" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.Initializer.parameter.storageAccount"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccount">HdinsightHadoopClusterStorageAccount</a>]]

storage_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#storage_account HdinsightHadoopCluster#storage_account}

---

##### `storage_account_gen2`<sup>Optional</sup> <a name="storage_account_gen2" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.Initializer.parameter.storageAccountGen2"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2">HdinsightHadoopClusterStorageAccountGen2</a>

storage_account_gen2 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#storage_account_gen2 HdinsightHadoopCluster#storage_account_gen2}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#tags HdinsightHadoopCluster#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeouts">HdinsightHadoopClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#timeouts HdinsightHadoopCluster#timeouts}

---

##### `tls_min_version`<sup>Optional</sup> <a name="tls_min_version" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.Initializer.parameter.tlsMinVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#tls_min_version HdinsightHadoopCluster#tls_min_version}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putComponentVersion">put_component_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putComputeIsolation">put_compute_isolation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putDiskEncryption">put_disk_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putExtension">put_extension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putGateway">put_gateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putMetastores">put_metastores</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putMonitor">put_monitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putNetwork">put_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putRoles">put_roles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putSecurityProfile">put_security_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putStorageAccount">put_storage_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putStorageAccountGen2">put_storage_account_gen2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.resetComputeIsolation">reset_compute_isolation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.resetDiskEncryption">reset_disk_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.resetExtension">reset_extension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.resetMetastores">reset_metastores</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.resetMonitor">reset_monitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.resetNetwork">reset_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.resetSecurityProfile">reset_security_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.resetStorageAccount">reset_storage_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.resetStorageAccountGen2">reset_storage_account_gen2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.resetTlsMinVersion">reset_tls_min_version</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_component_version` <a name="put_component_version" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putComponentVersion"></a>

```python
def put_component_version(
  hadoop: str
) -> None
```

###### `hadoop`<sup>Required</sup> <a name="hadoop" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putComponentVersion.parameter.hadoop"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#hadoop HdinsightHadoopCluster#hadoop}.

---

##### `put_compute_isolation` <a name="put_compute_isolation" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putComputeIsolation"></a>

```python
def put_compute_isolation(
  compute_isolation_enabled: typing.Union[bool, IResolvable] = None,
  host_sku: str = None
) -> None
```

###### `compute_isolation_enabled`<sup>Optional</sup> <a name="compute_isolation_enabled" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putComputeIsolation.parameter.computeIsolationEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#compute_isolation_enabled HdinsightHadoopCluster#compute_isolation_enabled}.

---

###### `host_sku`<sup>Optional</sup> <a name="host_sku" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putComputeIsolation.parameter.hostSku"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#host_sku HdinsightHadoopCluster#host_sku}.

---

##### `put_disk_encryption` <a name="put_disk_encryption" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putDiskEncryption"></a>

```python
def put_disk_encryption(
  value: typing.Union[IResolvable, typing.List[HdinsightHadoopClusterDiskEncryption]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putDiskEncryption.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryption">HdinsightHadoopClusterDiskEncryption</a>]]

---

##### `put_extension` <a name="put_extension" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putExtension"></a>

```python
def put_extension(
  log_analytics_workspace_id: str,
  primary_key: str
) -> None
```

###### `log_analytics_workspace_id`<sup>Required</sup> <a name="log_analytics_workspace_id" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putExtension.parameter.logAnalyticsWorkspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#log_analytics_workspace_id HdinsightHadoopCluster#log_analytics_workspace_id}.

---

###### `primary_key`<sup>Required</sup> <a name="primary_key" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putExtension.parameter.primaryKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#primary_key HdinsightHadoopCluster#primary_key}.

---

##### `put_gateway` <a name="put_gateway" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putGateway"></a>

```python
def put_gateway(
  password: str,
  username: str
) -> None
```

###### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putGateway.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#password HdinsightHadoopCluster#password}.

---

###### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putGateway.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#username HdinsightHadoopCluster#username}.

---

##### `put_metastores` <a name="put_metastores" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putMetastores"></a>

```python
def put_metastores(
  ambari: HdinsightHadoopClusterMetastoresAmbari = None,
  hive: HdinsightHadoopClusterMetastoresHive = None,
  oozie: HdinsightHadoopClusterMetastoresOozie = None
) -> None
```

###### `ambari`<sup>Optional</sup> <a name="ambari" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putMetastores.parameter.ambari"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbari">HdinsightHadoopClusterMetastoresAmbari</a>

ambari block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#ambari HdinsightHadoopCluster#ambari}

---

###### `hive`<sup>Optional</sup> <a name="hive" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putMetastores.parameter.hive"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHive">HdinsightHadoopClusterMetastoresHive</a>

hive block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#hive HdinsightHadoopCluster#hive}

---

###### `oozie`<sup>Optional</sup> <a name="oozie" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putMetastores.parameter.oozie"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozie">HdinsightHadoopClusterMetastoresOozie</a>

oozie block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#oozie HdinsightHadoopCluster#oozie}

---

##### `put_monitor` <a name="put_monitor" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putMonitor"></a>

```python
def put_monitor(
  log_analytics_workspace_id: str,
  primary_key: str
) -> None
```

###### `log_analytics_workspace_id`<sup>Required</sup> <a name="log_analytics_workspace_id" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putMonitor.parameter.logAnalyticsWorkspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#log_analytics_workspace_id HdinsightHadoopCluster#log_analytics_workspace_id}.

---

###### `primary_key`<sup>Required</sup> <a name="primary_key" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putMonitor.parameter.primaryKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#primary_key HdinsightHadoopCluster#primary_key}.

---

##### `put_network` <a name="put_network" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putNetwork"></a>

```python
def put_network(
  connection_direction: str = None,
  private_link_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `connection_direction`<sup>Optional</sup> <a name="connection_direction" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putNetwork.parameter.connectionDirection"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#connection_direction HdinsightHadoopCluster#connection_direction}.

---

###### `private_link_enabled`<sup>Optional</sup> <a name="private_link_enabled" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putNetwork.parameter.privateLinkEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#private_link_enabled HdinsightHadoopCluster#private_link_enabled}.

---

##### `put_roles` <a name="put_roles" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putRoles"></a>

```python
def put_roles(
  head_node: HdinsightHadoopClusterRolesHeadNode,
  worker_node: HdinsightHadoopClusterRolesWorkerNode,
  zookeeper_node: HdinsightHadoopClusterRolesZookeeperNode,
  edge_node: HdinsightHadoopClusterRolesEdgeNode = None
) -> None
```

###### `head_node`<sup>Required</sup> <a name="head_node" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putRoles.parameter.headNode"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNode">HdinsightHadoopClusterRolesHeadNode</a>

head_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#head_node HdinsightHadoopCluster#head_node}

---

###### `worker_node`<sup>Required</sup> <a name="worker_node" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putRoles.parameter.workerNode"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNode">HdinsightHadoopClusterRolesWorkerNode</a>

worker_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#worker_node HdinsightHadoopCluster#worker_node}

---

###### `zookeeper_node`<sup>Required</sup> <a name="zookeeper_node" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putRoles.parameter.zookeeperNode"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNode">HdinsightHadoopClusterRolesZookeeperNode</a>

zookeeper_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#zookeeper_node HdinsightHadoopCluster#zookeeper_node}

---

###### `edge_node`<sup>Optional</sup> <a name="edge_node" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putRoles.parameter.edgeNode"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNode">HdinsightHadoopClusterRolesEdgeNode</a>

edge_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#edge_node HdinsightHadoopCluster#edge_node}

---

##### `put_security_profile` <a name="put_security_profile" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putSecurityProfile"></a>

```python
def put_security_profile(
  aadds_resource_id: str,
  domain_name: str,
  domain_username: str,
  domain_user_password: str,
  ldaps_urls: typing.List[str],
  msi_resource_id: str,
  cluster_users_group_dns: typing.List[str] = None
) -> None
```

###### `aadds_resource_id`<sup>Required</sup> <a name="aadds_resource_id" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putSecurityProfile.parameter.aaddsResourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#aadds_resource_id HdinsightHadoopCluster#aadds_resource_id}.

---

###### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putSecurityProfile.parameter.domainName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#domain_name HdinsightHadoopCluster#domain_name}.

---

###### `domain_username`<sup>Required</sup> <a name="domain_username" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putSecurityProfile.parameter.domainUsername"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#domain_username HdinsightHadoopCluster#domain_username}.

---

###### `domain_user_password`<sup>Required</sup> <a name="domain_user_password" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putSecurityProfile.parameter.domainUserPassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#domain_user_password HdinsightHadoopCluster#domain_user_password}.

---

###### `ldaps_urls`<sup>Required</sup> <a name="ldaps_urls" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putSecurityProfile.parameter.ldapsUrls"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#ldaps_urls HdinsightHadoopCluster#ldaps_urls}.

---

###### `msi_resource_id`<sup>Required</sup> <a name="msi_resource_id" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putSecurityProfile.parameter.msiResourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#msi_resource_id HdinsightHadoopCluster#msi_resource_id}.

---

###### `cluster_users_group_dns`<sup>Optional</sup> <a name="cluster_users_group_dns" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putSecurityProfile.parameter.clusterUsersGroupDns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#cluster_users_group_dns HdinsightHadoopCluster#cluster_users_group_dns}.

---

##### `put_storage_account` <a name="put_storage_account" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putStorageAccount"></a>

```python
def put_storage_account(
  value: typing.Union[IResolvable, typing.List[HdinsightHadoopClusterStorageAccount]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putStorageAccount.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccount">HdinsightHadoopClusterStorageAccount</a>]]

---

##### `put_storage_account_gen2` <a name="put_storage_account_gen2" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putStorageAccountGen2"></a>

```python
def put_storage_account_gen2(
  filesystem_id: str,
  is_default: typing.Union[bool, IResolvable],
  managed_identity_resource_id: str,
  storage_resource_id: str
) -> None
```

###### `filesystem_id`<sup>Required</sup> <a name="filesystem_id" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putStorageAccountGen2.parameter.filesystemId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#filesystem_id HdinsightHadoopCluster#filesystem_id}.

---

###### `is_default`<sup>Required</sup> <a name="is_default" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putStorageAccountGen2.parameter.isDefault"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#is_default HdinsightHadoopCluster#is_default}.

---

###### `managed_identity_resource_id`<sup>Required</sup> <a name="managed_identity_resource_id" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putStorageAccountGen2.parameter.managedIdentityResourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#managed_identity_resource_id HdinsightHadoopCluster#managed_identity_resource_id}.

---

###### `storage_resource_id`<sup>Required</sup> <a name="storage_resource_id" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putStorageAccountGen2.parameter.storageResourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#storage_resource_id HdinsightHadoopCluster#storage_resource_id}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#create HdinsightHadoopCluster#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#delete HdinsightHadoopCluster#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#read HdinsightHadoopCluster#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#update HdinsightHadoopCluster#update}.

---

##### `reset_compute_isolation` <a name="reset_compute_isolation" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.resetComputeIsolation"></a>

```python
def reset_compute_isolation() -> None
```

##### `reset_disk_encryption` <a name="reset_disk_encryption" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.resetDiskEncryption"></a>

```python
def reset_disk_encryption() -> None
```

##### `reset_extension` <a name="reset_extension" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.resetExtension"></a>

```python
def reset_extension() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_metastores` <a name="reset_metastores" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.resetMetastores"></a>

```python
def reset_metastores() -> None
```

##### `reset_monitor` <a name="reset_monitor" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.resetMonitor"></a>

```python
def reset_monitor() -> None
```

##### `reset_network` <a name="reset_network" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.resetNetwork"></a>

```python
def reset_network() -> None
```

##### `reset_security_profile` <a name="reset_security_profile" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.resetSecurityProfile"></a>

```python
def reset_security_profile() -> None
```

##### `reset_storage_account` <a name="reset_storage_account" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.resetStorageAccount"></a>

```python
def reset_storage_account() -> None
```

##### `reset_storage_account_gen2` <a name="reset_storage_account_gen2" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.resetStorageAccountGen2"></a>

```python
def reset_storage_account_gen2() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_tls_min_version` <a name="reset_tls_min_version" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.resetTlsMinVersion"></a>

```python
def reset_tls_min_version() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a HdinsightHadoopCluster resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hadoop_cluster

hdinsightHadoopCluster.HdinsightHadoopCluster.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hadoop_cluster

hdinsightHadoopCluster.HdinsightHadoopCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hadoop_cluster

hdinsightHadoopCluster.HdinsightHadoopCluster.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hadoop_cluster

hdinsightHadoopCluster.HdinsightHadoopCluster.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a HdinsightHadoopCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the HdinsightHadoopCluster to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing HdinsightHadoopCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the HdinsightHadoopCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.componentVersion">component_version</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference">HdinsightHadoopClusterComponentVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.computeIsolation">compute_isolation</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference">HdinsightHadoopClusterComputeIsolationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.diskEncryption">disk_encryption</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionList">HdinsightHadoopClusterDiskEncryptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.extension">extension</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference">HdinsightHadoopClusterExtensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.gateway">gateway</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference">HdinsightHadoopClusterGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.httpsEndpoint">https_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.metastores">metastores</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference">HdinsightHadoopClusterMetastoresOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.monitor">monitor</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference">HdinsightHadoopClusterMonitorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.network">network</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference">HdinsightHadoopClusterNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.roles">roles</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference">HdinsightHadoopClusterRolesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.securityProfile">security_profile</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference">HdinsightHadoopClusterSecurityProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.sshEndpoint">ssh_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.storageAccount">storage_account</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountList">HdinsightHadoopClusterStorageAccountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.storageAccountGen2">storage_account_gen2</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference">HdinsightHadoopClusterStorageAccountGen2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference">HdinsightHadoopClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.clusterVersionInput">cluster_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.componentVersionInput">component_version_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersion">HdinsightHadoopClusterComponentVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.computeIsolationInput">compute_isolation_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolation">HdinsightHadoopClusterComputeIsolation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.diskEncryptionInput">disk_encryption_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryption">HdinsightHadoopClusterDiskEncryption</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.extensionInput">extension_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtension">HdinsightHadoopClusterExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.gatewayInput">gateway_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGateway">HdinsightHadoopClusterGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.metastoresInput">metastores_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastores">HdinsightHadoopClusterMetastores</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.monitorInput">monitor_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitor">HdinsightHadoopClusterMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.networkInput">network_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetwork">HdinsightHadoopClusterNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.rolesInput">roles_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRoles">HdinsightHadoopClusterRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.securityProfileInput">security_profile_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfile">HdinsightHadoopClusterSecurityProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.storageAccountGen2Input">storage_account_gen2_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2">HdinsightHadoopClusterStorageAccountGen2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.storageAccountInput">storage_account_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccount">HdinsightHadoopClusterStorageAccount</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.tierInput">tier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeouts">HdinsightHadoopClusterTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.tlsMinVersionInput">tls_min_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.clusterVersion">cluster_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.tier">tier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.tlsMinVersion">tls_min_version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `component_version`<sup>Required</sup> <a name="component_version" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.componentVersion"></a>

```python
component_version: HdinsightHadoopClusterComponentVersionOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference">HdinsightHadoopClusterComponentVersionOutputReference</a>

---

##### `compute_isolation`<sup>Required</sup> <a name="compute_isolation" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.computeIsolation"></a>

```python
compute_isolation: HdinsightHadoopClusterComputeIsolationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference">HdinsightHadoopClusterComputeIsolationOutputReference</a>

---

##### `disk_encryption`<sup>Required</sup> <a name="disk_encryption" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.diskEncryption"></a>

```python
disk_encryption: HdinsightHadoopClusterDiskEncryptionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionList">HdinsightHadoopClusterDiskEncryptionList</a>

---

##### `extension`<sup>Required</sup> <a name="extension" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.extension"></a>

```python
extension: HdinsightHadoopClusterExtensionOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference">HdinsightHadoopClusterExtensionOutputReference</a>

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.gateway"></a>

```python
gateway: HdinsightHadoopClusterGatewayOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference">HdinsightHadoopClusterGatewayOutputReference</a>

---

##### `https_endpoint`<sup>Required</sup> <a name="https_endpoint" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.httpsEndpoint"></a>

```python
https_endpoint: str
```

- *Type:* str

---

##### `metastores`<sup>Required</sup> <a name="metastores" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.metastores"></a>

```python
metastores: HdinsightHadoopClusterMetastoresOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference">HdinsightHadoopClusterMetastoresOutputReference</a>

---

##### `monitor`<sup>Required</sup> <a name="monitor" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.monitor"></a>

```python
monitor: HdinsightHadoopClusterMonitorOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference">HdinsightHadoopClusterMonitorOutputReference</a>

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.network"></a>

```python
network: HdinsightHadoopClusterNetworkOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference">HdinsightHadoopClusterNetworkOutputReference</a>

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.roles"></a>

```python
roles: HdinsightHadoopClusterRolesOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference">HdinsightHadoopClusterRolesOutputReference</a>

---

##### `security_profile`<sup>Required</sup> <a name="security_profile" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.securityProfile"></a>

```python
security_profile: HdinsightHadoopClusterSecurityProfileOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference">HdinsightHadoopClusterSecurityProfileOutputReference</a>

---

##### `ssh_endpoint`<sup>Required</sup> <a name="ssh_endpoint" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.sshEndpoint"></a>

```python
ssh_endpoint: str
```

- *Type:* str

---

##### `storage_account`<sup>Required</sup> <a name="storage_account" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.storageAccount"></a>

```python
storage_account: HdinsightHadoopClusterStorageAccountList
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountList">HdinsightHadoopClusterStorageAccountList</a>

---

##### `storage_account_gen2`<sup>Required</sup> <a name="storage_account_gen2" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.storageAccountGen2"></a>

```python
storage_account_gen2: HdinsightHadoopClusterStorageAccountGen2OutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference">HdinsightHadoopClusterStorageAccountGen2OutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.timeouts"></a>

```python
timeouts: HdinsightHadoopClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference">HdinsightHadoopClusterTimeoutsOutputReference</a>

---

##### `cluster_version_input`<sup>Optional</sup> <a name="cluster_version_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.clusterVersionInput"></a>

```python
cluster_version_input: str
```

- *Type:* str

---

##### `component_version_input`<sup>Optional</sup> <a name="component_version_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.componentVersionInput"></a>

```python
component_version_input: HdinsightHadoopClusterComponentVersion
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersion">HdinsightHadoopClusterComponentVersion</a>

---

##### `compute_isolation_input`<sup>Optional</sup> <a name="compute_isolation_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.computeIsolationInput"></a>

```python
compute_isolation_input: HdinsightHadoopClusterComputeIsolation
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolation">HdinsightHadoopClusterComputeIsolation</a>

---

##### `disk_encryption_input`<sup>Optional</sup> <a name="disk_encryption_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.diskEncryptionInput"></a>

```python
disk_encryption_input: typing.Union[IResolvable, typing.List[HdinsightHadoopClusterDiskEncryption]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryption">HdinsightHadoopClusterDiskEncryption</a>]]

---

##### `extension_input`<sup>Optional</sup> <a name="extension_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.extensionInput"></a>

```python
extension_input: HdinsightHadoopClusterExtension
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtension">HdinsightHadoopClusterExtension</a>

---

##### `gateway_input`<sup>Optional</sup> <a name="gateway_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.gatewayInput"></a>

```python
gateway_input: HdinsightHadoopClusterGateway
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGateway">HdinsightHadoopClusterGateway</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `metastores_input`<sup>Optional</sup> <a name="metastores_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.metastoresInput"></a>

```python
metastores_input: HdinsightHadoopClusterMetastores
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastores">HdinsightHadoopClusterMetastores</a>

---

##### `monitor_input`<sup>Optional</sup> <a name="monitor_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.monitorInput"></a>

```python
monitor_input: HdinsightHadoopClusterMonitor
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitor">HdinsightHadoopClusterMonitor</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.networkInput"></a>

```python
network_input: HdinsightHadoopClusterNetwork
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetwork">HdinsightHadoopClusterNetwork</a>

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `roles_input`<sup>Optional</sup> <a name="roles_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.rolesInput"></a>

```python
roles_input: HdinsightHadoopClusterRoles
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRoles">HdinsightHadoopClusterRoles</a>

---

##### `security_profile_input`<sup>Optional</sup> <a name="security_profile_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.securityProfileInput"></a>

```python
security_profile_input: HdinsightHadoopClusterSecurityProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfile">HdinsightHadoopClusterSecurityProfile</a>

---

##### `storage_account_gen2_input`<sup>Optional</sup> <a name="storage_account_gen2_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.storageAccountGen2Input"></a>

```python
storage_account_gen2_input: HdinsightHadoopClusterStorageAccountGen2
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2">HdinsightHadoopClusterStorageAccountGen2</a>

---

##### `storage_account_input`<sup>Optional</sup> <a name="storage_account_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.storageAccountInput"></a>

```python
storage_account_input: typing.Union[IResolvable, typing.List[HdinsightHadoopClusterStorageAccount]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccount">HdinsightHadoopClusterStorageAccount</a>]]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tier_input`<sup>Optional</sup> <a name="tier_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.tierInput"></a>

```python
tier_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, HdinsightHadoopClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeouts">HdinsightHadoopClusterTimeouts</a>]

---

##### `tls_min_version_input`<sup>Optional</sup> <a name="tls_min_version_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.tlsMinVersionInput"></a>

```python
tls_min_version_input: str
```

- *Type:* str

---

##### `cluster_version`<sup>Required</sup> <a name="cluster_version" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.clusterVersion"></a>

```python
cluster_version: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.tier"></a>

```python
tier: str
```

- *Type:* str

---

##### `tls_min_version`<sup>Required</sup> <a name="tls_min_version" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.tlsMinVersion"></a>

```python
tls_min_version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### HdinsightHadoopClusterComponentVersion <a name="HdinsightHadoopClusterComponentVersion" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersion.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hadoop_cluster

hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersion(
  hadoop: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersion.property.hadoop">hadoop</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#hadoop HdinsightHadoopCluster#hadoop}. |

---

##### `hadoop`<sup>Required</sup> <a name="hadoop" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersion.property.hadoop"></a>

```python
hadoop: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#hadoop HdinsightHadoopCluster#hadoop}.

---

### HdinsightHadoopClusterComputeIsolation <a name="HdinsightHadoopClusterComputeIsolation" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolation.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hadoop_cluster

hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolation(
  compute_isolation_enabled: typing.Union[bool, IResolvable] = None,
  host_sku: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolation.property.computeIsolationEnabled">compute_isolation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#compute_isolation_enabled HdinsightHadoopCluster#compute_isolation_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolation.property.hostSku">host_sku</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#host_sku HdinsightHadoopCluster#host_sku}. |

---

##### `compute_isolation_enabled`<sup>Optional</sup> <a name="compute_isolation_enabled" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolation.property.computeIsolationEnabled"></a>

```python
compute_isolation_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#compute_isolation_enabled HdinsightHadoopCluster#compute_isolation_enabled}.

---

##### `host_sku`<sup>Optional</sup> <a name="host_sku" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolation.property.hostSku"></a>

```python
host_sku: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#host_sku HdinsightHadoopCluster#host_sku}.

---

### HdinsightHadoopClusterConfig <a name="HdinsightHadoopClusterConfig" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hadoop_cluster

hdinsightHadoopCluster.HdinsightHadoopClusterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_version: str,
  component_version: HdinsightHadoopClusterComponentVersion,
  gateway: HdinsightHadoopClusterGateway,
  location: str,
  name: str,
  resource_group_name: str,
  roles: HdinsightHadoopClusterRoles,
  tier: str,
  compute_isolation: HdinsightHadoopClusterComputeIsolation = None,
  disk_encryption: typing.Union[IResolvable, typing.List[HdinsightHadoopClusterDiskEncryption]] = None,
  extension: HdinsightHadoopClusterExtension = None,
  id: str = None,
  metastores: HdinsightHadoopClusterMetastores = None,
  monitor: HdinsightHadoopClusterMonitor = None,
  network: HdinsightHadoopClusterNetwork = None,
  security_profile: HdinsightHadoopClusterSecurityProfile = None,
  storage_account: typing.Union[IResolvable, typing.List[HdinsightHadoopClusterStorageAccount]] = None,
  storage_account_gen2: HdinsightHadoopClusterStorageAccountGen2 = None,
  tags: typing.Mapping[str] = None,
  timeouts: HdinsightHadoopClusterTimeouts = None,
  tls_min_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.clusterVersion">cluster_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#cluster_version HdinsightHadoopCluster#cluster_version}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.componentVersion">component_version</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersion">HdinsightHadoopClusterComponentVersion</a></code> | component_version block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.gateway">gateway</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGateway">HdinsightHadoopClusterGateway</a></code> | gateway block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#location HdinsightHadoopCluster#location}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#name HdinsightHadoopCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#resource_group_name HdinsightHadoopCluster#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.roles">roles</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRoles">HdinsightHadoopClusterRoles</a></code> | roles block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.tier">tier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#tier HdinsightHadoopCluster#tier}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.computeIsolation">compute_isolation</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolation">HdinsightHadoopClusterComputeIsolation</a></code> | compute_isolation block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.diskEncryption">disk_encryption</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryption">HdinsightHadoopClusterDiskEncryption</a>]]</code> | disk_encryption block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.extension">extension</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtension">HdinsightHadoopClusterExtension</a></code> | extension block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#id HdinsightHadoopCluster#id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.metastores">metastores</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastores">HdinsightHadoopClusterMetastores</a></code> | metastores block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.monitor">monitor</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitor">HdinsightHadoopClusterMonitor</a></code> | monitor block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.network">network</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetwork">HdinsightHadoopClusterNetwork</a></code> | network block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.securityProfile">security_profile</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfile">HdinsightHadoopClusterSecurityProfile</a></code> | security_profile block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.storageAccount">storage_account</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccount">HdinsightHadoopClusterStorageAccount</a>]]</code> | storage_account block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.storageAccountGen2">storage_account_gen2</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2">HdinsightHadoopClusterStorageAccountGen2</a></code> | storage_account_gen2 block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#tags HdinsightHadoopCluster#tags}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeouts">HdinsightHadoopClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.tlsMinVersion">tls_min_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#tls_min_version HdinsightHadoopCluster#tls_min_version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_version`<sup>Required</sup> <a name="cluster_version" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.clusterVersion"></a>

```python
cluster_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#cluster_version HdinsightHadoopCluster#cluster_version}.

---

##### `component_version`<sup>Required</sup> <a name="component_version" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.componentVersion"></a>

```python
component_version: HdinsightHadoopClusterComponentVersion
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersion">HdinsightHadoopClusterComponentVersion</a>

component_version block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#component_version HdinsightHadoopCluster#component_version}

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.gateway"></a>

```python
gateway: HdinsightHadoopClusterGateway
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGateway">HdinsightHadoopClusterGateway</a>

gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#gateway HdinsightHadoopCluster#gateway}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#location HdinsightHadoopCluster#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#name HdinsightHadoopCluster#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#resource_group_name HdinsightHadoopCluster#resource_group_name}.

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.roles"></a>

```python
roles: HdinsightHadoopClusterRoles
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRoles">HdinsightHadoopClusterRoles</a>

roles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#roles HdinsightHadoopCluster#roles}

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.tier"></a>

```python
tier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#tier HdinsightHadoopCluster#tier}.

---

##### `compute_isolation`<sup>Optional</sup> <a name="compute_isolation" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.computeIsolation"></a>

```python
compute_isolation: HdinsightHadoopClusterComputeIsolation
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolation">HdinsightHadoopClusterComputeIsolation</a>

compute_isolation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#compute_isolation HdinsightHadoopCluster#compute_isolation}

---

##### `disk_encryption`<sup>Optional</sup> <a name="disk_encryption" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.diskEncryption"></a>

```python
disk_encryption: typing.Union[IResolvable, typing.List[HdinsightHadoopClusterDiskEncryption]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryption">HdinsightHadoopClusterDiskEncryption</a>]]

disk_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#disk_encryption HdinsightHadoopCluster#disk_encryption}

---

##### `extension`<sup>Optional</sup> <a name="extension" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.extension"></a>

```python
extension: HdinsightHadoopClusterExtension
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtension">HdinsightHadoopClusterExtension</a>

extension block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#extension HdinsightHadoopCluster#extension}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#id HdinsightHadoopCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metastores`<sup>Optional</sup> <a name="metastores" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.metastores"></a>

```python
metastores: HdinsightHadoopClusterMetastores
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastores">HdinsightHadoopClusterMetastores</a>

metastores block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#metastores HdinsightHadoopCluster#metastores}

---

##### `monitor`<sup>Optional</sup> <a name="monitor" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.monitor"></a>

```python
monitor: HdinsightHadoopClusterMonitor
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitor">HdinsightHadoopClusterMonitor</a>

monitor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#monitor HdinsightHadoopCluster#monitor}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.network"></a>

```python
network: HdinsightHadoopClusterNetwork
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetwork">HdinsightHadoopClusterNetwork</a>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#network HdinsightHadoopCluster#network}

---

##### `security_profile`<sup>Optional</sup> <a name="security_profile" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.securityProfile"></a>

```python
security_profile: HdinsightHadoopClusterSecurityProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfile">HdinsightHadoopClusterSecurityProfile</a>

security_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#security_profile HdinsightHadoopCluster#security_profile}

---

##### `storage_account`<sup>Optional</sup> <a name="storage_account" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.storageAccount"></a>

```python
storage_account: typing.Union[IResolvable, typing.List[HdinsightHadoopClusterStorageAccount]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccount">HdinsightHadoopClusterStorageAccount</a>]]

storage_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#storage_account HdinsightHadoopCluster#storage_account}

---

##### `storage_account_gen2`<sup>Optional</sup> <a name="storage_account_gen2" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.storageAccountGen2"></a>

```python
storage_account_gen2: HdinsightHadoopClusterStorageAccountGen2
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2">HdinsightHadoopClusterStorageAccountGen2</a>

storage_account_gen2 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#storage_account_gen2 HdinsightHadoopCluster#storage_account_gen2}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#tags HdinsightHadoopCluster#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.timeouts"></a>

```python
timeouts: HdinsightHadoopClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeouts">HdinsightHadoopClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#timeouts HdinsightHadoopCluster#timeouts}

---

##### `tls_min_version`<sup>Optional</sup> <a name="tls_min_version" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterConfig.property.tlsMinVersion"></a>

```python
tls_min_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#tls_min_version HdinsightHadoopCluster#tls_min_version}.

---

### HdinsightHadoopClusterDiskEncryption <a name="HdinsightHadoopClusterDiskEncryption" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryption.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hadoop_cluster

hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryption(
  encryption_algorithm: str = None,
  encryption_at_host_enabled: typing.Union[bool, IResolvable] = None,
  key_vault_key_id: str = None,
  key_vault_managed_identity_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryption.property.encryptionAlgorithm">encryption_algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#encryption_algorithm HdinsightHadoopCluster#encryption_algorithm}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryption.property.encryptionAtHostEnabled">encryption_at_host_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#encryption_at_host_enabled HdinsightHadoopCluster#encryption_at_host_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryption.property.keyVaultKeyId">key_vault_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#key_vault_key_id HdinsightHadoopCluster#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryption.property.keyVaultManagedIdentityId">key_vault_managed_identity_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#key_vault_managed_identity_id HdinsightHadoopCluster#key_vault_managed_identity_id}. |

---

##### `encryption_algorithm`<sup>Optional</sup> <a name="encryption_algorithm" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryption.property.encryptionAlgorithm"></a>

```python
encryption_algorithm: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#encryption_algorithm HdinsightHadoopCluster#encryption_algorithm}.

---

##### `encryption_at_host_enabled`<sup>Optional</sup> <a name="encryption_at_host_enabled" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryption.property.encryptionAtHostEnabled"></a>

```python
encryption_at_host_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#encryption_at_host_enabled HdinsightHadoopCluster#encryption_at_host_enabled}.

---

##### `key_vault_key_id`<sup>Optional</sup> <a name="key_vault_key_id" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryption.property.keyVaultKeyId"></a>

```python
key_vault_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#key_vault_key_id HdinsightHadoopCluster#key_vault_key_id}.

---

##### `key_vault_managed_identity_id`<sup>Optional</sup> <a name="key_vault_managed_identity_id" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryption.property.keyVaultManagedIdentityId"></a>

```python
key_vault_managed_identity_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#key_vault_managed_identity_id HdinsightHadoopCluster#key_vault_managed_identity_id}.

---

### HdinsightHadoopClusterExtension <a name="HdinsightHadoopClusterExtension" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtension.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hadoop_cluster

hdinsightHadoopCluster.HdinsightHadoopClusterExtension(
  log_analytics_workspace_id: str,
  primary_key: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtension.property.logAnalyticsWorkspaceId">log_analytics_workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#log_analytics_workspace_id HdinsightHadoopCluster#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtension.property.primaryKey">primary_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#primary_key HdinsightHadoopCluster#primary_key}. |

---

##### `log_analytics_workspace_id`<sup>Required</sup> <a name="log_analytics_workspace_id" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtension.property.logAnalyticsWorkspaceId"></a>

```python
log_analytics_workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#log_analytics_workspace_id HdinsightHadoopCluster#log_analytics_workspace_id}.

---

##### `primary_key`<sup>Required</sup> <a name="primary_key" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtension.property.primaryKey"></a>

```python
primary_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#primary_key HdinsightHadoopCluster#primary_key}.

---

### HdinsightHadoopClusterGateway <a name="HdinsightHadoopClusterGateway" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGateway"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGateway.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hadoop_cluster

hdinsightHadoopCluster.HdinsightHadoopClusterGateway(
  password: str,
  username: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGateway.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#password HdinsightHadoopCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGateway.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#username HdinsightHadoopCluster#username}. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGateway.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#password HdinsightHadoopCluster#password}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGateway.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#username HdinsightHadoopCluster#username}.

---

### HdinsightHadoopClusterMetastores <a name="HdinsightHadoopClusterMetastores" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastores"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastores.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hadoop_cluster

hdinsightHadoopCluster.HdinsightHadoopClusterMetastores(
  ambari: HdinsightHadoopClusterMetastoresAmbari = None,
  hive: HdinsightHadoopClusterMetastoresHive = None,
  oozie: HdinsightHadoopClusterMetastoresOozie = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastores.property.ambari">ambari</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbari">HdinsightHadoopClusterMetastoresAmbari</a></code> | ambari block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastores.property.hive">hive</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHive">HdinsightHadoopClusterMetastoresHive</a></code> | hive block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastores.property.oozie">oozie</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozie">HdinsightHadoopClusterMetastoresOozie</a></code> | oozie block. |

---

##### `ambari`<sup>Optional</sup> <a name="ambari" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastores.property.ambari"></a>

```python
ambari: HdinsightHadoopClusterMetastoresAmbari
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbari">HdinsightHadoopClusterMetastoresAmbari</a>

ambari block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#ambari HdinsightHadoopCluster#ambari}

---

##### `hive`<sup>Optional</sup> <a name="hive" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastores.property.hive"></a>

```python
hive: HdinsightHadoopClusterMetastoresHive
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHive">HdinsightHadoopClusterMetastoresHive</a>

hive block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#hive HdinsightHadoopCluster#hive}

---

##### `oozie`<sup>Optional</sup> <a name="oozie" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastores.property.oozie"></a>

```python
oozie: HdinsightHadoopClusterMetastoresOozie
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozie">HdinsightHadoopClusterMetastoresOozie</a>

oozie block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#oozie HdinsightHadoopCluster#oozie}

---

### HdinsightHadoopClusterMetastoresAmbari <a name="HdinsightHadoopClusterMetastoresAmbari" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbari"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbari.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hadoop_cluster

hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbari(
  database_name: str,
  password: str,
  server: str,
  username: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbari.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#database_name HdinsightHadoopCluster#database_name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbari.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#password HdinsightHadoopCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbari.property.server">server</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#server HdinsightHadoopCluster#server}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbari.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#username HdinsightHadoopCluster#username}. |

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbari.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#database_name HdinsightHadoopCluster#database_name}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbari.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#password HdinsightHadoopCluster#password}.

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbari.property.server"></a>

```python
server: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#server HdinsightHadoopCluster#server}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbari.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#username HdinsightHadoopCluster#username}.

---

### HdinsightHadoopClusterMetastoresHive <a name="HdinsightHadoopClusterMetastoresHive" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHive"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHive.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hadoop_cluster

hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHive(
  database_name: str,
  password: str,
  server: str,
  username: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHive.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#database_name HdinsightHadoopCluster#database_name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHive.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#password HdinsightHadoopCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHive.property.server">server</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#server HdinsightHadoopCluster#server}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHive.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#username HdinsightHadoopCluster#username}. |

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHive.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#database_name HdinsightHadoopCluster#database_name}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHive.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#password HdinsightHadoopCluster#password}.

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHive.property.server"></a>

```python
server: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#server HdinsightHadoopCluster#server}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHive.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#username HdinsightHadoopCluster#username}.

---

### HdinsightHadoopClusterMetastoresOozie <a name="HdinsightHadoopClusterMetastoresOozie" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozie"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozie.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hadoop_cluster

hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozie(
  database_name: str,
  password: str,
  server: str,
  username: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozie.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#database_name HdinsightHadoopCluster#database_name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozie.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#password HdinsightHadoopCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozie.property.server">server</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#server HdinsightHadoopCluster#server}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozie.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#username HdinsightHadoopCluster#username}. |

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozie.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#database_name HdinsightHadoopCluster#database_name}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozie.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#password HdinsightHadoopCluster#password}.

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozie.property.server"></a>

```python
server: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#server HdinsightHadoopCluster#server}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozie.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#username HdinsightHadoopCluster#username}.

---

### HdinsightHadoopClusterMonitor <a name="HdinsightHadoopClusterMonitor" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitor.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hadoop_cluster

hdinsightHadoopCluster.HdinsightHadoopClusterMonitor(
  log_analytics_workspace_id: str,
  primary_key: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitor.property.logAnalyticsWorkspaceId">log_analytics_workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#log_analytics_workspace_id HdinsightHadoopCluster#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitor.property.primaryKey">primary_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#primary_key HdinsightHadoopCluster#primary_key}. |

---

##### `log_analytics_workspace_id`<sup>Required</sup> <a name="log_analytics_workspace_id" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitor.property.logAnalyticsWorkspaceId"></a>

```python
log_analytics_workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#log_analytics_workspace_id HdinsightHadoopCluster#log_analytics_workspace_id}.

---

##### `primary_key`<sup>Required</sup> <a name="primary_key" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitor.property.primaryKey"></a>

```python
primary_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#primary_key HdinsightHadoopCluster#primary_key}.

---

### HdinsightHadoopClusterNetwork <a name="HdinsightHadoopClusterNetwork" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetwork.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hadoop_cluster

hdinsightHadoopCluster.HdinsightHadoopClusterNetwork(
  connection_direction: str = None,
  private_link_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetwork.property.connectionDirection">connection_direction</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#connection_direction HdinsightHadoopCluster#connection_direction}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetwork.property.privateLinkEnabled">private_link_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#private_link_enabled HdinsightHadoopCluster#private_link_enabled}. |

---

##### `connection_direction`<sup>Optional</sup> <a name="connection_direction" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetwork.property.connectionDirection"></a>

```python
connection_direction: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#connection_direction HdinsightHadoopCluster#connection_direction}.

---

##### `private_link_enabled`<sup>Optional</sup> <a name="private_link_enabled" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetwork.property.privateLinkEnabled"></a>

```python
private_link_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#private_link_enabled HdinsightHadoopCluster#private_link_enabled}.

---

### HdinsightHadoopClusterRoles <a name="HdinsightHadoopClusterRoles" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRoles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRoles.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hadoop_cluster

hdinsightHadoopCluster.HdinsightHadoopClusterRoles(
  head_node: HdinsightHadoopClusterRolesHeadNode,
  worker_node: HdinsightHadoopClusterRolesWorkerNode,
  zookeeper_node: HdinsightHadoopClusterRolesZookeeperNode,
  edge_node: HdinsightHadoopClusterRolesEdgeNode = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRoles.property.headNode">head_node</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNode">HdinsightHadoopClusterRolesHeadNode</a></code> | head_node block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRoles.property.workerNode">worker_node</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNode">HdinsightHadoopClusterRolesWorkerNode</a></code> | worker_node block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRoles.property.zookeeperNode">zookeeper_node</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNode">HdinsightHadoopClusterRolesZookeeperNode</a></code> | zookeeper_node block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRoles.property.edgeNode">edge_node</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNode">HdinsightHadoopClusterRolesEdgeNode</a></code> | edge_node block. |

---

##### `head_node`<sup>Required</sup> <a name="head_node" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRoles.property.headNode"></a>

```python
head_node: HdinsightHadoopClusterRolesHeadNode
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNode">HdinsightHadoopClusterRolesHeadNode</a>

head_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#head_node HdinsightHadoopCluster#head_node}

---

##### `worker_node`<sup>Required</sup> <a name="worker_node" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRoles.property.workerNode"></a>

```python
worker_node: HdinsightHadoopClusterRolesWorkerNode
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNode">HdinsightHadoopClusterRolesWorkerNode</a>

worker_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#worker_node HdinsightHadoopCluster#worker_node}

---

##### `zookeeper_node`<sup>Required</sup> <a name="zookeeper_node" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRoles.property.zookeeperNode"></a>

```python
zookeeper_node: HdinsightHadoopClusterRolesZookeeperNode
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNode">HdinsightHadoopClusterRolesZookeeperNode</a>

zookeeper_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#zookeeper_node HdinsightHadoopCluster#zookeeper_node}

---

##### `edge_node`<sup>Optional</sup> <a name="edge_node" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRoles.property.edgeNode"></a>

```python
edge_node: HdinsightHadoopClusterRolesEdgeNode
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNode">HdinsightHadoopClusterRolesEdgeNode</a>

edge_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#edge_node HdinsightHadoopCluster#edge_node}

---

### HdinsightHadoopClusterRolesEdgeNode <a name="HdinsightHadoopClusterRolesEdgeNode" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNode.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hadoop_cluster

hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNode(
  install_script_action: typing.Union[IResolvable, typing.List[HdinsightHadoopClusterRolesEdgeNodeInstallScriptAction]],
  target_instance_count: typing.Union[int, float],
  vm_size: str,
  https_endpoints: typing.Union[IResolvable, typing.List[HdinsightHadoopClusterRolesEdgeNodeHttpsEndpoints]] = None,
  uninstall_script_actions: typing.Union[IResolvable, typing.List[HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActions]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNode.property.installScriptAction">install_script_action</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptAction">HdinsightHadoopClusterRolesEdgeNodeInstallScriptAction</a>]]</code> | install_script_action block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNode.property.targetInstanceCount">target_instance_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#target_instance_count HdinsightHadoopCluster#target_instance_count}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNode.property.vmSize">vm_size</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#vm_size HdinsightHadoopCluster#vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNode.property.httpsEndpoints">https_endpoints</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpoints">HdinsightHadoopClusterRolesEdgeNodeHttpsEndpoints</a>]]</code> | https_endpoints block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNode.property.uninstallScriptActions">uninstall_script_actions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActions">HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActions</a>]]</code> | uninstall_script_actions block. |

---

##### `install_script_action`<sup>Required</sup> <a name="install_script_action" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNode.property.installScriptAction"></a>

```python
install_script_action: typing.Union[IResolvable, typing.List[HdinsightHadoopClusterRolesEdgeNodeInstallScriptAction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptAction">HdinsightHadoopClusterRolesEdgeNodeInstallScriptAction</a>]]

install_script_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#install_script_action HdinsightHadoopCluster#install_script_action}

---

##### `target_instance_count`<sup>Required</sup> <a name="target_instance_count" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNode.property.targetInstanceCount"></a>

```python
target_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#target_instance_count HdinsightHadoopCluster#target_instance_count}.

---

##### `vm_size`<sup>Required</sup> <a name="vm_size" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNode.property.vmSize"></a>

```python
vm_size: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#vm_size HdinsightHadoopCluster#vm_size}.

---

##### `https_endpoints`<sup>Optional</sup> <a name="https_endpoints" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNode.property.httpsEndpoints"></a>

```python
https_endpoints: typing.Union[IResolvable, typing.List[HdinsightHadoopClusterRolesEdgeNodeHttpsEndpoints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpoints">HdinsightHadoopClusterRolesEdgeNodeHttpsEndpoints</a>]]

https_endpoints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#https_endpoints HdinsightHadoopCluster#https_endpoints}

---

##### `uninstall_script_actions`<sup>Optional</sup> <a name="uninstall_script_actions" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNode.property.uninstallScriptActions"></a>

```python
uninstall_script_actions: typing.Union[IResolvable, typing.List[HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActions">HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActions</a>]]

uninstall_script_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#uninstall_script_actions HdinsightHadoopCluster#uninstall_script_actions}

---

### HdinsightHadoopClusterRolesEdgeNodeHttpsEndpoints <a name="HdinsightHadoopClusterRolesEdgeNodeHttpsEndpoints" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpoints.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hadoop_cluster

hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpoints(
  access_modes: typing.List[str] = None,
  destination_port: typing.Union[int, float] = None,
  disable_gateway_auth: typing.Union[bool, IResolvable] = None,
  private_ip_address: str = None,
  sub_domain_suffix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpoints.property.accessModes">access_modes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#access_modes HdinsightHadoopCluster#access_modes}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpoints.property.destinationPort">destination_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#destination_port HdinsightHadoopCluster#destination_port}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpoints.property.disableGatewayAuth">disable_gateway_auth</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#disable_gateway_auth HdinsightHadoopCluster#disable_gateway_auth}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpoints.property.privateIpAddress">private_ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#private_ip_address HdinsightHadoopCluster#private_ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpoints.property.subDomainSuffix">sub_domain_suffix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#sub_domain_suffix HdinsightHadoopCluster#sub_domain_suffix}. |

---

##### `access_modes`<sup>Optional</sup> <a name="access_modes" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpoints.property.accessModes"></a>

```python
access_modes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#access_modes HdinsightHadoopCluster#access_modes}.

---

##### `destination_port`<sup>Optional</sup> <a name="destination_port" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpoints.property.destinationPort"></a>

```python
destination_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#destination_port HdinsightHadoopCluster#destination_port}.

---

##### `disable_gateway_auth`<sup>Optional</sup> <a name="disable_gateway_auth" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpoints.property.disableGatewayAuth"></a>

```python
disable_gateway_auth: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#disable_gateway_auth HdinsightHadoopCluster#disable_gateway_auth}.

---

##### `private_ip_address`<sup>Optional</sup> <a name="private_ip_address" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpoints.property.privateIpAddress"></a>

```python
private_ip_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#private_ip_address HdinsightHadoopCluster#private_ip_address}.

---

##### `sub_domain_suffix`<sup>Optional</sup> <a name="sub_domain_suffix" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpoints.property.subDomainSuffix"></a>

```python
sub_domain_suffix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#sub_domain_suffix HdinsightHadoopCluster#sub_domain_suffix}.

---

### HdinsightHadoopClusterRolesEdgeNodeInstallScriptAction <a name="HdinsightHadoopClusterRolesEdgeNodeInstallScriptAction" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptAction.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hadoop_cluster

hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptAction(
  name: str,
  uri: str,
  parameters: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptAction.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#name HdinsightHadoopCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptAction.property.uri">uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#uri HdinsightHadoopCluster#uri}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptAction.property.parameters">parameters</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#parameters HdinsightHadoopCluster#parameters}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptAction.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#name HdinsightHadoopCluster#name}.

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptAction.property.uri"></a>

```python
uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#uri HdinsightHadoopCluster#uri}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptAction.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#parameters HdinsightHadoopCluster#parameters}.

---

### HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActions <a name="HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActions" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActions.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hadoop_cluster

hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActions(
  name: str,
  uri: str,
  parameters: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActions.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#name HdinsightHadoopCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActions.property.uri">uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#uri HdinsightHadoopCluster#uri}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActions.property.parameters">parameters</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#parameters HdinsightHadoopCluster#parameters}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActions.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#name HdinsightHadoopCluster#name}.

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActions.property.uri"></a>

```python
uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#uri HdinsightHadoopCluster#uri}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActions.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#parameters HdinsightHadoopCluster#parameters}.

---

### HdinsightHadoopClusterRolesHeadNode <a name="HdinsightHadoopClusterRolesHeadNode" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNode.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hadoop_cluster

hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNode(
  username: str,
  vm_size: str,
  password: str = None,
  script_actions: typing.Union[IResolvable, typing.List[HdinsightHadoopClusterRolesHeadNodeScriptActions]] = None,
  ssh_keys: typing.List[str] = None,
  subnet_id: str = None,
  virtual_network_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNode.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#username HdinsightHadoopCluster#username}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNode.property.vmSize">vm_size</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#vm_size HdinsightHadoopCluster#vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNode.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#password HdinsightHadoopCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNode.property.scriptActions">script_actions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActions">HdinsightHadoopClusterRolesHeadNodeScriptActions</a>]]</code> | script_actions block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNode.property.sshKeys">ssh_keys</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#ssh_keys HdinsightHadoopCluster#ssh_keys}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNode.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#subnet_id HdinsightHadoopCluster#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNode.property.virtualNetworkId">virtual_network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#virtual_network_id HdinsightHadoopCluster#virtual_network_id}. |

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNode.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#username HdinsightHadoopCluster#username}.

---

##### `vm_size`<sup>Required</sup> <a name="vm_size" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNode.property.vmSize"></a>

```python
vm_size: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#vm_size HdinsightHadoopCluster#vm_size}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNode.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#password HdinsightHadoopCluster#password}.

---

##### `script_actions`<sup>Optional</sup> <a name="script_actions" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNode.property.scriptActions"></a>

```python
script_actions: typing.Union[IResolvable, typing.List[HdinsightHadoopClusterRolesHeadNodeScriptActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActions">HdinsightHadoopClusterRolesHeadNodeScriptActions</a>]]

script_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#script_actions HdinsightHadoopCluster#script_actions}

---

##### `ssh_keys`<sup>Optional</sup> <a name="ssh_keys" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNode.property.sshKeys"></a>

```python
ssh_keys: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#ssh_keys HdinsightHadoopCluster#ssh_keys}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNode.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#subnet_id HdinsightHadoopCluster#subnet_id}.

---

##### `virtual_network_id`<sup>Optional</sup> <a name="virtual_network_id" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNode.property.virtualNetworkId"></a>

```python
virtual_network_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#virtual_network_id HdinsightHadoopCluster#virtual_network_id}.

---

### HdinsightHadoopClusterRolesHeadNodeScriptActions <a name="HdinsightHadoopClusterRolesHeadNodeScriptActions" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActions.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hadoop_cluster

hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActions(
  name: str,
  uri: str,
  parameters: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActions.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#name HdinsightHadoopCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActions.property.uri">uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#uri HdinsightHadoopCluster#uri}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActions.property.parameters">parameters</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#parameters HdinsightHadoopCluster#parameters}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActions.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#name HdinsightHadoopCluster#name}.

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActions.property.uri"></a>

```python
uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#uri HdinsightHadoopCluster#uri}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActions.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#parameters HdinsightHadoopCluster#parameters}.

---

### HdinsightHadoopClusterRolesWorkerNode <a name="HdinsightHadoopClusterRolesWorkerNode" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNode.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hadoop_cluster

hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNode(
  target_instance_count: typing.Union[int, float],
  username: str,
  vm_size: str,
  autoscale: HdinsightHadoopClusterRolesWorkerNodeAutoscale = None,
  password: str = None,
  script_actions: typing.Union[IResolvable, typing.List[HdinsightHadoopClusterRolesWorkerNodeScriptActions]] = None,
  ssh_keys: typing.List[str] = None,
  subnet_id: str = None,
  virtual_network_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNode.property.targetInstanceCount">target_instance_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#target_instance_count HdinsightHadoopCluster#target_instance_count}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNode.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#username HdinsightHadoopCluster#username}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNode.property.vmSize">vm_size</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#vm_size HdinsightHadoopCluster#vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNode.property.autoscale">autoscale</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscale">HdinsightHadoopClusterRolesWorkerNodeAutoscale</a></code> | autoscale block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNode.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#password HdinsightHadoopCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNode.property.scriptActions">script_actions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActions">HdinsightHadoopClusterRolesWorkerNodeScriptActions</a>]]</code> | script_actions block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNode.property.sshKeys">ssh_keys</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#ssh_keys HdinsightHadoopCluster#ssh_keys}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNode.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#subnet_id HdinsightHadoopCluster#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNode.property.virtualNetworkId">virtual_network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#virtual_network_id HdinsightHadoopCluster#virtual_network_id}. |

---

##### `target_instance_count`<sup>Required</sup> <a name="target_instance_count" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNode.property.targetInstanceCount"></a>

```python
target_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#target_instance_count HdinsightHadoopCluster#target_instance_count}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNode.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#username HdinsightHadoopCluster#username}.

---

##### `vm_size`<sup>Required</sup> <a name="vm_size" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNode.property.vmSize"></a>

```python
vm_size: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#vm_size HdinsightHadoopCluster#vm_size}.

---

##### `autoscale`<sup>Optional</sup> <a name="autoscale" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNode.property.autoscale"></a>

```python
autoscale: HdinsightHadoopClusterRolesWorkerNodeAutoscale
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscale">HdinsightHadoopClusterRolesWorkerNodeAutoscale</a>

autoscale block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#autoscale HdinsightHadoopCluster#autoscale}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNode.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#password HdinsightHadoopCluster#password}.

---

##### `script_actions`<sup>Optional</sup> <a name="script_actions" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNode.property.scriptActions"></a>

```python
script_actions: typing.Union[IResolvable, typing.List[HdinsightHadoopClusterRolesWorkerNodeScriptActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActions">HdinsightHadoopClusterRolesWorkerNodeScriptActions</a>]]

script_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#script_actions HdinsightHadoopCluster#script_actions}

---

##### `ssh_keys`<sup>Optional</sup> <a name="ssh_keys" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNode.property.sshKeys"></a>

```python
ssh_keys: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#ssh_keys HdinsightHadoopCluster#ssh_keys}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNode.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#subnet_id HdinsightHadoopCluster#subnet_id}.

---

##### `virtual_network_id`<sup>Optional</sup> <a name="virtual_network_id" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNode.property.virtualNetworkId"></a>

```python
virtual_network_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#virtual_network_id HdinsightHadoopCluster#virtual_network_id}.

---

### HdinsightHadoopClusterRolesWorkerNodeAutoscale <a name="HdinsightHadoopClusterRolesWorkerNodeAutoscale" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscale"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscale.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hadoop_cluster

hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscale(
  capacity: HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacity = None,
  recurrence: HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrence = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscale.property.capacity">capacity</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacity">HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacity</a></code> | capacity block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscale.property.recurrence">recurrence</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrence">HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrence</a></code> | recurrence block. |

---

##### `capacity`<sup>Optional</sup> <a name="capacity" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscale.property.capacity"></a>

```python
capacity: HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacity
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacity">HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacity</a>

capacity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#capacity HdinsightHadoopCluster#capacity}

---

##### `recurrence`<sup>Optional</sup> <a name="recurrence" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscale.property.recurrence"></a>

```python
recurrence: HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrence
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrence">HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrence</a>

recurrence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#recurrence HdinsightHadoopCluster#recurrence}

---

### HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacity <a name="HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacity" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hadoop_cluster

hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacity(
  max_instance_count: typing.Union[int, float],
  min_instance_count: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacity.property.maxInstanceCount">max_instance_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#max_instance_count HdinsightHadoopCluster#max_instance_count}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacity.property.minInstanceCount">min_instance_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#min_instance_count HdinsightHadoopCluster#min_instance_count}. |

---

##### `max_instance_count`<sup>Required</sup> <a name="max_instance_count" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacity.property.maxInstanceCount"></a>

```python
max_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#max_instance_count HdinsightHadoopCluster#max_instance_count}.

---

##### `min_instance_count`<sup>Required</sup> <a name="min_instance_count" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacity.property.minInstanceCount"></a>

```python
min_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#min_instance_count HdinsightHadoopCluster#min_instance_count}.

---

### HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrence <a name="HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrence" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrence.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hadoop_cluster

hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrence(
  schedule: typing.Union[IResolvable, typing.List[HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceSchedule]],
  timezone: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrence.property.schedule">schedule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceSchedule">HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceSchedule</a>]]</code> | schedule block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrence.property.timezone">timezone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#timezone HdinsightHadoopCluster#timezone}. |

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrence.property.schedule"></a>

```python
schedule: typing.Union[IResolvable, typing.List[HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceSchedule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceSchedule">HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceSchedule</a>]]

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#schedule HdinsightHadoopCluster#schedule}

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrence.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#timezone HdinsightHadoopCluster#timezone}.

---

### HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceSchedule <a name="HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceSchedule" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceSchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hadoop_cluster

hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceSchedule(
  days: typing.List[str],
  target_instance_count: typing.Union[int, float],
  time: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceSchedule.property.days">days</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#days HdinsightHadoopCluster#days}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceSchedule.property.targetInstanceCount">target_instance_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#target_instance_count HdinsightHadoopCluster#target_instance_count}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceSchedule.property.time">time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#time HdinsightHadoopCluster#time}. |

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceSchedule.property.days"></a>

```python
days: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#days HdinsightHadoopCluster#days}.

---

##### `target_instance_count`<sup>Required</sup> <a name="target_instance_count" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceSchedule.property.targetInstanceCount"></a>

```python
target_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#target_instance_count HdinsightHadoopCluster#target_instance_count}.

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceSchedule.property.time"></a>

```python
time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#time HdinsightHadoopCluster#time}.

---

### HdinsightHadoopClusterRolesWorkerNodeScriptActions <a name="HdinsightHadoopClusterRolesWorkerNodeScriptActions" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActions.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hadoop_cluster

hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActions(
  name: str,
  uri: str,
  parameters: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActions.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#name HdinsightHadoopCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActions.property.uri">uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#uri HdinsightHadoopCluster#uri}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActions.property.parameters">parameters</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#parameters HdinsightHadoopCluster#parameters}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActions.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#name HdinsightHadoopCluster#name}.

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActions.property.uri"></a>

```python
uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#uri HdinsightHadoopCluster#uri}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActions.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#parameters HdinsightHadoopCluster#parameters}.

---

### HdinsightHadoopClusterRolesZookeeperNode <a name="HdinsightHadoopClusterRolesZookeeperNode" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNode.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hadoop_cluster

hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNode(
  username: str,
  vm_size: str,
  password: str = None,
  script_actions: typing.Union[IResolvable, typing.List[HdinsightHadoopClusterRolesZookeeperNodeScriptActions]] = None,
  ssh_keys: typing.List[str] = None,
  subnet_id: str = None,
  virtual_network_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNode.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#username HdinsightHadoopCluster#username}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNode.property.vmSize">vm_size</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#vm_size HdinsightHadoopCluster#vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNode.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#password HdinsightHadoopCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNode.property.scriptActions">script_actions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActions">HdinsightHadoopClusterRolesZookeeperNodeScriptActions</a>]]</code> | script_actions block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNode.property.sshKeys">ssh_keys</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#ssh_keys HdinsightHadoopCluster#ssh_keys}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNode.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#subnet_id HdinsightHadoopCluster#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNode.property.virtualNetworkId">virtual_network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#virtual_network_id HdinsightHadoopCluster#virtual_network_id}. |

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNode.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#username HdinsightHadoopCluster#username}.

---

##### `vm_size`<sup>Required</sup> <a name="vm_size" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNode.property.vmSize"></a>

```python
vm_size: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#vm_size HdinsightHadoopCluster#vm_size}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNode.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#password HdinsightHadoopCluster#password}.

---

##### `script_actions`<sup>Optional</sup> <a name="script_actions" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNode.property.scriptActions"></a>

```python
script_actions: typing.Union[IResolvable, typing.List[HdinsightHadoopClusterRolesZookeeperNodeScriptActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActions">HdinsightHadoopClusterRolesZookeeperNodeScriptActions</a>]]

script_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#script_actions HdinsightHadoopCluster#script_actions}

---

##### `ssh_keys`<sup>Optional</sup> <a name="ssh_keys" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNode.property.sshKeys"></a>

```python
ssh_keys: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#ssh_keys HdinsightHadoopCluster#ssh_keys}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNode.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#subnet_id HdinsightHadoopCluster#subnet_id}.

---

##### `virtual_network_id`<sup>Optional</sup> <a name="virtual_network_id" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNode.property.virtualNetworkId"></a>

```python
virtual_network_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#virtual_network_id HdinsightHadoopCluster#virtual_network_id}.

---

### HdinsightHadoopClusterRolesZookeeperNodeScriptActions <a name="HdinsightHadoopClusterRolesZookeeperNodeScriptActions" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActions.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hadoop_cluster

hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActions(
  name: str,
  uri: str,
  parameters: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActions.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#name HdinsightHadoopCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActions.property.uri">uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#uri HdinsightHadoopCluster#uri}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActions.property.parameters">parameters</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#parameters HdinsightHadoopCluster#parameters}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActions.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#name HdinsightHadoopCluster#name}.

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActions.property.uri"></a>

```python
uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#uri HdinsightHadoopCluster#uri}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActions.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#parameters HdinsightHadoopCluster#parameters}.

---

### HdinsightHadoopClusterSecurityProfile <a name="HdinsightHadoopClusterSecurityProfile" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfile.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hadoop_cluster

hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfile(
  aadds_resource_id: str,
  domain_name: str,
  domain_username: str,
  domain_user_password: str,
  ldaps_urls: typing.List[str],
  msi_resource_id: str,
  cluster_users_group_dns: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfile.property.aaddsResourceId">aadds_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#aadds_resource_id HdinsightHadoopCluster#aadds_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfile.property.domainName">domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#domain_name HdinsightHadoopCluster#domain_name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfile.property.domainUsername">domain_username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#domain_username HdinsightHadoopCluster#domain_username}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfile.property.domainUserPassword">domain_user_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#domain_user_password HdinsightHadoopCluster#domain_user_password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfile.property.ldapsUrls">ldaps_urls</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#ldaps_urls HdinsightHadoopCluster#ldaps_urls}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfile.property.msiResourceId">msi_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#msi_resource_id HdinsightHadoopCluster#msi_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfile.property.clusterUsersGroupDns">cluster_users_group_dns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#cluster_users_group_dns HdinsightHadoopCluster#cluster_users_group_dns}. |

---

##### `aadds_resource_id`<sup>Required</sup> <a name="aadds_resource_id" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfile.property.aaddsResourceId"></a>

```python
aadds_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#aadds_resource_id HdinsightHadoopCluster#aadds_resource_id}.

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfile.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#domain_name HdinsightHadoopCluster#domain_name}.

---

##### `domain_username`<sup>Required</sup> <a name="domain_username" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfile.property.domainUsername"></a>

```python
domain_username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#domain_username HdinsightHadoopCluster#domain_username}.

---

##### `domain_user_password`<sup>Required</sup> <a name="domain_user_password" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfile.property.domainUserPassword"></a>

```python
domain_user_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#domain_user_password HdinsightHadoopCluster#domain_user_password}.

---

##### `ldaps_urls`<sup>Required</sup> <a name="ldaps_urls" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfile.property.ldapsUrls"></a>

```python
ldaps_urls: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#ldaps_urls HdinsightHadoopCluster#ldaps_urls}.

---

##### `msi_resource_id`<sup>Required</sup> <a name="msi_resource_id" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfile.property.msiResourceId"></a>

```python
msi_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#msi_resource_id HdinsightHadoopCluster#msi_resource_id}.

---

##### `cluster_users_group_dns`<sup>Optional</sup> <a name="cluster_users_group_dns" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfile.property.clusterUsersGroupDns"></a>

```python
cluster_users_group_dns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#cluster_users_group_dns HdinsightHadoopCluster#cluster_users_group_dns}.

---

### HdinsightHadoopClusterStorageAccount <a name="HdinsightHadoopClusterStorageAccount" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccount.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hadoop_cluster

hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccount(
  is_default: typing.Union[bool, IResolvable],
  storage_account_key: str,
  storage_container_id: str,
  storage_resource_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccount.property.isDefault">is_default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#is_default HdinsightHadoopCluster#is_default}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccount.property.storageAccountKey">storage_account_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#storage_account_key HdinsightHadoopCluster#storage_account_key}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccount.property.storageContainerId">storage_container_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#storage_container_id HdinsightHadoopCluster#storage_container_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccount.property.storageResourceId">storage_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#storage_resource_id HdinsightHadoopCluster#storage_resource_id}. |

---

##### `is_default`<sup>Required</sup> <a name="is_default" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccount.property.isDefault"></a>

```python
is_default: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#is_default HdinsightHadoopCluster#is_default}.

---

##### `storage_account_key`<sup>Required</sup> <a name="storage_account_key" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccount.property.storageAccountKey"></a>

```python
storage_account_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#storage_account_key HdinsightHadoopCluster#storage_account_key}.

---

##### `storage_container_id`<sup>Required</sup> <a name="storage_container_id" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccount.property.storageContainerId"></a>

```python
storage_container_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#storage_container_id HdinsightHadoopCluster#storage_container_id}.

---

##### `storage_resource_id`<sup>Optional</sup> <a name="storage_resource_id" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccount.property.storageResourceId"></a>

```python
storage_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#storage_resource_id HdinsightHadoopCluster#storage_resource_id}.

---

### HdinsightHadoopClusterStorageAccountGen2 <a name="HdinsightHadoopClusterStorageAccountGen2" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hadoop_cluster

hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2(
  filesystem_id: str,
  is_default: typing.Union[bool, IResolvable],
  managed_identity_resource_id: str,
  storage_resource_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2.property.filesystemId">filesystem_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#filesystem_id HdinsightHadoopCluster#filesystem_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2.property.isDefault">is_default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#is_default HdinsightHadoopCluster#is_default}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2.property.managedIdentityResourceId">managed_identity_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#managed_identity_resource_id HdinsightHadoopCluster#managed_identity_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2.property.storageResourceId">storage_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#storage_resource_id HdinsightHadoopCluster#storage_resource_id}. |

---

##### `filesystem_id`<sup>Required</sup> <a name="filesystem_id" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2.property.filesystemId"></a>

```python
filesystem_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#filesystem_id HdinsightHadoopCluster#filesystem_id}.

---

##### `is_default`<sup>Required</sup> <a name="is_default" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2.property.isDefault"></a>

```python
is_default: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#is_default HdinsightHadoopCluster#is_default}.

---

##### `managed_identity_resource_id`<sup>Required</sup> <a name="managed_identity_resource_id" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2.property.managedIdentityResourceId"></a>

```python
managed_identity_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#managed_identity_resource_id HdinsightHadoopCluster#managed_identity_resource_id}.

---

##### `storage_resource_id`<sup>Required</sup> <a name="storage_resource_id" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2.property.storageResourceId"></a>

```python
storage_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#storage_resource_id HdinsightHadoopCluster#storage_resource_id}.

---

### HdinsightHadoopClusterTimeouts <a name="HdinsightHadoopClusterTimeouts" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hadoop_cluster

hdinsightHadoopCluster.HdinsightHadoopClusterTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#create HdinsightHadoopCluster#create}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#delete HdinsightHadoopCluster#delete}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#read HdinsightHadoopCluster#read}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#update HdinsightHadoopCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#create HdinsightHadoopCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#delete HdinsightHadoopCluster#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#read HdinsightHadoopCluster#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#update HdinsightHadoopCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### HdinsightHadoopClusterComponentVersionOutputReference <a name="HdinsightHadoopClusterComponentVersionOutputReference" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hadoop_cluster

hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.property.hadoopInput">hadoop_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.property.hadoop">hadoop</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersion">HdinsightHadoopClusterComponentVersion</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hadoop_input`<sup>Optional</sup> <a name="hadoop_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.property.hadoopInput"></a>

```python
hadoop_input: str
```

- *Type:* str

---

##### `hadoop`<sup>Required</sup> <a name="hadoop" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.property.hadoop"></a>

```python
hadoop: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersionOutputReference.property.internalValue"></a>

```python
internal_value: HdinsightHadoopClusterComponentVersion
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComponentVersion">HdinsightHadoopClusterComponentVersion</a>

---


### HdinsightHadoopClusterComputeIsolationOutputReference <a name="HdinsightHadoopClusterComputeIsolationOutputReference" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hadoop_cluster

hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.resetComputeIsolationEnabled">reset_compute_isolation_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.resetHostSku">reset_host_sku</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_compute_isolation_enabled` <a name="reset_compute_isolation_enabled" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.resetComputeIsolationEnabled"></a>

```python
def reset_compute_isolation_enabled() -> None
```

##### `reset_host_sku` <a name="reset_host_sku" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.resetHostSku"></a>

```python
def reset_host_sku() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.property.computeIsolationEnabledInput">compute_isolation_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.property.hostSkuInput">host_sku_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.property.computeIsolationEnabled">compute_isolation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.property.hostSku">host_sku</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolation">HdinsightHadoopClusterComputeIsolation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compute_isolation_enabled_input`<sup>Optional</sup> <a name="compute_isolation_enabled_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.property.computeIsolationEnabledInput"></a>

```python
compute_isolation_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `host_sku_input`<sup>Optional</sup> <a name="host_sku_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.property.hostSkuInput"></a>

```python
host_sku_input: str
```

- *Type:* str

---

##### `compute_isolation_enabled`<sup>Required</sup> <a name="compute_isolation_enabled" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.property.computeIsolationEnabled"></a>

```python
compute_isolation_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `host_sku`<sup>Required</sup> <a name="host_sku" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.property.hostSku"></a>

```python
host_sku: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolationOutputReference.property.internalValue"></a>

```python
internal_value: HdinsightHadoopClusterComputeIsolation
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterComputeIsolation">HdinsightHadoopClusterComputeIsolation</a>

---


### HdinsightHadoopClusterDiskEncryptionList <a name="HdinsightHadoopClusterDiskEncryptionList" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hadoop_cluster

hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> HdinsightHadoopClusterDiskEncryptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryption">HdinsightHadoopClusterDiskEncryption</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[HdinsightHadoopClusterDiskEncryption]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryption">HdinsightHadoopClusterDiskEncryption</a>]]

---


### HdinsightHadoopClusterDiskEncryptionOutputReference <a name="HdinsightHadoopClusterDiskEncryptionOutputReference" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hadoop_cluster

hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.resetEncryptionAlgorithm">reset_encryption_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.resetEncryptionAtHostEnabled">reset_encryption_at_host_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.resetKeyVaultKeyId">reset_key_vault_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.resetKeyVaultManagedIdentityId">reset_key_vault_managed_identity_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_encryption_algorithm` <a name="reset_encryption_algorithm" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.resetEncryptionAlgorithm"></a>

```python
def reset_encryption_algorithm() -> None
```

##### `reset_encryption_at_host_enabled` <a name="reset_encryption_at_host_enabled" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.resetEncryptionAtHostEnabled"></a>

```python
def reset_encryption_at_host_enabled() -> None
```

##### `reset_key_vault_key_id` <a name="reset_key_vault_key_id" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.resetKeyVaultKeyId"></a>

```python
def reset_key_vault_key_id() -> None
```

##### `reset_key_vault_managed_identity_id` <a name="reset_key_vault_managed_identity_id" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.resetKeyVaultManagedIdentityId"></a>

```python
def reset_key_vault_managed_identity_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.property.encryptionAlgorithmInput">encryption_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.property.encryptionAtHostEnabledInput">encryption_at_host_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.property.keyVaultKeyIdInput">key_vault_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.property.keyVaultManagedIdentityIdInput">key_vault_managed_identity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.property.encryptionAlgorithm">encryption_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.property.encryptionAtHostEnabled">encryption_at_host_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.property.keyVaultKeyId">key_vault_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.property.keyVaultManagedIdentityId">key_vault_managed_identity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryption">HdinsightHadoopClusterDiskEncryption</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_algorithm_input`<sup>Optional</sup> <a name="encryption_algorithm_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.property.encryptionAlgorithmInput"></a>

```python
encryption_algorithm_input: str
```

- *Type:* str

---

##### `encryption_at_host_enabled_input`<sup>Optional</sup> <a name="encryption_at_host_enabled_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.property.encryptionAtHostEnabledInput"></a>

```python
encryption_at_host_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key_vault_key_id_input`<sup>Optional</sup> <a name="key_vault_key_id_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.property.keyVaultKeyIdInput"></a>

```python
key_vault_key_id_input: str
```

- *Type:* str

---

##### `key_vault_managed_identity_id_input`<sup>Optional</sup> <a name="key_vault_managed_identity_id_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.property.keyVaultManagedIdentityIdInput"></a>

```python
key_vault_managed_identity_id_input: str
```

- *Type:* str

---

##### `encryption_algorithm`<sup>Required</sup> <a name="encryption_algorithm" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.property.encryptionAlgorithm"></a>

```python
encryption_algorithm: str
```

- *Type:* str

---

##### `encryption_at_host_enabled`<sup>Required</sup> <a name="encryption_at_host_enabled" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.property.encryptionAtHostEnabled"></a>

```python
encryption_at_host_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key_vault_key_id`<sup>Required</sup> <a name="key_vault_key_id" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.property.keyVaultKeyId"></a>

```python
key_vault_key_id: str
```

- *Type:* str

---

##### `key_vault_managed_identity_id`<sup>Required</sup> <a name="key_vault_managed_identity_id" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.property.keyVaultManagedIdentityId"></a>

```python
key_vault_managed_identity_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryptionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, HdinsightHadoopClusterDiskEncryption]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterDiskEncryption">HdinsightHadoopClusterDiskEncryption</a>]

---


### HdinsightHadoopClusterExtensionOutputReference <a name="HdinsightHadoopClusterExtensionOutputReference" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hadoop_cluster

hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.property.logAnalyticsWorkspaceIdInput">log_analytics_workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.property.primaryKeyInput">primary_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.property.logAnalyticsWorkspaceId">log_analytics_workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.property.primaryKey">primary_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtension">HdinsightHadoopClusterExtension</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_analytics_workspace_id_input`<sup>Optional</sup> <a name="log_analytics_workspace_id_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.property.logAnalyticsWorkspaceIdInput"></a>

```python
log_analytics_workspace_id_input: str
```

- *Type:* str

---

##### `primary_key_input`<sup>Optional</sup> <a name="primary_key_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.property.primaryKeyInput"></a>

```python
primary_key_input: str
```

- *Type:* str

---

##### `log_analytics_workspace_id`<sup>Required</sup> <a name="log_analytics_workspace_id" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.property.logAnalyticsWorkspaceId"></a>

```python
log_analytics_workspace_id: str
```

- *Type:* str

---

##### `primary_key`<sup>Required</sup> <a name="primary_key" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.property.primaryKey"></a>

```python
primary_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtensionOutputReference.property.internalValue"></a>

```python
internal_value: HdinsightHadoopClusterExtension
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterExtension">HdinsightHadoopClusterExtension</a>

---


### HdinsightHadoopClusterGatewayOutputReference <a name="HdinsightHadoopClusterGatewayOutputReference" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hadoop_cluster

hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGateway">HdinsightHadoopClusterGateway</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGatewayOutputReference.property.internalValue"></a>

```python
internal_value: HdinsightHadoopClusterGateway
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterGateway">HdinsightHadoopClusterGateway</a>

---


### HdinsightHadoopClusterMetastoresAmbariOutputReference <a name="HdinsightHadoopClusterMetastoresAmbariOutputReference" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hadoop_cluster

hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.property.serverInput">server_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.property.server">server</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbari">HdinsightHadoopClusterMetastoresAmbari</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `server_input`<sup>Optional</sup> <a name="server_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.property.serverInput"></a>

```python
server_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.property.server"></a>

```python
server: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference.property.internalValue"></a>

```python
internal_value: HdinsightHadoopClusterMetastoresAmbari
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbari">HdinsightHadoopClusterMetastoresAmbari</a>

---


### HdinsightHadoopClusterMetastoresHiveOutputReference <a name="HdinsightHadoopClusterMetastoresHiveOutputReference" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hadoop_cluster

hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.property.serverInput">server_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.property.server">server</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHive">HdinsightHadoopClusterMetastoresHive</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `server_input`<sup>Optional</sup> <a name="server_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.property.serverInput"></a>

```python
server_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.property.server"></a>

```python
server: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference.property.internalValue"></a>

```python
internal_value: HdinsightHadoopClusterMetastoresHive
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHive">HdinsightHadoopClusterMetastoresHive</a>

---


### HdinsightHadoopClusterMetastoresOozieOutputReference <a name="HdinsightHadoopClusterMetastoresOozieOutputReference" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hadoop_cluster

hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.property.serverInput">server_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.property.server">server</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozie">HdinsightHadoopClusterMetastoresOozie</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `server_input`<sup>Optional</sup> <a name="server_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.property.serverInput"></a>

```python
server_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.property.server"></a>

```python
server: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference.property.internalValue"></a>

```python
internal_value: HdinsightHadoopClusterMetastoresOozie
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozie">HdinsightHadoopClusterMetastoresOozie</a>

---


### HdinsightHadoopClusterMetastoresOutputReference <a name="HdinsightHadoopClusterMetastoresOutputReference" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hadoop_cluster

hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.putAmbari">put_ambari</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.putHive">put_hive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.putOozie">put_oozie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.resetAmbari">reset_ambari</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.resetHive">reset_hive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.resetOozie">reset_oozie</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ambari` <a name="put_ambari" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.putAmbari"></a>

```python
def put_ambari(
  database_name: str,
  password: str,
  server: str,
  username: str
) -> None
```

###### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.putAmbari.parameter.databaseName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#database_name HdinsightHadoopCluster#database_name}.

---

###### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.putAmbari.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#password HdinsightHadoopCluster#password}.

---

###### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.putAmbari.parameter.server"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#server HdinsightHadoopCluster#server}.

---

###### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.putAmbari.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#username HdinsightHadoopCluster#username}.

---

##### `put_hive` <a name="put_hive" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.putHive"></a>

```python
def put_hive(
  database_name: str,
  password: str,
  server: str,
  username: str
) -> None
```

###### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.putHive.parameter.databaseName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#database_name HdinsightHadoopCluster#database_name}.

---

###### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.putHive.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#password HdinsightHadoopCluster#password}.

---

###### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.putHive.parameter.server"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#server HdinsightHadoopCluster#server}.

---

###### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.putHive.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#username HdinsightHadoopCluster#username}.

---

##### `put_oozie` <a name="put_oozie" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.putOozie"></a>

```python
def put_oozie(
  database_name: str,
  password: str,
  server: str,
  username: str
) -> None
```

###### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.putOozie.parameter.databaseName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#database_name HdinsightHadoopCluster#database_name}.

---

###### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.putOozie.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#password HdinsightHadoopCluster#password}.

---

###### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.putOozie.parameter.server"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#server HdinsightHadoopCluster#server}.

---

###### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.putOozie.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#username HdinsightHadoopCluster#username}.

---

##### `reset_ambari` <a name="reset_ambari" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.resetAmbari"></a>

```python
def reset_ambari() -> None
```

##### `reset_hive` <a name="reset_hive" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.resetHive"></a>

```python
def reset_hive() -> None
```

##### `reset_oozie` <a name="reset_oozie" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.resetOozie"></a>

```python
def reset_oozie() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.property.ambari">ambari</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference">HdinsightHadoopClusterMetastoresAmbariOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.property.hive">hive</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference">HdinsightHadoopClusterMetastoresHiveOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.property.oozie">oozie</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference">HdinsightHadoopClusterMetastoresOozieOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.property.ambariInput">ambari_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbari">HdinsightHadoopClusterMetastoresAmbari</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.property.hiveInput">hive_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHive">HdinsightHadoopClusterMetastoresHive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.property.oozieInput">oozie_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozie">HdinsightHadoopClusterMetastoresOozie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastores">HdinsightHadoopClusterMetastores</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ambari`<sup>Required</sup> <a name="ambari" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.property.ambari"></a>

```python
ambari: HdinsightHadoopClusterMetastoresAmbariOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbariOutputReference">HdinsightHadoopClusterMetastoresAmbariOutputReference</a>

---

##### `hive`<sup>Required</sup> <a name="hive" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.property.hive"></a>

```python
hive: HdinsightHadoopClusterMetastoresHiveOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHiveOutputReference">HdinsightHadoopClusterMetastoresHiveOutputReference</a>

---

##### `oozie`<sup>Required</sup> <a name="oozie" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.property.oozie"></a>

```python
oozie: HdinsightHadoopClusterMetastoresOozieOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozieOutputReference">HdinsightHadoopClusterMetastoresOozieOutputReference</a>

---

##### `ambari_input`<sup>Optional</sup> <a name="ambari_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.property.ambariInput"></a>

```python
ambari_input: HdinsightHadoopClusterMetastoresAmbari
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresAmbari">HdinsightHadoopClusterMetastoresAmbari</a>

---

##### `hive_input`<sup>Optional</sup> <a name="hive_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.property.hiveInput"></a>

```python
hive_input: HdinsightHadoopClusterMetastoresHive
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresHive">HdinsightHadoopClusterMetastoresHive</a>

---

##### `oozie_input`<sup>Optional</sup> <a name="oozie_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.property.oozieInput"></a>

```python
oozie_input: HdinsightHadoopClusterMetastoresOozie
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOozie">HdinsightHadoopClusterMetastoresOozie</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastoresOutputReference.property.internalValue"></a>

```python
internal_value: HdinsightHadoopClusterMetastores
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMetastores">HdinsightHadoopClusterMetastores</a>

---


### HdinsightHadoopClusterMonitorOutputReference <a name="HdinsightHadoopClusterMonitorOutputReference" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hadoop_cluster

hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.property.logAnalyticsWorkspaceIdInput">log_analytics_workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.property.primaryKeyInput">primary_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.property.logAnalyticsWorkspaceId">log_analytics_workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.property.primaryKey">primary_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitor">HdinsightHadoopClusterMonitor</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_analytics_workspace_id_input`<sup>Optional</sup> <a name="log_analytics_workspace_id_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.property.logAnalyticsWorkspaceIdInput"></a>

```python
log_analytics_workspace_id_input: str
```

- *Type:* str

---

##### `primary_key_input`<sup>Optional</sup> <a name="primary_key_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.property.primaryKeyInput"></a>

```python
primary_key_input: str
```

- *Type:* str

---

##### `log_analytics_workspace_id`<sup>Required</sup> <a name="log_analytics_workspace_id" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.property.logAnalyticsWorkspaceId"></a>

```python
log_analytics_workspace_id: str
```

- *Type:* str

---

##### `primary_key`<sup>Required</sup> <a name="primary_key" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.property.primaryKey"></a>

```python
primary_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitorOutputReference.property.internalValue"></a>

```python
internal_value: HdinsightHadoopClusterMonitor
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterMonitor">HdinsightHadoopClusterMonitor</a>

---


### HdinsightHadoopClusterNetworkOutputReference <a name="HdinsightHadoopClusterNetworkOutputReference" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hadoop_cluster

hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.resetConnectionDirection">reset_connection_direction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.resetPrivateLinkEnabled">reset_private_link_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_connection_direction` <a name="reset_connection_direction" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.resetConnectionDirection"></a>

```python
def reset_connection_direction() -> None
```

##### `reset_private_link_enabled` <a name="reset_private_link_enabled" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.resetPrivateLinkEnabled"></a>

```python
def reset_private_link_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.property.connectionDirectionInput">connection_direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.property.privateLinkEnabledInput">private_link_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.property.connectionDirection">connection_direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.property.privateLinkEnabled">private_link_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetwork">HdinsightHadoopClusterNetwork</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_direction_input`<sup>Optional</sup> <a name="connection_direction_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.property.connectionDirectionInput"></a>

```python
connection_direction_input: str
```

- *Type:* str

---

##### `private_link_enabled_input`<sup>Optional</sup> <a name="private_link_enabled_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.property.privateLinkEnabledInput"></a>

```python
private_link_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `connection_direction`<sup>Required</sup> <a name="connection_direction" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.property.connectionDirection"></a>

```python
connection_direction: str
```

- *Type:* str

---

##### `private_link_enabled`<sup>Required</sup> <a name="private_link_enabled" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.property.privateLinkEnabled"></a>

```python
private_link_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetworkOutputReference.property.internalValue"></a>

```python
internal_value: HdinsightHadoopClusterNetwork
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterNetwork">HdinsightHadoopClusterNetwork</a>

---


### HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsList <a name="HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsList" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hadoop_cluster

hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpoints">HdinsightHadoopClusterRolesEdgeNodeHttpsEndpoints</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[HdinsightHadoopClusterRolesEdgeNodeHttpsEndpoints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpoints">HdinsightHadoopClusterRolesEdgeNodeHttpsEndpoints</a>]]

---


### HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference <a name="HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hadoop_cluster

hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.resetAccessModes">reset_access_modes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.resetDestinationPort">reset_destination_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.resetDisableGatewayAuth">reset_disable_gateway_auth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.resetPrivateIpAddress">reset_private_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.resetSubDomainSuffix">reset_sub_domain_suffix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_access_modes` <a name="reset_access_modes" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.resetAccessModes"></a>

```python
def reset_access_modes() -> None
```

##### `reset_destination_port` <a name="reset_destination_port" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.resetDestinationPort"></a>

```python
def reset_destination_port() -> None
```

##### `reset_disable_gateway_auth` <a name="reset_disable_gateway_auth" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.resetDisableGatewayAuth"></a>

```python
def reset_disable_gateway_auth() -> None
```

##### `reset_private_ip_address` <a name="reset_private_ip_address" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.resetPrivateIpAddress"></a>

```python
def reset_private_ip_address() -> None
```

##### `reset_sub_domain_suffix` <a name="reset_sub_domain_suffix" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.resetSubDomainSuffix"></a>

```python
def reset_sub_domain_suffix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.property.accessModesInput">access_modes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.property.destinationPortInput">destination_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.property.disableGatewayAuthInput">disable_gateway_auth_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.property.privateIpAddressInput">private_ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.property.subDomainSuffixInput">sub_domain_suffix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.property.accessModes">access_modes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.property.destinationPort">destination_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.property.disableGatewayAuth">disable_gateway_auth</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.property.privateIpAddress">private_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.property.subDomainSuffix">sub_domain_suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpoints">HdinsightHadoopClusterRolesEdgeNodeHttpsEndpoints</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_modes_input`<sup>Optional</sup> <a name="access_modes_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.property.accessModesInput"></a>

```python
access_modes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `destination_port_input`<sup>Optional</sup> <a name="destination_port_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.property.destinationPortInput"></a>

```python
destination_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disable_gateway_auth_input`<sup>Optional</sup> <a name="disable_gateway_auth_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.property.disableGatewayAuthInput"></a>

```python
disable_gateway_auth_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `private_ip_address_input`<sup>Optional</sup> <a name="private_ip_address_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.property.privateIpAddressInput"></a>

```python
private_ip_address_input: str
```

- *Type:* str

---

##### `sub_domain_suffix_input`<sup>Optional</sup> <a name="sub_domain_suffix_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.property.subDomainSuffixInput"></a>

```python
sub_domain_suffix_input: str
```

- *Type:* str

---

##### `access_modes`<sup>Required</sup> <a name="access_modes" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.property.accessModes"></a>

```python
access_modes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `destination_port`<sup>Required</sup> <a name="destination_port" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.property.destinationPort"></a>

```python
destination_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disable_gateway_auth`<sup>Required</sup> <a name="disable_gateway_auth" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.property.disableGatewayAuth"></a>

```python
disable_gateway_auth: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `private_ip_address`<sup>Required</sup> <a name="private_ip_address" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.property.privateIpAddress"></a>

```python
private_ip_address: str
```

- *Type:* str

---

##### `sub_domain_suffix`<sup>Required</sup> <a name="sub_domain_suffix" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.property.subDomainSuffix"></a>

```python
sub_domain_suffix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, HdinsightHadoopClusterRolesEdgeNodeHttpsEndpoints]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpoints">HdinsightHadoopClusterRolesEdgeNodeHttpsEndpoints</a>]

---


### HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionList <a name="HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionList" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hadoop_cluster

hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptAction">HdinsightHadoopClusterRolesEdgeNodeInstallScriptAction</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[HdinsightHadoopClusterRolesEdgeNodeInstallScriptAction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptAction">HdinsightHadoopClusterRolesEdgeNodeInstallScriptAction</a>]]

---


### HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference <a name="HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hadoop_cluster

hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.property.parametersInput">parameters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.property.parameters">parameters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptAction">HdinsightHadoopClusterRolesEdgeNodeInstallScriptAction</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.property.parametersInput"></a>

```python
parameters_input: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, HdinsightHadoopClusterRolesEdgeNodeInstallScriptAction]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptAction">HdinsightHadoopClusterRolesEdgeNodeInstallScriptAction</a>]

---


### HdinsightHadoopClusterRolesEdgeNodeOutputReference <a name="HdinsightHadoopClusterRolesEdgeNodeOutputReference" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hadoop_cluster

hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.putHttpsEndpoints">put_https_endpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.putInstallScriptAction">put_install_script_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.putUninstallScriptActions">put_uninstall_script_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.resetHttpsEndpoints">reset_https_endpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.resetUninstallScriptActions">reset_uninstall_script_actions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_https_endpoints` <a name="put_https_endpoints" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.putHttpsEndpoints"></a>

```python
def put_https_endpoints(
  value: typing.Union[IResolvable, typing.List[HdinsightHadoopClusterRolesEdgeNodeHttpsEndpoints]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.putHttpsEndpoints.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpoints">HdinsightHadoopClusterRolesEdgeNodeHttpsEndpoints</a>]]

---

##### `put_install_script_action` <a name="put_install_script_action" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.putInstallScriptAction"></a>

```python
def put_install_script_action(
  value: typing.Union[IResolvable, typing.List[HdinsightHadoopClusterRolesEdgeNodeInstallScriptAction]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.putInstallScriptAction.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptAction">HdinsightHadoopClusterRolesEdgeNodeInstallScriptAction</a>]]

---

##### `put_uninstall_script_actions` <a name="put_uninstall_script_actions" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.putUninstallScriptActions"></a>

```python
def put_uninstall_script_actions(
  value: typing.Union[IResolvable, typing.List[HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.putUninstallScriptActions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActions">HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActions</a>]]

---

##### `reset_https_endpoints` <a name="reset_https_endpoints" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.resetHttpsEndpoints"></a>

```python
def reset_https_endpoints() -> None
```

##### `reset_uninstall_script_actions` <a name="reset_uninstall_script_actions" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.resetUninstallScriptActions"></a>

```python
def reset_uninstall_script_actions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.property.httpsEndpoints">https_endpoints</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsList">HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.property.installScriptAction">install_script_action</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionList">HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.property.uninstallScriptActions">uninstall_script_actions</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsList">HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.property.httpsEndpointsInput">https_endpoints_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpoints">HdinsightHadoopClusterRolesEdgeNodeHttpsEndpoints</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.property.installScriptActionInput">install_script_action_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptAction">HdinsightHadoopClusterRolesEdgeNodeInstallScriptAction</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.property.targetInstanceCountInput">target_instance_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.property.uninstallScriptActionsInput">uninstall_script_actions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActions">HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.property.vmSizeInput">vm_size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.property.targetInstanceCount">target_instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.property.vmSize">vm_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNode">HdinsightHadoopClusterRolesEdgeNode</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `https_endpoints`<sup>Required</sup> <a name="https_endpoints" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.property.httpsEndpoints"></a>

```python
https_endpoints: HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsList">HdinsightHadoopClusterRolesEdgeNodeHttpsEndpointsList</a>

---

##### `install_script_action`<sup>Required</sup> <a name="install_script_action" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.property.installScriptAction"></a>

```python
install_script_action: HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionList">HdinsightHadoopClusterRolesEdgeNodeInstallScriptActionList</a>

---

##### `uninstall_script_actions`<sup>Required</sup> <a name="uninstall_script_actions" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.property.uninstallScriptActions"></a>

```python
uninstall_script_actions: HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsList">HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsList</a>

---

##### `https_endpoints_input`<sup>Optional</sup> <a name="https_endpoints_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.property.httpsEndpointsInput"></a>

```python
https_endpoints_input: typing.Union[IResolvable, typing.List[HdinsightHadoopClusterRolesEdgeNodeHttpsEndpoints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpoints">HdinsightHadoopClusterRolesEdgeNodeHttpsEndpoints</a>]]

---

##### `install_script_action_input`<sup>Optional</sup> <a name="install_script_action_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.property.installScriptActionInput"></a>

```python
install_script_action_input: typing.Union[IResolvable, typing.List[HdinsightHadoopClusterRolesEdgeNodeInstallScriptAction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptAction">HdinsightHadoopClusterRolesEdgeNodeInstallScriptAction</a>]]

---

##### `target_instance_count_input`<sup>Optional</sup> <a name="target_instance_count_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.property.targetInstanceCountInput"></a>

```python
target_instance_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `uninstall_script_actions_input`<sup>Optional</sup> <a name="uninstall_script_actions_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.property.uninstallScriptActionsInput"></a>

```python
uninstall_script_actions_input: typing.Union[IResolvable, typing.List[HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActions">HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActions</a>]]

---

##### `vm_size_input`<sup>Optional</sup> <a name="vm_size_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.property.vmSizeInput"></a>

```python
vm_size_input: str
```

- *Type:* str

---

##### `target_instance_count`<sup>Required</sup> <a name="target_instance_count" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.property.targetInstanceCount"></a>

```python
target_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vm_size`<sup>Required</sup> <a name="vm_size" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.property.vmSize"></a>

```python
vm_size: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference.property.internalValue"></a>

```python
internal_value: HdinsightHadoopClusterRolesEdgeNode
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNode">HdinsightHadoopClusterRolesEdgeNode</a>

---


### HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsList <a name="HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsList" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hadoop_cluster

hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActions">HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActions">HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActions</a>]]

---


### HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference <a name="HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hadoop_cluster

hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.property.parametersInput">parameters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.property.parameters">parameters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActions">HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.property.parametersInput"></a>

```python
parameters_input: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActions">HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActions</a>]

---


### HdinsightHadoopClusterRolesHeadNodeOutputReference <a name="HdinsightHadoopClusterRolesHeadNodeOutputReference" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hadoop_cluster

hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.putScriptActions">put_script_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.resetScriptActions">reset_script_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.resetSshKeys">reset_ssh_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.resetSubnetId">reset_subnet_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.resetVirtualNetworkId">reset_virtual_network_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_script_actions` <a name="put_script_actions" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.putScriptActions"></a>

```python
def put_script_actions(
  value: typing.Union[IResolvable, typing.List[HdinsightHadoopClusterRolesHeadNodeScriptActions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.putScriptActions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActions">HdinsightHadoopClusterRolesHeadNodeScriptActions</a>]]

---

##### `reset_password` <a name="reset_password" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_script_actions` <a name="reset_script_actions" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.resetScriptActions"></a>

```python
def reset_script_actions() -> None
```

##### `reset_ssh_keys` <a name="reset_ssh_keys" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.resetSshKeys"></a>

```python
def reset_ssh_keys() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```

##### `reset_virtual_network_id` <a name="reset_virtual_network_id" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.resetVirtualNetworkId"></a>

```python
def reset_virtual_network_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.property.scriptActions">script_actions</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsList">HdinsightHadoopClusterRolesHeadNodeScriptActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.property.scriptActionsInput">script_actions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActions">HdinsightHadoopClusterRolesHeadNodeScriptActions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.property.sshKeysInput">ssh_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.property.virtualNetworkIdInput">virtual_network_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.property.vmSizeInput">vm_size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.property.sshKeys">ssh_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.property.virtualNetworkId">virtual_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.property.vmSize">vm_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNode">HdinsightHadoopClusterRolesHeadNode</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `script_actions`<sup>Required</sup> <a name="script_actions" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.property.scriptActions"></a>

```python
script_actions: HdinsightHadoopClusterRolesHeadNodeScriptActionsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsList">HdinsightHadoopClusterRolesHeadNodeScriptActionsList</a>

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `script_actions_input`<sup>Optional</sup> <a name="script_actions_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.property.scriptActionsInput"></a>

```python
script_actions_input: typing.Union[IResolvable, typing.List[HdinsightHadoopClusterRolesHeadNodeScriptActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActions">HdinsightHadoopClusterRolesHeadNodeScriptActions</a>]]

---

##### `ssh_keys_input`<sup>Optional</sup> <a name="ssh_keys_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.property.sshKeysInput"></a>

```python
ssh_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `virtual_network_id_input`<sup>Optional</sup> <a name="virtual_network_id_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.property.virtualNetworkIdInput"></a>

```python
virtual_network_id_input: str
```

- *Type:* str

---

##### `vm_size_input`<sup>Optional</sup> <a name="vm_size_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.property.vmSizeInput"></a>

```python
vm_size_input: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `ssh_keys`<sup>Required</sup> <a name="ssh_keys" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.property.sshKeys"></a>

```python
ssh_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `virtual_network_id`<sup>Required</sup> <a name="virtual_network_id" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.property.virtualNetworkId"></a>

```python
virtual_network_id: str
```

- *Type:* str

---

##### `vm_size`<sup>Required</sup> <a name="vm_size" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.property.vmSize"></a>

```python
vm_size: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference.property.internalValue"></a>

```python
internal_value: HdinsightHadoopClusterRolesHeadNode
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNode">HdinsightHadoopClusterRolesHeadNode</a>

---


### HdinsightHadoopClusterRolesHeadNodeScriptActionsList <a name="HdinsightHadoopClusterRolesHeadNodeScriptActionsList" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hadoop_cluster

hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActions">HdinsightHadoopClusterRolesHeadNodeScriptActions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[HdinsightHadoopClusterRolesHeadNodeScriptActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActions">HdinsightHadoopClusterRolesHeadNodeScriptActions</a>]]

---


### HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference <a name="HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hadoop_cluster

hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.property.parametersInput">parameters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.property.parameters">parameters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActions">HdinsightHadoopClusterRolesHeadNodeScriptActions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.property.parametersInput"></a>

```python
parameters_input: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, HdinsightHadoopClusterRolesHeadNodeScriptActions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActions">HdinsightHadoopClusterRolesHeadNodeScriptActions</a>]

---


### HdinsightHadoopClusterRolesOutputReference <a name="HdinsightHadoopClusterRolesOutputReference" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hadoop_cluster

hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.putEdgeNode">put_edge_node</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.putHeadNode">put_head_node</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.putWorkerNode">put_worker_node</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.putZookeeperNode">put_zookeeper_node</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.resetEdgeNode">reset_edge_node</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_edge_node` <a name="put_edge_node" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.putEdgeNode"></a>

```python
def put_edge_node(
  install_script_action: typing.Union[IResolvable, typing.List[HdinsightHadoopClusterRolesEdgeNodeInstallScriptAction]],
  target_instance_count: typing.Union[int, float],
  vm_size: str,
  https_endpoints: typing.Union[IResolvable, typing.List[HdinsightHadoopClusterRolesEdgeNodeHttpsEndpoints]] = None,
  uninstall_script_actions: typing.Union[IResolvable, typing.List[HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActions]] = None
) -> None
```

###### `install_script_action`<sup>Required</sup> <a name="install_script_action" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.putEdgeNode.parameter.installScriptAction"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeInstallScriptAction">HdinsightHadoopClusterRolesEdgeNodeInstallScriptAction</a>]]

install_script_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#install_script_action HdinsightHadoopCluster#install_script_action}

---

###### `target_instance_count`<sup>Required</sup> <a name="target_instance_count" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.putEdgeNode.parameter.targetInstanceCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#target_instance_count HdinsightHadoopCluster#target_instance_count}.

---

###### `vm_size`<sup>Required</sup> <a name="vm_size" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.putEdgeNode.parameter.vmSize"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#vm_size HdinsightHadoopCluster#vm_size}.

---

###### `https_endpoints`<sup>Optional</sup> <a name="https_endpoints" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.putEdgeNode.parameter.httpsEndpoints"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeHttpsEndpoints">HdinsightHadoopClusterRolesEdgeNodeHttpsEndpoints</a>]]

https_endpoints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#https_endpoints HdinsightHadoopCluster#https_endpoints}

---

###### `uninstall_script_actions`<sup>Optional</sup> <a name="uninstall_script_actions" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.putEdgeNode.parameter.uninstallScriptActions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActions">HdinsightHadoopClusterRolesEdgeNodeUninstallScriptActions</a>]]

uninstall_script_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#uninstall_script_actions HdinsightHadoopCluster#uninstall_script_actions}

---

##### `put_head_node` <a name="put_head_node" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.putHeadNode"></a>

```python
def put_head_node(
  username: str,
  vm_size: str,
  password: str = None,
  script_actions: typing.Union[IResolvable, typing.List[HdinsightHadoopClusterRolesHeadNodeScriptActions]] = None,
  ssh_keys: typing.List[str] = None,
  subnet_id: str = None,
  virtual_network_id: str = None
) -> None
```

###### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.putHeadNode.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#username HdinsightHadoopCluster#username}.

---

###### `vm_size`<sup>Required</sup> <a name="vm_size" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.putHeadNode.parameter.vmSize"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#vm_size HdinsightHadoopCluster#vm_size}.

---

###### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.putHeadNode.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#password HdinsightHadoopCluster#password}.

---

###### `script_actions`<sup>Optional</sup> <a name="script_actions" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.putHeadNode.parameter.scriptActions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeScriptActions">HdinsightHadoopClusterRolesHeadNodeScriptActions</a>]]

script_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#script_actions HdinsightHadoopCluster#script_actions}

---

###### `ssh_keys`<sup>Optional</sup> <a name="ssh_keys" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.putHeadNode.parameter.sshKeys"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#ssh_keys HdinsightHadoopCluster#ssh_keys}.

---

###### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.putHeadNode.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#subnet_id HdinsightHadoopCluster#subnet_id}.

---

###### `virtual_network_id`<sup>Optional</sup> <a name="virtual_network_id" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.putHeadNode.parameter.virtualNetworkId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#virtual_network_id HdinsightHadoopCluster#virtual_network_id}.

---

##### `put_worker_node` <a name="put_worker_node" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.putWorkerNode"></a>

```python
def put_worker_node(
  target_instance_count: typing.Union[int, float],
  username: str,
  vm_size: str,
  autoscale: HdinsightHadoopClusterRolesWorkerNodeAutoscale = None,
  password: str = None,
  script_actions: typing.Union[IResolvable, typing.List[HdinsightHadoopClusterRolesWorkerNodeScriptActions]] = None,
  ssh_keys: typing.List[str] = None,
  subnet_id: str = None,
  virtual_network_id: str = None
) -> None
```

###### `target_instance_count`<sup>Required</sup> <a name="target_instance_count" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.putWorkerNode.parameter.targetInstanceCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#target_instance_count HdinsightHadoopCluster#target_instance_count}.

---

###### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.putWorkerNode.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#username HdinsightHadoopCluster#username}.

---

###### `vm_size`<sup>Required</sup> <a name="vm_size" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.putWorkerNode.parameter.vmSize"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#vm_size HdinsightHadoopCluster#vm_size}.

---

###### `autoscale`<sup>Optional</sup> <a name="autoscale" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.putWorkerNode.parameter.autoscale"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscale">HdinsightHadoopClusterRolesWorkerNodeAutoscale</a>

autoscale block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#autoscale HdinsightHadoopCluster#autoscale}

---

###### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.putWorkerNode.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#password HdinsightHadoopCluster#password}.

---

###### `script_actions`<sup>Optional</sup> <a name="script_actions" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.putWorkerNode.parameter.scriptActions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActions">HdinsightHadoopClusterRolesWorkerNodeScriptActions</a>]]

script_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#script_actions HdinsightHadoopCluster#script_actions}

---

###### `ssh_keys`<sup>Optional</sup> <a name="ssh_keys" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.putWorkerNode.parameter.sshKeys"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#ssh_keys HdinsightHadoopCluster#ssh_keys}.

---

###### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.putWorkerNode.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#subnet_id HdinsightHadoopCluster#subnet_id}.

---

###### `virtual_network_id`<sup>Optional</sup> <a name="virtual_network_id" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.putWorkerNode.parameter.virtualNetworkId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#virtual_network_id HdinsightHadoopCluster#virtual_network_id}.

---

##### `put_zookeeper_node` <a name="put_zookeeper_node" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.putZookeeperNode"></a>

```python
def put_zookeeper_node(
  username: str,
  vm_size: str,
  password: str = None,
  script_actions: typing.Union[IResolvable, typing.List[HdinsightHadoopClusterRolesZookeeperNodeScriptActions]] = None,
  ssh_keys: typing.List[str] = None,
  subnet_id: str = None,
  virtual_network_id: str = None
) -> None
```

###### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.putZookeeperNode.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#username HdinsightHadoopCluster#username}.

---

###### `vm_size`<sup>Required</sup> <a name="vm_size" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.putZookeeperNode.parameter.vmSize"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#vm_size HdinsightHadoopCluster#vm_size}.

---

###### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.putZookeeperNode.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#password HdinsightHadoopCluster#password}.

---

###### `script_actions`<sup>Optional</sup> <a name="script_actions" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.putZookeeperNode.parameter.scriptActions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActions">HdinsightHadoopClusterRolesZookeeperNodeScriptActions</a>]]

script_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#script_actions HdinsightHadoopCluster#script_actions}

---

###### `ssh_keys`<sup>Optional</sup> <a name="ssh_keys" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.putZookeeperNode.parameter.sshKeys"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#ssh_keys HdinsightHadoopCluster#ssh_keys}.

---

###### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.putZookeeperNode.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#subnet_id HdinsightHadoopCluster#subnet_id}.

---

###### `virtual_network_id`<sup>Optional</sup> <a name="virtual_network_id" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.putZookeeperNode.parameter.virtualNetworkId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#virtual_network_id HdinsightHadoopCluster#virtual_network_id}.

---

##### `reset_edge_node` <a name="reset_edge_node" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.resetEdgeNode"></a>

```python
def reset_edge_node() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.property.edgeNode">edge_node</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference">HdinsightHadoopClusterRolesEdgeNodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.property.headNode">head_node</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference">HdinsightHadoopClusterRolesHeadNodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.property.workerNode">worker_node</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference">HdinsightHadoopClusterRolesWorkerNodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.property.zookeeperNode">zookeeper_node</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference">HdinsightHadoopClusterRolesZookeeperNodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.property.edgeNodeInput">edge_node_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNode">HdinsightHadoopClusterRolesEdgeNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.property.headNodeInput">head_node_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNode">HdinsightHadoopClusterRolesHeadNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.property.workerNodeInput">worker_node_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNode">HdinsightHadoopClusterRolesWorkerNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.property.zookeeperNodeInput">zookeeper_node_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNode">HdinsightHadoopClusterRolesZookeeperNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRoles">HdinsightHadoopClusterRoles</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `edge_node`<sup>Required</sup> <a name="edge_node" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.property.edgeNode"></a>

```python
edge_node: HdinsightHadoopClusterRolesEdgeNodeOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNodeOutputReference">HdinsightHadoopClusterRolesEdgeNodeOutputReference</a>

---

##### `head_node`<sup>Required</sup> <a name="head_node" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.property.headNode"></a>

```python
head_node: HdinsightHadoopClusterRolesHeadNodeOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNodeOutputReference">HdinsightHadoopClusterRolesHeadNodeOutputReference</a>

---

##### `worker_node`<sup>Required</sup> <a name="worker_node" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.property.workerNode"></a>

```python
worker_node: HdinsightHadoopClusterRolesWorkerNodeOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference">HdinsightHadoopClusterRolesWorkerNodeOutputReference</a>

---

##### `zookeeper_node`<sup>Required</sup> <a name="zookeeper_node" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.property.zookeeperNode"></a>

```python
zookeeper_node: HdinsightHadoopClusterRolesZookeeperNodeOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference">HdinsightHadoopClusterRolesZookeeperNodeOutputReference</a>

---

##### `edge_node_input`<sup>Optional</sup> <a name="edge_node_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.property.edgeNodeInput"></a>

```python
edge_node_input: HdinsightHadoopClusterRolesEdgeNode
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesEdgeNode">HdinsightHadoopClusterRolesEdgeNode</a>

---

##### `head_node_input`<sup>Optional</sup> <a name="head_node_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.property.headNodeInput"></a>

```python
head_node_input: HdinsightHadoopClusterRolesHeadNode
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesHeadNode">HdinsightHadoopClusterRolesHeadNode</a>

---

##### `worker_node_input`<sup>Optional</sup> <a name="worker_node_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.property.workerNodeInput"></a>

```python
worker_node_input: HdinsightHadoopClusterRolesWorkerNode
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNode">HdinsightHadoopClusterRolesWorkerNode</a>

---

##### `zookeeper_node_input`<sup>Optional</sup> <a name="zookeeper_node_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.property.zookeeperNodeInput"></a>

```python
zookeeper_node_input: HdinsightHadoopClusterRolesZookeeperNode
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNode">HdinsightHadoopClusterRolesZookeeperNode</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesOutputReference.property.internalValue"></a>

```python
internal_value: HdinsightHadoopClusterRoles
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRoles">HdinsightHadoopClusterRoles</a>

---


### HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference <a name="HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hadoop_cluster

hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.property.maxInstanceCountInput">max_instance_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.property.minInstanceCountInput">min_instance_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.property.maxInstanceCount">max_instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.property.minInstanceCount">min_instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacity">HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_instance_count_input`<sup>Optional</sup> <a name="max_instance_count_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.property.maxInstanceCountInput"></a>

```python
max_instance_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_instance_count_input`<sup>Optional</sup> <a name="min_instance_count_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.property.minInstanceCountInput"></a>

```python
min_instance_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_instance_count`<sup>Required</sup> <a name="max_instance_count" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.property.maxInstanceCount"></a>

```python
max_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_instance_count`<sup>Required</sup> <a name="min_instance_count" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.property.minInstanceCount"></a>

```python
min_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference.property.internalValue"></a>

```python
internal_value: HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacity
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacity">HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacity</a>

---


### HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference <a name="HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hadoop_cluster

hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.putCapacity">put_capacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.putRecurrence">put_recurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.resetCapacity">reset_capacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.resetRecurrence">reset_recurrence</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_capacity` <a name="put_capacity" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.putCapacity"></a>

```python
def put_capacity(
  max_instance_count: typing.Union[int, float],
  min_instance_count: typing.Union[int, float]
) -> None
```

###### `max_instance_count`<sup>Required</sup> <a name="max_instance_count" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.putCapacity.parameter.maxInstanceCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#max_instance_count HdinsightHadoopCluster#max_instance_count}.

---

###### `min_instance_count`<sup>Required</sup> <a name="min_instance_count" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.putCapacity.parameter.minInstanceCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#min_instance_count HdinsightHadoopCluster#min_instance_count}.

---

##### `put_recurrence` <a name="put_recurrence" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.putRecurrence"></a>

```python
def put_recurrence(
  schedule: typing.Union[IResolvable, typing.List[HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceSchedule]],
  timezone: str
) -> None
```

###### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.putRecurrence.parameter.schedule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceSchedule">HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceSchedule</a>]]

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#schedule HdinsightHadoopCluster#schedule}

---

###### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.putRecurrence.parameter.timezone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#timezone HdinsightHadoopCluster#timezone}.

---

##### `reset_capacity` <a name="reset_capacity" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.resetCapacity"></a>

```python
def reset_capacity() -> None
```

##### `reset_recurrence` <a name="reset_recurrence" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.resetRecurrence"></a>

```python
def reset_recurrence() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.property.capacity">capacity</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference">HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.property.recurrence">recurrence</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference">HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.property.capacityInput">capacity_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacity">HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.property.recurrenceInput">recurrence_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrence">HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscale">HdinsightHadoopClusterRolesWorkerNodeAutoscale</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.property.capacity"></a>

```python
capacity: HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference">HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityOutputReference</a>

---

##### `recurrence`<sup>Required</sup> <a name="recurrence" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.property.recurrence"></a>

```python
recurrence: HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference">HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference</a>

---

##### `capacity_input`<sup>Optional</sup> <a name="capacity_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.property.capacityInput"></a>

```python
capacity_input: HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacity
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacity">HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacity</a>

---

##### `recurrence_input`<sup>Optional</sup> <a name="recurrence_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.property.recurrenceInput"></a>

```python
recurrence_input: HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrence
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrence">HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrence</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference.property.internalValue"></a>

```python
internal_value: HdinsightHadoopClusterRolesWorkerNodeAutoscale
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscale">HdinsightHadoopClusterRolesWorkerNodeAutoscale</a>

---


### HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference <a name="HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hadoop_cluster

hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.putSchedule">put_schedule</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_schedule` <a name="put_schedule" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.putSchedule"></a>

```python
def put_schedule(
  value: typing.Union[IResolvable, typing.List[HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceSchedule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.putSchedule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceSchedule">HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceSchedule</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList">HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.scheduleInput">schedule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceSchedule">HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceSchedule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.timezoneInput">timezone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.timezone">timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrence">HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrence</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.schedule"></a>

```python
schedule: HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList">HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList</a>

---

##### `schedule_input`<sup>Optional</sup> <a name="schedule_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.scheduleInput"></a>

```python
schedule_input: typing.Union[IResolvable, typing.List[HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceSchedule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceSchedule">HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceSchedule</a>]]

---

##### `timezone_input`<sup>Optional</sup> <a name="timezone_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.timezoneInput"></a>

```python
timezone_input: str
```

- *Type:* str

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.internalValue"></a>

```python
internal_value: HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrence
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrence">HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrence</a>

---


### HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList <a name="HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hadoop_cluster

hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceSchedule">HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceSchedule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceSchedule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceSchedule">HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceSchedule</a>]]

---


### HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference <a name="HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hadoop_cluster

hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.daysInput">days_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.targetInstanceCountInput">target_instance_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.timeInput">time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.days">days</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.targetInstanceCount">target_instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.time">time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceSchedule">HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceSchedule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `days_input`<sup>Optional</sup> <a name="days_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.daysInput"></a>

```python
days_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_instance_count_input`<sup>Optional</sup> <a name="target_instance_count_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.targetInstanceCountInput"></a>

```python
target_instance_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_input`<sup>Optional</sup> <a name="time_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.timeInput"></a>

```python
time_input: str
```

- *Type:* str

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.days"></a>

```python
days: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_instance_count`<sup>Required</sup> <a name="target_instance_count" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.targetInstanceCount"></a>

```python
target_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.time"></a>

```python
time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceSchedule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceSchedule">HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceSchedule</a>]

---


### HdinsightHadoopClusterRolesWorkerNodeOutputReference <a name="HdinsightHadoopClusterRolesWorkerNodeOutputReference" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hadoop_cluster

hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.putAutoscale">put_autoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.putScriptActions">put_script_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.resetAutoscale">reset_autoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.resetScriptActions">reset_script_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.resetSshKeys">reset_ssh_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.resetSubnetId">reset_subnet_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.resetVirtualNetworkId">reset_virtual_network_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_autoscale` <a name="put_autoscale" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.putAutoscale"></a>

```python
def put_autoscale(
  capacity: HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacity = None,
  recurrence: HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrence = None
) -> None
```

###### `capacity`<sup>Optional</sup> <a name="capacity" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.putAutoscale.parameter.capacity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacity">HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacity</a>

capacity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#capacity HdinsightHadoopCluster#capacity}

---

###### `recurrence`<sup>Optional</sup> <a name="recurrence" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.putAutoscale.parameter.recurrence"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrence">HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrence</a>

recurrence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/hdinsight_hadoop_cluster#recurrence HdinsightHadoopCluster#recurrence}

---

##### `put_script_actions` <a name="put_script_actions" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.putScriptActions"></a>

```python
def put_script_actions(
  value: typing.Union[IResolvable, typing.List[HdinsightHadoopClusterRolesWorkerNodeScriptActions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.putScriptActions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActions">HdinsightHadoopClusterRolesWorkerNodeScriptActions</a>]]

---

##### `reset_autoscale` <a name="reset_autoscale" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.resetAutoscale"></a>

```python
def reset_autoscale() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_script_actions` <a name="reset_script_actions" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.resetScriptActions"></a>

```python
def reset_script_actions() -> None
```

##### `reset_ssh_keys` <a name="reset_ssh_keys" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.resetSshKeys"></a>

```python
def reset_ssh_keys() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```

##### `reset_virtual_network_id` <a name="reset_virtual_network_id" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.resetVirtualNetworkId"></a>

```python
def reset_virtual_network_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.autoscale">autoscale</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference">HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.scriptActions">script_actions</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsList">HdinsightHadoopClusterRolesWorkerNodeScriptActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.autoscaleInput">autoscale_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscale">HdinsightHadoopClusterRolesWorkerNodeAutoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.scriptActionsInput">script_actions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActions">HdinsightHadoopClusterRolesWorkerNodeScriptActions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.sshKeysInput">ssh_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.targetInstanceCountInput">target_instance_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.virtualNetworkIdInput">virtual_network_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.vmSizeInput">vm_size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.sshKeys">ssh_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.targetInstanceCount">target_instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.virtualNetworkId">virtual_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.vmSize">vm_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNode">HdinsightHadoopClusterRolesWorkerNode</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `autoscale`<sup>Required</sup> <a name="autoscale" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.autoscale"></a>

```python
autoscale: HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference">HdinsightHadoopClusterRolesWorkerNodeAutoscaleOutputReference</a>

---

##### `script_actions`<sup>Required</sup> <a name="script_actions" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.scriptActions"></a>

```python
script_actions: HdinsightHadoopClusterRolesWorkerNodeScriptActionsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsList">HdinsightHadoopClusterRolesWorkerNodeScriptActionsList</a>

---

##### `autoscale_input`<sup>Optional</sup> <a name="autoscale_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.autoscaleInput"></a>

```python
autoscale_input: HdinsightHadoopClusterRolesWorkerNodeAutoscale
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeAutoscale">HdinsightHadoopClusterRolesWorkerNodeAutoscale</a>

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `script_actions_input`<sup>Optional</sup> <a name="script_actions_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.scriptActionsInput"></a>

```python
script_actions_input: typing.Union[IResolvable, typing.List[HdinsightHadoopClusterRolesWorkerNodeScriptActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActions">HdinsightHadoopClusterRolesWorkerNodeScriptActions</a>]]

---

##### `ssh_keys_input`<sup>Optional</sup> <a name="ssh_keys_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.sshKeysInput"></a>

```python
ssh_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `target_instance_count_input`<sup>Optional</sup> <a name="target_instance_count_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.targetInstanceCountInput"></a>

```python
target_instance_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `virtual_network_id_input`<sup>Optional</sup> <a name="virtual_network_id_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.virtualNetworkIdInput"></a>

```python
virtual_network_id_input: str
```

- *Type:* str

---

##### `vm_size_input`<sup>Optional</sup> <a name="vm_size_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.vmSizeInput"></a>

```python
vm_size_input: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `ssh_keys`<sup>Required</sup> <a name="ssh_keys" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.sshKeys"></a>

```python
ssh_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `target_instance_count`<sup>Required</sup> <a name="target_instance_count" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.targetInstanceCount"></a>

```python
target_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `virtual_network_id`<sup>Required</sup> <a name="virtual_network_id" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.virtualNetworkId"></a>

```python
virtual_network_id: str
```

- *Type:* str

---

##### `vm_size`<sup>Required</sup> <a name="vm_size" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.vmSize"></a>

```python
vm_size: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeOutputReference.property.internalValue"></a>

```python
internal_value: HdinsightHadoopClusterRolesWorkerNode
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNode">HdinsightHadoopClusterRolesWorkerNode</a>

---


### HdinsightHadoopClusterRolesWorkerNodeScriptActionsList <a name="HdinsightHadoopClusterRolesWorkerNodeScriptActionsList" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hadoop_cluster

hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActions">HdinsightHadoopClusterRolesWorkerNodeScriptActions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[HdinsightHadoopClusterRolesWorkerNodeScriptActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActions">HdinsightHadoopClusterRolesWorkerNodeScriptActions</a>]]

---


### HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference <a name="HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hadoop_cluster

hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.property.parametersInput">parameters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.property.parameters">parameters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActions">HdinsightHadoopClusterRolesWorkerNodeScriptActions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.property.parametersInput"></a>

```python
parameters_input: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, HdinsightHadoopClusterRolesWorkerNodeScriptActions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesWorkerNodeScriptActions">HdinsightHadoopClusterRolesWorkerNodeScriptActions</a>]

---


### HdinsightHadoopClusterRolesZookeeperNodeOutputReference <a name="HdinsightHadoopClusterRolesZookeeperNodeOutputReference" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hadoop_cluster

hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.putScriptActions">put_script_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.resetScriptActions">reset_script_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.resetSshKeys">reset_ssh_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.resetSubnetId">reset_subnet_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.resetVirtualNetworkId">reset_virtual_network_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_script_actions` <a name="put_script_actions" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.putScriptActions"></a>

```python
def put_script_actions(
  value: typing.Union[IResolvable, typing.List[HdinsightHadoopClusterRolesZookeeperNodeScriptActions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.putScriptActions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActions">HdinsightHadoopClusterRolesZookeeperNodeScriptActions</a>]]

---

##### `reset_password` <a name="reset_password" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_script_actions` <a name="reset_script_actions" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.resetScriptActions"></a>

```python
def reset_script_actions() -> None
```

##### `reset_ssh_keys` <a name="reset_ssh_keys" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.resetSshKeys"></a>

```python
def reset_ssh_keys() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```

##### `reset_virtual_network_id` <a name="reset_virtual_network_id" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.resetVirtualNetworkId"></a>

```python
def reset_virtual_network_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.property.scriptActions">script_actions</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsList">HdinsightHadoopClusterRolesZookeeperNodeScriptActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.property.scriptActionsInput">script_actions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActions">HdinsightHadoopClusterRolesZookeeperNodeScriptActions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.property.sshKeysInput">ssh_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.property.virtualNetworkIdInput">virtual_network_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.property.vmSizeInput">vm_size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.property.sshKeys">ssh_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.property.virtualNetworkId">virtual_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.property.vmSize">vm_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNode">HdinsightHadoopClusterRolesZookeeperNode</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `script_actions`<sup>Required</sup> <a name="script_actions" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.property.scriptActions"></a>

```python
script_actions: HdinsightHadoopClusterRolesZookeeperNodeScriptActionsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsList">HdinsightHadoopClusterRolesZookeeperNodeScriptActionsList</a>

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `script_actions_input`<sup>Optional</sup> <a name="script_actions_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.property.scriptActionsInput"></a>

```python
script_actions_input: typing.Union[IResolvable, typing.List[HdinsightHadoopClusterRolesZookeeperNodeScriptActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActions">HdinsightHadoopClusterRolesZookeeperNodeScriptActions</a>]]

---

##### `ssh_keys_input`<sup>Optional</sup> <a name="ssh_keys_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.property.sshKeysInput"></a>

```python
ssh_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `virtual_network_id_input`<sup>Optional</sup> <a name="virtual_network_id_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.property.virtualNetworkIdInput"></a>

```python
virtual_network_id_input: str
```

- *Type:* str

---

##### `vm_size_input`<sup>Optional</sup> <a name="vm_size_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.property.vmSizeInput"></a>

```python
vm_size_input: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `ssh_keys`<sup>Required</sup> <a name="ssh_keys" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.property.sshKeys"></a>

```python
ssh_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `virtual_network_id`<sup>Required</sup> <a name="virtual_network_id" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.property.virtualNetworkId"></a>

```python
virtual_network_id: str
```

- *Type:* str

---

##### `vm_size`<sup>Required</sup> <a name="vm_size" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.property.vmSize"></a>

```python
vm_size: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeOutputReference.property.internalValue"></a>

```python
internal_value: HdinsightHadoopClusterRolesZookeeperNode
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNode">HdinsightHadoopClusterRolesZookeeperNode</a>

---


### HdinsightHadoopClusterRolesZookeeperNodeScriptActionsList <a name="HdinsightHadoopClusterRolesZookeeperNodeScriptActionsList" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hadoop_cluster

hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActions">HdinsightHadoopClusterRolesZookeeperNodeScriptActions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[HdinsightHadoopClusterRolesZookeeperNodeScriptActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActions">HdinsightHadoopClusterRolesZookeeperNodeScriptActions</a>]]

---


### HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference <a name="HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hadoop_cluster

hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.property.parametersInput">parameters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.property.parameters">parameters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActions">HdinsightHadoopClusterRolesZookeeperNodeScriptActions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.property.parametersInput"></a>

```python
parameters_input: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, HdinsightHadoopClusterRolesZookeeperNodeScriptActions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterRolesZookeeperNodeScriptActions">HdinsightHadoopClusterRolesZookeeperNodeScriptActions</a>]

---


### HdinsightHadoopClusterSecurityProfileOutputReference <a name="HdinsightHadoopClusterSecurityProfileOutputReference" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hadoop_cluster

hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.resetClusterUsersGroupDns">reset_cluster_users_group_dns</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cluster_users_group_dns` <a name="reset_cluster_users_group_dns" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.resetClusterUsersGroupDns"></a>

```python
def reset_cluster_users_group_dns() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.property.aaddsResourceIdInput">aadds_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.property.clusterUsersGroupDnsInput">cluster_users_group_dns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.property.domainNameInput">domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.property.domainUsernameInput">domain_username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.property.domainUserPasswordInput">domain_user_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.property.ldapsUrlsInput">ldaps_urls_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.property.msiResourceIdInput">msi_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.property.aaddsResourceId">aadds_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.property.clusterUsersGroupDns">cluster_users_group_dns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.property.domainUsername">domain_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.property.domainUserPassword">domain_user_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.property.ldapsUrls">ldaps_urls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.property.msiResourceId">msi_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfile">HdinsightHadoopClusterSecurityProfile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aadds_resource_id_input`<sup>Optional</sup> <a name="aadds_resource_id_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.property.aaddsResourceIdInput"></a>

```python
aadds_resource_id_input: str
```

- *Type:* str

---

##### `cluster_users_group_dns_input`<sup>Optional</sup> <a name="cluster_users_group_dns_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.property.clusterUsersGroupDnsInput"></a>

```python
cluster_users_group_dns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `domain_name_input`<sup>Optional</sup> <a name="domain_name_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.property.domainNameInput"></a>

```python
domain_name_input: str
```

- *Type:* str

---

##### `domain_username_input`<sup>Optional</sup> <a name="domain_username_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.property.domainUsernameInput"></a>

```python
domain_username_input: str
```

- *Type:* str

---

##### `domain_user_password_input`<sup>Optional</sup> <a name="domain_user_password_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.property.domainUserPasswordInput"></a>

```python
domain_user_password_input: str
```

- *Type:* str

---

##### `ldaps_urls_input`<sup>Optional</sup> <a name="ldaps_urls_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.property.ldapsUrlsInput"></a>

```python
ldaps_urls_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `msi_resource_id_input`<sup>Optional</sup> <a name="msi_resource_id_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.property.msiResourceIdInput"></a>

```python
msi_resource_id_input: str
```

- *Type:* str

---

##### `aadds_resource_id`<sup>Required</sup> <a name="aadds_resource_id" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.property.aaddsResourceId"></a>

```python
aadds_resource_id: str
```

- *Type:* str

---

##### `cluster_users_group_dns`<sup>Required</sup> <a name="cluster_users_group_dns" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.property.clusterUsersGroupDns"></a>

```python
cluster_users_group_dns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `domain_username`<sup>Required</sup> <a name="domain_username" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.property.domainUsername"></a>

```python
domain_username: str
```

- *Type:* str

---

##### `domain_user_password`<sup>Required</sup> <a name="domain_user_password" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.property.domainUserPassword"></a>

```python
domain_user_password: str
```

- *Type:* str

---

##### `ldaps_urls`<sup>Required</sup> <a name="ldaps_urls" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.property.ldapsUrls"></a>

```python
ldaps_urls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `msi_resource_id`<sup>Required</sup> <a name="msi_resource_id" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.property.msiResourceId"></a>

```python
msi_resource_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfileOutputReference.property.internalValue"></a>

```python
internal_value: HdinsightHadoopClusterSecurityProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterSecurityProfile">HdinsightHadoopClusterSecurityProfile</a>

---


### HdinsightHadoopClusterStorageAccountGen2OutputReference <a name="HdinsightHadoopClusterStorageAccountGen2OutputReference" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hadoop_cluster

hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.property.filesystemIdInput">filesystem_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.property.isDefaultInput">is_default_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.property.managedIdentityResourceIdInput">managed_identity_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.property.storageResourceIdInput">storage_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.property.filesystemId">filesystem_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.property.isDefault">is_default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.property.managedIdentityResourceId">managed_identity_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.property.storageResourceId">storage_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2">HdinsightHadoopClusterStorageAccountGen2</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filesystem_id_input`<sup>Optional</sup> <a name="filesystem_id_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.property.filesystemIdInput"></a>

```python
filesystem_id_input: str
```

- *Type:* str

---

##### `is_default_input`<sup>Optional</sup> <a name="is_default_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.property.isDefaultInput"></a>

```python
is_default_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `managed_identity_resource_id_input`<sup>Optional</sup> <a name="managed_identity_resource_id_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.property.managedIdentityResourceIdInput"></a>

```python
managed_identity_resource_id_input: str
```

- *Type:* str

---

##### `storage_resource_id_input`<sup>Optional</sup> <a name="storage_resource_id_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.property.storageResourceIdInput"></a>

```python
storage_resource_id_input: str
```

- *Type:* str

---

##### `filesystem_id`<sup>Required</sup> <a name="filesystem_id" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.property.filesystemId"></a>

```python
filesystem_id: str
```

- *Type:* str

---

##### `is_default`<sup>Required</sup> <a name="is_default" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.property.isDefault"></a>

```python
is_default: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `managed_identity_resource_id`<sup>Required</sup> <a name="managed_identity_resource_id" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.property.managedIdentityResourceId"></a>

```python
managed_identity_resource_id: str
```

- *Type:* str

---

##### `storage_resource_id`<sup>Required</sup> <a name="storage_resource_id" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.property.storageResourceId"></a>

```python
storage_resource_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2OutputReference.property.internalValue"></a>

```python
internal_value: HdinsightHadoopClusterStorageAccountGen2
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountGen2">HdinsightHadoopClusterStorageAccountGen2</a>

---


### HdinsightHadoopClusterStorageAccountList <a name="HdinsightHadoopClusterStorageAccountList" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hadoop_cluster

hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> HdinsightHadoopClusterStorageAccountOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccount">HdinsightHadoopClusterStorageAccount</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[HdinsightHadoopClusterStorageAccount]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccount">HdinsightHadoopClusterStorageAccount</a>]]

---


### HdinsightHadoopClusterStorageAccountOutputReference <a name="HdinsightHadoopClusterStorageAccountOutputReference" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hadoop_cluster

hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.resetStorageResourceId">reset_storage_resource_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_storage_resource_id` <a name="reset_storage_resource_id" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.resetStorageResourceId"></a>

```python
def reset_storage_resource_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.property.isDefaultInput">is_default_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.property.storageAccountKeyInput">storage_account_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.property.storageContainerIdInput">storage_container_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.property.storageResourceIdInput">storage_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.property.isDefault">is_default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.property.storageAccountKey">storage_account_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.property.storageContainerId">storage_container_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.property.storageResourceId">storage_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccount">HdinsightHadoopClusterStorageAccount</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_default_input`<sup>Optional</sup> <a name="is_default_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.property.isDefaultInput"></a>

```python
is_default_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `storage_account_key_input`<sup>Optional</sup> <a name="storage_account_key_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.property.storageAccountKeyInput"></a>

```python
storage_account_key_input: str
```

- *Type:* str

---

##### `storage_container_id_input`<sup>Optional</sup> <a name="storage_container_id_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.property.storageContainerIdInput"></a>

```python
storage_container_id_input: str
```

- *Type:* str

---

##### `storage_resource_id_input`<sup>Optional</sup> <a name="storage_resource_id_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.property.storageResourceIdInput"></a>

```python
storage_resource_id_input: str
```

- *Type:* str

---

##### `is_default`<sup>Required</sup> <a name="is_default" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.property.isDefault"></a>

```python
is_default: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `storage_account_key`<sup>Required</sup> <a name="storage_account_key" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.property.storageAccountKey"></a>

```python
storage_account_key: str
```

- *Type:* str

---

##### `storage_container_id`<sup>Required</sup> <a name="storage_container_id" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.property.storageContainerId"></a>

```python
storage_container_id: str
```

- *Type:* str

---

##### `storage_resource_id`<sup>Required</sup> <a name="storage_resource_id" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.property.storageResourceId"></a>

```python
storage_resource_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccountOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, HdinsightHadoopClusterStorageAccount]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterStorageAccount">HdinsightHadoopClusterStorageAccount</a>]

---


### HdinsightHadoopClusterTimeoutsOutputReference <a name="HdinsightHadoopClusterTimeoutsOutputReference" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hadoop_cluster

hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeouts">HdinsightHadoopClusterTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, HdinsightHadoopClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hdinsightHadoopCluster.HdinsightHadoopClusterTimeouts">HdinsightHadoopClusterTimeouts</a>]

---



