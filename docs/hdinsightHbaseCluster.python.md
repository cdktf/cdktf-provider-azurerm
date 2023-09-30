# `azurerm_hdinsight_hbase_cluster`

Refer to the Terraform Registory for docs: [`azurerm_hdinsight_hbase_cluster`](https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster).

# `hdinsightHbaseCluster` Submodule <a name="`hdinsightHbaseCluster` Submodule" id="@cdktf/provider-azurerm.hdinsightHbaseCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HdinsightHbaseCluster <a name="HdinsightHbaseCluster" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster azurerm_hdinsight_hbase_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hbase_cluster

hdinsightHbaseCluster.HdinsightHbaseCluster(
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
  component_version: HdinsightHbaseClusterComponentVersion,
  gateway: HdinsightHbaseClusterGateway,
  location: str,
  name: str,
  resource_group_name: str,
  roles: HdinsightHbaseClusterRoles,
  tier: str,
  compute_isolation: HdinsightHbaseClusterComputeIsolation = None,
  disk_encryption: typing.Union[IResolvable, typing.List[HdinsightHbaseClusterDiskEncryption]] = None,
  extension: HdinsightHbaseClusterExtension = None,
  id: str = None,
  metastores: HdinsightHbaseClusterMetastores = None,
  monitor: HdinsightHbaseClusterMonitor = None,
  network: HdinsightHbaseClusterNetwork = None,
  security_profile: HdinsightHbaseClusterSecurityProfile = None,
  storage_account: typing.Union[IResolvable, typing.List[HdinsightHbaseClusterStorageAccount]] = None,
  storage_account_gen2: HdinsightHbaseClusterStorageAccountGen2 = None,
  tags: typing.Mapping[str] = None,
  timeouts: HdinsightHbaseClusterTimeouts = None,
  tls_min_version: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.Initializer.parameter.clusterVersion">cluster_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#cluster_version HdinsightHbaseCluster#cluster_version}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.Initializer.parameter.componentVersion">component_version</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersion">HdinsightHbaseClusterComponentVersion</a></code> | component_version block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.Initializer.parameter.gateway">gateway</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGateway">HdinsightHbaseClusterGateway</a></code> | gateway block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#location HdinsightHbaseCluster#location}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#name HdinsightHbaseCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#resource_group_name HdinsightHbaseCluster#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.Initializer.parameter.roles">roles</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRoles">HdinsightHbaseClusterRoles</a></code> | roles block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.Initializer.parameter.tier">tier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#tier HdinsightHbaseCluster#tier}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.Initializer.parameter.computeIsolation">compute_isolation</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolation">HdinsightHbaseClusterComputeIsolation</a></code> | compute_isolation block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.Initializer.parameter.diskEncryption">disk_encryption</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryption">HdinsightHbaseClusterDiskEncryption</a>]]</code> | disk_encryption block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.Initializer.parameter.extension">extension</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtension">HdinsightHbaseClusterExtension</a></code> | extension block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#id HdinsightHbaseCluster#id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.Initializer.parameter.metastores">metastores</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastores">HdinsightHbaseClusterMetastores</a></code> | metastores block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.Initializer.parameter.monitor">monitor</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitor">HdinsightHbaseClusterMonitor</a></code> | monitor block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.Initializer.parameter.network">network</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetwork">HdinsightHbaseClusterNetwork</a></code> | network block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.Initializer.parameter.securityProfile">security_profile</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfile">HdinsightHbaseClusterSecurityProfile</a></code> | security_profile block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.Initializer.parameter.storageAccount">storage_account</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccount">HdinsightHbaseClusterStorageAccount</a>]]</code> | storage_account block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.Initializer.parameter.storageAccountGen2">storage_account_gen2</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2">HdinsightHbaseClusterStorageAccountGen2</a></code> | storage_account_gen2 block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#tags HdinsightHbaseCluster#tags}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeouts">HdinsightHbaseClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.Initializer.parameter.tlsMinVersion">tls_min_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#tls_min_version HdinsightHbaseCluster#tls_min_version}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_version`<sup>Required</sup> <a name="cluster_version" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.Initializer.parameter.clusterVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#cluster_version HdinsightHbaseCluster#cluster_version}.

---

##### `component_version`<sup>Required</sup> <a name="component_version" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.Initializer.parameter.componentVersion"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersion">HdinsightHbaseClusterComponentVersion</a>

component_version block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#component_version HdinsightHbaseCluster#component_version}

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.Initializer.parameter.gateway"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGateway">HdinsightHbaseClusterGateway</a>

gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#gateway HdinsightHbaseCluster#gateway}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#location HdinsightHbaseCluster#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#name HdinsightHbaseCluster#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#resource_group_name HdinsightHbaseCluster#resource_group_name}.

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.Initializer.parameter.roles"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRoles">HdinsightHbaseClusterRoles</a>

roles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#roles HdinsightHbaseCluster#roles}

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.Initializer.parameter.tier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#tier HdinsightHbaseCluster#tier}.

---

##### `compute_isolation`<sup>Optional</sup> <a name="compute_isolation" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.Initializer.parameter.computeIsolation"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolation">HdinsightHbaseClusterComputeIsolation</a>

compute_isolation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#compute_isolation HdinsightHbaseCluster#compute_isolation}

---

##### `disk_encryption`<sup>Optional</sup> <a name="disk_encryption" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.Initializer.parameter.diskEncryption"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryption">HdinsightHbaseClusterDiskEncryption</a>]]

disk_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#disk_encryption HdinsightHbaseCluster#disk_encryption}

---

##### `extension`<sup>Optional</sup> <a name="extension" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.Initializer.parameter.extension"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtension">HdinsightHbaseClusterExtension</a>

extension block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#extension HdinsightHbaseCluster#extension}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#id HdinsightHbaseCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metastores`<sup>Optional</sup> <a name="metastores" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.Initializer.parameter.metastores"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastores">HdinsightHbaseClusterMetastores</a>

metastores block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#metastores HdinsightHbaseCluster#metastores}

---

##### `monitor`<sup>Optional</sup> <a name="monitor" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.Initializer.parameter.monitor"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitor">HdinsightHbaseClusterMonitor</a>

monitor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#monitor HdinsightHbaseCluster#monitor}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.Initializer.parameter.network"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetwork">HdinsightHbaseClusterNetwork</a>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#network HdinsightHbaseCluster#network}

---

##### `security_profile`<sup>Optional</sup> <a name="security_profile" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.Initializer.parameter.securityProfile"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfile">HdinsightHbaseClusterSecurityProfile</a>

security_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#security_profile HdinsightHbaseCluster#security_profile}

---

##### `storage_account`<sup>Optional</sup> <a name="storage_account" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.Initializer.parameter.storageAccount"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccount">HdinsightHbaseClusterStorageAccount</a>]]

storage_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#storage_account HdinsightHbaseCluster#storage_account}

---

##### `storage_account_gen2`<sup>Optional</sup> <a name="storage_account_gen2" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.Initializer.parameter.storageAccountGen2"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2">HdinsightHbaseClusterStorageAccountGen2</a>

storage_account_gen2 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#storage_account_gen2 HdinsightHbaseCluster#storage_account_gen2}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#tags HdinsightHbaseCluster#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeouts">HdinsightHbaseClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#timeouts HdinsightHbaseCluster#timeouts}

---

##### `tls_min_version`<sup>Optional</sup> <a name="tls_min_version" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.Initializer.parameter.tlsMinVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#tls_min_version HdinsightHbaseCluster#tls_min_version}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putComponentVersion">put_component_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putComputeIsolation">put_compute_isolation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putDiskEncryption">put_disk_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putExtension">put_extension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putGateway">put_gateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putMetastores">put_metastores</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putMonitor">put_monitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putNetwork">put_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putRoles">put_roles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putSecurityProfile">put_security_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putStorageAccount">put_storage_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putStorageAccountGen2">put_storage_account_gen2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetComputeIsolation">reset_compute_isolation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetDiskEncryption">reset_disk_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetExtension">reset_extension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetMetastores">reset_metastores</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetMonitor">reset_monitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetNetwork">reset_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetSecurityProfile">reset_security_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetStorageAccount">reset_storage_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetStorageAccountGen2">reset_storage_account_gen2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetTlsMinVersion">reset_tls_min_version</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_component_version` <a name="put_component_version" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putComponentVersion"></a>

```python
def put_component_version(
  hbase: str
) -> None
```

###### `hbase`<sup>Required</sup> <a name="hbase" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putComponentVersion.parameter.hbase"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#hbase HdinsightHbaseCluster#hbase}.

---

##### `put_compute_isolation` <a name="put_compute_isolation" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putComputeIsolation"></a>

```python
def put_compute_isolation(
  compute_isolation_enabled: typing.Union[bool, IResolvable] = None,
  host_sku: str = None
) -> None
```

###### `compute_isolation_enabled`<sup>Optional</sup> <a name="compute_isolation_enabled" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putComputeIsolation.parameter.computeIsolationEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#compute_isolation_enabled HdinsightHbaseCluster#compute_isolation_enabled}.

---

###### `host_sku`<sup>Optional</sup> <a name="host_sku" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putComputeIsolation.parameter.hostSku"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#host_sku HdinsightHbaseCluster#host_sku}.

---

##### `put_disk_encryption` <a name="put_disk_encryption" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putDiskEncryption"></a>

```python
def put_disk_encryption(
  value: typing.Union[IResolvable, typing.List[HdinsightHbaseClusterDiskEncryption]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putDiskEncryption.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryption">HdinsightHbaseClusterDiskEncryption</a>]]

---

##### `put_extension` <a name="put_extension" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putExtension"></a>

```python
def put_extension(
  log_analytics_workspace_id: str,
  primary_key: str
) -> None
```

###### `log_analytics_workspace_id`<sup>Required</sup> <a name="log_analytics_workspace_id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putExtension.parameter.logAnalyticsWorkspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#log_analytics_workspace_id HdinsightHbaseCluster#log_analytics_workspace_id}.

---

###### `primary_key`<sup>Required</sup> <a name="primary_key" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putExtension.parameter.primaryKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#primary_key HdinsightHbaseCluster#primary_key}.

---

##### `put_gateway` <a name="put_gateway" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putGateway"></a>

```python
def put_gateway(
  password: str,
  username: str
) -> None
```

###### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putGateway.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#password HdinsightHbaseCluster#password}.

---

###### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putGateway.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#username HdinsightHbaseCluster#username}.

---

##### `put_metastores` <a name="put_metastores" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putMetastores"></a>

```python
def put_metastores(
  ambari: HdinsightHbaseClusterMetastoresAmbari = None,
  hive: HdinsightHbaseClusterMetastoresHive = None,
  oozie: HdinsightHbaseClusterMetastoresOozie = None
) -> None
```

###### `ambari`<sup>Optional</sup> <a name="ambari" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putMetastores.parameter.ambari"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbari">HdinsightHbaseClusterMetastoresAmbari</a>

ambari block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#ambari HdinsightHbaseCluster#ambari}

---

###### `hive`<sup>Optional</sup> <a name="hive" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putMetastores.parameter.hive"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHive">HdinsightHbaseClusterMetastoresHive</a>

hive block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#hive HdinsightHbaseCluster#hive}

---

###### `oozie`<sup>Optional</sup> <a name="oozie" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putMetastores.parameter.oozie"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozie">HdinsightHbaseClusterMetastoresOozie</a>

oozie block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#oozie HdinsightHbaseCluster#oozie}

---

##### `put_monitor` <a name="put_monitor" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putMonitor"></a>

```python
def put_monitor(
  log_analytics_workspace_id: str,
  primary_key: str
) -> None
```

###### `log_analytics_workspace_id`<sup>Required</sup> <a name="log_analytics_workspace_id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putMonitor.parameter.logAnalyticsWorkspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#log_analytics_workspace_id HdinsightHbaseCluster#log_analytics_workspace_id}.

---

###### `primary_key`<sup>Required</sup> <a name="primary_key" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putMonitor.parameter.primaryKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#primary_key HdinsightHbaseCluster#primary_key}.

---

##### `put_network` <a name="put_network" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putNetwork"></a>

```python
def put_network(
  connection_direction: str = None,
  private_link_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `connection_direction`<sup>Optional</sup> <a name="connection_direction" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putNetwork.parameter.connectionDirection"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#connection_direction HdinsightHbaseCluster#connection_direction}.

---

###### `private_link_enabled`<sup>Optional</sup> <a name="private_link_enabled" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putNetwork.parameter.privateLinkEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#private_link_enabled HdinsightHbaseCluster#private_link_enabled}.

---

##### `put_roles` <a name="put_roles" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putRoles"></a>

```python
def put_roles(
  head_node: HdinsightHbaseClusterRolesHeadNode,
  worker_node: HdinsightHbaseClusterRolesWorkerNode,
  zookeeper_node: HdinsightHbaseClusterRolesZookeeperNode
) -> None
```

###### `head_node`<sup>Required</sup> <a name="head_node" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putRoles.parameter.headNode"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNode">HdinsightHbaseClusterRolesHeadNode</a>

head_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#head_node HdinsightHbaseCluster#head_node}

---

###### `worker_node`<sup>Required</sup> <a name="worker_node" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putRoles.parameter.workerNode"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode">HdinsightHbaseClusterRolesWorkerNode</a>

worker_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#worker_node HdinsightHbaseCluster#worker_node}

---

###### `zookeeper_node`<sup>Required</sup> <a name="zookeeper_node" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putRoles.parameter.zookeeperNode"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNode">HdinsightHbaseClusterRolesZookeeperNode</a>

zookeeper_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#zookeeper_node HdinsightHbaseCluster#zookeeper_node}

---

##### `put_security_profile` <a name="put_security_profile" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putSecurityProfile"></a>

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

###### `aadds_resource_id`<sup>Required</sup> <a name="aadds_resource_id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putSecurityProfile.parameter.aaddsResourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#aadds_resource_id HdinsightHbaseCluster#aadds_resource_id}.

---

###### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putSecurityProfile.parameter.domainName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#domain_name HdinsightHbaseCluster#domain_name}.

---

###### `domain_username`<sup>Required</sup> <a name="domain_username" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putSecurityProfile.parameter.domainUsername"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#domain_username HdinsightHbaseCluster#domain_username}.

---

###### `domain_user_password`<sup>Required</sup> <a name="domain_user_password" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putSecurityProfile.parameter.domainUserPassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#domain_user_password HdinsightHbaseCluster#domain_user_password}.

---

###### `ldaps_urls`<sup>Required</sup> <a name="ldaps_urls" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putSecurityProfile.parameter.ldapsUrls"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#ldaps_urls HdinsightHbaseCluster#ldaps_urls}.

---

###### `msi_resource_id`<sup>Required</sup> <a name="msi_resource_id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putSecurityProfile.parameter.msiResourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#msi_resource_id HdinsightHbaseCluster#msi_resource_id}.

---

###### `cluster_users_group_dns`<sup>Optional</sup> <a name="cluster_users_group_dns" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putSecurityProfile.parameter.clusterUsersGroupDns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#cluster_users_group_dns HdinsightHbaseCluster#cluster_users_group_dns}.

---

##### `put_storage_account` <a name="put_storage_account" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putStorageAccount"></a>

```python
def put_storage_account(
  value: typing.Union[IResolvable, typing.List[HdinsightHbaseClusterStorageAccount]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putStorageAccount.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccount">HdinsightHbaseClusterStorageAccount</a>]]

---

##### `put_storage_account_gen2` <a name="put_storage_account_gen2" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putStorageAccountGen2"></a>

```python
def put_storage_account_gen2(
  filesystem_id: str,
  is_default: typing.Union[bool, IResolvable],
  managed_identity_resource_id: str,
  storage_resource_id: str
) -> None
```

###### `filesystem_id`<sup>Required</sup> <a name="filesystem_id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putStorageAccountGen2.parameter.filesystemId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#filesystem_id HdinsightHbaseCluster#filesystem_id}.

---

###### `is_default`<sup>Required</sup> <a name="is_default" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putStorageAccountGen2.parameter.isDefault"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#is_default HdinsightHbaseCluster#is_default}.

---

###### `managed_identity_resource_id`<sup>Required</sup> <a name="managed_identity_resource_id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putStorageAccountGen2.parameter.managedIdentityResourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#managed_identity_resource_id HdinsightHbaseCluster#managed_identity_resource_id}.

---

###### `storage_resource_id`<sup>Required</sup> <a name="storage_resource_id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putStorageAccountGen2.parameter.storageResourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#storage_resource_id HdinsightHbaseCluster#storage_resource_id}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#create HdinsightHbaseCluster#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#delete HdinsightHbaseCluster#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#read HdinsightHbaseCluster#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#update HdinsightHbaseCluster#update}.

---

##### `reset_compute_isolation` <a name="reset_compute_isolation" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetComputeIsolation"></a>

```python
def reset_compute_isolation() -> None
```

##### `reset_disk_encryption` <a name="reset_disk_encryption" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetDiskEncryption"></a>

```python
def reset_disk_encryption() -> None
```

##### `reset_extension` <a name="reset_extension" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetExtension"></a>

```python
def reset_extension() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_metastores` <a name="reset_metastores" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetMetastores"></a>

```python
def reset_metastores() -> None
```

##### `reset_monitor` <a name="reset_monitor" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetMonitor"></a>

```python
def reset_monitor() -> None
```

##### `reset_network` <a name="reset_network" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetNetwork"></a>

```python
def reset_network() -> None
```

##### `reset_security_profile` <a name="reset_security_profile" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetSecurityProfile"></a>

```python
def reset_security_profile() -> None
```

##### `reset_storage_account` <a name="reset_storage_account" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetStorageAccount"></a>

```python
def reset_storage_account() -> None
```

##### `reset_storage_account_gen2` <a name="reset_storage_account_gen2" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetStorageAccountGen2"></a>

```python
def reset_storage_account_gen2() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_tls_min_version` <a name="reset_tls_min_version" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetTlsMinVersion"></a>

```python
def reset_tls_min_version() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hbase_cluster

hdinsightHbaseCluster.HdinsightHbaseCluster.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hbase_cluster

hdinsightHbaseCluster.HdinsightHbaseCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hbase_cluster

hdinsightHbaseCluster.HdinsightHbaseCluster.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.componentVersion">component_version</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference">HdinsightHbaseClusterComponentVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.computeIsolation">compute_isolation</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference">HdinsightHbaseClusterComputeIsolationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.diskEncryption">disk_encryption</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList">HdinsightHbaseClusterDiskEncryptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.extension">extension</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference">HdinsightHbaseClusterExtensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.gateway">gateway</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference">HdinsightHbaseClusterGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.httpsEndpoint">https_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.metastores">metastores</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference">HdinsightHbaseClusterMetastoresOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.monitor">monitor</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference">HdinsightHbaseClusterMonitorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.network">network</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference">HdinsightHbaseClusterNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.roles">roles</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference">HdinsightHbaseClusterRolesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.securityProfile">security_profile</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference">HdinsightHbaseClusterSecurityProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.sshEndpoint">ssh_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.storageAccount">storage_account</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList">HdinsightHbaseClusterStorageAccountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.storageAccountGen2">storage_account_gen2</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference">HdinsightHbaseClusterStorageAccountGen2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference">HdinsightHbaseClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.clusterVersionInput">cluster_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.componentVersionInput">component_version_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersion">HdinsightHbaseClusterComponentVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.computeIsolationInput">compute_isolation_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolation">HdinsightHbaseClusterComputeIsolation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.diskEncryptionInput">disk_encryption_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryption">HdinsightHbaseClusterDiskEncryption</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.extensionInput">extension_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtension">HdinsightHbaseClusterExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.gatewayInput">gateway_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGateway">HdinsightHbaseClusterGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.metastoresInput">metastores_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastores">HdinsightHbaseClusterMetastores</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.monitorInput">monitor_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitor">HdinsightHbaseClusterMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.networkInput">network_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetwork">HdinsightHbaseClusterNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.rolesInput">roles_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRoles">HdinsightHbaseClusterRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.securityProfileInput">security_profile_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfile">HdinsightHbaseClusterSecurityProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.storageAccountGen2Input">storage_account_gen2_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2">HdinsightHbaseClusterStorageAccountGen2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.storageAccountInput">storage_account_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccount">HdinsightHbaseClusterStorageAccount</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.tierInput">tier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeouts">HdinsightHbaseClusterTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.tlsMinVersionInput">tls_min_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.clusterVersion">cluster_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.tier">tier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.tlsMinVersion">tls_min_version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `component_version`<sup>Required</sup> <a name="component_version" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.componentVersion"></a>

```python
component_version: HdinsightHbaseClusterComponentVersionOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference">HdinsightHbaseClusterComponentVersionOutputReference</a>

---

##### `compute_isolation`<sup>Required</sup> <a name="compute_isolation" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.computeIsolation"></a>

```python
compute_isolation: HdinsightHbaseClusterComputeIsolationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference">HdinsightHbaseClusterComputeIsolationOutputReference</a>

---

##### `disk_encryption`<sup>Required</sup> <a name="disk_encryption" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.diskEncryption"></a>

```python
disk_encryption: HdinsightHbaseClusterDiskEncryptionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList">HdinsightHbaseClusterDiskEncryptionList</a>

---

##### `extension`<sup>Required</sup> <a name="extension" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.extension"></a>

```python
extension: HdinsightHbaseClusterExtensionOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference">HdinsightHbaseClusterExtensionOutputReference</a>

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.gateway"></a>

```python
gateway: HdinsightHbaseClusterGatewayOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference">HdinsightHbaseClusterGatewayOutputReference</a>

---

##### `https_endpoint`<sup>Required</sup> <a name="https_endpoint" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.httpsEndpoint"></a>

```python
https_endpoint: str
```

- *Type:* str

---

##### `metastores`<sup>Required</sup> <a name="metastores" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.metastores"></a>

```python
metastores: HdinsightHbaseClusterMetastoresOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference">HdinsightHbaseClusterMetastoresOutputReference</a>

---

##### `monitor`<sup>Required</sup> <a name="monitor" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.monitor"></a>

```python
monitor: HdinsightHbaseClusterMonitorOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference">HdinsightHbaseClusterMonitorOutputReference</a>

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.network"></a>

```python
network: HdinsightHbaseClusterNetworkOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference">HdinsightHbaseClusterNetworkOutputReference</a>

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.roles"></a>

```python
roles: HdinsightHbaseClusterRolesOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference">HdinsightHbaseClusterRolesOutputReference</a>

---

##### `security_profile`<sup>Required</sup> <a name="security_profile" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.securityProfile"></a>

```python
security_profile: HdinsightHbaseClusterSecurityProfileOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference">HdinsightHbaseClusterSecurityProfileOutputReference</a>

---

##### `ssh_endpoint`<sup>Required</sup> <a name="ssh_endpoint" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.sshEndpoint"></a>

```python
ssh_endpoint: str
```

- *Type:* str

---

##### `storage_account`<sup>Required</sup> <a name="storage_account" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.storageAccount"></a>

```python
storage_account: HdinsightHbaseClusterStorageAccountList
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList">HdinsightHbaseClusterStorageAccountList</a>

---

##### `storage_account_gen2`<sup>Required</sup> <a name="storage_account_gen2" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.storageAccountGen2"></a>

```python
storage_account_gen2: HdinsightHbaseClusterStorageAccountGen2OutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference">HdinsightHbaseClusterStorageAccountGen2OutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.timeouts"></a>

```python
timeouts: HdinsightHbaseClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference">HdinsightHbaseClusterTimeoutsOutputReference</a>

---

##### `cluster_version_input`<sup>Optional</sup> <a name="cluster_version_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.clusterVersionInput"></a>

```python
cluster_version_input: str
```

- *Type:* str

---

##### `component_version_input`<sup>Optional</sup> <a name="component_version_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.componentVersionInput"></a>

```python
component_version_input: HdinsightHbaseClusterComponentVersion
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersion">HdinsightHbaseClusterComponentVersion</a>

---

##### `compute_isolation_input`<sup>Optional</sup> <a name="compute_isolation_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.computeIsolationInput"></a>

```python
compute_isolation_input: HdinsightHbaseClusterComputeIsolation
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolation">HdinsightHbaseClusterComputeIsolation</a>

---

##### `disk_encryption_input`<sup>Optional</sup> <a name="disk_encryption_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.diskEncryptionInput"></a>

```python
disk_encryption_input: typing.Union[IResolvable, typing.List[HdinsightHbaseClusterDiskEncryption]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryption">HdinsightHbaseClusterDiskEncryption</a>]]

---

##### `extension_input`<sup>Optional</sup> <a name="extension_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.extensionInput"></a>

```python
extension_input: HdinsightHbaseClusterExtension
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtension">HdinsightHbaseClusterExtension</a>

---

##### `gateway_input`<sup>Optional</sup> <a name="gateway_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.gatewayInput"></a>

```python
gateway_input: HdinsightHbaseClusterGateway
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGateway">HdinsightHbaseClusterGateway</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `metastores_input`<sup>Optional</sup> <a name="metastores_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.metastoresInput"></a>

```python
metastores_input: HdinsightHbaseClusterMetastores
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastores">HdinsightHbaseClusterMetastores</a>

---

##### `monitor_input`<sup>Optional</sup> <a name="monitor_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.monitorInput"></a>

```python
monitor_input: HdinsightHbaseClusterMonitor
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitor">HdinsightHbaseClusterMonitor</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.networkInput"></a>

```python
network_input: HdinsightHbaseClusterNetwork
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetwork">HdinsightHbaseClusterNetwork</a>

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `roles_input`<sup>Optional</sup> <a name="roles_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.rolesInput"></a>

```python
roles_input: HdinsightHbaseClusterRoles
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRoles">HdinsightHbaseClusterRoles</a>

---

##### `security_profile_input`<sup>Optional</sup> <a name="security_profile_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.securityProfileInput"></a>

```python
security_profile_input: HdinsightHbaseClusterSecurityProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfile">HdinsightHbaseClusterSecurityProfile</a>

---

##### `storage_account_gen2_input`<sup>Optional</sup> <a name="storage_account_gen2_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.storageAccountGen2Input"></a>

```python
storage_account_gen2_input: HdinsightHbaseClusterStorageAccountGen2
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2">HdinsightHbaseClusterStorageAccountGen2</a>

---

##### `storage_account_input`<sup>Optional</sup> <a name="storage_account_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.storageAccountInput"></a>

```python
storage_account_input: typing.Union[IResolvable, typing.List[HdinsightHbaseClusterStorageAccount]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccount">HdinsightHbaseClusterStorageAccount</a>]]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tier_input`<sup>Optional</sup> <a name="tier_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.tierInput"></a>

```python
tier_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, HdinsightHbaseClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeouts">HdinsightHbaseClusterTimeouts</a>]

---

##### `tls_min_version_input`<sup>Optional</sup> <a name="tls_min_version_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.tlsMinVersionInput"></a>

```python
tls_min_version_input: str
```

- *Type:* str

---

##### `cluster_version`<sup>Required</sup> <a name="cluster_version" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.clusterVersion"></a>

```python
cluster_version: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.tier"></a>

```python
tier: str
```

- *Type:* str

---

##### `tls_min_version`<sup>Required</sup> <a name="tls_min_version" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.tlsMinVersion"></a>

```python
tls_min_version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### HdinsightHbaseClusterComponentVersion <a name="HdinsightHbaseClusterComponentVersion" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersion.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hbase_cluster

hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersion(
  hbase: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersion.property.hbase">hbase</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#hbase HdinsightHbaseCluster#hbase}. |

---

##### `hbase`<sup>Required</sup> <a name="hbase" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersion.property.hbase"></a>

```python
hbase: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#hbase HdinsightHbaseCluster#hbase}.

---

### HdinsightHbaseClusterComputeIsolation <a name="HdinsightHbaseClusterComputeIsolation" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolation.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hbase_cluster

hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolation(
  compute_isolation_enabled: typing.Union[bool, IResolvable] = None,
  host_sku: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolation.property.computeIsolationEnabled">compute_isolation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#compute_isolation_enabled HdinsightHbaseCluster#compute_isolation_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolation.property.hostSku">host_sku</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#host_sku HdinsightHbaseCluster#host_sku}. |

---

##### `compute_isolation_enabled`<sup>Optional</sup> <a name="compute_isolation_enabled" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolation.property.computeIsolationEnabled"></a>

```python
compute_isolation_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#compute_isolation_enabled HdinsightHbaseCluster#compute_isolation_enabled}.

---

##### `host_sku`<sup>Optional</sup> <a name="host_sku" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolation.property.hostSku"></a>

```python
host_sku: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#host_sku HdinsightHbaseCluster#host_sku}.

---

### HdinsightHbaseClusterConfig <a name="HdinsightHbaseClusterConfig" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hbase_cluster

hdinsightHbaseCluster.HdinsightHbaseClusterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_version: str,
  component_version: HdinsightHbaseClusterComponentVersion,
  gateway: HdinsightHbaseClusterGateway,
  location: str,
  name: str,
  resource_group_name: str,
  roles: HdinsightHbaseClusterRoles,
  tier: str,
  compute_isolation: HdinsightHbaseClusterComputeIsolation = None,
  disk_encryption: typing.Union[IResolvable, typing.List[HdinsightHbaseClusterDiskEncryption]] = None,
  extension: HdinsightHbaseClusterExtension = None,
  id: str = None,
  metastores: HdinsightHbaseClusterMetastores = None,
  monitor: HdinsightHbaseClusterMonitor = None,
  network: HdinsightHbaseClusterNetwork = None,
  security_profile: HdinsightHbaseClusterSecurityProfile = None,
  storage_account: typing.Union[IResolvable, typing.List[HdinsightHbaseClusterStorageAccount]] = None,
  storage_account_gen2: HdinsightHbaseClusterStorageAccountGen2 = None,
  tags: typing.Mapping[str] = None,
  timeouts: HdinsightHbaseClusterTimeouts = None,
  tls_min_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.clusterVersion">cluster_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#cluster_version HdinsightHbaseCluster#cluster_version}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.componentVersion">component_version</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersion">HdinsightHbaseClusterComponentVersion</a></code> | component_version block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.gateway">gateway</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGateway">HdinsightHbaseClusterGateway</a></code> | gateway block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#location HdinsightHbaseCluster#location}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#name HdinsightHbaseCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#resource_group_name HdinsightHbaseCluster#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.roles">roles</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRoles">HdinsightHbaseClusterRoles</a></code> | roles block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.tier">tier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#tier HdinsightHbaseCluster#tier}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.computeIsolation">compute_isolation</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolation">HdinsightHbaseClusterComputeIsolation</a></code> | compute_isolation block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.diskEncryption">disk_encryption</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryption">HdinsightHbaseClusterDiskEncryption</a>]]</code> | disk_encryption block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.extension">extension</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtension">HdinsightHbaseClusterExtension</a></code> | extension block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#id HdinsightHbaseCluster#id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.metastores">metastores</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastores">HdinsightHbaseClusterMetastores</a></code> | metastores block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.monitor">monitor</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitor">HdinsightHbaseClusterMonitor</a></code> | monitor block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.network">network</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetwork">HdinsightHbaseClusterNetwork</a></code> | network block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.securityProfile">security_profile</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfile">HdinsightHbaseClusterSecurityProfile</a></code> | security_profile block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.storageAccount">storage_account</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccount">HdinsightHbaseClusterStorageAccount</a>]]</code> | storage_account block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.storageAccountGen2">storage_account_gen2</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2">HdinsightHbaseClusterStorageAccountGen2</a></code> | storage_account_gen2 block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#tags HdinsightHbaseCluster#tags}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeouts">HdinsightHbaseClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.tlsMinVersion">tls_min_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#tls_min_version HdinsightHbaseCluster#tls_min_version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_version`<sup>Required</sup> <a name="cluster_version" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.clusterVersion"></a>

```python
cluster_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#cluster_version HdinsightHbaseCluster#cluster_version}.

---

##### `component_version`<sup>Required</sup> <a name="component_version" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.componentVersion"></a>

```python
component_version: HdinsightHbaseClusterComponentVersion
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersion">HdinsightHbaseClusterComponentVersion</a>

component_version block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#component_version HdinsightHbaseCluster#component_version}

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.gateway"></a>

```python
gateway: HdinsightHbaseClusterGateway
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGateway">HdinsightHbaseClusterGateway</a>

gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#gateway HdinsightHbaseCluster#gateway}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#location HdinsightHbaseCluster#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#name HdinsightHbaseCluster#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#resource_group_name HdinsightHbaseCluster#resource_group_name}.

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.roles"></a>

```python
roles: HdinsightHbaseClusterRoles
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRoles">HdinsightHbaseClusterRoles</a>

roles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#roles HdinsightHbaseCluster#roles}

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.tier"></a>

```python
tier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#tier HdinsightHbaseCluster#tier}.

---

##### `compute_isolation`<sup>Optional</sup> <a name="compute_isolation" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.computeIsolation"></a>

```python
compute_isolation: HdinsightHbaseClusterComputeIsolation
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolation">HdinsightHbaseClusterComputeIsolation</a>

compute_isolation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#compute_isolation HdinsightHbaseCluster#compute_isolation}

---

##### `disk_encryption`<sup>Optional</sup> <a name="disk_encryption" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.diskEncryption"></a>

```python
disk_encryption: typing.Union[IResolvable, typing.List[HdinsightHbaseClusterDiskEncryption]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryption">HdinsightHbaseClusterDiskEncryption</a>]]

disk_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#disk_encryption HdinsightHbaseCluster#disk_encryption}

---

##### `extension`<sup>Optional</sup> <a name="extension" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.extension"></a>

```python
extension: HdinsightHbaseClusterExtension
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtension">HdinsightHbaseClusterExtension</a>

extension block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#extension HdinsightHbaseCluster#extension}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#id HdinsightHbaseCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metastores`<sup>Optional</sup> <a name="metastores" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.metastores"></a>

```python
metastores: HdinsightHbaseClusterMetastores
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastores">HdinsightHbaseClusterMetastores</a>

metastores block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#metastores HdinsightHbaseCluster#metastores}

---

##### `monitor`<sup>Optional</sup> <a name="monitor" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.monitor"></a>

```python
monitor: HdinsightHbaseClusterMonitor
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitor">HdinsightHbaseClusterMonitor</a>

monitor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#monitor HdinsightHbaseCluster#monitor}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.network"></a>

```python
network: HdinsightHbaseClusterNetwork
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetwork">HdinsightHbaseClusterNetwork</a>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#network HdinsightHbaseCluster#network}

---

##### `security_profile`<sup>Optional</sup> <a name="security_profile" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.securityProfile"></a>

```python
security_profile: HdinsightHbaseClusterSecurityProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfile">HdinsightHbaseClusterSecurityProfile</a>

security_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#security_profile HdinsightHbaseCluster#security_profile}

---

##### `storage_account`<sup>Optional</sup> <a name="storage_account" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.storageAccount"></a>

```python
storage_account: typing.Union[IResolvable, typing.List[HdinsightHbaseClusterStorageAccount]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccount">HdinsightHbaseClusterStorageAccount</a>]]

storage_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#storage_account HdinsightHbaseCluster#storage_account}

---

##### `storage_account_gen2`<sup>Optional</sup> <a name="storage_account_gen2" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.storageAccountGen2"></a>

```python
storage_account_gen2: HdinsightHbaseClusterStorageAccountGen2
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2">HdinsightHbaseClusterStorageAccountGen2</a>

storage_account_gen2 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#storage_account_gen2 HdinsightHbaseCluster#storage_account_gen2}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#tags HdinsightHbaseCluster#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.timeouts"></a>

```python
timeouts: HdinsightHbaseClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeouts">HdinsightHbaseClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#timeouts HdinsightHbaseCluster#timeouts}

---

##### `tls_min_version`<sup>Optional</sup> <a name="tls_min_version" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.tlsMinVersion"></a>

```python
tls_min_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#tls_min_version HdinsightHbaseCluster#tls_min_version}.

---

### HdinsightHbaseClusterDiskEncryption <a name="HdinsightHbaseClusterDiskEncryption" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryption.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hbase_cluster

hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryption(
  encryption_algorithm: str = None,
  encryption_at_host_enabled: typing.Union[bool, IResolvable] = None,
  key_vault_key_id: str = None,
  key_vault_managed_identity_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryption.property.encryptionAlgorithm">encryption_algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#encryption_algorithm HdinsightHbaseCluster#encryption_algorithm}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryption.property.encryptionAtHostEnabled">encryption_at_host_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#encryption_at_host_enabled HdinsightHbaseCluster#encryption_at_host_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryption.property.keyVaultKeyId">key_vault_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#key_vault_key_id HdinsightHbaseCluster#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryption.property.keyVaultManagedIdentityId">key_vault_managed_identity_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#key_vault_managed_identity_id HdinsightHbaseCluster#key_vault_managed_identity_id}. |

---

##### `encryption_algorithm`<sup>Optional</sup> <a name="encryption_algorithm" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryption.property.encryptionAlgorithm"></a>

```python
encryption_algorithm: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#encryption_algorithm HdinsightHbaseCluster#encryption_algorithm}.

---

##### `encryption_at_host_enabled`<sup>Optional</sup> <a name="encryption_at_host_enabled" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryption.property.encryptionAtHostEnabled"></a>

```python
encryption_at_host_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#encryption_at_host_enabled HdinsightHbaseCluster#encryption_at_host_enabled}.

---

##### `key_vault_key_id`<sup>Optional</sup> <a name="key_vault_key_id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryption.property.keyVaultKeyId"></a>

```python
key_vault_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#key_vault_key_id HdinsightHbaseCluster#key_vault_key_id}.

---

##### `key_vault_managed_identity_id`<sup>Optional</sup> <a name="key_vault_managed_identity_id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryption.property.keyVaultManagedIdentityId"></a>

```python
key_vault_managed_identity_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#key_vault_managed_identity_id HdinsightHbaseCluster#key_vault_managed_identity_id}.

---

### HdinsightHbaseClusterExtension <a name="HdinsightHbaseClusterExtension" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtension.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hbase_cluster

hdinsightHbaseCluster.HdinsightHbaseClusterExtension(
  log_analytics_workspace_id: str,
  primary_key: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtension.property.logAnalyticsWorkspaceId">log_analytics_workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#log_analytics_workspace_id HdinsightHbaseCluster#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtension.property.primaryKey">primary_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#primary_key HdinsightHbaseCluster#primary_key}. |

---

##### `log_analytics_workspace_id`<sup>Required</sup> <a name="log_analytics_workspace_id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtension.property.logAnalyticsWorkspaceId"></a>

```python
log_analytics_workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#log_analytics_workspace_id HdinsightHbaseCluster#log_analytics_workspace_id}.

---

##### `primary_key`<sup>Required</sup> <a name="primary_key" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtension.property.primaryKey"></a>

```python
primary_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#primary_key HdinsightHbaseCluster#primary_key}.

---

### HdinsightHbaseClusterGateway <a name="HdinsightHbaseClusterGateway" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGateway"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGateway.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hbase_cluster

hdinsightHbaseCluster.HdinsightHbaseClusterGateway(
  password: str,
  username: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGateway.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#password HdinsightHbaseCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGateway.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#username HdinsightHbaseCluster#username}. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGateway.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#password HdinsightHbaseCluster#password}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGateway.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#username HdinsightHbaseCluster#username}.

---

### HdinsightHbaseClusterMetastores <a name="HdinsightHbaseClusterMetastores" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastores"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastores.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hbase_cluster

hdinsightHbaseCluster.HdinsightHbaseClusterMetastores(
  ambari: HdinsightHbaseClusterMetastoresAmbari = None,
  hive: HdinsightHbaseClusterMetastoresHive = None,
  oozie: HdinsightHbaseClusterMetastoresOozie = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastores.property.ambari">ambari</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbari">HdinsightHbaseClusterMetastoresAmbari</a></code> | ambari block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastores.property.hive">hive</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHive">HdinsightHbaseClusterMetastoresHive</a></code> | hive block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastores.property.oozie">oozie</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozie">HdinsightHbaseClusterMetastoresOozie</a></code> | oozie block. |

---

##### `ambari`<sup>Optional</sup> <a name="ambari" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastores.property.ambari"></a>

```python
ambari: HdinsightHbaseClusterMetastoresAmbari
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbari">HdinsightHbaseClusterMetastoresAmbari</a>

ambari block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#ambari HdinsightHbaseCluster#ambari}

---

##### `hive`<sup>Optional</sup> <a name="hive" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastores.property.hive"></a>

```python
hive: HdinsightHbaseClusterMetastoresHive
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHive">HdinsightHbaseClusterMetastoresHive</a>

hive block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#hive HdinsightHbaseCluster#hive}

---

##### `oozie`<sup>Optional</sup> <a name="oozie" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastores.property.oozie"></a>

```python
oozie: HdinsightHbaseClusterMetastoresOozie
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozie">HdinsightHbaseClusterMetastoresOozie</a>

oozie block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#oozie HdinsightHbaseCluster#oozie}

---

### HdinsightHbaseClusterMetastoresAmbari <a name="HdinsightHbaseClusterMetastoresAmbari" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbari"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbari.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hbase_cluster

hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbari(
  database_name: str,
  password: str,
  server: str,
  username: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbari.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#database_name HdinsightHbaseCluster#database_name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbari.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#password HdinsightHbaseCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbari.property.server">server</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#server HdinsightHbaseCluster#server}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbari.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#username HdinsightHbaseCluster#username}. |

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbari.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#database_name HdinsightHbaseCluster#database_name}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbari.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#password HdinsightHbaseCluster#password}.

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbari.property.server"></a>

```python
server: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#server HdinsightHbaseCluster#server}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbari.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#username HdinsightHbaseCluster#username}.

---

### HdinsightHbaseClusterMetastoresHive <a name="HdinsightHbaseClusterMetastoresHive" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHive"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHive.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hbase_cluster

hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHive(
  database_name: str,
  password: str,
  server: str,
  username: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHive.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#database_name HdinsightHbaseCluster#database_name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHive.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#password HdinsightHbaseCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHive.property.server">server</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#server HdinsightHbaseCluster#server}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHive.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#username HdinsightHbaseCluster#username}. |

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHive.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#database_name HdinsightHbaseCluster#database_name}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHive.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#password HdinsightHbaseCluster#password}.

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHive.property.server"></a>

```python
server: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#server HdinsightHbaseCluster#server}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHive.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#username HdinsightHbaseCluster#username}.

---

### HdinsightHbaseClusterMetastoresOozie <a name="HdinsightHbaseClusterMetastoresOozie" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozie"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozie.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hbase_cluster

hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozie(
  database_name: str,
  password: str,
  server: str,
  username: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozie.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#database_name HdinsightHbaseCluster#database_name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozie.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#password HdinsightHbaseCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozie.property.server">server</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#server HdinsightHbaseCluster#server}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozie.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#username HdinsightHbaseCluster#username}. |

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozie.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#database_name HdinsightHbaseCluster#database_name}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozie.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#password HdinsightHbaseCluster#password}.

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozie.property.server"></a>

```python
server: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#server HdinsightHbaseCluster#server}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozie.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#username HdinsightHbaseCluster#username}.

---

### HdinsightHbaseClusterMonitor <a name="HdinsightHbaseClusterMonitor" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitor.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hbase_cluster

hdinsightHbaseCluster.HdinsightHbaseClusterMonitor(
  log_analytics_workspace_id: str,
  primary_key: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitor.property.logAnalyticsWorkspaceId">log_analytics_workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#log_analytics_workspace_id HdinsightHbaseCluster#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitor.property.primaryKey">primary_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#primary_key HdinsightHbaseCluster#primary_key}. |

---

##### `log_analytics_workspace_id`<sup>Required</sup> <a name="log_analytics_workspace_id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitor.property.logAnalyticsWorkspaceId"></a>

```python
log_analytics_workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#log_analytics_workspace_id HdinsightHbaseCluster#log_analytics_workspace_id}.

---

##### `primary_key`<sup>Required</sup> <a name="primary_key" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitor.property.primaryKey"></a>

```python
primary_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#primary_key HdinsightHbaseCluster#primary_key}.

---

### HdinsightHbaseClusterNetwork <a name="HdinsightHbaseClusterNetwork" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetwork.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hbase_cluster

hdinsightHbaseCluster.HdinsightHbaseClusterNetwork(
  connection_direction: str = None,
  private_link_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetwork.property.connectionDirection">connection_direction</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#connection_direction HdinsightHbaseCluster#connection_direction}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetwork.property.privateLinkEnabled">private_link_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#private_link_enabled HdinsightHbaseCluster#private_link_enabled}. |

---

##### `connection_direction`<sup>Optional</sup> <a name="connection_direction" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetwork.property.connectionDirection"></a>

```python
connection_direction: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#connection_direction HdinsightHbaseCluster#connection_direction}.

---

##### `private_link_enabled`<sup>Optional</sup> <a name="private_link_enabled" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetwork.property.privateLinkEnabled"></a>

```python
private_link_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#private_link_enabled HdinsightHbaseCluster#private_link_enabled}.

---

### HdinsightHbaseClusterRoles <a name="HdinsightHbaseClusterRoles" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRoles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRoles.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hbase_cluster

hdinsightHbaseCluster.HdinsightHbaseClusterRoles(
  head_node: HdinsightHbaseClusterRolesHeadNode,
  worker_node: HdinsightHbaseClusterRolesWorkerNode,
  zookeeper_node: HdinsightHbaseClusterRolesZookeeperNode
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRoles.property.headNode">head_node</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNode">HdinsightHbaseClusterRolesHeadNode</a></code> | head_node block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRoles.property.workerNode">worker_node</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode">HdinsightHbaseClusterRolesWorkerNode</a></code> | worker_node block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRoles.property.zookeeperNode">zookeeper_node</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNode">HdinsightHbaseClusterRolesZookeeperNode</a></code> | zookeeper_node block. |

---

##### `head_node`<sup>Required</sup> <a name="head_node" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRoles.property.headNode"></a>

```python
head_node: HdinsightHbaseClusterRolesHeadNode
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNode">HdinsightHbaseClusterRolesHeadNode</a>

head_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#head_node HdinsightHbaseCluster#head_node}

---

##### `worker_node`<sup>Required</sup> <a name="worker_node" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRoles.property.workerNode"></a>

```python
worker_node: HdinsightHbaseClusterRolesWorkerNode
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode">HdinsightHbaseClusterRolesWorkerNode</a>

worker_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#worker_node HdinsightHbaseCluster#worker_node}

---

##### `zookeeper_node`<sup>Required</sup> <a name="zookeeper_node" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRoles.property.zookeeperNode"></a>

```python
zookeeper_node: HdinsightHbaseClusterRolesZookeeperNode
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNode">HdinsightHbaseClusterRolesZookeeperNode</a>

zookeeper_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#zookeeper_node HdinsightHbaseCluster#zookeeper_node}

---

### HdinsightHbaseClusterRolesHeadNode <a name="HdinsightHbaseClusterRolesHeadNode" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNode.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hbase_cluster

hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNode(
  username: str,
  vm_size: str,
  password: str = None,
  script_actions: typing.Union[IResolvable, typing.List[HdinsightHbaseClusterRolesHeadNodeScriptActions]] = None,
  ssh_keys: typing.List[str] = None,
  subnet_id: str = None,
  virtual_network_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNode.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#username HdinsightHbaseCluster#username}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNode.property.vmSize">vm_size</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#vm_size HdinsightHbaseCluster#vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNode.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#password HdinsightHbaseCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNode.property.scriptActions">script_actions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActions">HdinsightHbaseClusterRolesHeadNodeScriptActions</a>]]</code> | script_actions block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNode.property.sshKeys">ssh_keys</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#ssh_keys HdinsightHbaseCluster#ssh_keys}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNode.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#subnet_id HdinsightHbaseCluster#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNode.property.virtualNetworkId">virtual_network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#virtual_network_id HdinsightHbaseCluster#virtual_network_id}. |

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNode.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#username HdinsightHbaseCluster#username}.

---

##### `vm_size`<sup>Required</sup> <a name="vm_size" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNode.property.vmSize"></a>

```python
vm_size: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#vm_size HdinsightHbaseCluster#vm_size}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNode.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#password HdinsightHbaseCluster#password}.

---

##### `script_actions`<sup>Optional</sup> <a name="script_actions" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNode.property.scriptActions"></a>

```python
script_actions: typing.Union[IResolvable, typing.List[HdinsightHbaseClusterRolesHeadNodeScriptActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActions">HdinsightHbaseClusterRolesHeadNodeScriptActions</a>]]

script_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#script_actions HdinsightHbaseCluster#script_actions}

---

##### `ssh_keys`<sup>Optional</sup> <a name="ssh_keys" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNode.property.sshKeys"></a>

```python
ssh_keys: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#ssh_keys HdinsightHbaseCluster#ssh_keys}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNode.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#subnet_id HdinsightHbaseCluster#subnet_id}.

---

##### `virtual_network_id`<sup>Optional</sup> <a name="virtual_network_id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNode.property.virtualNetworkId"></a>

```python
virtual_network_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#virtual_network_id HdinsightHbaseCluster#virtual_network_id}.

---

### HdinsightHbaseClusterRolesHeadNodeScriptActions <a name="HdinsightHbaseClusterRolesHeadNodeScriptActions" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActions.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hbase_cluster

hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActions(
  name: str,
  uri: str,
  parameters: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActions.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#name HdinsightHbaseCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActions.property.uri">uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#uri HdinsightHbaseCluster#uri}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActions.property.parameters">parameters</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#parameters HdinsightHbaseCluster#parameters}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActions.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#name HdinsightHbaseCluster#name}.

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActions.property.uri"></a>

```python
uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#uri HdinsightHbaseCluster#uri}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActions.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#parameters HdinsightHbaseCluster#parameters}.

---

### HdinsightHbaseClusterRolesWorkerNode <a name="HdinsightHbaseClusterRolesWorkerNode" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hbase_cluster

hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode(
  target_instance_count: typing.Union[int, float],
  username: str,
  vm_size: str,
  autoscale: HdinsightHbaseClusterRolesWorkerNodeAutoscale = None,
  password: str = None,
  script_actions: typing.Union[IResolvable, typing.List[HdinsightHbaseClusterRolesWorkerNodeScriptActions]] = None,
  ssh_keys: typing.List[str] = None,
  subnet_id: str = None,
  virtual_network_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode.property.targetInstanceCount">target_instance_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#target_instance_count HdinsightHbaseCluster#target_instance_count}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#username HdinsightHbaseCluster#username}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode.property.vmSize">vm_size</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#vm_size HdinsightHbaseCluster#vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode.property.autoscale">autoscale</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscale">HdinsightHbaseClusterRolesWorkerNodeAutoscale</a></code> | autoscale block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#password HdinsightHbaseCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode.property.scriptActions">script_actions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActions">HdinsightHbaseClusterRolesWorkerNodeScriptActions</a>]]</code> | script_actions block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode.property.sshKeys">ssh_keys</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#ssh_keys HdinsightHbaseCluster#ssh_keys}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#subnet_id HdinsightHbaseCluster#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode.property.virtualNetworkId">virtual_network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#virtual_network_id HdinsightHbaseCluster#virtual_network_id}. |

---

##### `target_instance_count`<sup>Required</sup> <a name="target_instance_count" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode.property.targetInstanceCount"></a>

```python
target_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#target_instance_count HdinsightHbaseCluster#target_instance_count}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#username HdinsightHbaseCluster#username}.

---

##### `vm_size`<sup>Required</sup> <a name="vm_size" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode.property.vmSize"></a>

```python
vm_size: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#vm_size HdinsightHbaseCluster#vm_size}.

---

##### `autoscale`<sup>Optional</sup> <a name="autoscale" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode.property.autoscale"></a>

```python
autoscale: HdinsightHbaseClusterRolesWorkerNodeAutoscale
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscale">HdinsightHbaseClusterRolesWorkerNodeAutoscale</a>

autoscale block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#autoscale HdinsightHbaseCluster#autoscale}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#password HdinsightHbaseCluster#password}.

---

##### `script_actions`<sup>Optional</sup> <a name="script_actions" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode.property.scriptActions"></a>

```python
script_actions: typing.Union[IResolvable, typing.List[HdinsightHbaseClusterRolesWorkerNodeScriptActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActions">HdinsightHbaseClusterRolesWorkerNodeScriptActions</a>]]

script_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#script_actions HdinsightHbaseCluster#script_actions}

---

##### `ssh_keys`<sup>Optional</sup> <a name="ssh_keys" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode.property.sshKeys"></a>

```python
ssh_keys: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#ssh_keys HdinsightHbaseCluster#ssh_keys}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#subnet_id HdinsightHbaseCluster#subnet_id}.

---

##### `virtual_network_id`<sup>Optional</sup> <a name="virtual_network_id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode.property.virtualNetworkId"></a>

```python
virtual_network_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#virtual_network_id HdinsightHbaseCluster#virtual_network_id}.

---

### HdinsightHbaseClusterRolesWorkerNodeAutoscale <a name="HdinsightHbaseClusterRolesWorkerNodeAutoscale" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscale"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscale.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hbase_cluster

hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscale(
  recurrence: HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscale.property.recurrence">recurrence</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence">HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence</a></code> | recurrence block. |

---

##### `recurrence`<sup>Optional</sup> <a name="recurrence" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscale.property.recurrence"></a>

```python
recurrence: HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence">HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence</a>

recurrence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#recurrence HdinsightHbaseCluster#recurrence}

---

### HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence <a name="HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hbase_cluster

hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence(
  schedule: typing.Union[IResolvable, typing.List[HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule]],
  timezone: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence.property.schedule">schedule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule">HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule</a>]]</code> | schedule block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence.property.timezone">timezone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#timezone HdinsightHbaseCluster#timezone}. |

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence.property.schedule"></a>

```python
schedule: typing.Union[IResolvable, typing.List[HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule">HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule</a>]]

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#schedule HdinsightHbaseCluster#schedule}

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#timezone HdinsightHbaseCluster#timezone}.

---

### HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule <a name="HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hbase_cluster

hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule(
  days: typing.List[str],
  target_instance_count: typing.Union[int, float],
  time: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule.property.days">days</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#days HdinsightHbaseCluster#days}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule.property.targetInstanceCount">target_instance_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#target_instance_count HdinsightHbaseCluster#target_instance_count}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule.property.time">time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#time HdinsightHbaseCluster#time}. |

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule.property.days"></a>

```python
days: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#days HdinsightHbaseCluster#days}.

---

##### `target_instance_count`<sup>Required</sup> <a name="target_instance_count" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule.property.targetInstanceCount"></a>

```python
target_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#target_instance_count HdinsightHbaseCluster#target_instance_count}.

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule.property.time"></a>

```python
time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#time HdinsightHbaseCluster#time}.

---

### HdinsightHbaseClusterRolesWorkerNodeScriptActions <a name="HdinsightHbaseClusterRolesWorkerNodeScriptActions" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActions.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hbase_cluster

hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActions(
  name: str,
  uri: str,
  parameters: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActions.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#name HdinsightHbaseCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActions.property.uri">uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#uri HdinsightHbaseCluster#uri}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActions.property.parameters">parameters</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#parameters HdinsightHbaseCluster#parameters}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActions.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#name HdinsightHbaseCluster#name}.

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActions.property.uri"></a>

```python
uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#uri HdinsightHbaseCluster#uri}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActions.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#parameters HdinsightHbaseCluster#parameters}.

---

### HdinsightHbaseClusterRolesZookeeperNode <a name="HdinsightHbaseClusterRolesZookeeperNode" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNode.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hbase_cluster

hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNode(
  username: str,
  vm_size: str,
  password: str = None,
  script_actions: typing.Union[IResolvable, typing.List[HdinsightHbaseClusterRolesZookeeperNodeScriptActions]] = None,
  ssh_keys: typing.List[str] = None,
  subnet_id: str = None,
  virtual_network_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNode.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#username HdinsightHbaseCluster#username}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNode.property.vmSize">vm_size</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#vm_size HdinsightHbaseCluster#vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNode.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#password HdinsightHbaseCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNode.property.scriptActions">script_actions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActions">HdinsightHbaseClusterRolesZookeeperNodeScriptActions</a>]]</code> | script_actions block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNode.property.sshKeys">ssh_keys</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#ssh_keys HdinsightHbaseCluster#ssh_keys}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNode.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#subnet_id HdinsightHbaseCluster#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNode.property.virtualNetworkId">virtual_network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#virtual_network_id HdinsightHbaseCluster#virtual_network_id}. |

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNode.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#username HdinsightHbaseCluster#username}.

---

##### `vm_size`<sup>Required</sup> <a name="vm_size" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNode.property.vmSize"></a>

```python
vm_size: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#vm_size HdinsightHbaseCluster#vm_size}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNode.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#password HdinsightHbaseCluster#password}.

---

##### `script_actions`<sup>Optional</sup> <a name="script_actions" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNode.property.scriptActions"></a>

```python
script_actions: typing.Union[IResolvable, typing.List[HdinsightHbaseClusterRolesZookeeperNodeScriptActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActions">HdinsightHbaseClusterRolesZookeeperNodeScriptActions</a>]]

script_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#script_actions HdinsightHbaseCluster#script_actions}

---

##### `ssh_keys`<sup>Optional</sup> <a name="ssh_keys" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNode.property.sshKeys"></a>

```python
ssh_keys: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#ssh_keys HdinsightHbaseCluster#ssh_keys}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNode.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#subnet_id HdinsightHbaseCluster#subnet_id}.

---

##### `virtual_network_id`<sup>Optional</sup> <a name="virtual_network_id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNode.property.virtualNetworkId"></a>

```python
virtual_network_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#virtual_network_id HdinsightHbaseCluster#virtual_network_id}.

---

### HdinsightHbaseClusterRolesZookeeperNodeScriptActions <a name="HdinsightHbaseClusterRolesZookeeperNodeScriptActions" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActions.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hbase_cluster

hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActions(
  name: str,
  uri: str,
  parameters: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActions.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#name HdinsightHbaseCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActions.property.uri">uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#uri HdinsightHbaseCluster#uri}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActions.property.parameters">parameters</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#parameters HdinsightHbaseCluster#parameters}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActions.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#name HdinsightHbaseCluster#name}.

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActions.property.uri"></a>

```python
uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#uri HdinsightHbaseCluster#uri}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActions.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#parameters HdinsightHbaseCluster#parameters}.

---

### HdinsightHbaseClusterSecurityProfile <a name="HdinsightHbaseClusterSecurityProfile" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfile.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hbase_cluster

hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfile(
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
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfile.property.aaddsResourceId">aadds_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#aadds_resource_id HdinsightHbaseCluster#aadds_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfile.property.domainName">domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#domain_name HdinsightHbaseCluster#domain_name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfile.property.domainUsername">domain_username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#domain_username HdinsightHbaseCluster#domain_username}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfile.property.domainUserPassword">domain_user_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#domain_user_password HdinsightHbaseCluster#domain_user_password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfile.property.ldapsUrls">ldaps_urls</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#ldaps_urls HdinsightHbaseCluster#ldaps_urls}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfile.property.msiResourceId">msi_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#msi_resource_id HdinsightHbaseCluster#msi_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfile.property.clusterUsersGroupDns">cluster_users_group_dns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#cluster_users_group_dns HdinsightHbaseCluster#cluster_users_group_dns}. |

---

##### `aadds_resource_id`<sup>Required</sup> <a name="aadds_resource_id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfile.property.aaddsResourceId"></a>

```python
aadds_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#aadds_resource_id HdinsightHbaseCluster#aadds_resource_id}.

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfile.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#domain_name HdinsightHbaseCluster#domain_name}.

---

##### `domain_username`<sup>Required</sup> <a name="domain_username" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfile.property.domainUsername"></a>

```python
domain_username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#domain_username HdinsightHbaseCluster#domain_username}.

---

##### `domain_user_password`<sup>Required</sup> <a name="domain_user_password" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfile.property.domainUserPassword"></a>

```python
domain_user_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#domain_user_password HdinsightHbaseCluster#domain_user_password}.

---

##### `ldaps_urls`<sup>Required</sup> <a name="ldaps_urls" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfile.property.ldapsUrls"></a>

```python
ldaps_urls: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#ldaps_urls HdinsightHbaseCluster#ldaps_urls}.

---

##### `msi_resource_id`<sup>Required</sup> <a name="msi_resource_id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfile.property.msiResourceId"></a>

```python
msi_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#msi_resource_id HdinsightHbaseCluster#msi_resource_id}.

---

##### `cluster_users_group_dns`<sup>Optional</sup> <a name="cluster_users_group_dns" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfile.property.clusterUsersGroupDns"></a>

```python
cluster_users_group_dns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#cluster_users_group_dns HdinsightHbaseCluster#cluster_users_group_dns}.

---

### HdinsightHbaseClusterStorageAccount <a name="HdinsightHbaseClusterStorageAccount" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccount.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hbase_cluster

hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccount(
  is_default: typing.Union[bool, IResolvable],
  storage_account_key: str,
  storage_container_id: str,
  storage_resource_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccount.property.isDefault">is_default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#is_default HdinsightHbaseCluster#is_default}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccount.property.storageAccountKey">storage_account_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#storage_account_key HdinsightHbaseCluster#storage_account_key}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccount.property.storageContainerId">storage_container_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#storage_container_id HdinsightHbaseCluster#storage_container_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccount.property.storageResourceId">storage_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#storage_resource_id HdinsightHbaseCluster#storage_resource_id}. |

---

##### `is_default`<sup>Required</sup> <a name="is_default" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccount.property.isDefault"></a>

```python
is_default: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#is_default HdinsightHbaseCluster#is_default}.

---

##### `storage_account_key`<sup>Required</sup> <a name="storage_account_key" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccount.property.storageAccountKey"></a>

```python
storage_account_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#storage_account_key HdinsightHbaseCluster#storage_account_key}.

---

##### `storage_container_id`<sup>Required</sup> <a name="storage_container_id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccount.property.storageContainerId"></a>

```python
storage_container_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#storage_container_id HdinsightHbaseCluster#storage_container_id}.

---

##### `storage_resource_id`<sup>Optional</sup> <a name="storage_resource_id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccount.property.storageResourceId"></a>

```python
storage_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#storage_resource_id HdinsightHbaseCluster#storage_resource_id}.

---

### HdinsightHbaseClusterStorageAccountGen2 <a name="HdinsightHbaseClusterStorageAccountGen2" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hbase_cluster

hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2(
  filesystem_id: str,
  is_default: typing.Union[bool, IResolvable],
  managed_identity_resource_id: str,
  storage_resource_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2.property.filesystemId">filesystem_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#filesystem_id HdinsightHbaseCluster#filesystem_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2.property.isDefault">is_default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#is_default HdinsightHbaseCluster#is_default}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2.property.managedIdentityResourceId">managed_identity_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#managed_identity_resource_id HdinsightHbaseCluster#managed_identity_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2.property.storageResourceId">storage_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#storage_resource_id HdinsightHbaseCluster#storage_resource_id}. |

---

##### `filesystem_id`<sup>Required</sup> <a name="filesystem_id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2.property.filesystemId"></a>

```python
filesystem_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#filesystem_id HdinsightHbaseCluster#filesystem_id}.

---

##### `is_default`<sup>Required</sup> <a name="is_default" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2.property.isDefault"></a>

```python
is_default: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#is_default HdinsightHbaseCluster#is_default}.

---

##### `managed_identity_resource_id`<sup>Required</sup> <a name="managed_identity_resource_id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2.property.managedIdentityResourceId"></a>

```python
managed_identity_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#managed_identity_resource_id HdinsightHbaseCluster#managed_identity_resource_id}.

---

##### `storage_resource_id`<sup>Required</sup> <a name="storage_resource_id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2.property.storageResourceId"></a>

```python
storage_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#storage_resource_id HdinsightHbaseCluster#storage_resource_id}.

---

### HdinsightHbaseClusterTimeouts <a name="HdinsightHbaseClusterTimeouts" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hbase_cluster

hdinsightHbaseCluster.HdinsightHbaseClusterTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#create HdinsightHbaseCluster#create}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#delete HdinsightHbaseCluster#delete}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#read HdinsightHbaseCluster#read}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#update HdinsightHbaseCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#create HdinsightHbaseCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#delete HdinsightHbaseCluster#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#read HdinsightHbaseCluster#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#update HdinsightHbaseCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### HdinsightHbaseClusterComponentVersionOutputReference <a name="HdinsightHbaseClusterComponentVersionOutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hbase_cluster

hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.property.hbaseInput">hbase_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.property.hbase">hbase</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersion">HdinsightHbaseClusterComponentVersion</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hbase_input`<sup>Optional</sup> <a name="hbase_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.property.hbaseInput"></a>

```python
hbase_input: str
```

- *Type:* str

---

##### `hbase`<sup>Required</sup> <a name="hbase" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.property.hbase"></a>

```python
hbase: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.property.internalValue"></a>

```python
internal_value: HdinsightHbaseClusterComponentVersion
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersion">HdinsightHbaseClusterComponentVersion</a>

---


### HdinsightHbaseClusterComputeIsolationOutputReference <a name="HdinsightHbaseClusterComputeIsolationOutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hbase_cluster

hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.resetComputeIsolationEnabled">reset_compute_isolation_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.resetHostSku">reset_host_sku</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_compute_isolation_enabled` <a name="reset_compute_isolation_enabled" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.resetComputeIsolationEnabled"></a>

```python
def reset_compute_isolation_enabled() -> None
```

##### `reset_host_sku` <a name="reset_host_sku" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.resetHostSku"></a>

```python
def reset_host_sku() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.property.computeIsolationEnabledInput">compute_isolation_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.property.hostSkuInput">host_sku_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.property.computeIsolationEnabled">compute_isolation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.property.hostSku">host_sku</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolation">HdinsightHbaseClusterComputeIsolation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compute_isolation_enabled_input`<sup>Optional</sup> <a name="compute_isolation_enabled_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.property.computeIsolationEnabledInput"></a>

```python
compute_isolation_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `host_sku_input`<sup>Optional</sup> <a name="host_sku_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.property.hostSkuInput"></a>

```python
host_sku_input: str
```

- *Type:* str

---

##### `compute_isolation_enabled`<sup>Required</sup> <a name="compute_isolation_enabled" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.property.computeIsolationEnabled"></a>

```python
compute_isolation_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `host_sku`<sup>Required</sup> <a name="host_sku" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.property.hostSku"></a>

```python
host_sku: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.property.internalValue"></a>

```python
internal_value: HdinsightHbaseClusterComputeIsolation
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolation">HdinsightHbaseClusterComputeIsolation</a>

---


### HdinsightHbaseClusterDiskEncryptionList <a name="HdinsightHbaseClusterDiskEncryptionList" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hbase_cluster

hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> HdinsightHbaseClusterDiskEncryptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryption">HdinsightHbaseClusterDiskEncryption</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[HdinsightHbaseClusterDiskEncryption]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryption">HdinsightHbaseClusterDiskEncryption</a>]]

---


### HdinsightHbaseClusterDiskEncryptionOutputReference <a name="HdinsightHbaseClusterDiskEncryptionOutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hbase_cluster

hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.resetEncryptionAlgorithm">reset_encryption_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.resetEncryptionAtHostEnabled">reset_encryption_at_host_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.resetKeyVaultKeyId">reset_key_vault_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.resetKeyVaultManagedIdentityId">reset_key_vault_managed_identity_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_encryption_algorithm` <a name="reset_encryption_algorithm" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.resetEncryptionAlgorithm"></a>

```python
def reset_encryption_algorithm() -> None
```

##### `reset_encryption_at_host_enabled` <a name="reset_encryption_at_host_enabled" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.resetEncryptionAtHostEnabled"></a>

```python
def reset_encryption_at_host_enabled() -> None
```

##### `reset_key_vault_key_id` <a name="reset_key_vault_key_id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.resetKeyVaultKeyId"></a>

```python
def reset_key_vault_key_id() -> None
```

##### `reset_key_vault_managed_identity_id` <a name="reset_key_vault_managed_identity_id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.resetKeyVaultManagedIdentityId"></a>

```python
def reset_key_vault_managed_identity_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.property.encryptionAlgorithmInput">encryption_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.property.encryptionAtHostEnabledInput">encryption_at_host_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.property.keyVaultKeyIdInput">key_vault_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.property.keyVaultManagedIdentityIdInput">key_vault_managed_identity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.property.encryptionAlgorithm">encryption_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.property.encryptionAtHostEnabled">encryption_at_host_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.property.keyVaultKeyId">key_vault_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.property.keyVaultManagedIdentityId">key_vault_managed_identity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryption">HdinsightHbaseClusterDiskEncryption</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_algorithm_input`<sup>Optional</sup> <a name="encryption_algorithm_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.property.encryptionAlgorithmInput"></a>

```python
encryption_algorithm_input: str
```

- *Type:* str

---

##### `encryption_at_host_enabled_input`<sup>Optional</sup> <a name="encryption_at_host_enabled_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.property.encryptionAtHostEnabledInput"></a>

```python
encryption_at_host_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key_vault_key_id_input`<sup>Optional</sup> <a name="key_vault_key_id_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.property.keyVaultKeyIdInput"></a>

```python
key_vault_key_id_input: str
```

- *Type:* str

---

##### `key_vault_managed_identity_id_input`<sup>Optional</sup> <a name="key_vault_managed_identity_id_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.property.keyVaultManagedIdentityIdInput"></a>

```python
key_vault_managed_identity_id_input: str
```

- *Type:* str

---

##### `encryption_algorithm`<sup>Required</sup> <a name="encryption_algorithm" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.property.encryptionAlgorithm"></a>

```python
encryption_algorithm: str
```

- *Type:* str

---

##### `encryption_at_host_enabled`<sup>Required</sup> <a name="encryption_at_host_enabled" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.property.encryptionAtHostEnabled"></a>

```python
encryption_at_host_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key_vault_key_id`<sup>Required</sup> <a name="key_vault_key_id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.property.keyVaultKeyId"></a>

```python
key_vault_key_id: str
```

- *Type:* str

---

##### `key_vault_managed_identity_id`<sup>Required</sup> <a name="key_vault_managed_identity_id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.property.keyVaultManagedIdentityId"></a>

```python
key_vault_managed_identity_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, HdinsightHbaseClusterDiskEncryption]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryption">HdinsightHbaseClusterDiskEncryption</a>]

---


### HdinsightHbaseClusterExtensionOutputReference <a name="HdinsightHbaseClusterExtensionOutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hbase_cluster

hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.property.logAnalyticsWorkspaceIdInput">log_analytics_workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.property.primaryKeyInput">primary_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.property.logAnalyticsWorkspaceId">log_analytics_workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.property.primaryKey">primary_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtension">HdinsightHbaseClusterExtension</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_analytics_workspace_id_input`<sup>Optional</sup> <a name="log_analytics_workspace_id_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.property.logAnalyticsWorkspaceIdInput"></a>

```python
log_analytics_workspace_id_input: str
```

- *Type:* str

---

##### `primary_key_input`<sup>Optional</sup> <a name="primary_key_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.property.primaryKeyInput"></a>

```python
primary_key_input: str
```

- *Type:* str

---

##### `log_analytics_workspace_id`<sup>Required</sup> <a name="log_analytics_workspace_id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.property.logAnalyticsWorkspaceId"></a>

```python
log_analytics_workspace_id: str
```

- *Type:* str

---

##### `primary_key`<sup>Required</sup> <a name="primary_key" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.property.primaryKey"></a>

```python
primary_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.property.internalValue"></a>

```python
internal_value: HdinsightHbaseClusterExtension
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtension">HdinsightHbaseClusterExtension</a>

---


### HdinsightHbaseClusterGatewayOutputReference <a name="HdinsightHbaseClusterGatewayOutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hbase_cluster

hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGateway">HdinsightHbaseClusterGateway</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.property.internalValue"></a>

```python
internal_value: HdinsightHbaseClusterGateway
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGateway">HdinsightHbaseClusterGateway</a>

---


### HdinsightHbaseClusterMetastoresAmbariOutputReference <a name="HdinsightHbaseClusterMetastoresAmbariOutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hbase_cluster

hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.property.serverInput">server_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.property.server">server</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbari">HdinsightHbaseClusterMetastoresAmbari</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `server_input`<sup>Optional</sup> <a name="server_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.property.serverInput"></a>

```python
server_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.property.server"></a>

```python
server: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.property.internalValue"></a>

```python
internal_value: HdinsightHbaseClusterMetastoresAmbari
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbari">HdinsightHbaseClusterMetastoresAmbari</a>

---


### HdinsightHbaseClusterMetastoresHiveOutputReference <a name="HdinsightHbaseClusterMetastoresHiveOutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hbase_cluster

hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.property.serverInput">server_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.property.server">server</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHive">HdinsightHbaseClusterMetastoresHive</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `server_input`<sup>Optional</sup> <a name="server_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.property.serverInput"></a>

```python
server_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.property.server"></a>

```python
server: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.property.internalValue"></a>

```python
internal_value: HdinsightHbaseClusterMetastoresHive
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHive">HdinsightHbaseClusterMetastoresHive</a>

---


### HdinsightHbaseClusterMetastoresOozieOutputReference <a name="HdinsightHbaseClusterMetastoresOozieOutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hbase_cluster

hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.property.serverInput">server_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.property.server">server</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozie">HdinsightHbaseClusterMetastoresOozie</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `server_input`<sup>Optional</sup> <a name="server_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.property.serverInput"></a>

```python
server_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.property.server"></a>

```python
server: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.property.internalValue"></a>

```python
internal_value: HdinsightHbaseClusterMetastoresOozie
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozie">HdinsightHbaseClusterMetastoresOozie</a>

---


### HdinsightHbaseClusterMetastoresOutputReference <a name="HdinsightHbaseClusterMetastoresOutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hbase_cluster

hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.putAmbari">put_ambari</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.putHive">put_hive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.putOozie">put_oozie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.resetAmbari">reset_ambari</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.resetHive">reset_hive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.resetOozie">reset_oozie</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ambari` <a name="put_ambari" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.putAmbari"></a>

```python
def put_ambari(
  database_name: str,
  password: str,
  server: str,
  username: str
) -> None
```

###### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.putAmbari.parameter.databaseName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#database_name HdinsightHbaseCluster#database_name}.

---

###### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.putAmbari.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#password HdinsightHbaseCluster#password}.

---

###### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.putAmbari.parameter.server"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#server HdinsightHbaseCluster#server}.

---

###### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.putAmbari.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#username HdinsightHbaseCluster#username}.

---

##### `put_hive` <a name="put_hive" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.putHive"></a>

```python
def put_hive(
  database_name: str,
  password: str,
  server: str,
  username: str
) -> None
```

###### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.putHive.parameter.databaseName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#database_name HdinsightHbaseCluster#database_name}.

---

###### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.putHive.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#password HdinsightHbaseCluster#password}.

---

###### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.putHive.parameter.server"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#server HdinsightHbaseCluster#server}.

---

###### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.putHive.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#username HdinsightHbaseCluster#username}.

---

##### `put_oozie` <a name="put_oozie" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.putOozie"></a>

```python
def put_oozie(
  database_name: str,
  password: str,
  server: str,
  username: str
) -> None
```

###### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.putOozie.parameter.databaseName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#database_name HdinsightHbaseCluster#database_name}.

---

###### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.putOozie.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#password HdinsightHbaseCluster#password}.

---

###### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.putOozie.parameter.server"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#server HdinsightHbaseCluster#server}.

---

###### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.putOozie.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#username HdinsightHbaseCluster#username}.

---

##### `reset_ambari` <a name="reset_ambari" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.resetAmbari"></a>

```python
def reset_ambari() -> None
```

##### `reset_hive` <a name="reset_hive" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.resetHive"></a>

```python
def reset_hive() -> None
```

##### `reset_oozie` <a name="reset_oozie" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.resetOozie"></a>

```python
def reset_oozie() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.property.ambari">ambari</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference">HdinsightHbaseClusterMetastoresAmbariOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.property.hive">hive</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference">HdinsightHbaseClusterMetastoresHiveOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.property.oozie">oozie</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference">HdinsightHbaseClusterMetastoresOozieOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.property.ambariInput">ambari_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbari">HdinsightHbaseClusterMetastoresAmbari</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.property.hiveInput">hive_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHive">HdinsightHbaseClusterMetastoresHive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.property.oozieInput">oozie_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozie">HdinsightHbaseClusterMetastoresOozie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastores">HdinsightHbaseClusterMetastores</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ambari`<sup>Required</sup> <a name="ambari" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.property.ambari"></a>

```python
ambari: HdinsightHbaseClusterMetastoresAmbariOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference">HdinsightHbaseClusterMetastoresAmbariOutputReference</a>

---

##### `hive`<sup>Required</sup> <a name="hive" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.property.hive"></a>

```python
hive: HdinsightHbaseClusterMetastoresHiveOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference">HdinsightHbaseClusterMetastoresHiveOutputReference</a>

---

##### `oozie`<sup>Required</sup> <a name="oozie" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.property.oozie"></a>

```python
oozie: HdinsightHbaseClusterMetastoresOozieOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference">HdinsightHbaseClusterMetastoresOozieOutputReference</a>

---

##### `ambari_input`<sup>Optional</sup> <a name="ambari_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.property.ambariInput"></a>

```python
ambari_input: HdinsightHbaseClusterMetastoresAmbari
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbari">HdinsightHbaseClusterMetastoresAmbari</a>

---

##### `hive_input`<sup>Optional</sup> <a name="hive_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.property.hiveInput"></a>

```python
hive_input: HdinsightHbaseClusterMetastoresHive
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHive">HdinsightHbaseClusterMetastoresHive</a>

---

##### `oozie_input`<sup>Optional</sup> <a name="oozie_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.property.oozieInput"></a>

```python
oozie_input: HdinsightHbaseClusterMetastoresOozie
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozie">HdinsightHbaseClusterMetastoresOozie</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.property.internalValue"></a>

```python
internal_value: HdinsightHbaseClusterMetastores
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastores">HdinsightHbaseClusterMetastores</a>

---


### HdinsightHbaseClusterMonitorOutputReference <a name="HdinsightHbaseClusterMonitorOutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hbase_cluster

hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.property.logAnalyticsWorkspaceIdInput">log_analytics_workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.property.primaryKeyInput">primary_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.property.logAnalyticsWorkspaceId">log_analytics_workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.property.primaryKey">primary_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitor">HdinsightHbaseClusterMonitor</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_analytics_workspace_id_input`<sup>Optional</sup> <a name="log_analytics_workspace_id_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.property.logAnalyticsWorkspaceIdInput"></a>

```python
log_analytics_workspace_id_input: str
```

- *Type:* str

---

##### `primary_key_input`<sup>Optional</sup> <a name="primary_key_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.property.primaryKeyInput"></a>

```python
primary_key_input: str
```

- *Type:* str

---

##### `log_analytics_workspace_id`<sup>Required</sup> <a name="log_analytics_workspace_id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.property.logAnalyticsWorkspaceId"></a>

```python
log_analytics_workspace_id: str
```

- *Type:* str

---

##### `primary_key`<sup>Required</sup> <a name="primary_key" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.property.primaryKey"></a>

```python
primary_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.property.internalValue"></a>

```python
internal_value: HdinsightHbaseClusterMonitor
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitor">HdinsightHbaseClusterMonitor</a>

---


### HdinsightHbaseClusterNetworkOutputReference <a name="HdinsightHbaseClusterNetworkOutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hbase_cluster

hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.resetConnectionDirection">reset_connection_direction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.resetPrivateLinkEnabled">reset_private_link_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_connection_direction` <a name="reset_connection_direction" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.resetConnectionDirection"></a>

```python
def reset_connection_direction() -> None
```

##### `reset_private_link_enabled` <a name="reset_private_link_enabled" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.resetPrivateLinkEnabled"></a>

```python
def reset_private_link_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.property.connectionDirectionInput">connection_direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.property.privateLinkEnabledInput">private_link_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.property.connectionDirection">connection_direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.property.privateLinkEnabled">private_link_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetwork">HdinsightHbaseClusterNetwork</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_direction_input`<sup>Optional</sup> <a name="connection_direction_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.property.connectionDirectionInput"></a>

```python
connection_direction_input: str
```

- *Type:* str

---

##### `private_link_enabled_input`<sup>Optional</sup> <a name="private_link_enabled_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.property.privateLinkEnabledInput"></a>

```python
private_link_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `connection_direction`<sup>Required</sup> <a name="connection_direction" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.property.connectionDirection"></a>

```python
connection_direction: str
```

- *Type:* str

---

##### `private_link_enabled`<sup>Required</sup> <a name="private_link_enabled" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.property.privateLinkEnabled"></a>

```python
private_link_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.property.internalValue"></a>

```python
internal_value: HdinsightHbaseClusterNetwork
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetwork">HdinsightHbaseClusterNetwork</a>

---


### HdinsightHbaseClusterRolesHeadNodeOutputReference <a name="HdinsightHbaseClusterRolesHeadNodeOutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hbase_cluster

hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.putScriptActions">put_script_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.resetScriptActions">reset_script_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.resetSshKeys">reset_ssh_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.resetSubnetId">reset_subnet_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.resetVirtualNetworkId">reset_virtual_network_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_script_actions` <a name="put_script_actions" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.putScriptActions"></a>

```python
def put_script_actions(
  value: typing.Union[IResolvable, typing.List[HdinsightHbaseClusterRolesHeadNodeScriptActions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.putScriptActions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActions">HdinsightHbaseClusterRolesHeadNodeScriptActions</a>]]

---

##### `reset_password` <a name="reset_password" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_script_actions` <a name="reset_script_actions" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.resetScriptActions"></a>

```python
def reset_script_actions() -> None
```

##### `reset_ssh_keys` <a name="reset_ssh_keys" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.resetSshKeys"></a>

```python
def reset_ssh_keys() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```

##### `reset_virtual_network_id` <a name="reset_virtual_network_id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.resetVirtualNetworkId"></a>

```python
def reset_virtual_network_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.scriptActions">script_actions</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList">HdinsightHbaseClusterRolesHeadNodeScriptActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.scriptActionsInput">script_actions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActions">HdinsightHbaseClusterRolesHeadNodeScriptActions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.sshKeysInput">ssh_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.virtualNetworkIdInput">virtual_network_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.vmSizeInput">vm_size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.sshKeys">ssh_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.virtualNetworkId">virtual_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.vmSize">vm_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNode">HdinsightHbaseClusterRolesHeadNode</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `script_actions`<sup>Required</sup> <a name="script_actions" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.scriptActions"></a>

```python
script_actions: HdinsightHbaseClusterRolesHeadNodeScriptActionsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList">HdinsightHbaseClusterRolesHeadNodeScriptActionsList</a>

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `script_actions_input`<sup>Optional</sup> <a name="script_actions_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.scriptActionsInput"></a>

```python
script_actions_input: typing.Union[IResolvable, typing.List[HdinsightHbaseClusterRolesHeadNodeScriptActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActions">HdinsightHbaseClusterRolesHeadNodeScriptActions</a>]]

---

##### `ssh_keys_input`<sup>Optional</sup> <a name="ssh_keys_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.sshKeysInput"></a>

```python
ssh_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `virtual_network_id_input`<sup>Optional</sup> <a name="virtual_network_id_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.virtualNetworkIdInput"></a>

```python
virtual_network_id_input: str
```

- *Type:* str

---

##### `vm_size_input`<sup>Optional</sup> <a name="vm_size_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.vmSizeInput"></a>

```python
vm_size_input: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `ssh_keys`<sup>Required</sup> <a name="ssh_keys" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.sshKeys"></a>

```python
ssh_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `virtual_network_id`<sup>Required</sup> <a name="virtual_network_id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.virtualNetworkId"></a>

```python
virtual_network_id: str
```

- *Type:* str

---

##### `vm_size`<sup>Required</sup> <a name="vm_size" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.vmSize"></a>

```python
vm_size: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.internalValue"></a>

```python
internal_value: HdinsightHbaseClusterRolesHeadNode
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNode">HdinsightHbaseClusterRolesHeadNode</a>

---


### HdinsightHbaseClusterRolesHeadNodeScriptActionsList <a name="HdinsightHbaseClusterRolesHeadNodeScriptActionsList" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hbase_cluster

hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActions">HdinsightHbaseClusterRolesHeadNodeScriptActions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[HdinsightHbaseClusterRolesHeadNodeScriptActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActions">HdinsightHbaseClusterRolesHeadNodeScriptActions</a>]]

---


### HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference <a name="HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hbase_cluster

hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.property.parametersInput">parameters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.property.parameters">parameters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActions">HdinsightHbaseClusterRolesHeadNodeScriptActions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.property.parametersInput"></a>

```python
parameters_input: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, HdinsightHbaseClusterRolesHeadNodeScriptActions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActions">HdinsightHbaseClusterRolesHeadNodeScriptActions</a>]

---


### HdinsightHbaseClusterRolesOutputReference <a name="HdinsightHbaseClusterRolesOutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hbase_cluster

hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.putHeadNode">put_head_node</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.putWorkerNode">put_worker_node</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.putZookeeperNode">put_zookeeper_node</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_head_node` <a name="put_head_node" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.putHeadNode"></a>

```python
def put_head_node(
  username: str,
  vm_size: str,
  password: str = None,
  script_actions: typing.Union[IResolvable, typing.List[HdinsightHbaseClusterRolesHeadNodeScriptActions]] = None,
  ssh_keys: typing.List[str] = None,
  subnet_id: str = None,
  virtual_network_id: str = None
) -> None
```

###### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.putHeadNode.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#username HdinsightHbaseCluster#username}.

---

###### `vm_size`<sup>Required</sup> <a name="vm_size" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.putHeadNode.parameter.vmSize"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#vm_size HdinsightHbaseCluster#vm_size}.

---

###### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.putHeadNode.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#password HdinsightHbaseCluster#password}.

---

###### `script_actions`<sup>Optional</sup> <a name="script_actions" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.putHeadNode.parameter.scriptActions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActions">HdinsightHbaseClusterRolesHeadNodeScriptActions</a>]]

script_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#script_actions HdinsightHbaseCluster#script_actions}

---

###### `ssh_keys`<sup>Optional</sup> <a name="ssh_keys" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.putHeadNode.parameter.sshKeys"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#ssh_keys HdinsightHbaseCluster#ssh_keys}.

---

###### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.putHeadNode.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#subnet_id HdinsightHbaseCluster#subnet_id}.

---

###### `virtual_network_id`<sup>Optional</sup> <a name="virtual_network_id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.putHeadNode.parameter.virtualNetworkId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#virtual_network_id HdinsightHbaseCluster#virtual_network_id}.

---

##### `put_worker_node` <a name="put_worker_node" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.putWorkerNode"></a>

```python
def put_worker_node(
  target_instance_count: typing.Union[int, float],
  username: str,
  vm_size: str,
  autoscale: HdinsightHbaseClusterRolesWorkerNodeAutoscale = None,
  password: str = None,
  script_actions: typing.Union[IResolvable, typing.List[HdinsightHbaseClusterRolesWorkerNodeScriptActions]] = None,
  ssh_keys: typing.List[str] = None,
  subnet_id: str = None,
  virtual_network_id: str = None
) -> None
```

###### `target_instance_count`<sup>Required</sup> <a name="target_instance_count" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.putWorkerNode.parameter.targetInstanceCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#target_instance_count HdinsightHbaseCluster#target_instance_count}.

---

###### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.putWorkerNode.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#username HdinsightHbaseCluster#username}.

---

###### `vm_size`<sup>Required</sup> <a name="vm_size" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.putWorkerNode.parameter.vmSize"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#vm_size HdinsightHbaseCluster#vm_size}.

---

###### `autoscale`<sup>Optional</sup> <a name="autoscale" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.putWorkerNode.parameter.autoscale"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscale">HdinsightHbaseClusterRolesWorkerNodeAutoscale</a>

autoscale block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#autoscale HdinsightHbaseCluster#autoscale}

---

###### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.putWorkerNode.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#password HdinsightHbaseCluster#password}.

---

###### `script_actions`<sup>Optional</sup> <a name="script_actions" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.putWorkerNode.parameter.scriptActions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActions">HdinsightHbaseClusterRolesWorkerNodeScriptActions</a>]]

script_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#script_actions HdinsightHbaseCluster#script_actions}

---

###### `ssh_keys`<sup>Optional</sup> <a name="ssh_keys" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.putWorkerNode.parameter.sshKeys"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#ssh_keys HdinsightHbaseCluster#ssh_keys}.

---

###### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.putWorkerNode.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#subnet_id HdinsightHbaseCluster#subnet_id}.

---

###### `virtual_network_id`<sup>Optional</sup> <a name="virtual_network_id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.putWorkerNode.parameter.virtualNetworkId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#virtual_network_id HdinsightHbaseCluster#virtual_network_id}.

---

##### `put_zookeeper_node` <a name="put_zookeeper_node" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.putZookeeperNode"></a>

```python
def put_zookeeper_node(
  username: str,
  vm_size: str,
  password: str = None,
  script_actions: typing.Union[IResolvable, typing.List[HdinsightHbaseClusterRolesZookeeperNodeScriptActions]] = None,
  ssh_keys: typing.List[str] = None,
  subnet_id: str = None,
  virtual_network_id: str = None
) -> None
```

###### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.putZookeeperNode.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#username HdinsightHbaseCluster#username}.

---

###### `vm_size`<sup>Required</sup> <a name="vm_size" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.putZookeeperNode.parameter.vmSize"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#vm_size HdinsightHbaseCluster#vm_size}.

---

###### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.putZookeeperNode.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#password HdinsightHbaseCluster#password}.

---

###### `script_actions`<sup>Optional</sup> <a name="script_actions" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.putZookeeperNode.parameter.scriptActions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActions">HdinsightHbaseClusterRolesZookeeperNodeScriptActions</a>]]

script_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#script_actions HdinsightHbaseCluster#script_actions}

---

###### `ssh_keys`<sup>Optional</sup> <a name="ssh_keys" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.putZookeeperNode.parameter.sshKeys"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#ssh_keys HdinsightHbaseCluster#ssh_keys}.

---

###### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.putZookeeperNode.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#subnet_id HdinsightHbaseCluster#subnet_id}.

---

###### `virtual_network_id`<sup>Optional</sup> <a name="virtual_network_id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.putZookeeperNode.parameter.virtualNetworkId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#virtual_network_id HdinsightHbaseCluster#virtual_network_id}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.property.headNode">head_node</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference">HdinsightHbaseClusterRolesHeadNodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.property.workerNode">worker_node</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference">HdinsightHbaseClusterRolesWorkerNodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.property.zookeeperNode">zookeeper_node</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference">HdinsightHbaseClusterRolesZookeeperNodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.property.headNodeInput">head_node_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNode">HdinsightHbaseClusterRolesHeadNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.property.workerNodeInput">worker_node_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode">HdinsightHbaseClusterRolesWorkerNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.property.zookeeperNodeInput">zookeeper_node_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNode">HdinsightHbaseClusterRolesZookeeperNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRoles">HdinsightHbaseClusterRoles</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `head_node`<sup>Required</sup> <a name="head_node" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.property.headNode"></a>

```python
head_node: HdinsightHbaseClusterRolesHeadNodeOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference">HdinsightHbaseClusterRolesHeadNodeOutputReference</a>

---

##### `worker_node`<sup>Required</sup> <a name="worker_node" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.property.workerNode"></a>

```python
worker_node: HdinsightHbaseClusterRolesWorkerNodeOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference">HdinsightHbaseClusterRolesWorkerNodeOutputReference</a>

---

##### `zookeeper_node`<sup>Required</sup> <a name="zookeeper_node" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.property.zookeeperNode"></a>

```python
zookeeper_node: HdinsightHbaseClusterRolesZookeeperNodeOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference">HdinsightHbaseClusterRolesZookeeperNodeOutputReference</a>

---

##### `head_node_input`<sup>Optional</sup> <a name="head_node_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.property.headNodeInput"></a>

```python
head_node_input: HdinsightHbaseClusterRolesHeadNode
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNode">HdinsightHbaseClusterRolesHeadNode</a>

---

##### `worker_node_input`<sup>Optional</sup> <a name="worker_node_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.property.workerNodeInput"></a>

```python
worker_node_input: HdinsightHbaseClusterRolesWorkerNode
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode">HdinsightHbaseClusterRolesWorkerNode</a>

---

##### `zookeeper_node_input`<sup>Optional</sup> <a name="zookeeper_node_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.property.zookeeperNodeInput"></a>

```python
zookeeper_node_input: HdinsightHbaseClusterRolesZookeeperNode
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNode">HdinsightHbaseClusterRolesZookeeperNode</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.property.internalValue"></a>

```python
internal_value: HdinsightHbaseClusterRoles
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRoles">HdinsightHbaseClusterRoles</a>

---


### HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference <a name="HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hbase_cluster

hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.putRecurrence">put_recurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.resetRecurrence">reset_recurrence</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_recurrence` <a name="put_recurrence" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.putRecurrence"></a>

```python
def put_recurrence(
  schedule: typing.Union[IResolvable, typing.List[HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule]],
  timezone: str
) -> None
```

###### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.putRecurrence.parameter.schedule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule">HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule</a>]]

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#schedule HdinsightHbaseCluster#schedule}

---

###### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.putRecurrence.parameter.timezone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#timezone HdinsightHbaseCluster#timezone}.

---

##### `reset_recurrence` <a name="reset_recurrence" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.resetRecurrence"></a>

```python
def reset_recurrence() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.property.recurrence">recurrence</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference">HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.property.recurrenceInput">recurrence_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence">HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscale">HdinsightHbaseClusterRolesWorkerNodeAutoscale</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `recurrence`<sup>Required</sup> <a name="recurrence" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.property.recurrence"></a>

```python
recurrence: HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference">HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference</a>

---

##### `recurrence_input`<sup>Optional</sup> <a name="recurrence_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.property.recurrenceInput"></a>

```python
recurrence_input: HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence">HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.property.internalValue"></a>

```python
internal_value: HdinsightHbaseClusterRolesWorkerNodeAutoscale
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscale">HdinsightHbaseClusterRolesWorkerNodeAutoscale</a>

---


### HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference <a name="HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hbase_cluster

hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.putSchedule">put_schedule</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_schedule` <a name="put_schedule" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.putSchedule"></a>

```python
def put_schedule(
  value: typing.Union[IResolvable, typing.List[HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.putSchedule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule">HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList">HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.scheduleInput">schedule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule">HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.timezoneInput">timezone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.timezone">timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence">HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.schedule"></a>

```python
schedule: HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList">HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList</a>

---

##### `schedule_input`<sup>Optional</sup> <a name="schedule_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.scheduleInput"></a>

```python
schedule_input: typing.Union[IResolvable, typing.List[HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule">HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule</a>]]

---

##### `timezone_input`<sup>Optional</sup> <a name="timezone_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.timezoneInput"></a>

```python
timezone_input: str
```

- *Type:* str

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.internalValue"></a>

```python
internal_value: HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence">HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence</a>

---


### HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList <a name="HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hbase_cluster

hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule">HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule">HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule</a>]]

---


### HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference <a name="HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hbase_cluster

hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.daysInput">days_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.targetInstanceCountInput">target_instance_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.timeInput">time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.days">days</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.targetInstanceCount">target_instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.time">time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule">HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `days_input`<sup>Optional</sup> <a name="days_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.daysInput"></a>

```python
days_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_instance_count_input`<sup>Optional</sup> <a name="target_instance_count_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.targetInstanceCountInput"></a>

```python
target_instance_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_input`<sup>Optional</sup> <a name="time_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.timeInput"></a>

```python
time_input: str
```

- *Type:* str

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.days"></a>

```python
days: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_instance_count`<sup>Required</sup> <a name="target_instance_count" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.targetInstanceCount"></a>

```python
target_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.time"></a>

```python
time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule">HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule</a>]

---


### HdinsightHbaseClusterRolesWorkerNodeOutputReference <a name="HdinsightHbaseClusterRolesWorkerNodeOutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hbase_cluster

hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.putAutoscale">put_autoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.putScriptActions">put_script_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.resetAutoscale">reset_autoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.resetScriptActions">reset_script_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.resetSshKeys">reset_ssh_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.resetSubnetId">reset_subnet_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.resetVirtualNetworkId">reset_virtual_network_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_autoscale` <a name="put_autoscale" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.putAutoscale"></a>

```python
def put_autoscale(
  recurrence: HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence = None
) -> None
```

###### `recurrence`<sup>Optional</sup> <a name="recurrence" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.putAutoscale.parameter.recurrence"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence">HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence</a>

recurrence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/hdinsight_hbase_cluster#recurrence HdinsightHbaseCluster#recurrence}

---

##### `put_script_actions` <a name="put_script_actions" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.putScriptActions"></a>

```python
def put_script_actions(
  value: typing.Union[IResolvable, typing.List[HdinsightHbaseClusterRolesWorkerNodeScriptActions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.putScriptActions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActions">HdinsightHbaseClusterRolesWorkerNodeScriptActions</a>]]

---

##### `reset_autoscale` <a name="reset_autoscale" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.resetAutoscale"></a>

```python
def reset_autoscale() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_script_actions` <a name="reset_script_actions" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.resetScriptActions"></a>

```python
def reset_script_actions() -> None
```

##### `reset_ssh_keys` <a name="reset_ssh_keys" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.resetSshKeys"></a>

```python
def reset_ssh_keys() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```

##### `reset_virtual_network_id` <a name="reset_virtual_network_id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.resetVirtualNetworkId"></a>

```python
def reset_virtual_network_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.autoscale">autoscale</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference">HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.scriptActions">script_actions</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList">HdinsightHbaseClusterRolesWorkerNodeScriptActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.autoscaleInput">autoscale_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscale">HdinsightHbaseClusterRolesWorkerNodeAutoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.scriptActionsInput">script_actions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActions">HdinsightHbaseClusterRolesWorkerNodeScriptActions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.sshKeysInput">ssh_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.targetInstanceCountInput">target_instance_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.virtualNetworkIdInput">virtual_network_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.vmSizeInput">vm_size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.sshKeys">ssh_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.targetInstanceCount">target_instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.virtualNetworkId">virtual_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.vmSize">vm_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode">HdinsightHbaseClusterRolesWorkerNode</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `autoscale`<sup>Required</sup> <a name="autoscale" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.autoscale"></a>

```python
autoscale: HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference">HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference</a>

---

##### `script_actions`<sup>Required</sup> <a name="script_actions" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.scriptActions"></a>

```python
script_actions: HdinsightHbaseClusterRolesWorkerNodeScriptActionsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList">HdinsightHbaseClusterRolesWorkerNodeScriptActionsList</a>

---

##### `autoscale_input`<sup>Optional</sup> <a name="autoscale_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.autoscaleInput"></a>

```python
autoscale_input: HdinsightHbaseClusterRolesWorkerNodeAutoscale
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscale">HdinsightHbaseClusterRolesWorkerNodeAutoscale</a>

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `script_actions_input`<sup>Optional</sup> <a name="script_actions_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.scriptActionsInput"></a>

```python
script_actions_input: typing.Union[IResolvable, typing.List[HdinsightHbaseClusterRolesWorkerNodeScriptActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActions">HdinsightHbaseClusterRolesWorkerNodeScriptActions</a>]]

---

##### `ssh_keys_input`<sup>Optional</sup> <a name="ssh_keys_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.sshKeysInput"></a>

```python
ssh_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `target_instance_count_input`<sup>Optional</sup> <a name="target_instance_count_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.targetInstanceCountInput"></a>

```python
target_instance_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `virtual_network_id_input`<sup>Optional</sup> <a name="virtual_network_id_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.virtualNetworkIdInput"></a>

```python
virtual_network_id_input: str
```

- *Type:* str

---

##### `vm_size_input`<sup>Optional</sup> <a name="vm_size_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.vmSizeInput"></a>

```python
vm_size_input: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `ssh_keys`<sup>Required</sup> <a name="ssh_keys" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.sshKeys"></a>

```python
ssh_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `target_instance_count`<sup>Required</sup> <a name="target_instance_count" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.targetInstanceCount"></a>

```python
target_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `virtual_network_id`<sup>Required</sup> <a name="virtual_network_id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.virtualNetworkId"></a>

```python
virtual_network_id: str
```

- *Type:* str

---

##### `vm_size`<sup>Required</sup> <a name="vm_size" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.vmSize"></a>

```python
vm_size: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.internalValue"></a>

```python
internal_value: HdinsightHbaseClusterRolesWorkerNode
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode">HdinsightHbaseClusterRolesWorkerNode</a>

---


### HdinsightHbaseClusterRolesWorkerNodeScriptActionsList <a name="HdinsightHbaseClusterRolesWorkerNodeScriptActionsList" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hbase_cluster

hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActions">HdinsightHbaseClusterRolesWorkerNodeScriptActions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[HdinsightHbaseClusterRolesWorkerNodeScriptActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActions">HdinsightHbaseClusterRolesWorkerNodeScriptActions</a>]]

---


### HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference <a name="HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hbase_cluster

hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.property.parametersInput">parameters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.property.parameters">parameters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActions">HdinsightHbaseClusterRolesWorkerNodeScriptActions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.property.parametersInput"></a>

```python
parameters_input: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, HdinsightHbaseClusterRolesWorkerNodeScriptActions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActions">HdinsightHbaseClusterRolesWorkerNodeScriptActions</a>]

---


### HdinsightHbaseClusterRolesZookeeperNodeOutputReference <a name="HdinsightHbaseClusterRolesZookeeperNodeOutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hbase_cluster

hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.putScriptActions">put_script_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.resetScriptActions">reset_script_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.resetSshKeys">reset_ssh_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.resetSubnetId">reset_subnet_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.resetVirtualNetworkId">reset_virtual_network_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_script_actions` <a name="put_script_actions" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.putScriptActions"></a>

```python
def put_script_actions(
  value: typing.Union[IResolvable, typing.List[HdinsightHbaseClusterRolesZookeeperNodeScriptActions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.putScriptActions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActions">HdinsightHbaseClusterRolesZookeeperNodeScriptActions</a>]]

---

##### `reset_password` <a name="reset_password" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_script_actions` <a name="reset_script_actions" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.resetScriptActions"></a>

```python
def reset_script_actions() -> None
```

##### `reset_ssh_keys` <a name="reset_ssh_keys" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.resetSshKeys"></a>

```python
def reset_ssh_keys() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```

##### `reset_virtual_network_id` <a name="reset_virtual_network_id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.resetVirtualNetworkId"></a>

```python
def reset_virtual_network_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.scriptActions">script_actions</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList">HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.scriptActionsInput">script_actions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActions">HdinsightHbaseClusterRolesZookeeperNodeScriptActions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.sshKeysInput">ssh_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.virtualNetworkIdInput">virtual_network_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.vmSizeInput">vm_size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.sshKeys">ssh_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.virtualNetworkId">virtual_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.vmSize">vm_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNode">HdinsightHbaseClusterRolesZookeeperNode</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `script_actions`<sup>Required</sup> <a name="script_actions" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.scriptActions"></a>

```python
script_actions: HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList">HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList</a>

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `script_actions_input`<sup>Optional</sup> <a name="script_actions_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.scriptActionsInput"></a>

```python
script_actions_input: typing.Union[IResolvable, typing.List[HdinsightHbaseClusterRolesZookeeperNodeScriptActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActions">HdinsightHbaseClusterRolesZookeeperNodeScriptActions</a>]]

---

##### `ssh_keys_input`<sup>Optional</sup> <a name="ssh_keys_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.sshKeysInput"></a>

```python
ssh_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `virtual_network_id_input`<sup>Optional</sup> <a name="virtual_network_id_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.virtualNetworkIdInput"></a>

```python
virtual_network_id_input: str
```

- *Type:* str

---

##### `vm_size_input`<sup>Optional</sup> <a name="vm_size_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.vmSizeInput"></a>

```python
vm_size_input: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `ssh_keys`<sup>Required</sup> <a name="ssh_keys" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.sshKeys"></a>

```python
ssh_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `virtual_network_id`<sup>Required</sup> <a name="virtual_network_id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.virtualNetworkId"></a>

```python
virtual_network_id: str
```

- *Type:* str

---

##### `vm_size`<sup>Required</sup> <a name="vm_size" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.vmSize"></a>

```python
vm_size: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.internalValue"></a>

```python
internal_value: HdinsightHbaseClusterRolesZookeeperNode
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNode">HdinsightHbaseClusterRolesZookeeperNode</a>

---


### HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList <a name="HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hbase_cluster

hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActions">HdinsightHbaseClusterRolesZookeeperNodeScriptActions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[HdinsightHbaseClusterRolesZookeeperNodeScriptActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActions">HdinsightHbaseClusterRolesZookeeperNodeScriptActions</a>]]

---


### HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference <a name="HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hbase_cluster

hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.property.parametersInput">parameters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.property.parameters">parameters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActions">HdinsightHbaseClusterRolesZookeeperNodeScriptActions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.property.parametersInput"></a>

```python
parameters_input: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, HdinsightHbaseClusterRolesZookeeperNodeScriptActions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActions">HdinsightHbaseClusterRolesZookeeperNodeScriptActions</a>]

---


### HdinsightHbaseClusterSecurityProfileOutputReference <a name="HdinsightHbaseClusterSecurityProfileOutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hbase_cluster

hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.resetClusterUsersGroupDns">reset_cluster_users_group_dns</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cluster_users_group_dns` <a name="reset_cluster_users_group_dns" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.resetClusterUsersGroupDns"></a>

```python
def reset_cluster_users_group_dns() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.aaddsResourceIdInput">aadds_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.clusterUsersGroupDnsInput">cluster_users_group_dns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.domainNameInput">domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.domainUsernameInput">domain_username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.domainUserPasswordInput">domain_user_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.ldapsUrlsInput">ldaps_urls_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.msiResourceIdInput">msi_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.aaddsResourceId">aadds_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.clusterUsersGroupDns">cluster_users_group_dns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.domainUsername">domain_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.domainUserPassword">domain_user_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.ldapsUrls">ldaps_urls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.msiResourceId">msi_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfile">HdinsightHbaseClusterSecurityProfile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aadds_resource_id_input`<sup>Optional</sup> <a name="aadds_resource_id_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.aaddsResourceIdInput"></a>

```python
aadds_resource_id_input: str
```

- *Type:* str

---

##### `cluster_users_group_dns_input`<sup>Optional</sup> <a name="cluster_users_group_dns_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.clusterUsersGroupDnsInput"></a>

```python
cluster_users_group_dns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `domain_name_input`<sup>Optional</sup> <a name="domain_name_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.domainNameInput"></a>

```python
domain_name_input: str
```

- *Type:* str

---

##### `domain_username_input`<sup>Optional</sup> <a name="domain_username_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.domainUsernameInput"></a>

```python
domain_username_input: str
```

- *Type:* str

---

##### `domain_user_password_input`<sup>Optional</sup> <a name="domain_user_password_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.domainUserPasswordInput"></a>

```python
domain_user_password_input: str
```

- *Type:* str

---

##### `ldaps_urls_input`<sup>Optional</sup> <a name="ldaps_urls_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.ldapsUrlsInput"></a>

```python
ldaps_urls_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `msi_resource_id_input`<sup>Optional</sup> <a name="msi_resource_id_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.msiResourceIdInput"></a>

```python
msi_resource_id_input: str
```

- *Type:* str

---

##### `aadds_resource_id`<sup>Required</sup> <a name="aadds_resource_id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.aaddsResourceId"></a>

```python
aadds_resource_id: str
```

- *Type:* str

---

##### `cluster_users_group_dns`<sup>Required</sup> <a name="cluster_users_group_dns" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.clusterUsersGroupDns"></a>

```python
cluster_users_group_dns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `domain_username`<sup>Required</sup> <a name="domain_username" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.domainUsername"></a>

```python
domain_username: str
```

- *Type:* str

---

##### `domain_user_password`<sup>Required</sup> <a name="domain_user_password" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.domainUserPassword"></a>

```python
domain_user_password: str
```

- *Type:* str

---

##### `ldaps_urls`<sup>Required</sup> <a name="ldaps_urls" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.ldapsUrls"></a>

```python
ldaps_urls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `msi_resource_id`<sup>Required</sup> <a name="msi_resource_id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.msiResourceId"></a>

```python
msi_resource_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.internalValue"></a>

```python
internal_value: HdinsightHbaseClusterSecurityProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfile">HdinsightHbaseClusterSecurityProfile</a>

---


### HdinsightHbaseClusterStorageAccountGen2OutputReference <a name="HdinsightHbaseClusterStorageAccountGen2OutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hbase_cluster

hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.property.filesystemIdInput">filesystem_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.property.isDefaultInput">is_default_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.property.managedIdentityResourceIdInput">managed_identity_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.property.storageResourceIdInput">storage_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.property.filesystemId">filesystem_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.property.isDefault">is_default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.property.managedIdentityResourceId">managed_identity_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.property.storageResourceId">storage_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2">HdinsightHbaseClusterStorageAccountGen2</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filesystem_id_input`<sup>Optional</sup> <a name="filesystem_id_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.property.filesystemIdInput"></a>

```python
filesystem_id_input: str
```

- *Type:* str

---

##### `is_default_input`<sup>Optional</sup> <a name="is_default_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.property.isDefaultInput"></a>

```python
is_default_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `managed_identity_resource_id_input`<sup>Optional</sup> <a name="managed_identity_resource_id_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.property.managedIdentityResourceIdInput"></a>

```python
managed_identity_resource_id_input: str
```

- *Type:* str

---

##### `storage_resource_id_input`<sup>Optional</sup> <a name="storage_resource_id_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.property.storageResourceIdInput"></a>

```python
storage_resource_id_input: str
```

- *Type:* str

---

##### `filesystem_id`<sup>Required</sup> <a name="filesystem_id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.property.filesystemId"></a>

```python
filesystem_id: str
```

- *Type:* str

---

##### `is_default`<sup>Required</sup> <a name="is_default" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.property.isDefault"></a>

```python
is_default: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `managed_identity_resource_id`<sup>Required</sup> <a name="managed_identity_resource_id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.property.managedIdentityResourceId"></a>

```python
managed_identity_resource_id: str
```

- *Type:* str

---

##### `storage_resource_id`<sup>Required</sup> <a name="storage_resource_id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.property.storageResourceId"></a>

```python
storage_resource_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.property.internalValue"></a>

```python
internal_value: HdinsightHbaseClusterStorageAccountGen2
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2">HdinsightHbaseClusterStorageAccountGen2</a>

---


### HdinsightHbaseClusterStorageAccountList <a name="HdinsightHbaseClusterStorageAccountList" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hbase_cluster

hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> HdinsightHbaseClusterStorageAccountOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccount">HdinsightHbaseClusterStorageAccount</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[HdinsightHbaseClusterStorageAccount]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccount">HdinsightHbaseClusterStorageAccount</a>]]

---


### HdinsightHbaseClusterStorageAccountOutputReference <a name="HdinsightHbaseClusterStorageAccountOutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hbase_cluster

hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.resetStorageResourceId">reset_storage_resource_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_storage_resource_id` <a name="reset_storage_resource_id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.resetStorageResourceId"></a>

```python
def reset_storage_resource_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.property.isDefaultInput">is_default_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.property.storageAccountKeyInput">storage_account_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.property.storageContainerIdInput">storage_container_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.property.storageResourceIdInput">storage_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.property.isDefault">is_default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.property.storageAccountKey">storage_account_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.property.storageContainerId">storage_container_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.property.storageResourceId">storage_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccount">HdinsightHbaseClusterStorageAccount</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_default_input`<sup>Optional</sup> <a name="is_default_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.property.isDefaultInput"></a>

```python
is_default_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `storage_account_key_input`<sup>Optional</sup> <a name="storage_account_key_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.property.storageAccountKeyInput"></a>

```python
storage_account_key_input: str
```

- *Type:* str

---

##### `storage_container_id_input`<sup>Optional</sup> <a name="storage_container_id_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.property.storageContainerIdInput"></a>

```python
storage_container_id_input: str
```

- *Type:* str

---

##### `storage_resource_id_input`<sup>Optional</sup> <a name="storage_resource_id_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.property.storageResourceIdInput"></a>

```python
storage_resource_id_input: str
```

- *Type:* str

---

##### `is_default`<sup>Required</sup> <a name="is_default" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.property.isDefault"></a>

```python
is_default: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `storage_account_key`<sup>Required</sup> <a name="storage_account_key" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.property.storageAccountKey"></a>

```python
storage_account_key: str
```

- *Type:* str

---

##### `storage_container_id`<sup>Required</sup> <a name="storage_container_id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.property.storageContainerId"></a>

```python
storage_container_id: str
```

- *Type:* str

---

##### `storage_resource_id`<sup>Required</sup> <a name="storage_resource_id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.property.storageResourceId"></a>

```python
storage_resource_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, HdinsightHbaseClusterStorageAccount]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccount">HdinsightHbaseClusterStorageAccount</a>]

---


### HdinsightHbaseClusterTimeoutsOutputReference <a name="HdinsightHbaseClusterTimeoutsOutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_hbase_cluster

hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeouts">HdinsightHbaseClusterTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, HdinsightHbaseClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeouts">HdinsightHbaseClusterTimeouts</a>]

---



