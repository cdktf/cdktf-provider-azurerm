# `hdinsightKafkaCluster` Submodule <a name="`hdinsightKafkaCluster` Submodule" id="@cdktf/provider-azurerm.hdinsightKafkaCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HdinsightKafkaCluster <a name="HdinsightKafkaCluster" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster azurerm_hdinsight_kafka_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_kafka_cluster

hdinsightKafkaCluster.HdinsightKafkaCluster(
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
  component_version: HdinsightKafkaClusterComponentVersion,
  gateway: HdinsightKafkaClusterGateway,
  location: str,
  name: str,
  resource_group_name: str,
  roles: HdinsightKafkaClusterRoles,
  tier: str,
  compute_isolation: HdinsightKafkaClusterComputeIsolation = None,
  disk_encryption: typing.Union[IResolvable, typing.List[HdinsightKafkaClusterDiskEncryption]] = None,
  encryption_in_transit_enabled: typing.Union[bool, IResolvable] = None,
  extension: HdinsightKafkaClusterExtension = None,
  id: str = None,
  metastores: HdinsightKafkaClusterMetastores = None,
  monitor: HdinsightKafkaClusterMonitor = None,
  network: HdinsightKafkaClusterNetwork = None,
  rest_proxy: HdinsightKafkaClusterRestProxy = None,
  security_profile: HdinsightKafkaClusterSecurityProfile = None,
  storage_account: typing.Union[IResolvable, typing.List[HdinsightKafkaClusterStorageAccount]] = None,
  storage_account_gen2: HdinsightKafkaClusterStorageAccountGen2 = None,
  tags: typing.Mapping[str] = None,
  timeouts: HdinsightKafkaClusterTimeouts = None,
  tls_min_version: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.clusterVersion">cluster_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#cluster_version HdinsightKafkaCluster#cluster_version}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.componentVersion">component_version</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersion">HdinsightKafkaClusterComponentVersion</a></code> | component_version block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.gateway">gateway</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGateway">HdinsightKafkaClusterGateway</a></code> | gateway block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#location HdinsightKafkaCluster#location}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#name HdinsightKafkaCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#resource_group_name HdinsightKafkaCluster#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.roles">roles</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRoles">HdinsightKafkaClusterRoles</a></code> | roles block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.tier">tier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#tier HdinsightKafkaCluster#tier}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.computeIsolation">compute_isolation</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolation">HdinsightKafkaClusterComputeIsolation</a></code> | compute_isolation block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.diskEncryption">disk_encryption</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryption">HdinsightKafkaClusterDiskEncryption</a>]]</code> | disk_encryption block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.encryptionInTransitEnabled">encryption_in_transit_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#encryption_in_transit_enabled HdinsightKafkaCluster#encryption_in_transit_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.extension">extension</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtension">HdinsightKafkaClusterExtension</a></code> | extension block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#id HdinsightKafkaCluster#id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.metastores">metastores</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastores">HdinsightKafkaClusterMetastores</a></code> | metastores block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.monitor">monitor</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitor">HdinsightKafkaClusterMonitor</a></code> | monitor block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.network">network</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetwork">HdinsightKafkaClusterNetwork</a></code> | network block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.restProxy">rest_proxy</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxy">HdinsightKafkaClusterRestProxy</a></code> | rest_proxy block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.securityProfile">security_profile</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile">HdinsightKafkaClusterSecurityProfile</a></code> | security_profile block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.storageAccount">storage_account</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccount">HdinsightKafkaClusterStorageAccount</a>]]</code> | storage_account block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.storageAccountGen2">storage_account_gen2</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2">HdinsightKafkaClusterStorageAccountGen2</a></code> | storage_account_gen2 block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#tags HdinsightKafkaCluster#tags}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeouts">HdinsightKafkaClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.tlsMinVersion">tls_min_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#tls_min_version HdinsightKafkaCluster#tls_min_version}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_version`<sup>Required</sup> <a name="cluster_version" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.clusterVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#cluster_version HdinsightKafkaCluster#cluster_version}.

---

##### `component_version`<sup>Required</sup> <a name="component_version" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.componentVersion"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersion">HdinsightKafkaClusterComponentVersion</a>

component_version block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#component_version HdinsightKafkaCluster#component_version}

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.gateway"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGateway">HdinsightKafkaClusterGateway</a>

gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#gateway HdinsightKafkaCluster#gateway}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#location HdinsightKafkaCluster#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#name HdinsightKafkaCluster#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#resource_group_name HdinsightKafkaCluster#resource_group_name}.

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.roles"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRoles">HdinsightKafkaClusterRoles</a>

roles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#roles HdinsightKafkaCluster#roles}

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.tier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#tier HdinsightKafkaCluster#tier}.

---

##### `compute_isolation`<sup>Optional</sup> <a name="compute_isolation" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.computeIsolation"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolation">HdinsightKafkaClusterComputeIsolation</a>

compute_isolation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#compute_isolation HdinsightKafkaCluster#compute_isolation}

---

##### `disk_encryption`<sup>Optional</sup> <a name="disk_encryption" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.diskEncryption"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryption">HdinsightKafkaClusterDiskEncryption</a>]]

disk_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#disk_encryption HdinsightKafkaCluster#disk_encryption}

---

##### `encryption_in_transit_enabled`<sup>Optional</sup> <a name="encryption_in_transit_enabled" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.encryptionInTransitEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#encryption_in_transit_enabled HdinsightKafkaCluster#encryption_in_transit_enabled}.

---

##### `extension`<sup>Optional</sup> <a name="extension" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.extension"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtension">HdinsightKafkaClusterExtension</a>

extension block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#extension HdinsightKafkaCluster#extension}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#id HdinsightKafkaCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metastores`<sup>Optional</sup> <a name="metastores" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.metastores"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastores">HdinsightKafkaClusterMetastores</a>

metastores block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#metastores HdinsightKafkaCluster#metastores}

---

##### `monitor`<sup>Optional</sup> <a name="monitor" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.monitor"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitor">HdinsightKafkaClusterMonitor</a>

monitor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#monitor HdinsightKafkaCluster#monitor}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.network"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetwork">HdinsightKafkaClusterNetwork</a>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#network HdinsightKafkaCluster#network}

---

##### `rest_proxy`<sup>Optional</sup> <a name="rest_proxy" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.restProxy"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxy">HdinsightKafkaClusterRestProxy</a>

rest_proxy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#rest_proxy HdinsightKafkaCluster#rest_proxy}

---

##### `security_profile`<sup>Optional</sup> <a name="security_profile" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.securityProfile"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile">HdinsightKafkaClusterSecurityProfile</a>

security_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#security_profile HdinsightKafkaCluster#security_profile}

---

##### `storage_account`<sup>Optional</sup> <a name="storage_account" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.storageAccount"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccount">HdinsightKafkaClusterStorageAccount</a>]]

storage_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#storage_account HdinsightKafkaCluster#storage_account}

---

##### `storage_account_gen2`<sup>Optional</sup> <a name="storage_account_gen2" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.storageAccountGen2"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2">HdinsightKafkaClusterStorageAccountGen2</a>

storage_account_gen2 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#storage_account_gen2 HdinsightKafkaCluster#storage_account_gen2}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#tags HdinsightKafkaCluster#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeouts">HdinsightKafkaClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#timeouts HdinsightKafkaCluster#timeouts}

---

##### `tls_min_version`<sup>Optional</sup> <a name="tls_min_version" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.tlsMinVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#tls_min_version HdinsightKafkaCluster#tls_min_version}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putComponentVersion">put_component_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putComputeIsolation">put_compute_isolation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putDiskEncryption">put_disk_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putExtension">put_extension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putGateway">put_gateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putMetastores">put_metastores</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putMonitor">put_monitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putNetwork">put_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putRestProxy">put_rest_proxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putRoles">put_roles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putSecurityProfile">put_security_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putStorageAccount">put_storage_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putStorageAccountGen2">put_storage_account_gen2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetComputeIsolation">reset_compute_isolation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetDiskEncryption">reset_disk_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetEncryptionInTransitEnabled">reset_encryption_in_transit_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetExtension">reset_extension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetMetastores">reset_metastores</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetMonitor">reset_monitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetNetwork">reset_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetRestProxy">reset_rest_proxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetSecurityProfile">reset_security_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetStorageAccount">reset_storage_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetStorageAccountGen2">reset_storage_account_gen2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetTlsMinVersion">reset_tls_min_version</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_component_version` <a name="put_component_version" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putComponentVersion"></a>

```python
def put_component_version(
  kafka: str
) -> None
```

###### `kafka`<sup>Required</sup> <a name="kafka" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putComponentVersion.parameter.kafka"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#kafka HdinsightKafkaCluster#kafka}.

---

##### `put_compute_isolation` <a name="put_compute_isolation" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putComputeIsolation"></a>

```python
def put_compute_isolation(
  compute_isolation_enabled: typing.Union[bool, IResolvable] = None,
  host_sku: str = None
) -> None
```

###### `compute_isolation_enabled`<sup>Optional</sup> <a name="compute_isolation_enabled" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putComputeIsolation.parameter.computeIsolationEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#compute_isolation_enabled HdinsightKafkaCluster#compute_isolation_enabled}.

---

###### `host_sku`<sup>Optional</sup> <a name="host_sku" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putComputeIsolation.parameter.hostSku"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#host_sku HdinsightKafkaCluster#host_sku}.

---

##### `put_disk_encryption` <a name="put_disk_encryption" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putDiskEncryption"></a>

```python
def put_disk_encryption(
  value: typing.Union[IResolvable, typing.List[HdinsightKafkaClusterDiskEncryption]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putDiskEncryption.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryption">HdinsightKafkaClusterDiskEncryption</a>]]

---

##### `put_extension` <a name="put_extension" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putExtension"></a>

```python
def put_extension(
  log_analytics_workspace_id: str,
  primary_key: str
) -> None
```

###### `log_analytics_workspace_id`<sup>Required</sup> <a name="log_analytics_workspace_id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putExtension.parameter.logAnalyticsWorkspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#log_analytics_workspace_id HdinsightKafkaCluster#log_analytics_workspace_id}.

---

###### `primary_key`<sup>Required</sup> <a name="primary_key" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putExtension.parameter.primaryKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#primary_key HdinsightKafkaCluster#primary_key}.

---

##### `put_gateway` <a name="put_gateway" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putGateway"></a>

```python
def put_gateway(
  password: str,
  username: str
) -> None
```

###### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putGateway.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}.

---

###### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putGateway.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}.

---

##### `put_metastores` <a name="put_metastores" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putMetastores"></a>

```python
def put_metastores(
  ambari: HdinsightKafkaClusterMetastoresAmbari = None,
  hive: HdinsightKafkaClusterMetastoresHive = None,
  oozie: HdinsightKafkaClusterMetastoresOozie = None
) -> None
```

###### `ambari`<sup>Optional</sup> <a name="ambari" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putMetastores.parameter.ambari"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbari">HdinsightKafkaClusterMetastoresAmbari</a>

ambari block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#ambari HdinsightKafkaCluster#ambari}

---

###### `hive`<sup>Optional</sup> <a name="hive" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putMetastores.parameter.hive"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHive">HdinsightKafkaClusterMetastoresHive</a>

hive block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#hive HdinsightKafkaCluster#hive}

---

###### `oozie`<sup>Optional</sup> <a name="oozie" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putMetastores.parameter.oozie"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozie">HdinsightKafkaClusterMetastoresOozie</a>

oozie block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#oozie HdinsightKafkaCluster#oozie}

---

##### `put_monitor` <a name="put_monitor" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putMonitor"></a>

```python
def put_monitor(
  log_analytics_workspace_id: str,
  primary_key: str
) -> None
```

###### `log_analytics_workspace_id`<sup>Required</sup> <a name="log_analytics_workspace_id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putMonitor.parameter.logAnalyticsWorkspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#log_analytics_workspace_id HdinsightKafkaCluster#log_analytics_workspace_id}.

---

###### `primary_key`<sup>Required</sup> <a name="primary_key" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putMonitor.parameter.primaryKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#primary_key HdinsightKafkaCluster#primary_key}.

---

##### `put_network` <a name="put_network" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putNetwork"></a>

```python
def put_network(
  connection_direction: str = None,
  private_link_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `connection_direction`<sup>Optional</sup> <a name="connection_direction" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putNetwork.parameter.connectionDirection"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#connection_direction HdinsightKafkaCluster#connection_direction}.

---

###### `private_link_enabled`<sup>Optional</sup> <a name="private_link_enabled" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putNetwork.parameter.privateLinkEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#private_link_enabled HdinsightKafkaCluster#private_link_enabled}.

---

##### `put_rest_proxy` <a name="put_rest_proxy" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putRestProxy"></a>

```python
def put_rest_proxy(
  security_group_id: str,
  security_group_name: str
) -> None
```

###### `security_group_id`<sup>Required</sup> <a name="security_group_id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putRestProxy.parameter.securityGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#security_group_id HdinsightKafkaCluster#security_group_id}.

---

###### `security_group_name`<sup>Required</sup> <a name="security_group_name" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putRestProxy.parameter.securityGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#security_group_name HdinsightKafkaCluster#security_group_name}.

---

##### `put_roles` <a name="put_roles" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putRoles"></a>

```python
def put_roles(
  head_node: HdinsightKafkaClusterRolesHeadNode,
  worker_node: HdinsightKafkaClusterRolesWorkerNode,
  zookeeper_node: HdinsightKafkaClusterRolesZookeeperNode,
  kafka_management_node: HdinsightKafkaClusterRolesKafkaManagementNode = None
) -> None
```

###### `head_node`<sup>Required</sup> <a name="head_node" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putRoles.parameter.headNode"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode">HdinsightKafkaClusterRolesHeadNode</a>

head_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#head_node HdinsightKafkaCluster#head_node}

---

###### `worker_node`<sup>Required</sup> <a name="worker_node" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putRoles.parameter.workerNode"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode">HdinsightKafkaClusterRolesWorkerNode</a>

worker_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#worker_node HdinsightKafkaCluster#worker_node}

---

###### `zookeeper_node`<sup>Required</sup> <a name="zookeeper_node" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putRoles.parameter.zookeeperNode"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode">HdinsightKafkaClusterRolesZookeeperNode</a>

zookeeper_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#zookeeper_node HdinsightKafkaCluster#zookeeper_node}

---

###### `kafka_management_node`<sup>Optional</sup> <a name="kafka_management_node" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putRoles.parameter.kafkaManagementNode"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode">HdinsightKafkaClusterRolesKafkaManagementNode</a>

kafka_management_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#kafka_management_node HdinsightKafkaCluster#kafka_management_node}

---

##### `put_security_profile` <a name="put_security_profile" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putSecurityProfile"></a>

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

###### `aadds_resource_id`<sup>Required</sup> <a name="aadds_resource_id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putSecurityProfile.parameter.aaddsResourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#aadds_resource_id HdinsightKafkaCluster#aadds_resource_id}.

---

###### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putSecurityProfile.parameter.domainName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#domain_name HdinsightKafkaCluster#domain_name}.

---

###### `domain_username`<sup>Required</sup> <a name="domain_username" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putSecurityProfile.parameter.domainUsername"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#domain_username HdinsightKafkaCluster#domain_username}.

---

###### `domain_user_password`<sup>Required</sup> <a name="domain_user_password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putSecurityProfile.parameter.domainUserPassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#domain_user_password HdinsightKafkaCluster#domain_user_password}.

---

###### `ldaps_urls`<sup>Required</sup> <a name="ldaps_urls" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putSecurityProfile.parameter.ldapsUrls"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#ldaps_urls HdinsightKafkaCluster#ldaps_urls}.

---

###### `msi_resource_id`<sup>Required</sup> <a name="msi_resource_id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putSecurityProfile.parameter.msiResourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#msi_resource_id HdinsightKafkaCluster#msi_resource_id}.

---

###### `cluster_users_group_dns`<sup>Optional</sup> <a name="cluster_users_group_dns" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putSecurityProfile.parameter.clusterUsersGroupDns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#cluster_users_group_dns HdinsightKafkaCluster#cluster_users_group_dns}.

---

##### `put_storage_account` <a name="put_storage_account" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putStorageAccount"></a>

```python
def put_storage_account(
  value: typing.Union[IResolvable, typing.List[HdinsightKafkaClusterStorageAccount]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putStorageAccount.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccount">HdinsightKafkaClusterStorageAccount</a>]]

---

##### `put_storage_account_gen2` <a name="put_storage_account_gen2" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putStorageAccountGen2"></a>

```python
def put_storage_account_gen2(
  filesystem_id: str,
  is_default: typing.Union[bool, IResolvable],
  managed_identity_resource_id: str,
  storage_resource_id: str
) -> None
```

###### `filesystem_id`<sup>Required</sup> <a name="filesystem_id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putStorageAccountGen2.parameter.filesystemId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#filesystem_id HdinsightKafkaCluster#filesystem_id}.

---

###### `is_default`<sup>Required</sup> <a name="is_default" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putStorageAccountGen2.parameter.isDefault"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#is_default HdinsightKafkaCluster#is_default}.

---

###### `managed_identity_resource_id`<sup>Required</sup> <a name="managed_identity_resource_id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putStorageAccountGen2.parameter.managedIdentityResourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#managed_identity_resource_id HdinsightKafkaCluster#managed_identity_resource_id}.

---

###### `storage_resource_id`<sup>Required</sup> <a name="storage_resource_id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putStorageAccountGen2.parameter.storageResourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#storage_resource_id HdinsightKafkaCluster#storage_resource_id}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#create HdinsightKafkaCluster#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#delete HdinsightKafkaCluster#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#read HdinsightKafkaCluster#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#update HdinsightKafkaCluster#update}.

---

##### `reset_compute_isolation` <a name="reset_compute_isolation" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetComputeIsolation"></a>

```python
def reset_compute_isolation() -> None
```

##### `reset_disk_encryption` <a name="reset_disk_encryption" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetDiskEncryption"></a>

```python
def reset_disk_encryption() -> None
```

##### `reset_encryption_in_transit_enabled` <a name="reset_encryption_in_transit_enabled" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetEncryptionInTransitEnabled"></a>

```python
def reset_encryption_in_transit_enabled() -> None
```

##### `reset_extension` <a name="reset_extension" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetExtension"></a>

```python
def reset_extension() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_metastores` <a name="reset_metastores" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetMetastores"></a>

```python
def reset_metastores() -> None
```

##### `reset_monitor` <a name="reset_monitor" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetMonitor"></a>

```python
def reset_monitor() -> None
```

##### `reset_network` <a name="reset_network" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetNetwork"></a>

```python
def reset_network() -> None
```

##### `reset_rest_proxy` <a name="reset_rest_proxy" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetRestProxy"></a>

```python
def reset_rest_proxy() -> None
```

##### `reset_security_profile` <a name="reset_security_profile" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetSecurityProfile"></a>

```python
def reset_security_profile() -> None
```

##### `reset_storage_account` <a name="reset_storage_account" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetStorageAccount"></a>

```python
def reset_storage_account() -> None
```

##### `reset_storage_account_gen2` <a name="reset_storage_account_gen2" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetStorageAccountGen2"></a>

```python
def reset_storage_account_gen2() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_tls_min_version` <a name="reset_tls_min_version" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetTlsMinVersion"></a>

```python
def reset_tls_min_version() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a HdinsightKafkaCluster resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_kafka_cluster

hdinsightKafkaCluster.HdinsightKafkaCluster.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_kafka_cluster

hdinsightKafkaCluster.HdinsightKafkaCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_kafka_cluster

hdinsightKafkaCluster.HdinsightKafkaCluster.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_kafka_cluster

hdinsightKafkaCluster.HdinsightKafkaCluster.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a HdinsightKafkaCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the HdinsightKafkaCluster to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing HdinsightKafkaCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the HdinsightKafkaCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.componentVersion">component_version</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference">HdinsightKafkaClusterComponentVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.computeIsolation">compute_isolation</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference">HdinsightKafkaClusterComputeIsolationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.diskEncryption">disk_encryption</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList">HdinsightKafkaClusterDiskEncryptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.extension">extension</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference">HdinsightKafkaClusterExtensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.gateway">gateway</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference">HdinsightKafkaClusterGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.httpsEndpoint">https_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.kafkaRestProxyEndpoint">kafka_rest_proxy_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.metastores">metastores</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference">HdinsightKafkaClusterMetastoresOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.monitor">monitor</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference">HdinsightKafkaClusterMonitorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.network">network</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference">HdinsightKafkaClusterNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.restProxy">rest_proxy</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference">HdinsightKafkaClusterRestProxyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.roles">roles</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference">HdinsightKafkaClusterRolesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.securityProfile">security_profile</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference">HdinsightKafkaClusterSecurityProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.sshEndpoint">ssh_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.storageAccount">storage_account</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList">HdinsightKafkaClusterStorageAccountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.storageAccountGen2">storage_account_gen2</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference">HdinsightKafkaClusterStorageAccountGen2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference">HdinsightKafkaClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.clusterVersionInput">cluster_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.componentVersionInput">component_version_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersion">HdinsightKafkaClusterComponentVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.computeIsolationInput">compute_isolation_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolation">HdinsightKafkaClusterComputeIsolation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.diskEncryptionInput">disk_encryption_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryption">HdinsightKafkaClusterDiskEncryption</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.encryptionInTransitEnabledInput">encryption_in_transit_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.extensionInput">extension_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtension">HdinsightKafkaClusterExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.gatewayInput">gateway_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGateway">HdinsightKafkaClusterGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.metastoresInput">metastores_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastores">HdinsightKafkaClusterMetastores</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.monitorInput">monitor_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitor">HdinsightKafkaClusterMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.networkInput">network_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetwork">HdinsightKafkaClusterNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.restProxyInput">rest_proxy_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxy">HdinsightKafkaClusterRestProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.rolesInput">roles_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRoles">HdinsightKafkaClusterRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.securityProfileInput">security_profile_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile">HdinsightKafkaClusterSecurityProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.storageAccountGen2Input">storage_account_gen2_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2">HdinsightKafkaClusterStorageAccountGen2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.storageAccountInput">storage_account_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccount">HdinsightKafkaClusterStorageAccount</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.tierInput">tier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeouts">HdinsightKafkaClusterTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.tlsMinVersionInput">tls_min_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.clusterVersion">cluster_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.encryptionInTransitEnabled">encryption_in_transit_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.tier">tier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.tlsMinVersion">tls_min_version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `component_version`<sup>Required</sup> <a name="component_version" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.componentVersion"></a>

```python
component_version: HdinsightKafkaClusterComponentVersionOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference">HdinsightKafkaClusterComponentVersionOutputReference</a>

---

##### `compute_isolation`<sup>Required</sup> <a name="compute_isolation" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.computeIsolation"></a>

```python
compute_isolation: HdinsightKafkaClusterComputeIsolationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference">HdinsightKafkaClusterComputeIsolationOutputReference</a>

---

##### `disk_encryption`<sup>Required</sup> <a name="disk_encryption" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.diskEncryption"></a>

```python
disk_encryption: HdinsightKafkaClusterDiskEncryptionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList">HdinsightKafkaClusterDiskEncryptionList</a>

---

##### `extension`<sup>Required</sup> <a name="extension" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.extension"></a>

```python
extension: HdinsightKafkaClusterExtensionOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference">HdinsightKafkaClusterExtensionOutputReference</a>

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.gateway"></a>

```python
gateway: HdinsightKafkaClusterGatewayOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference">HdinsightKafkaClusterGatewayOutputReference</a>

---

##### `https_endpoint`<sup>Required</sup> <a name="https_endpoint" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.httpsEndpoint"></a>

```python
https_endpoint: str
```

- *Type:* str

---

##### `kafka_rest_proxy_endpoint`<sup>Required</sup> <a name="kafka_rest_proxy_endpoint" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.kafkaRestProxyEndpoint"></a>

```python
kafka_rest_proxy_endpoint: str
```

- *Type:* str

---

##### `metastores`<sup>Required</sup> <a name="metastores" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.metastores"></a>

```python
metastores: HdinsightKafkaClusterMetastoresOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference">HdinsightKafkaClusterMetastoresOutputReference</a>

---

##### `monitor`<sup>Required</sup> <a name="monitor" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.monitor"></a>

```python
monitor: HdinsightKafkaClusterMonitorOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference">HdinsightKafkaClusterMonitorOutputReference</a>

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.network"></a>

```python
network: HdinsightKafkaClusterNetworkOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference">HdinsightKafkaClusterNetworkOutputReference</a>

---

##### `rest_proxy`<sup>Required</sup> <a name="rest_proxy" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.restProxy"></a>

```python
rest_proxy: HdinsightKafkaClusterRestProxyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference">HdinsightKafkaClusterRestProxyOutputReference</a>

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.roles"></a>

```python
roles: HdinsightKafkaClusterRolesOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference">HdinsightKafkaClusterRolesOutputReference</a>

---

##### `security_profile`<sup>Required</sup> <a name="security_profile" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.securityProfile"></a>

```python
security_profile: HdinsightKafkaClusterSecurityProfileOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference">HdinsightKafkaClusterSecurityProfileOutputReference</a>

---

##### `ssh_endpoint`<sup>Required</sup> <a name="ssh_endpoint" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.sshEndpoint"></a>

```python
ssh_endpoint: str
```

- *Type:* str

---

##### `storage_account`<sup>Required</sup> <a name="storage_account" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.storageAccount"></a>

```python
storage_account: HdinsightKafkaClusterStorageAccountList
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList">HdinsightKafkaClusterStorageAccountList</a>

---

##### `storage_account_gen2`<sup>Required</sup> <a name="storage_account_gen2" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.storageAccountGen2"></a>

```python
storage_account_gen2: HdinsightKafkaClusterStorageAccountGen2OutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference">HdinsightKafkaClusterStorageAccountGen2OutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.timeouts"></a>

```python
timeouts: HdinsightKafkaClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference">HdinsightKafkaClusterTimeoutsOutputReference</a>

---

##### `cluster_version_input`<sup>Optional</sup> <a name="cluster_version_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.clusterVersionInput"></a>

```python
cluster_version_input: str
```

- *Type:* str

---

##### `component_version_input`<sup>Optional</sup> <a name="component_version_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.componentVersionInput"></a>

```python
component_version_input: HdinsightKafkaClusterComponentVersion
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersion">HdinsightKafkaClusterComponentVersion</a>

---

##### `compute_isolation_input`<sup>Optional</sup> <a name="compute_isolation_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.computeIsolationInput"></a>

```python
compute_isolation_input: HdinsightKafkaClusterComputeIsolation
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolation">HdinsightKafkaClusterComputeIsolation</a>

---

##### `disk_encryption_input`<sup>Optional</sup> <a name="disk_encryption_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.diskEncryptionInput"></a>

```python
disk_encryption_input: typing.Union[IResolvable, typing.List[HdinsightKafkaClusterDiskEncryption]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryption">HdinsightKafkaClusterDiskEncryption</a>]]

---

##### `encryption_in_transit_enabled_input`<sup>Optional</sup> <a name="encryption_in_transit_enabled_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.encryptionInTransitEnabledInput"></a>

```python
encryption_in_transit_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `extension_input`<sup>Optional</sup> <a name="extension_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.extensionInput"></a>

```python
extension_input: HdinsightKafkaClusterExtension
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtension">HdinsightKafkaClusterExtension</a>

---

##### `gateway_input`<sup>Optional</sup> <a name="gateway_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.gatewayInput"></a>

```python
gateway_input: HdinsightKafkaClusterGateway
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGateway">HdinsightKafkaClusterGateway</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `metastores_input`<sup>Optional</sup> <a name="metastores_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.metastoresInput"></a>

```python
metastores_input: HdinsightKafkaClusterMetastores
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastores">HdinsightKafkaClusterMetastores</a>

---

##### `monitor_input`<sup>Optional</sup> <a name="monitor_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.monitorInput"></a>

```python
monitor_input: HdinsightKafkaClusterMonitor
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitor">HdinsightKafkaClusterMonitor</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.networkInput"></a>

```python
network_input: HdinsightKafkaClusterNetwork
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetwork">HdinsightKafkaClusterNetwork</a>

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `rest_proxy_input`<sup>Optional</sup> <a name="rest_proxy_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.restProxyInput"></a>

```python
rest_proxy_input: HdinsightKafkaClusterRestProxy
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxy">HdinsightKafkaClusterRestProxy</a>

---

##### `roles_input`<sup>Optional</sup> <a name="roles_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.rolesInput"></a>

```python
roles_input: HdinsightKafkaClusterRoles
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRoles">HdinsightKafkaClusterRoles</a>

---

##### `security_profile_input`<sup>Optional</sup> <a name="security_profile_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.securityProfileInput"></a>

```python
security_profile_input: HdinsightKafkaClusterSecurityProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile">HdinsightKafkaClusterSecurityProfile</a>

---

##### `storage_account_gen2_input`<sup>Optional</sup> <a name="storage_account_gen2_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.storageAccountGen2Input"></a>

```python
storage_account_gen2_input: HdinsightKafkaClusterStorageAccountGen2
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2">HdinsightKafkaClusterStorageAccountGen2</a>

---

##### `storage_account_input`<sup>Optional</sup> <a name="storage_account_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.storageAccountInput"></a>

```python
storage_account_input: typing.Union[IResolvable, typing.List[HdinsightKafkaClusterStorageAccount]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccount">HdinsightKafkaClusterStorageAccount</a>]]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tier_input`<sup>Optional</sup> <a name="tier_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.tierInput"></a>

```python
tier_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, HdinsightKafkaClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeouts">HdinsightKafkaClusterTimeouts</a>]

---

##### `tls_min_version_input`<sup>Optional</sup> <a name="tls_min_version_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.tlsMinVersionInput"></a>

```python
tls_min_version_input: str
```

- *Type:* str

---

##### `cluster_version`<sup>Required</sup> <a name="cluster_version" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.clusterVersion"></a>

```python
cluster_version: str
```

- *Type:* str

---

##### `encryption_in_transit_enabled`<sup>Required</sup> <a name="encryption_in_transit_enabled" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.encryptionInTransitEnabled"></a>

```python
encryption_in_transit_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.tier"></a>

```python
tier: str
```

- *Type:* str

---

##### `tls_min_version`<sup>Required</sup> <a name="tls_min_version" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.tlsMinVersion"></a>

```python
tls_min_version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### HdinsightKafkaClusterComponentVersion <a name="HdinsightKafkaClusterComponentVersion" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersion.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_kafka_cluster

hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersion(
  kafka: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersion.property.kafka">kafka</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#kafka HdinsightKafkaCluster#kafka}. |

---

##### `kafka`<sup>Required</sup> <a name="kafka" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersion.property.kafka"></a>

```python
kafka: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#kafka HdinsightKafkaCluster#kafka}.

---

### HdinsightKafkaClusterComputeIsolation <a name="HdinsightKafkaClusterComputeIsolation" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolation.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_kafka_cluster

hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolation(
  compute_isolation_enabled: typing.Union[bool, IResolvable] = None,
  host_sku: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolation.property.computeIsolationEnabled">compute_isolation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#compute_isolation_enabled HdinsightKafkaCluster#compute_isolation_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolation.property.hostSku">host_sku</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#host_sku HdinsightKafkaCluster#host_sku}. |

---

##### `compute_isolation_enabled`<sup>Optional</sup> <a name="compute_isolation_enabled" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolation.property.computeIsolationEnabled"></a>

```python
compute_isolation_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#compute_isolation_enabled HdinsightKafkaCluster#compute_isolation_enabled}.

---

##### `host_sku`<sup>Optional</sup> <a name="host_sku" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolation.property.hostSku"></a>

```python
host_sku: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#host_sku HdinsightKafkaCluster#host_sku}.

---

### HdinsightKafkaClusterConfig <a name="HdinsightKafkaClusterConfig" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_kafka_cluster

hdinsightKafkaCluster.HdinsightKafkaClusterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_version: str,
  component_version: HdinsightKafkaClusterComponentVersion,
  gateway: HdinsightKafkaClusterGateway,
  location: str,
  name: str,
  resource_group_name: str,
  roles: HdinsightKafkaClusterRoles,
  tier: str,
  compute_isolation: HdinsightKafkaClusterComputeIsolation = None,
  disk_encryption: typing.Union[IResolvable, typing.List[HdinsightKafkaClusterDiskEncryption]] = None,
  encryption_in_transit_enabled: typing.Union[bool, IResolvable] = None,
  extension: HdinsightKafkaClusterExtension = None,
  id: str = None,
  metastores: HdinsightKafkaClusterMetastores = None,
  monitor: HdinsightKafkaClusterMonitor = None,
  network: HdinsightKafkaClusterNetwork = None,
  rest_proxy: HdinsightKafkaClusterRestProxy = None,
  security_profile: HdinsightKafkaClusterSecurityProfile = None,
  storage_account: typing.Union[IResolvable, typing.List[HdinsightKafkaClusterStorageAccount]] = None,
  storage_account_gen2: HdinsightKafkaClusterStorageAccountGen2 = None,
  tags: typing.Mapping[str] = None,
  timeouts: HdinsightKafkaClusterTimeouts = None,
  tls_min_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.clusterVersion">cluster_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#cluster_version HdinsightKafkaCluster#cluster_version}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.componentVersion">component_version</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersion">HdinsightKafkaClusterComponentVersion</a></code> | component_version block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.gateway">gateway</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGateway">HdinsightKafkaClusterGateway</a></code> | gateway block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#location HdinsightKafkaCluster#location}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#name HdinsightKafkaCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#resource_group_name HdinsightKafkaCluster#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.roles">roles</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRoles">HdinsightKafkaClusterRoles</a></code> | roles block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.tier">tier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#tier HdinsightKafkaCluster#tier}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.computeIsolation">compute_isolation</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolation">HdinsightKafkaClusterComputeIsolation</a></code> | compute_isolation block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.diskEncryption">disk_encryption</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryption">HdinsightKafkaClusterDiskEncryption</a>]]</code> | disk_encryption block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.encryptionInTransitEnabled">encryption_in_transit_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#encryption_in_transit_enabled HdinsightKafkaCluster#encryption_in_transit_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.extension">extension</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtension">HdinsightKafkaClusterExtension</a></code> | extension block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#id HdinsightKafkaCluster#id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.metastores">metastores</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastores">HdinsightKafkaClusterMetastores</a></code> | metastores block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.monitor">monitor</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitor">HdinsightKafkaClusterMonitor</a></code> | monitor block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.network">network</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetwork">HdinsightKafkaClusterNetwork</a></code> | network block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.restProxy">rest_proxy</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxy">HdinsightKafkaClusterRestProxy</a></code> | rest_proxy block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.securityProfile">security_profile</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile">HdinsightKafkaClusterSecurityProfile</a></code> | security_profile block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.storageAccount">storage_account</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccount">HdinsightKafkaClusterStorageAccount</a>]]</code> | storage_account block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.storageAccountGen2">storage_account_gen2</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2">HdinsightKafkaClusterStorageAccountGen2</a></code> | storage_account_gen2 block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#tags HdinsightKafkaCluster#tags}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeouts">HdinsightKafkaClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.tlsMinVersion">tls_min_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#tls_min_version HdinsightKafkaCluster#tls_min_version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_version`<sup>Required</sup> <a name="cluster_version" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.clusterVersion"></a>

```python
cluster_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#cluster_version HdinsightKafkaCluster#cluster_version}.

---

##### `component_version`<sup>Required</sup> <a name="component_version" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.componentVersion"></a>

```python
component_version: HdinsightKafkaClusterComponentVersion
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersion">HdinsightKafkaClusterComponentVersion</a>

component_version block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#component_version HdinsightKafkaCluster#component_version}

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.gateway"></a>

```python
gateway: HdinsightKafkaClusterGateway
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGateway">HdinsightKafkaClusterGateway</a>

gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#gateway HdinsightKafkaCluster#gateway}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#location HdinsightKafkaCluster#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#name HdinsightKafkaCluster#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#resource_group_name HdinsightKafkaCluster#resource_group_name}.

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.roles"></a>

```python
roles: HdinsightKafkaClusterRoles
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRoles">HdinsightKafkaClusterRoles</a>

roles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#roles HdinsightKafkaCluster#roles}

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.tier"></a>

```python
tier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#tier HdinsightKafkaCluster#tier}.

---

##### `compute_isolation`<sup>Optional</sup> <a name="compute_isolation" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.computeIsolation"></a>

```python
compute_isolation: HdinsightKafkaClusterComputeIsolation
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolation">HdinsightKafkaClusterComputeIsolation</a>

compute_isolation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#compute_isolation HdinsightKafkaCluster#compute_isolation}

---

##### `disk_encryption`<sup>Optional</sup> <a name="disk_encryption" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.diskEncryption"></a>

```python
disk_encryption: typing.Union[IResolvable, typing.List[HdinsightKafkaClusterDiskEncryption]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryption">HdinsightKafkaClusterDiskEncryption</a>]]

disk_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#disk_encryption HdinsightKafkaCluster#disk_encryption}

---

##### `encryption_in_transit_enabled`<sup>Optional</sup> <a name="encryption_in_transit_enabled" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.encryptionInTransitEnabled"></a>

```python
encryption_in_transit_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#encryption_in_transit_enabled HdinsightKafkaCluster#encryption_in_transit_enabled}.

---

##### `extension`<sup>Optional</sup> <a name="extension" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.extension"></a>

```python
extension: HdinsightKafkaClusterExtension
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtension">HdinsightKafkaClusterExtension</a>

extension block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#extension HdinsightKafkaCluster#extension}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#id HdinsightKafkaCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metastores`<sup>Optional</sup> <a name="metastores" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.metastores"></a>

```python
metastores: HdinsightKafkaClusterMetastores
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastores">HdinsightKafkaClusterMetastores</a>

metastores block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#metastores HdinsightKafkaCluster#metastores}

---

##### `monitor`<sup>Optional</sup> <a name="monitor" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.monitor"></a>

```python
monitor: HdinsightKafkaClusterMonitor
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitor">HdinsightKafkaClusterMonitor</a>

monitor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#monitor HdinsightKafkaCluster#monitor}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.network"></a>

```python
network: HdinsightKafkaClusterNetwork
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetwork">HdinsightKafkaClusterNetwork</a>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#network HdinsightKafkaCluster#network}

---

##### `rest_proxy`<sup>Optional</sup> <a name="rest_proxy" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.restProxy"></a>

```python
rest_proxy: HdinsightKafkaClusterRestProxy
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxy">HdinsightKafkaClusterRestProxy</a>

rest_proxy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#rest_proxy HdinsightKafkaCluster#rest_proxy}

---

##### `security_profile`<sup>Optional</sup> <a name="security_profile" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.securityProfile"></a>

```python
security_profile: HdinsightKafkaClusterSecurityProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile">HdinsightKafkaClusterSecurityProfile</a>

security_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#security_profile HdinsightKafkaCluster#security_profile}

---

##### `storage_account`<sup>Optional</sup> <a name="storage_account" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.storageAccount"></a>

```python
storage_account: typing.Union[IResolvable, typing.List[HdinsightKafkaClusterStorageAccount]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccount">HdinsightKafkaClusterStorageAccount</a>]]

storage_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#storage_account HdinsightKafkaCluster#storage_account}

---

##### `storage_account_gen2`<sup>Optional</sup> <a name="storage_account_gen2" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.storageAccountGen2"></a>

```python
storage_account_gen2: HdinsightKafkaClusterStorageAccountGen2
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2">HdinsightKafkaClusterStorageAccountGen2</a>

storage_account_gen2 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#storage_account_gen2 HdinsightKafkaCluster#storage_account_gen2}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#tags HdinsightKafkaCluster#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.timeouts"></a>

```python
timeouts: HdinsightKafkaClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeouts">HdinsightKafkaClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#timeouts HdinsightKafkaCluster#timeouts}

---

##### `tls_min_version`<sup>Optional</sup> <a name="tls_min_version" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.tlsMinVersion"></a>

```python
tls_min_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#tls_min_version HdinsightKafkaCluster#tls_min_version}.

---

### HdinsightKafkaClusterDiskEncryption <a name="HdinsightKafkaClusterDiskEncryption" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryption.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_kafka_cluster

hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryption(
  encryption_algorithm: str = None,
  encryption_at_host_enabled: typing.Union[bool, IResolvable] = None,
  key_vault_key_id: str = None,
  key_vault_managed_identity_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryption.property.encryptionAlgorithm">encryption_algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#encryption_algorithm HdinsightKafkaCluster#encryption_algorithm}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryption.property.encryptionAtHostEnabled">encryption_at_host_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#encryption_at_host_enabled HdinsightKafkaCluster#encryption_at_host_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryption.property.keyVaultKeyId">key_vault_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#key_vault_key_id HdinsightKafkaCluster#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryption.property.keyVaultManagedIdentityId">key_vault_managed_identity_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#key_vault_managed_identity_id HdinsightKafkaCluster#key_vault_managed_identity_id}. |

---

##### `encryption_algorithm`<sup>Optional</sup> <a name="encryption_algorithm" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryption.property.encryptionAlgorithm"></a>

```python
encryption_algorithm: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#encryption_algorithm HdinsightKafkaCluster#encryption_algorithm}.

---

##### `encryption_at_host_enabled`<sup>Optional</sup> <a name="encryption_at_host_enabled" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryption.property.encryptionAtHostEnabled"></a>

```python
encryption_at_host_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#encryption_at_host_enabled HdinsightKafkaCluster#encryption_at_host_enabled}.

---

##### `key_vault_key_id`<sup>Optional</sup> <a name="key_vault_key_id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryption.property.keyVaultKeyId"></a>

```python
key_vault_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#key_vault_key_id HdinsightKafkaCluster#key_vault_key_id}.

---

##### `key_vault_managed_identity_id`<sup>Optional</sup> <a name="key_vault_managed_identity_id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryption.property.keyVaultManagedIdentityId"></a>

```python
key_vault_managed_identity_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#key_vault_managed_identity_id HdinsightKafkaCluster#key_vault_managed_identity_id}.

---

### HdinsightKafkaClusterExtension <a name="HdinsightKafkaClusterExtension" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtension.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_kafka_cluster

hdinsightKafkaCluster.HdinsightKafkaClusterExtension(
  log_analytics_workspace_id: str,
  primary_key: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtension.property.logAnalyticsWorkspaceId">log_analytics_workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#log_analytics_workspace_id HdinsightKafkaCluster#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtension.property.primaryKey">primary_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#primary_key HdinsightKafkaCluster#primary_key}. |

---

##### `log_analytics_workspace_id`<sup>Required</sup> <a name="log_analytics_workspace_id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtension.property.logAnalyticsWorkspaceId"></a>

```python
log_analytics_workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#log_analytics_workspace_id HdinsightKafkaCluster#log_analytics_workspace_id}.

---

##### `primary_key`<sup>Required</sup> <a name="primary_key" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtension.property.primaryKey"></a>

```python
primary_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#primary_key HdinsightKafkaCluster#primary_key}.

---

### HdinsightKafkaClusterGateway <a name="HdinsightKafkaClusterGateway" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGateway"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGateway.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_kafka_cluster

hdinsightKafkaCluster.HdinsightKafkaClusterGateway(
  password: str,
  username: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGateway.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGateway.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGateway.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGateway.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}.

---

### HdinsightKafkaClusterMetastores <a name="HdinsightKafkaClusterMetastores" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastores"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastores.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_kafka_cluster

hdinsightKafkaCluster.HdinsightKafkaClusterMetastores(
  ambari: HdinsightKafkaClusterMetastoresAmbari = None,
  hive: HdinsightKafkaClusterMetastoresHive = None,
  oozie: HdinsightKafkaClusterMetastoresOozie = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastores.property.ambari">ambari</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbari">HdinsightKafkaClusterMetastoresAmbari</a></code> | ambari block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastores.property.hive">hive</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHive">HdinsightKafkaClusterMetastoresHive</a></code> | hive block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastores.property.oozie">oozie</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozie">HdinsightKafkaClusterMetastoresOozie</a></code> | oozie block. |

---

##### `ambari`<sup>Optional</sup> <a name="ambari" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastores.property.ambari"></a>

```python
ambari: HdinsightKafkaClusterMetastoresAmbari
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbari">HdinsightKafkaClusterMetastoresAmbari</a>

ambari block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#ambari HdinsightKafkaCluster#ambari}

---

##### `hive`<sup>Optional</sup> <a name="hive" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastores.property.hive"></a>

```python
hive: HdinsightKafkaClusterMetastoresHive
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHive">HdinsightKafkaClusterMetastoresHive</a>

hive block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#hive HdinsightKafkaCluster#hive}

---

##### `oozie`<sup>Optional</sup> <a name="oozie" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastores.property.oozie"></a>

```python
oozie: HdinsightKafkaClusterMetastoresOozie
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozie">HdinsightKafkaClusterMetastoresOozie</a>

oozie block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#oozie HdinsightKafkaCluster#oozie}

---

### HdinsightKafkaClusterMetastoresAmbari <a name="HdinsightKafkaClusterMetastoresAmbari" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbari"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbari.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_kafka_cluster

hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbari(
  database_name: str,
  password: str,
  server: str,
  username: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbari.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#database_name HdinsightKafkaCluster#database_name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbari.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbari.property.server">server</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#server HdinsightKafkaCluster#server}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbari.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}. |

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbari.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#database_name HdinsightKafkaCluster#database_name}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbari.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}.

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbari.property.server"></a>

```python
server: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#server HdinsightKafkaCluster#server}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbari.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}.

---

### HdinsightKafkaClusterMetastoresHive <a name="HdinsightKafkaClusterMetastoresHive" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHive"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHive.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_kafka_cluster

hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHive(
  database_name: str,
  password: str,
  server: str,
  username: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHive.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#database_name HdinsightKafkaCluster#database_name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHive.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHive.property.server">server</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#server HdinsightKafkaCluster#server}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHive.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}. |

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHive.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#database_name HdinsightKafkaCluster#database_name}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHive.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}.

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHive.property.server"></a>

```python
server: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#server HdinsightKafkaCluster#server}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHive.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}.

---

### HdinsightKafkaClusterMetastoresOozie <a name="HdinsightKafkaClusterMetastoresOozie" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozie"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozie.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_kafka_cluster

hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozie(
  database_name: str,
  password: str,
  server: str,
  username: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozie.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#database_name HdinsightKafkaCluster#database_name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozie.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozie.property.server">server</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#server HdinsightKafkaCluster#server}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozie.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}. |

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozie.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#database_name HdinsightKafkaCluster#database_name}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozie.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}.

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozie.property.server"></a>

```python
server: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#server HdinsightKafkaCluster#server}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozie.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}.

---

### HdinsightKafkaClusterMonitor <a name="HdinsightKafkaClusterMonitor" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitor.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_kafka_cluster

hdinsightKafkaCluster.HdinsightKafkaClusterMonitor(
  log_analytics_workspace_id: str,
  primary_key: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitor.property.logAnalyticsWorkspaceId">log_analytics_workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#log_analytics_workspace_id HdinsightKafkaCluster#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitor.property.primaryKey">primary_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#primary_key HdinsightKafkaCluster#primary_key}. |

---

##### `log_analytics_workspace_id`<sup>Required</sup> <a name="log_analytics_workspace_id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitor.property.logAnalyticsWorkspaceId"></a>

```python
log_analytics_workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#log_analytics_workspace_id HdinsightKafkaCluster#log_analytics_workspace_id}.

---

##### `primary_key`<sup>Required</sup> <a name="primary_key" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitor.property.primaryKey"></a>

```python
primary_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#primary_key HdinsightKafkaCluster#primary_key}.

---

### HdinsightKafkaClusterNetwork <a name="HdinsightKafkaClusterNetwork" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetwork.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_kafka_cluster

hdinsightKafkaCluster.HdinsightKafkaClusterNetwork(
  connection_direction: str = None,
  private_link_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetwork.property.connectionDirection">connection_direction</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#connection_direction HdinsightKafkaCluster#connection_direction}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetwork.property.privateLinkEnabled">private_link_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#private_link_enabled HdinsightKafkaCluster#private_link_enabled}. |

---

##### `connection_direction`<sup>Optional</sup> <a name="connection_direction" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetwork.property.connectionDirection"></a>

```python
connection_direction: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#connection_direction HdinsightKafkaCluster#connection_direction}.

---

##### `private_link_enabled`<sup>Optional</sup> <a name="private_link_enabled" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetwork.property.privateLinkEnabled"></a>

```python
private_link_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#private_link_enabled HdinsightKafkaCluster#private_link_enabled}.

---

### HdinsightKafkaClusterRestProxy <a name="HdinsightKafkaClusterRestProxy" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_kafka_cluster

hdinsightKafkaCluster.HdinsightKafkaClusterRestProxy(
  security_group_id: str,
  security_group_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxy.property.securityGroupId">security_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#security_group_id HdinsightKafkaCluster#security_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxy.property.securityGroupName">security_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#security_group_name HdinsightKafkaCluster#security_group_name}. |

---

##### `security_group_id`<sup>Required</sup> <a name="security_group_id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxy.property.securityGroupId"></a>

```python
security_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#security_group_id HdinsightKafkaCluster#security_group_id}.

---

##### `security_group_name`<sup>Required</sup> <a name="security_group_name" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxy.property.securityGroupName"></a>

```python
security_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#security_group_name HdinsightKafkaCluster#security_group_name}.

---

### HdinsightKafkaClusterRoles <a name="HdinsightKafkaClusterRoles" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRoles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRoles.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_kafka_cluster

hdinsightKafkaCluster.HdinsightKafkaClusterRoles(
  head_node: HdinsightKafkaClusterRolesHeadNode,
  worker_node: HdinsightKafkaClusterRolesWorkerNode,
  zookeeper_node: HdinsightKafkaClusterRolesZookeeperNode,
  kafka_management_node: HdinsightKafkaClusterRolesKafkaManagementNode = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRoles.property.headNode">head_node</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode">HdinsightKafkaClusterRolesHeadNode</a></code> | head_node block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRoles.property.workerNode">worker_node</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode">HdinsightKafkaClusterRolesWorkerNode</a></code> | worker_node block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRoles.property.zookeeperNode">zookeeper_node</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode">HdinsightKafkaClusterRolesZookeeperNode</a></code> | zookeeper_node block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRoles.property.kafkaManagementNode">kafka_management_node</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode">HdinsightKafkaClusterRolesKafkaManagementNode</a></code> | kafka_management_node block. |

---

##### `head_node`<sup>Required</sup> <a name="head_node" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRoles.property.headNode"></a>

```python
head_node: HdinsightKafkaClusterRolesHeadNode
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode">HdinsightKafkaClusterRolesHeadNode</a>

head_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#head_node HdinsightKafkaCluster#head_node}

---

##### `worker_node`<sup>Required</sup> <a name="worker_node" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRoles.property.workerNode"></a>

```python
worker_node: HdinsightKafkaClusterRolesWorkerNode
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode">HdinsightKafkaClusterRolesWorkerNode</a>

worker_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#worker_node HdinsightKafkaCluster#worker_node}

---

##### `zookeeper_node`<sup>Required</sup> <a name="zookeeper_node" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRoles.property.zookeeperNode"></a>

```python
zookeeper_node: HdinsightKafkaClusterRolesZookeeperNode
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode">HdinsightKafkaClusterRolesZookeeperNode</a>

zookeeper_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#zookeeper_node HdinsightKafkaCluster#zookeeper_node}

---

##### `kafka_management_node`<sup>Optional</sup> <a name="kafka_management_node" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRoles.property.kafkaManagementNode"></a>

```python
kafka_management_node: HdinsightKafkaClusterRolesKafkaManagementNode
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode">HdinsightKafkaClusterRolesKafkaManagementNode</a>

kafka_management_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#kafka_management_node HdinsightKafkaCluster#kafka_management_node}

---

### HdinsightKafkaClusterRolesHeadNode <a name="HdinsightKafkaClusterRolesHeadNode" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_kafka_cluster

hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode(
  username: str,
  vm_size: str,
  password: str = None,
  script_actions: typing.Union[IResolvable, typing.List[HdinsightKafkaClusterRolesHeadNodeScriptActions]] = None,
  ssh_keys: typing.List[str] = None,
  subnet_id: str = None,
  virtual_network_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode.property.vmSize">vm_size</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#vm_size HdinsightKafkaCluster#vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode.property.scriptActions">script_actions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActions">HdinsightKafkaClusterRolesHeadNodeScriptActions</a>]]</code> | script_actions block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode.property.sshKeys">ssh_keys</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#ssh_keys HdinsightKafkaCluster#ssh_keys}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#subnet_id HdinsightKafkaCluster#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode.property.virtualNetworkId">virtual_network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#virtual_network_id HdinsightKafkaCluster#virtual_network_id}. |

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}.

---

##### `vm_size`<sup>Required</sup> <a name="vm_size" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode.property.vmSize"></a>

```python
vm_size: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#vm_size HdinsightKafkaCluster#vm_size}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}.

---

##### `script_actions`<sup>Optional</sup> <a name="script_actions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode.property.scriptActions"></a>

```python
script_actions: typing.Union[IResolvable, typing.List[HdinsightKafkaClusterRolesHeadNodeScriptActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActions">HdinsightKafkaClusterRolesHeadNodeScriptActions</a>]]

script_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#script_actions HdinsightKafkaCluster#script_actions}

---

##### `ssh_keys`<sup>Optional</sup> <a name="ssh_keys" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode.property.sshKeys"></a>

```python
ssh_keys: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#ssh_keys HdinsightKafkaCluster#ssh_keys}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#subnet_id HdinsightKafkaCluster#subnet_id}.

---

##### `virtual_network_id`<sup>Optional</sup> <a name="virtual_network_id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode.property.virtualNetworkId"></a>

```python
virtual_network_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#virtual_network_id HdinsightKafkaCluster#virtual_network_id}.

---

### HdinsightKafkaClusterRolesHeadNodeScriptActions <a name="HdinsightKafkaClusterRolesHeadNodeScriptActions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActions.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_kafka_cluster

hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActions(
  name: str,
  uri: str,
  parameters: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActions.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#name HdinsightKafkaCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActions.property.uri">uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#uri HdinsightKafkaCluster#uri}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActions.property.parameters">parameters</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#parameters HdinsightKafkaCluster#parameters}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActions.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#name HdinsightKafkaCluster#name}.

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActions.property.uri"></a>

```python
uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#uri HdinsightKafkaCluster#uri}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActions.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#parameters HdinsightKafkaCluster#parameters}.

---

### HdinsightKafkaClusterRolesKafkaManagementNode <a name="HdinsightKafkaClusterRolesKafkaManagementNode" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_kafka_cluster

hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode(
  username: str,
  vm_size: str,
  password: str = None,
  script_actions: typing.Union[IResolvable, typing.List[HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions]] = None,
  ssh_keys: typing.List[str] = None,
  subnet_id: str = None,
  virtual_network_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode.property.vmSize">vm_size</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#vm_size HdinsightKafkaCluster#vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode.property.scriptActions">script_actions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions">HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions</a>]]</code> | script_actions block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode.property.sshKeys">ssh_keys</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#ssh_keys HdinsightKafkaCluster#ssh_keys}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#subnet_id HdinsightKafkaCluster#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode.property.virtualNetworkId">virtual_network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#virtual_network_id HdinsightKafkaCluster#virtual_network_id}. |

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}.

---

##### `vm_size`<sup>Required</sup> <a name="vm_size" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode.property.vmSize"></a>

```python
vm_size: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#vm_size HdinsightKafkaCluster#vm_size}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}.

---

##### `script_actions`<sup>Optional</sup> <a name="script_actions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode.property.scriptActions"></a>

```python
script_actions: typing.Union[IResolvable, typing.List[HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions">HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions</a>]]

script_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#script_actions HdinsightKafkaCluster#script_actions}

---

##### `ssh_keys`<sup>Optional</sup> <a name="ssh_keys" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode.property.sshKeys"></a>

```python
ssh_keys: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#ssh_keys HdinsightKafkaCluster#ssh_keys}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#subnet_id HdinsightKafkaCluster#subnet_id}.

---

##### `virtual_network_id`<sup>Optional</sup> <a name="virtual_network_id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode.property.virtualNetworkId"></a>

```python
virtual_network_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#virtual_network_id HdinsightKafkaCluster#virtual_network_id}.

---

### HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions <a name="HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_kafka_cluster

hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions(
  name: str,
  uri: str,
  parameters: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#name HdinsightKafkaCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions.property.uri">uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#uri HdinsightKafkaCluster#uri}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions.property.parameters">parameters</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#parameters HdinsightKafkaCluster#parameters}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#name HdinsightKafkaCluster#name}.

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions.property.uri"></a>

```python
uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#uri HdinsightKafkaCluster#uri}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#parameters HdinsightKafkaCluster#parameters}.

---

### HdinsightKafkaClusterRolesWorkerNode <a name="HdinsightKafkaClusterRolesWorkerNode" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_kafka_cluster

hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode(
  number_of_disks_per_node: typing.Union[int, float],
  target_instance_count: typing.Union[int, float],
  username: str,
  vm_size: str,
  password: str = None,
  script_actions: typing.Union[IResolvable, typing.List[HdinsightKafkaClusterRolesWorkerNodeScriptActions]] = None,
  ssh_keys: typing.List[str] = None,
  subnet_id: str = None,
  virtual_network_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode.property.numberOfDisksPerNode">number_of_disks_per_node</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#number_of_disks_per_node HdinsightKafkaCluster#number_of_disks_per_node}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode.property.targetInstanceCount">target_instance_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#target_instance_count HdinsightKafkaCluster#target_instance_count}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode.property.vmSize">vm_size</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#vm_size HdinsightKafkaCluster#vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode.property.scriptActions">script_actions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActions">HdinsightKafkaClusterRolesWorkerNodeScriptActions</a>]]</code> | script_actions block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode.property.sshKeys">ssh_keys</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#ssh_keys HdinsightKafkaCluster#ssh_keys}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#subnet_id HdinsightKafkaCluster#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode.property.virtualNetworkId">virtual_network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#virtual_network_id HdinsightKafkaCluster#virtual_network_id}. |

---

##### `number_of_disks_per_node`<sup>Required</sup> <a name="number_of_disks_per_node" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode.property.numberOfDisksPerNode"></a>

```python
number_of_disks_per_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#number_of_disks_per_node HdinsightKafkaCluster#number_of_disks_per_node}.

---

##### `target_instance_count`<sup>Required</sup> <a name="target_instance_count" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode.property.targetInstanceCount"></a>

```python
target_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#target_instance_count HdinsightKafkaCluster#target_instance_count}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}.

---

##### `vm_size`<sup>Required</sup> <a name="vm_size" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode.property.vmSize"></a>

```python
vm_size: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#vm_size HdinsightKafkaCluster#vm_size}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}.

---

##### `script_actions`<sup>Optional</sup> <a name="script_actions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode.property.scriptActions"></a>

```python
script_actions: typing.Union[IResolvable, typing.List[HdinsightKafkaClusterRolesWorkerNodeScriptActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActions">HdinsightKafkaClusterRolesWorkerNodeScriptActions</a>]]

script_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#script_actions HdinsightKafkaCluster#script_actions}

---

##### `ssh_keys`<sup>Optional</sup> <a name="ssh_keys" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode.property.sshKeys"></a>

```python
ssh_keys: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#ssh_keys HdinsightKafkaCluster#ssh_keys}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#subnet_id HdinsightKafkaCluster#subnet_id}.

---

##### `virtual_network_id`<sup>Optional</sup> <a name="virtual_network_id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode.property.virtualNetworkId"></a>

```python
virtual_network_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#virtual_network_id HdinsightKafkaCluster#virtual_network_id}.

---

### HdinsightKafkaClusterRolesWorkerNodeScriptActions <a name="HdinsightKafkaClusterRolesWorkerNodeScriptActions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActions.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_kafka_cluster

hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActions(
  name: str,
  uri: str,
  parameters: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActions.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#name HdinsightKafkaCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActions.property.uri">uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#uri HdinsightKafkaCluster#uri}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActions.property.parameters">parameters</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#parameters HdinsightKafkaCluster#parameters}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActions.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#name HdinsightKafkaCluster#name}.

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActions.property.uri"></a>

```python
uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#uri HdinsightKafkaCluster#uri}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActions.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#parameters HdinsightKafkaCluster#parameters}.

---

### HdinsightKafkaClusterRolesZookeeperNode <a name="HdinsightKafkaClusterRolesZookeeperNode" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_kafka_cluster

hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode(
  username: str,
  vm_size: str,
  password: str = None,
  script_actions: typing.Union[IResolvable, typing.List[HdinsightKafkaClusterRolesZookeeperNodeScriptActions]] = None,
  ssh_keys: typing.List[str] = None,
  subnet_id: str = None,
  virtual_network_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode.property.vmSize">vm_size</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#vm_size HdinsightKafkaCluster#vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode.property.scriptActions">script_actions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActions">HdinsightKafkaClusterRolesZookeeperNodeScriptActions</a>]]</code> | script_actions block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode.property.sshKeys">ssh_keys</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#ssh_keys HdinsightKafkaCluster#ssh_keys}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#subnet_id HdinsightKafkaCluster#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode.property.virtualNetworkId">virtual_network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#virtual_network_id HdinsightKafkaCluster#virtual_network_id}. |

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}.

---

##### `vm_size`<sup>Required</sup> <a name="vm_size" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode.property.vmSize"></a>

```python
vm_size: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#vm_size HdinsightKafkaCluster#vm_size}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}.

---

##### `script_actions`<sup>Optional</sup> <a name="script_actions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode.property.scriptActions"></a>

```python
script_actions: typing.Union[IResolvable, typing.List[HdinsightKafkaClusterRolesZookeeperNodeScriptActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActions">HdinsightKafkaClusterRolesZookeeperNodeScriptActions</a>]]

script_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#script_actions HdinsightKafkaCluster#script_actions}

---

##### `ssh_keys`<sup>Optional</sup> <a name="ssh_keys" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode.property.sshKeys"></a>

```python
ssh_keys: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#ssh_keys HdinsightKafkaCluster#ssh_keys}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#subnet_id HdinsightKafkaCluster#subnet_id}.

---

##### `virtual_network_id`<sup>Optional</sup> <a name="virtual_network_id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode.property.virtualNetworkId"></a>

```python
virtual_network_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#virtual_network_id HdinsightKafkaCluster#virtual_network_id}.

---

### HdinsightKafkaClusterRolesZookeeperNodeScriptActions <a name="HdinsightKafkaClusterRolesZookeeperNodeScriptActions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActions.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_kafka_cluster

hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActions(
  name: str,
  uri: str,
  parameters: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActions.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#name HdinsightKafkaCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActions.property.uri">uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#uri HdinsightKafkaCluster#uri}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActions.property.parameters">parameters</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#parameters HdinsightKafkaCluster#parameters}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActions.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#name HdinsightKafkaCluster#name}.

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActions.property.uri"></a>

```python
uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#uri HdinsightKafkaCluster#uri}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActions.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#parameters HdinsightKafkaCluster#parameters}.

---

### HdinsightKafkaClusterSecurityProfile <a name="HdinsightKafkaClusterSecurityProfile" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_kafka_cluster

hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile(
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
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile.property.aaddsResourceId">aadds_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#aadds_resource_id HdinsightKafkaCluster#aadds_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile.property.domainName">domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#domain_name HdinsightKafkaCluster#domain_name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile.property.domainUsername">domain_username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#domain_username HdinsightKafkaCluster#domain_username}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile.property.domainUserPassword">domain_user_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#domain_user_password HdinsightKafkaCluster#domain_user_password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile.property.ldapsUrls">ldaps_urls</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#ldaps_urls HdinsightKafkaCluster#ldaps_urls}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile.property.msiResourceId">msi_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#msi_resource_id HdinsightKafkaCluster#msi_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile.property.clusterUsersGroupDns">cluster_users_group_dns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#cluster_users_group_dns HdinsightKafkaCluster#cluster_users_group_dns}. |

---

##### `aadds_resource_id`<sup>Required</sup> <a name="aadds_resource_id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile.property.aaddsResourceId"></a>

```python
aadds_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#aadds_resource_id HdinsightKafkaCluster#aadds_resource_id}.

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#domain_name HdinsightKafkaCluster#domain_name}.

---

##### `domain_username`<sup>Required</sup> <a name="domain_username" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile.property.domainUsername"></a>

```python
domain_username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#domain_username HdinsightKafkaCluster#domain_username}.

---

##### `domain_user_password`<sup>Required</sup> <a name="domain_user_password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile.property.domainUserPassword"></a>

```python
domain_user_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#domain_user_password HdinsightKafkaCluster#domain_user_password}.

---

##### `ldaps_urls`<sup>Required</sup> <a name="ldaps_urls" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile.property.ldapsUrls"></a>

```python
ldaps_urls: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#ldaps_urls HdinsightKafkaCluster#ldaps_urls}.

---

##### `msi_resource_id`<sup>Required</sup> <a name="msi_resource_id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile.property.msiResourceId"></a>

```python
msi_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#msi_resource_id HdinsightKafkaCluster#msi_resource_id}.

---

##### `cluster_users_group_dns`<sup>Optional</sup> <a name="cluster_users_group_dns" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile.property.clusterUsersGroupDns"></a>

```python
cluster_users_group_dns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#cluster_users_group_dns HdinsightKafkaCluster#cluster_users_group_dns}.

---

### HdinsightKafkaClusterStorageAccount <a name="HdinsightKafkaClusterStorageAccount" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccount.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_kafka_cluster

hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccount(
  is_default: typing.Union[bool, IResolvable],
  storage_account_key: str,
  storage_container_id: str,
  storage_resource_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccount.property.isDefault">is_default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#is_default HdinsightKafkaCluster#is_default}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccount.property.storageAccountKey">storage_account_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#storage_account_key HdinsightKafkaCluster#storage_account_key}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccount.property.storageContainerId">storage_container_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#storage_container_id HdinsightKafkaCluster#storage_container_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccount.property.storageResourceId">storage_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#storage_resource_id HdinsightKafkaCluster#storage_resource_id}. |

---

##### `is_default`<sup>Required</sup> <a name="is_default" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccount.property.isDefault"></a>

```python
is_default: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#is_default HdinsightKafkaCluster#is_default}.

---

##### `storage_account_key`<sup>Required</sup> <a name="storage_account_key" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccount.property.storageAccountKey"></a>

```python
storage_account_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#storage_account_key HdinsightKafkaCluster#storage_account_key}.

---

##### `storage_container_id`<sup>Required</sup> <a name="storage_container_id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccount.property.storageContainerId"></a>

```python
storage_container_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#storage_container_id HdinsightKafkaCluster#storage_container_id}.

---

##### `storage_resource_id`<sup>Optional</sup> <a name="storage_resource_id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccount.property.storageResourceId"></a>

```python
storage_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#storage_resource_id HdinsightKafkaCluster#storage_resource_id}.

---

### HdinsightKafkaClusterStorageAccountGen2 <a name="HdinsightKafkaClusterStorageAccountGen2" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_kafka_cluster

hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2(
  filesystem_id: str,
  is_default: typing.Union[bool, IResolvable],
  managed_identity_resource_id: str,
  storage_resource_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2.property.filesystemId">filesystem_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#filesystem_id HdinsightKafkaCluster#filesystem_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2.property.isDefault">is_default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#is_default HdinsightKafkaCluster#is_default}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2.property.managedIdentityResourceId">managed_identity_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#managed_identity_resource_id HdinsightKafkaCluster#managed_identity_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2.property.storageResourceId">storage_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#storage_resource_id HdinsightKafkaCluster#storage_resource_id}. |

---

##### `filesystem_id`<sup>Required</sup> <a name="filesystem_id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2.property.filesystemId"></a>

```python
filesystem_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#filesystem_id HdinsightKafkaCluster#filesystem_id}.

---

##### `is_default`<sup>Required</sup> <a name="is_default" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2.property.isDefault"></a>

```python
is_default: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#is_default HdinsightKafkaCluster#is_default}.

---

##### `managed_identity_resource_id`<sup>Required</sup> <a name="managed_identity_resource_id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2.property.managedIdentityResourceId"></a>

```python
managed_identity_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#managed_identity_resource_id HdinsightKafkaCluster#managed_identity_resource_id}.

---

##### `storage_resource_id`<sup>Required</sup> <a name="storage_resource_id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2.property.storageResourceId"></a>

```python
storage_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#storage_resource_id HdinsightKafkaCluster#storage_resource_id}.

---

### HdinsightKafkaClusterTimeouts <a name="HdinsightKafkaClusterTimeouts" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_kafka_cluster

hdinsightKafkaCluster.HdinsightKafkaClusterTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#create HdinsightKafkaCluster#create}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#delete HdinsightKafkaCluster#delete}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#read HdinsightKafkaCluster#read}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#update HdinsightKafkaCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#create HdinsightKafkaCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#delete HdinsightKafkaCluster#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#read HdinsightKafkaCluster#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#update HdinsightKafkaCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### HdinsightKafkaClusterComponentVersionOutputReference <a name="HdinsightKafkaClusterComponentVersionOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_kafka_cluster

hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.property.kafkaInput">kafka_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.property.kafka">kafka</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersion">HdinsightKafkaClusterComponentVersion</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kafka_input`<sup>Optional</sup> <a name="kafka_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.property.kafkaInput"></a>

```python
kafka_input: str
```

- *Type:* str

---

##### `kafka`<sup>Required</sup> <a name="kafka" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.property.kafka"></a>

```python
kafka: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.property.internalValue"></a>

```python
internal_value: HdinsightKafkaClusterComponentVersion
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersion">HdinsightKafkaClusterComponentVersion</a>

---


### HdinsightKafkaClusterComputeIsolationOutputReference <a name="HdinsightKafkaClusterComputeIsolationOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_kafka_cluster

hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.resetComputeIsolationEnabled">reset_compute_isolation_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.resetHostSku">reset_host_sku</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_compute_isolation_enabled` <a name="reset_compute_isolation_enabled" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.resetComputeIsolationEnabled"></a>

```python
def reset_compute_isolation_enabled() -> None
```

##### `reset_host_sku` <a name="reset_host_sku" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.resetHostSku"></a>

```python
def reset_host_sku() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.property.computeIsolationEnabledInput">compute_isolation_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.property.hostSkuInput">host_sku_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.property.computeIsolationEnabled">compute_isolation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.property.hostSku">host_sku</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolation">HdinsightKafkaClusterComputeIsolation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compute_isolation_enabled_input`<sup>Optional</sup> <a name="compute_isolation_enabled_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.property.computeIsolationEnabledInput"></a>

```python
compute_isolation_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `host_sku_input`<sup>Optional</sup> <a name="host_sku_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.property.hostSkuInput"></a>

```python
host_sku_input: str
```

- *Type:* str

---

##### `compute_isolation_enabled`<sup>Required</sup> <a name="compute_isolation_enabled" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.property.computeIsolationEnabled"></a>

```python
compute_isolation_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `host_sku`<sup>Required</sup> <a name="host_sku" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.property.hostSku"></a>

```python
host_sku: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.property.internalValue"></a>

```python
internal_value: HdinsightKafkaClusterComputeIsolation
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolation">HdinsightKafkaClusterComputeIsolation</a>

---


### HdinsightKafkaClusterDiskEncryptionList <a name="HdinsightKafkaClusterDiskEncryptionList" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_kafka_cluster

hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> HdinsightKafkaClusterDiskEncryptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryption">HdinsightKafkaClusterDiskEncryption</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[HdinsightKafkaClusterDiskEncryption]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryption">HdinsightKafkaClusterDiskEncryption</a>]]

---


### HdinsightKafkaClusterDiskEncryptionOutputReference <a name="HdinsightKafkaClusterDiskEncryptionOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_kafka_cluster

hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.resetEncryptionAlgorithm">reset_encryption_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.resetEncryptionAtHostEnabled">reset_encryption_at_host_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.resetKeyVaultKeyId">reset_key_vault_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.resetKeyVaultManagedIdentityId">reset_key_vault_managed_identity_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_encryption_algorithm` <a name="reset_encryption_algorithm" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.resetEncryptionAlgorithm"></a>

```python
def reset_encryption_algorithm() -> None
```

##### `reset_encryption_at_host_enabled` <a name="reset_encryption_at_host_enabled" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.resetEncryptionAtHostEnabled"></a>

```python
def reset_encryption_at_host_enabled() -> None
```

##### `reset_key_vault_key_id` <a name="reset_key_vault_key_id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.resetKeyVaultKeyId"></a>

```python
def reset_key_vault_key_id() -> None
```

##### `reset_key_vault_managed_identity_id` <a name="reset_key_vault_managed_identity_id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.resetKeyVaultManagedIdentityId"></a>

```python
def reset_key_vault_managed_identity_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.encryptionAlgorithmInput">encryption_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.encryptionAtHostEnabledInput">encryption_at_host_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.keyVaultKeyIdInput">key_vault_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.keyVaultManagedIdentityIdInput">key_vault_managed_identity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.encryptionAlgorithm">encryption_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.encryptionAtHostEnabled">encryption_at_host_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.keyVaultKeyId">key_vault_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.keyVaultManagedIdentityId">key_vault_managed_identity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryption">HdinsightKafkaClusterDiskEncryption</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_algorithm_input`<sup>Optional</sup> <a name="encryption_algorithm_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.encryptionAlgorithmInput"></a>

```python
encryption_algorithm_input: str
```

- *Type:* str

---

##### `encryption_at_host_enabled_input`<sup>Optional</sup> <a name="encryption_at_host_enabled_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.encryptionAtHostEnabledInput"></a>

```python
encryption_at_host_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key_vault_key_id_input`<sup>Optional</sup> <a name="key_vault_key_id_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.keyVaultKeyIdInput"></a>

```python
key_vault_key_id_input: str
```

- *Type:* str

---

##### `key_vault_managed_identity_id_input`<sup>Optional</sup> <a name="key_vault_managed_identity_id_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.keyVaultManagedIdentityIdInput"></a>

```python
key_vault_managed_identity_id_input: str
```

- *Type:* str

---

##### `encryption_algorithm`<sup>Required</sup> <a name="encryption_algorithm" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.encryptionAlgorithm"></a>

```python
encryption_algorithm: str
```

- *Type:* str

---

##### `encryption_at_host_enabled`<sup>Required</sup> <a name="encryption_at_host_enabled" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.encryptionAtHostEnabled"></a>

```python
encryption_at_host_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key_vault_key_id`<sup>Required</sup> <a name="key_vault_key_id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.keyVaultKeyId"></a>

```python
key_vault_key_id: str
```

- *Type:* str

---

##### `key_vault_managed_identity_id`<sup>Required</sup> <a name="key_vault_managed_identity_id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.keyVaultManagedIdentityId"></a>

```python
key_vault_managed_identity_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, HdinsightKafkaClusterDiskEncryption]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryption">HdinsightKafkaClusterDiskEncryption</a>]

---


### HdinsightKafkaClusterExtensionOutputReference <a name="HdinsightKafkaClusterExtensionOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_kafka_cluster

hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.property.logAnalyticsWorkspaceIdInput">log_analytics_workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.property.primaryKeyInput">primary_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.property.logAnalyticsWorkspaceId">log_analytics_workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.property.primaryKey">primary_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtension">HdinsightKafkaClusterExtension</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_analytics_workspace_id_input`<sup>Optional</sup> <a name="log_analytics_workspace_id_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.property.logAnalyticsWorkspaceIdInput"></a>

```python
log_analytics_workspace_id_input: str
```

- *Type:* str

---

##### `primary_key_input`<sup>Optional</sup> <a name="primary_key_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.property.primaryKeyInput"></a>

```python
primary_key_input: str
```

- *Type:* str

---

##### `log_analytics_workspace_id`<sup>Required</sup> <a name="log_analytics_workspace_id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.property.logAnalyticsWorkspaceId"></a>

```python
log_analytics_workspace_id: str
```

- *Type:* str

---

##### `primary_key`<sup>Required</sup> <a name="primary_key" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.property.primaryKey"></a>

```python
primary_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.property.internalValue"></a>

```python
internal_value: HdinsightKafkaClusterExtension
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtension">HdinsightKafkaClusterExtension</a>

---


### HdinsightKafkaClusterGatewayOutputReference <a name="HdinsightKafkaClusterGatewayOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_kafka_cluster

hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGateway">HdinsightKafkaClusterGateway</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.property.internalValue"></a>

```python
internal_value: HdinsightKafkaClusterGateway
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGateway">HdinsightKafkaClusterGateway</a>

---


### HdinsightKafkaClusterMetastoresAmbariOutputReference <a name="HdinsightKafkaClusterMetastoresAmbariOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_kafka_cluster

hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.serverInput">server_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.server">server</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbari">HdinsightKafkaClusterMetastoresAmbari</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `server_input`<sup>Optional</sup> <a name="server_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.serverInput"></a>

```python
server_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.server"></a>

```python
server: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.internalValue"></a>

```python
internal_value: HdinsightKafkaClusterMetastoresAmbari
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbari">HdinsightKafkaClusterMetastoresAmbari</a>

---


### HdinsightKafkaClusterMetastoresHiveOutputReference <a name="HdinsightKafkaClusterMetastoresHiveOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_kafka_cluster

hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.serverInput">server_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.server">server</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHive">HdinsightKafkaClusterMetastoresHive</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `server_input`<sup>Optional</sup> <a name="server_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.serverInput"></a>

```python
server_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.server"></a>

```python
server: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.internalValue"></a>

```python
internal_value: HdinsightKafkaClusterMetastoresHive
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHive">HdinsightKafkaClusterMetastoresHive</a>

---


### HdinsightKafkaClusterMetastoresOozieOutputReference <a name="HdinsightKafkaClusterMetastoresOozieOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_kafka_cluster

hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.serverInput">server_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.server">server</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozie">HdinsightKafkaClusterMetastoresOozie</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `server_input`<sup>Optional</sup> <a name="server_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.serverInput"></a>

```python
server_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.server"></a>

```python
server: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.internalValue"></a>

```python
internal_value: HdinsightKafkaClusterMetastoresOozie
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozie">HdinsightKafkaClusterMetastoresOozie</a>

---


### HdinsightKafkaClusterMetastoresOutputReference <a name="HdinsightKafkaClusterMetastoresOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_kafka_cluster

hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.putAmbari">put_ambari</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.putHive">put_hive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.putOozie">put_oozie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.resetAmbari">reset_ambari</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.resetHive">reset_hive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.resetOozie">reset_oozie</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ambari` <a name="put_ambari" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.putAmbari"></a>

```python
def put_ambari(
  database_name: str,
  password: str,
  server: str,
  username: str
) -> None
```

###### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.putAmbari.parameter.databaseName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#database_name HdinsightKafkaCluster#database_name}.

---

###### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.putAmbari.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}.

---

###### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.putAmbari.parameter.server"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#server HdinsightKafkaCluster#server}.

---

###### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.putAmbari.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}.

---

##### `put_hive` <a name="put_hive" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.putHive"></a>

```python
def put_hive(
  database_name: str,
  password: str,
  server: str,
  username: str
) -> None
```

###### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.putHive.parameter.databaseName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#database_name HdinsightKafkaCluster#database_name}.

---

###### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.putHive.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}.

---

###### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.putHive.parameter.server"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#server HdinsightKafkaCluster#server}.

---

###### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.putHive.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}.

---

##### `put_oozie` <a name="put_oozie" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.putOozie"></a>

```python
def put_oozie(
  database_name: str,
  password: str,
  server: str,
  username: str
) -> None
```

###### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.putOozie.parameter.databaseName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#database_name HdinsightKafkaCluster#database_name}.

---

###### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.putOozie.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}.

---

###### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.putOozie.parameter.server"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#server HdinsightKafkaCluster#server}.

---

###### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.putOozie.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}.

---

##### `reset_ambari` <a name="reset_ambari" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.resetAmbari"></a>

```python
def reset_ambari() -> None
```

##### `reset_hive` <a name="reset_hive" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.resetHive"></a>

```python
def reset_hive() -> None
```

##### `reset_oozie` <a name="reset_oozie" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.resetOozie"></a>

```python
def reset_oozie() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.property.ambari">ambari</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference">HdinsightKafkaClusterMetastoresAmbariOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.property.hive">hive</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference">HdinsightKafkaClusterMetastoresHiveOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.property.oozie">oozie</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference">HdinsightKafkaClusterMetastoresOozieOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.property.ambariInput">ambari_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbari">HdinsightKafkaClusterMetastoresAmbari</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.property.hiveInput">hive_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHive">HdinsightKafkaClusterMetastoresHive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.property.oozieInput">oozie_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozie">HdinsightKafkaClusterMetastoresOozie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastores">HdinsightKafkaClusterMetastores</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ambari`<sup>Required</sup> <a name="ambari" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.property.ambari"></a>

```python
ambari: HdinsightKafkaClusterMetastoresAmbariOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference">HdinsightKafkaClusterMetastoresAmbariOutputReference</a>

---

##### `hive`<sup>Required</sup> <a name="hive" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.property.hive"></a>

```python
hive: HdinsightKafkaClusterMetastoresHiveOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference">HdinsightKafkaClusterMetastoresHiveOutputReference</a>

---

##### `oozie`<sup>Required</sup> <a name="oozie" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.property.oozie"></a>

```python
oozie: HdinsightKafkaClusterMetastoresOozieOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference">HdinsightKafkaClusterMetastoresOozieOutputReference</a>

---

##### `ambari_input`<sup>Optional</sup> <a name="ambari_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.property.ambariInput"></a>

```python
ambari_input: HdinsightKafkaClusterMetastoresAmbari
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbari">HdinsightKafkaClusterMetastoresAmbari</a>

---

##### `hive_input`<sup>Optional</sup> <a name="hive_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.property.hiveInput"></a>

```python
hive_input: HdinsightKafkaClusterMetastoresHive
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHive">HdinsightKafkaClusterMetastoresHive</a>

---

##### `oozie_input`<sup>Optional</sup> <a name="oozie_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.property.oozieInput"></a>

```python
oozie_input: HdinsightKafkaClusterMetastoresOozie
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozie">HdinsightKafkaClusterMetastoresOozie</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.property.internalValue"></a>

```python
internal_value: HdinsightKafkaClusterMetastores
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastores">HdinsightKafkaClusterMetastores</a>

---


### HdinsightKafkaClusterMonitorOutputReference <a name="HdinsightKafkaClusterMonitorOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_kafka_cluster

hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.property.logAnalyticsWorkspaceIdInput">log_analytics_workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.property.primaryKeyInput">primary_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.property.logAnalyticsWorkspaceId">log_analytics_workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.property.primaryKey">primary_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitor">HdinsightKafkaClusterMonitor</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_analytics_workspace_id_input`<sup>Optional</sup> <a name="log_analytics_workspace_id_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.property.logAnalyticsWorkspaceIdInput"></a>

```python
log_analytics_workspace_id_input: str
```

- *Type:* str

---

##### `primary_key_input`<sup>Optional</sup> <a name="primary_key_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.property.primaryKeyInput"></a>

```python
primary_key_input: str
```

- *Type:* str

---

##### `log_analytics_workspace_id`<sup>Required</sup> <a name="log_analytics_workspace_id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.property.logAnalyticsWorkspaceId"></a>

```python
log_analytics_workspace_id: str
```

- *Type:* str

---

##### `primary_key`<sup>Required</sup> <a name="primary_key" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.property.primaryKey"></a>

```python
primary_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.property.internalValue"></a>

```python
internal_value: HdinsightKafkaClusterMonitor
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitor">HdinsightKafkaClusterMonitor</a>

---


### HdinsightKafkaClusterNetworkOutputReference <a name="HdinsightKafkaClusterNetworkOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_kafka_cluster

hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.resetConnectionDirection">reset_connection_direction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.resetPrivateLinkEnabled">reset_private_link_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_connection_direction` <a name="reset_connection_direction" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.resetConnectionDirection"></a>

```python
def reset_connection_direction() -> None
```

##### `reset_private_link_enabled` <a name="reset_private_link_enabled" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.resetPrivateLinkEnabled"></a>

```python
def reset_private_link_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.property.connectionDirectionInput">connection_direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.property.privateLinkEnabledInput">private_link_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.property.connectionDirection">connection_direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.property.privateLinkEnabled">private_link_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetwork">HdinsightKafkaClusterNetwork</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_direction_input`<sup>Optional</sup> <a name="connection_direction_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.property.connectionDirectionInput"></a>

```python
connection_direction_input: str
```

- *Type:* str

---

##### `private_link_enabled_input`<sup>Optional</sup> <a name="private_link_enabled_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.property.privateLinkEnabledInput"></a>

```python
private_link_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `connection_direction`<sup>Required</sup> <a name="connection_direction" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.property.connectionDirection"></a>

```python
connection_direction: str
```

- *Type:* str

---

##### `private_link_enabled`<sup>Required</sup> <a name="private_link_enabled" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.property.privateLinkEnabled"></a>

```python
private_link_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.property.internalValue"></a>

```python
internal_value: HdinsightKafkaClusterNetwork
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetwork">HdinsightKafkaClusterNetwork</a>

---


### HdinsightKafkaClusterRestProxyOutputReference <a name="HdinsightKafkaClusterRestProxyOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_kafka_cluster

hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.property.securityGroupIdInput">security_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.property.securityGroupNameInput">security_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.property.securityGroupId">security_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.property.securityGroupName">security_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxy">HdinsightKafkaClusterRestProxy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `security_group_id_input`<sup>Optional</sup> <a name="security_group_id_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.property.securityGroupIdInput"></a>

```python
security_group_id_input: str
```

- *Type:* str

---

##### `security_group_name_input`<sup>Optional</sup> <a name="security_group_name_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.property.securityGroupNameInput"></a>

```python
security_group_name_input: str
```

- *Type:* str

---

##### `security_group_id`<sup>Required</sup> <a name="security_group_id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.property.securityGroupId"></a>

```python
security_group_id: str
```

- *Type:* str

---

##### `security_group_name`<sup>Required</sup> <a name="security_group_name" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.property.securityGroupName"></a>

```python
security_group_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.property.internalValue"></a>

```python
internal_value: HdinsightKafkaClusterRestProxy
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxy">HdinsightKafkaClusterRestProxy</a>

---


### HdinsightKafkaClusterRolesHeadNodeOutputReference <a name="HdinsightKafkaClusterRolesHeadNodeOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_kafka_cluster

hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.putScriptActions">put_script_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.resetScriptActions">reset_script_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.resetSshKeys">reset_ssh_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.resetSubnetId">reset_subnet_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.resetVirtualNetworkId">reset_virtual_network_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_script_actions` <a name="put_script_actions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.putScriptActions"></a>

```python
def put_script_actions(
  value: typing.Union[IResolvable, typing.List[HdinsightKafkaClusterRolesHeadNodeScriptActions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.putScriptActions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActions">HdinsightKafkaClusterRolesHeadNodeScriptActions</a>]]

---

##### `reset_password` <a name="reset_password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_script_actions` <a name="reset_script_actions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.resetScriptActions"></a>

```python
def reset_script_actions() -> None
```

##### `reset_ssh_keys` <a name="reset_ssh_keys" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.resetSshKeys"></a>

```python
def reset_ssh_keys() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```

##### `reset_virtual_network_id` <a name="reset_virtual_network_id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.resetVirtualNetworkId"></a>

```python
def reset_virtual_network_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.scriptActions">script_actions</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList">HdinsightKafkaClusterRolesHeadNodeScriptActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.scriptActionsInput">script_actions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActions">HdinsightKafkaClusterRolesHeadNodeScriptActions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.sshKeysInput">ssh_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.virtualNetworkIdInput">virtual_network_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.vmSizeInput">vm_size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.sshKeys">ssh_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.virtualNetworkId">virtual_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.vmSize">vm_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode">HdinsightKafkaClusterRolesHeadNode</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `script_actions`<sup>Required</sup> <a name="script_actions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.scriptActions"></a>

```python
script_actions: HdinsightKafkaClusterRolesHeadNodeScriptActionsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList">HdinsightKafkaClusterRolesHeadNodeScriptActionsList</a>

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `script_actions_input`<sup>Optional</sup> <a name="script_actions_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.scriptActionsInput"></a>

```python
script_actions_input: typing.Union[IResolvable, typing.List[HdinsightKafkaClusterRolesHeadNodeScriptActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActions">HdinsightKafkaClusterRolesHeadNodeScriptActions</a>]]

---

##### `ssh_keys_input`<sup>Optional</sup> <a name="ssh_keys_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.sshKeysInput"></a>

```python
ssh_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `virtual_network_id_input`<sup>Optional</sup> <a name="virtual_network_id_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.virtualNetworkIdInput"></a>

```python
virtual_network_id_input: str
```

- *Type:* str

---

##### `vm_size_input`<sup>Optional</sup> <a name="vm_size_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.vmSizeInput"></a>

```python
vm_size_input: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `ssh_keys`<sup>Required</sup> <a name="ssh_keys" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.sshKeys"></a>

```python
ssh_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `virtual_network_id`<sup>Required</sup> <a name="virtual_network_id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.virtualNetworkId"></a>

```python
virtual_network_id: str
```

- *Type:* str

---

##### `vm_size`<sup>Required</sup> <a name="vm_size" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.vmSize"></a>

```python
vm_size: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.internalValue"></a>

```python
internal_value: HdinsightKafkaClusterRolesHeadNode
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode">HdinsightKafkaClusterRolesHeadNode</a>

---


### HdinsightKafkaClusterRolesHeadNodeScriptActionsList <a name="HdinsightKafkaClusterRolesHeadNodeScriptActionsList" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_kafka_cluster

hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActions">HdinsightKafkaClusterRolesHeadNodeScriptActions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[HdinsightKafkaClusterRolesHeadNodeScriptActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActions">HdinsightKafkaClusterRolesHeadNodeScriptActions</a>]]

---


### HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference <a name="HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_kafka_cluster

hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.property.parametersInput">parameters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.property.parameters">parameters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActions">HdinsightKafkaClusterRolesHeadNodeScriptActions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.property.parametersInput"></a>

```python
parameters_input: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, HdinsightKafkaClusterRolesHeadNodeScriptActions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActions">HdinsightKafkaClusterRolesHeadNodeScriptActions</a>]

---


### HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference <a name="HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_kafka_cluster

hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.putScriptActions">put_script_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.resetScriptActions">reset_script_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.resetSshKeys">reset_ssh_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.resetSubnetId">reset_subnet_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.resetVirtualNetworkId">reset_virtual_network_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_script_actions` <a name="put_script_actions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.putScriptActions"></a>

```python
def put_script_actions(
  value: typing.Union[IResolvable, typing.List[HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.putScriptActions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions">HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions</a>]]

---

##### `reset_password` <a name="reset_password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_script_actions` <a name="reset_script_actions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.resetScriptActions"></a>

```python
def reset_script_actions() -> None
```

##### `reset_ssh_keys` <a name="reset_ssh_keys" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.resetSshKeys"></a>

```python
def reset_ssh_keys() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```

##### `reset_virtual_network_id` <a name="reset_virtual_network_id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.resetVirtualNetworkId"></a>

```python
def reset_virtual_network_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.scriptActions">script_actions</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList">HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.scriptActionsInput">script_actions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions">HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.sshKeysInput">ssh_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.virtualNetworkIdInput">virtual_network_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.vmSizeInput">vm_size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.sshKeys">ssh_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.virtualNetworkId">virtual_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.vmSize">vm_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode">HdinsightKafkaClusterRolesKafkaManagementNode</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `script_actions`<sup>Required</sup> <a name="script_actions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.scriptActions"></a>

```python
script_actions: HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList">HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList</a>

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `script_actions_input`<sup>Optional</sup> <a name="script_actions_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.scriptActionsInput"></a>

```python
script_actions_input: typing.Union[IResolvable, typing.List[HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions">HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions</a>]]

---

##### `ssh_keys_input`<sup>Optional</sup> <a name="ssh_keys_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.sshKeysInput"></a>

```python
ssh_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `virtual_network_id_input`<sup>Optional</sup> <a name="virtual_network_id_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.virtualNetworkIdInput"></a>

```python
virtual_network_id_input: str
```

- *Type:* str

---

##### `vm_size_input`<sup>Optional</sup> <a name="vm_size_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.vmSizeInput"></a>

```python
vm_size_input: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `ssh_keys`<sup>Required</sup> <a name="ssh_keys" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.sshKeys"></a>

```python
ssh_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `virtual_network_id`<sup>Required</sup> <a name="virtual_network_id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.virtualNetworkId"></a>

```python
virtual_network_id: str
```

- *Type:* str

---

##### `vm_size`<sup>Required</sup> <a name="vm_size" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.vmSize"></a>

```python
vm_size: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.internalValue"></a>

```python
internal_value: HdinsightKafkaClusterRolesKafkaManagementNode
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode">HdinsightKafkaClusterRolesKafkaManagementNode</a>

---


### HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList <a name="HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_kafka_cluster

hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions">HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions">HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions</a>]]

---


### HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference <a name="HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_kafka_cluster

hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.property.parametersInput">parameters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.property.parameters">parameters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions">HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.property.parametersInput"></a>

```python
parameters_input: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions">HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions</a>]

---


### HdinsightKafkaClusterRolesOutputReference <a name="HdinsightKafkaClusterRolesOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_kafka_cluster

hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.putHeadNode">put_head_node</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.putKafkaManagementNode">put_kafka_management_node</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.putWorkerNode">put_worker_node</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.putZookeeperNode">put_zookeeper_node</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.resetKafkaManagementNode">reset_kafka_management_node</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_head_node` <a name="put_head_node" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.putHeadNode"></a>

```python
def put_head_node(
  username: str,
  vm_size: str,
  password: str = None,
  script_actions: typing.Union[IResolvable, typing.List[HdinsightKafkaClusterRolesHeadNodeScriptActions]] = None,
  ssh_keys: typing.List[str] = None,
  subnet_id: str = None,
  virtual_network_id: str = None
) -> None
```

###### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.putHeadNode.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}.

---

###### `vm_size`<sup>Required</sup> <a name="vm_size" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.putHeadNode.parameter.vmSize"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#vm_size HdinsightKafkaCluster#vm_size}.

---

###### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.putHeadNode.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}.

---

###### `script_actions`<sup>Optional</sup> <a name="script_actions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.putHeadNode.parameter.scriptActions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActions">HdinsightKafkaClusterRolesHeadNodeScriptActions</a>]]

script_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#script_actions HdinsightKafkaCluster#script_actions}

---

###### `ssh_keys`<sup>Optional</sup> <a name="ssh_keys" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.putHeadNode.parameter.sshKeys"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#ssh_keys HdinsightKafkaCluster#ssh_keys}.

---

###### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.putHeadNode.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#subnet_id HdinsightKafkaCluster#subnet_id}.

---

###### `virtual_network_id`<sup>Optional</sup> <a name="virtual_network_id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.putHeadNode.parameter.virtualNetworkId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#virtual_network_id HdinsightKafkaCluster#virtual_network_id}.

---

##### `put_kafka_management_node` <a name="put_kafka_management_node" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.putKafkaManagementNode"></a>

```python
def put_kafka_management_node(
  username: str,
  vm_size: str,
  password: str = None,
  script_actions: typing.Union[IResolvable, typing.List[HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions]] = None,
  ssh_keys: typing.List[str] = None,
  subnet_id: str = None,
  virtual_network_id: str = None
) -> None
```

###### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.putKafkaManagementNode.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}.

---

###### `vm_size`<sup>Required</sup> <a name="vm_size" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.putKafkaManagementNode.parameter.vmSize"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#vm_size HdinsightKafkaCluster#vm_size}.

---

###### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.putKafkaManagementNode.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}.

---

###### `script_actions`<sup>Optional</sup> <a name="script_actions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.putKafkaManagementNode.parameter.scriptActions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions">HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions</a>]]

script_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#script_actions HdinsightKafkaCluster#script_actions}

---

###### `ssh_keys`<sup>Optional</sup> <a name="ssh_keys" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.putKafkaManagementNode.parameter.sshKeys"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#ssh_keys HdinsightKafkaCluster#ssh_keys}.

---

###### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.putKafkaManagementNode.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#subnet_id HdinsightKafkaCluster#subnet_id}.

---

###### `virtual_network_id`<sup>Optional</sup> <a name="virtual_network_id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.putKafkaManagementNode.parameter.virtualNetworkId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#virtual_network_id HdinsightKafkaCluster#virtual_network_id}.

---

##### `put_worker_node` <a name="put_worker_node" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.putWorkerNode"></a>

```python
def put_worker_node(
  number_of_disks_per_node: typing.Union[int, float],
  target_instance_count: typing.Union[int, float],
  username: str,
  vm_size: str,
  password: str = None,
  script_actions: typing.Union[IResolvable, typing.List[HdinsightKafkaClusterRolesWorkerNodeScriptActions]] = None,
  ssh_keys: typing.List[str] = None,
  subnet_id: str = None,
  virtual_network_id: str = None
) -> None
```

###### `number_of_disks_per_node`<sup>Required</sup> <a name="number_of_disks_per_node" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.putWorkerNode.parameter.numberOfDisksPerNode"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#number_of_disks_per_node HdinsightKafkaCluster#number_of_disks_per_node}.

---

###### `target_instance_count`<sup>Required</sup> <a name="target_instance_count" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.putWorkerNode.parameter.targetInstanceCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#target_instance_count HdinsightKafkaCluster#target_instance_count}.

---

###### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.putWorkerNode.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}.

---

###### `vm_size`<sup>Required</sup> <a name="vm_size" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.putWorkerNode.parameter.vmSize"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#vm_size HdinsightKafkaCluster#vm_size}.

---

###### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.putWorkerNode.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}.

---

###### `script_actions`<sup>Optional</sup> <a name="script_actions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.putWorkerNode.parameter.scriptActions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActions">HdinsightKafkaClusterRolesWorkerNodeScriptActions</a>]]

script_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#script_actions HdinsightKafkaCluster#script_actions}

---

###### `ssh_keys`<sup>Optional</sup> <a name="ssh_keys" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.putWorkerNode.parameter.sshKeys"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#ssh_keys HdinsightKafkaCluster#ssh_keys}.

---

###### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.putWorkerNode.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#subnet_id HdinsightKafkaCluster#subnet_id}.

---

###### `virtual_network_id`<sup>Optional</sup> <a name="virtual_network_id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.putWorkerNode.parameter.virtualNetworkId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#virtual_network_id HdinsightKafkaCluster#virtual_network_id}.

---

##### `put_zookeeper_node` <a name="put_zookeeper_node" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.putZookeeperNode"></a>

```python
def put_zookeeper_node(
  username: str,
  vm_size: str,
  password: str = None,
  script_actions: typing.Union[IResolvable, typing.List[HdinsightKafkaClusterRolesZookeeperNodeScriptActions]] = None,
  ssh_keys: typing.List[str] = None,
  subnet_id: str = None,
  virtual_network_id: str = None
) -> None
```

###### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.putZookeeperNode.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}.

---

###### `vm_size`<sup>Required</sup> <a name="vm_size" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.putZookeeperNode.parameter.vmSize"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#vm_size HdinsightKafkaCluster#vm_size}.

---

###### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.putZookeeperNode.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}.

---

###### `script_actions`<sup>Optional</sup> <a name="script_actions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.putZookeeperNode.parameter.scriptActions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActions">HdinsightKafkaClusterRolesZookeeperNodeScriptActions</a>]]

script_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#script_actions HdinsightKafkaCluster#script_actions}

---

###### `ssh_keys`<sup>Optional</sup> <a name="ssh_keys" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.putZookeeperNode.parameter.sshKeys"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#ssh_keys HdinsightKafkaCluster#ssh_keys}.

---

###### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.putZookeeperNode.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#subnet_id HdinsightKafkaCluster#subnet_id}.

---

###### `virtual_network_id`<sup>Optional</sup> <a name="virtual_network_id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.putZookeeperNode.parameter.virtualNetworkId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/hdinsight_kafka_cluster#virtual_network_id HdinsightKafkaCluster#virtual_network_id}.

---

##### `reset_kafka_management_node` <a name="reset_kafka_management_node" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.resetKafkaManagementNode"></a>

```python
def reset_kafka_management_node() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.headNode">head_node</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference">HdinsightKafkaClusterRolesHeadNodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.kafkaManagementNode">kafka_management_node</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference">HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.workerNode">worker_node</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference">HdinsightKafkaClusterRolesWorkerNodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.zookeeperNode">zookeeper_node</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference">HdinsightKafkaClusterRolesZookeeperNodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.headNodeInput">head_node_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode">HdinsightKafkaClusterRolesHeadNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.kafkaManagementNodeInput">kafka_management_node_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode">HdinsightKafkaClusterRolesKafkaManagementNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.workerNodeInput">worker_node_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode">HdinsightKafkaClusterRolesWorkerNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.zookeeperNodeInput">zookeeper_node_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode">HdinsightKafkaClusterRolesZookeeperNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRoles">HdinsightKafkaClusterRoles</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `head_node`<sup>Required</sup> <a name="head_node" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.headNode"></a>

```python
head_node: HdinsightKafkaClusterRolesHeadNodeOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference">HdinsightKafkaClusterRolesHeadNodeOutputReference</a>

---

##### `kafka_management_node`<sup>Required</sup> <a name="kafka_management_node" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.kafkaManagementNode"></a>

```python
kafka_management_node: HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference">HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference</a>

---

##### `worker_node`<sup>Required</sup> <a name="worker_node" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.workerNode"></a>

```python
worker_node: HdinsightKafkaClusterRolesWorkerNodeOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference">HdinsightKafkaClusterRolesWorkerNodeOutputReference</a>

---

##### `zookeeper_node`<sup>Required</sup> <a name="zookeeper_node" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.zookeeperNode"></a>

```python
zookeeper_node: HdinsightKafkaClusterRolesZookeeperNodeOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference">HdinsightKafkaClusterRolesZookeeperNodeOutputReference</a>

---

##### `head_node_input`<sup>Optional</sup> <a name="head_node_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.headNodeInput"></a>

```python
head_node_input: HdinsightKafkaClusterRolesHeadNode
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode">HdinsightKafkaClusterRolesHeadNode</a>

---

##### `kafka_management_node_input`<sup>Optional</sup> <a name="kafka_management_node_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.kafkaManagementNodeInput"></a>

```python
kafka_management_node_input: HdinsightKafkaClusterRolesKafkaManagementNode
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode">HdinsightKafkaClusterRolesKafkaManagementNode</a>

---

##### `worker_node_input`<sup>Optional</sup> <a name="worker_node_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.workerNodeInput"></a>

```python
worker_node_input: HdinsightKafkaClusterRolesWorkerNode
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode">HdinsightKafkaClusterRolesWorkerNode</a>

---

##### `zookeeper_node_input`<sup>Optional</sup> <a name="zookeeper_node_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.zookeeperNodeInput"></a>

```python
zookeeper_node_input: HdinsightKafkaClusterRolesZookeeperNode
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode">HdinsightKafkaClusterRolesZookeeperNode</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.internalValue"></a>

```python
internal_value: HdinsightKafkaClusterRoles
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRoles">HdinsightKafkaClusterRoles</a>

---


### HdinsightKafkaClusterRolesWorkerNodeOutputReference <a name="HdinsightKafkaClusterRolesWorkerNodeOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_kafka_cluster

hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.putScriptActions">put_script_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.resetScriptActions">reset_script_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.resetSshKeys">reset_ssh_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.resetSubnetId">reset_subnet_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.resetVirtualNetworkId">reset_virtual_network_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_script_actions` <a name="put_script_actions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.putScriptActions"></a>

```python
def put_script_actions(
  value: typing.Union[IResolvable, typing.List[HdinsightKafkaClusterRolesWorkerNodeScriptActions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.putScriptActions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActions">HdinsightKafkaClusterRolesWorkerNodeScriptActions</a>]]

---

##### `reset_password` <a name="reset_password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_script_actions` <a name="reset_script_actions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.resetScriptActions"></a>

```python
def reset_script_actions() -> None
```

##### `reset_ssh_keys` <a name="reset_ssh_keys" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.resetSshKeys"></a>

```python
def reset_ssh_keys() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```

##### `reset_virtual_network_id` <a name="reset_virtual_network_id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.resetVirtualNetworkId"></a>

```python
def reset_virtual_network_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.scriptActions">script_actions</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList">HdinsightKafkaClusterRolesWorkerNodeScriptActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.numberOfDisksPerNodeInput">number_of_disks_per_node_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.scriptActionsInput">script_actions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActions">HdinsightKafkaClusterRolesWorkerNodeScriptActions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.sshKeysInput">ssh_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.targetInstanceCountInput">target_instance_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.virtualNetworkIdInput">virtual_network_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.vmSizeInput">vm_size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.numberOfDisksPerNode">number_of_disks_per_node</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.sshKeys">ssh_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.targetInstanceCount">target_instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.virtualNetworkId">virtual_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.vmSize">vm_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode">HdinsightKafkaClusterRolesWorkerNode</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `script_actions`<sup>Required</sup> <a name="script_actions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.scriptActions"></a>

```python
script_actions: HdinsightKafkaClusterRolesWorkerNodeScriptActionsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList">HdinsightKafkaClusterRolesWorkerNodeScriptActionsList</a>

---

##### `number_of_disks_per_node_input`<sup>Optional</sup> <a name="number_of_disks_per_node_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.numberOfDisksPerNodeInput"></a>

```python
number_of_disks_per_node_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `script_actions_input`<sup>Optional</sup> <a name="script_actions_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.scriptActionsInput"></a>

```python
script_actions_input: typing.Union[IResolvable, typing.List[HdinsightKafkaClusterRolesWorkerNodeScriptActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActions">HdinsightKafkaClusterRolesWorkerNodeScriptActions</a>]]

---

##### `ssh_keys_input`<sup>Optional</sup> <a name="ssh_keys_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.sshKeysInput"></a>

```python
ssh_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `target_instance_count_input`<sup>Optional</sup> <a name="target_instance_count_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.targetInstanceCountInput"></a>

```python
target_instance_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `virtual_network_id_input`<sup>Optional</sup> <a name="virtual_network_id_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.virtualNetworkIdInput"></a>

```python
virtual_network_id_input: str
```

- *Type:* str

---

##### `vm_size_input`<sup>Optional</sup> <a name="vm_size_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.vmSizeInput"></a>

```python
vm_size_input: str
```

- *Type:* str

---

##### `number_of_disks_per_node`<sup>Required</sup> <a name="number_of_disks_per_node" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.numberOfDisksPerNode"></a>

```python
number_of_disks_per_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `ssh_keys`<sup>Required</sup> <a name="ssh_keys" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.sshKeys"></a>

```python
ssh_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `target_instance_count`<sup>Required</sup> <a name="target_instance_count" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.targetInstanceCount"></a>

```python
target_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `virtual_network_id`<sup>Required</sup> <a name="virtual_network_id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.virtualNetworkId"></a>

```python
virtual_network_id: str
```

- *Type:* str

---

##### `vm_size`<sup>Required</sup> <a name="vm_size" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.vmSize"></a>

```python
vm_size: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.internalValue"></a>

```python
internal_value: HdinsightKafkaClusterRolesWorkerNode
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode">HdinsightKafkaClusterRolesWorkerNode</a>

---


### HdinsightKafkaClusterRolesWorkerNodeScriptActionsList <a name="HdinsightKafkaClusterRolesWorkerNodeScriptActionsList" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_kafka_cluster

hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActions">HdinsightKafkaClusterRolesWorkerNodeScriptActions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[HdinsightKafkaClusterRolesWorkerNodeScriptActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActions">HdinsightKafkaClusterRolesWorkerNodeScriptActions</a>]]

---


### HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference <a name="HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_kafka_cluster

hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.property.parametersInput">parameters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.property.parameters">parameters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActions">HdinsightKafkaClusterRolesWorkerNodeScriptActions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.property.parametersInput"></a>

```python
parameters_input: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, HdinsightKafkaClusterRolesWorkerNodeScriptActions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActions">HdinsightKafkaClusterRolesWorkerNodeScriptActions</a>]

---


### HdinsightKafkaClusterRolesZookeeperNodeOutputReference <a name="HdinsightKafkaClusterRolesZookeeperNodeOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_kafka_cluster

hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.putScriptActions">put_script_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.resetScriptActions">reset_script_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.resetSshKeys">reset_ssh_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.resetSubnetId">reset_subnet_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.resetVirtualNetworkId">reset_virtual_network_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_script_actions` <a name="put_script_actions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.putScriptActions"></a>

```python
def put_script_actions(
  value: typing.Union[IResolvable, typing.List[HdinsightKafkaClusterRolesZookeeperNodeScriptActions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.putScriptActions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActions">HdinsightKafkaClusterRolesZookeeperNodeScriptActions</a>]]

---

##### `reset_password` <a name="reset_password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_script_actions` <a name="reset_script_actions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.resetScriptActions"></a>

```python
def reset_script_actions() -> None
```

##### `reset_ssh_keys` <a name="reset_ssh_keys" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.resetSshKeys"></a>

```python
def reset_ssh_keys() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```

##### `reset_virtual_network_id` <a name="reset_virtual_network_id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.resetVirtualNetworkId"></a>

```python
def reset_virtual_network_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.scriptActions">script_actions</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList">HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.scriptActionsInput">script_actions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActions">HdinsightKafkaClusterRolesZookeeperNodeScriptActions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.sshKeysInput">ssh_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.virtualNetworkIdInput">virtual_network_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.vmSizeInput">vm_size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.sshKeys">ssh_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.virtualNetworkId">virtual_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.vmSize">vm_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode">HdinsightKafkaClusterRolesZookeeperNode</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `script_actions`<sup>Required</sup> <a name="script_actions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.scriptActions"></a>

```python
script_actions: HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList">HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList</a>

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `script_actions_input`<sup>Optional</sup> <a name="script_actions_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.scriptActionsInput"></a>

```python
script_actions_input: typing.Union[IResolvable, typing.List[HdinsightKafkaClusterRolesZookeeperNodeScriptActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActions">HdinsightKafkaClusterRolesZookeeperNodeScriptActions</a>]]

---

##### `ssh_keys_input`<sup>Optional</sup> <a name="ssh_keys_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.sshKeysInput"></a>

```python
ssh_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `virtual_network_id_input`<sup>Optional</sup> <a name="virtual_network_id_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.virtualNetworkIdInput"></a>

```python
virtual_network_id_input: str
```

- *Type:* str

---

##### `vm_size_input`<sup>Optional</sup> <a name="vm_size_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.vmSizeInput"></a>

```python
vm_size_input: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `ssh_keys`<sup>Required</sup> <a name="ssh_keys" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.sshKeys"></a>

```python
ssh_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `virtual_network_id`<sup>Required</sup> <a name="virtual_network_id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.virtualNetworkId"></a>

```python
virtual_network_id: str
```

- *Type:* str

---

##### `vm_size`<sup>Required</sup> <a name="vm_size" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.vmSize"></a>

```python
vm_size: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.internalValue"></a>

```python
internal_value: HdinsightKafkaClusterRolesZookeeperNode
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode">HdinsightKafkaClusterRolesZookeeperNode</a>

---


### HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList <a name="HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_kafka_cluster

hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActions">HdinsightKafkaClusterRolesZookeeperNodeScriptActions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[HdinsightKafkaClusterRolesZookeeperNodeScriptActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActions">HdinsightKafkaClusterRolesZookeeperNodeScriptActions</a>]]

---


### HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference <a name="HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_kafka_cluster

hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.property.parametersInput">parameters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.property.parameters">parameters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActions">HdinsightKafkaClusterRolesZookeeperNodeScriptActions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.property.parametersInput"></a>

```python
parameters_input: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, HdinsightKafkaClusterRolesZookeeperNodeScriptActions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActions">HdinsightKafkaClusterRolesZookeeperNodeScriptActions</a>]

---


### HdinsightKafkaClusterSecurityProfileOutputReference <a name="HdinsightKafkaClusterSecurityProfileOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_kafka_cluster

hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.resetClusterUsersGroupDns">reset_cluster_users_group_dns</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cluster_users_group_dns` <a name="reset_cluster_users_group_dns" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.resetClusterUsersGroupDns"></a>

```python
def reset_cluster_users_group_dns() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.aaddsResourceIdInput">aadds_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.clusterUsersGroupDnsInput">cluster_users_group_dns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.domainNameInput">domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.domainUsernameInput">domain_username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.domainUserPasswordInput">domain_user_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.ldapsUrlsInput">ldaps_urls_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.msiResourceIdInput">msi_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.aaddsResourceId">aadds_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.clusterUsersGroupDns">cluster_users_group_dns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.domainUsername">domain_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.domainUserPassword">domain_user_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.ldapsUrls">ldaps_urls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.msiResourceId">msi_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile">HdinsightKafkaClusterSecurityProfile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aadds_resource_id_input`<sup>Optional</sup> <a name="aadds_resource_id_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.aaddsResourceIdInput"></a>

```python
aadds_resource_id_input: str
```

- *Type:* str

---

##### `cluster_users_group_dns_input`<sup>Optional</sup> <a name="cluster_users_group_dns_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.clusterUsersGroupDnsInput"></a>

```python
cluster_users_group_dns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `domain_name_input`<sup>Optional</sup> <a name="domain_name_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.domainNameInput"></a>

```python
domain_name_input: str
```

- *Type:* str

---

##### `domain_username_input`<sup>Optional</sup> <a name="domain_username_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.domainUsernameInput"></a>

```python
domain_username_input: str
```

- *Type:* str

---

##### `domain_user_password_input`<sup>Optional</sup> <a name="domain_user_password_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.domainUserPasswordInput"></a>

```python
domain_user_password_input: str
```

- *Type:* str

---

##### `ldaps_urls_input`<sup>Optional</sup> <a name="ldaps_urls_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.ldapsUrlsInput"></a>

```python
ldaps_urls_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `msi_resource_id_input`<sup>Optional</sup> <a name="msi_resource_id_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.msiResourceIdInput"></a>

```python
msi_resource_id_input: str
```

- *Type:* str

---

##### `aadds_resource_id`<sup>Required</sup> <a name="aadds_resource_id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.aaddsResourceId"></a>

```python
aadds_resource_id: str
```

- *Type:* str

---

##### `cluster_users_group_dns`<sup>Required</sup> <a name="cluster_users_group_dns" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.clusterUsersGroupDns"></a>

```python
cluster_users_group_dns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `domain_username`<sup>Required</sup> <a name="domain_username" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.domainUsername"></a>

```python
domain_username: str
```

- *Type:* str

---

##### `domain_user_password`<sup>Required</sup> <a name="domain_user_password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.domainUserPassword"></a>

```python
domain_user_password: str
```

- *Type:* str

---

##### `ldaps_urls`<sup>Required</sup> <a name="ldaps_urls" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.ldapsUrls"></a>

```python
ldaps_urls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `msi_resource_id`<sup>Required</sup> <a name="msi_resource_id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.msiResourceId"></a>

```python
msi_resource_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.internalValue"></a>

```python
internal_value: HdinsightKafkaClusterSecurityProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile">HdinsightKafkaClusterSecurityProfile</a>

---


### HdinsightKafkaClusterStorageAccountGen2OutputReference <a name="HdinsightKafkaClusterStorageAccountGen2OutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_kafka_cluster

hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.filesystemIdInput">filesystem_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.isDefaultInput">is_default_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.managedIdentityResourceIdInput">managed_identity_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.storageResourceIdInput">storage_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.filesystemId">filesystem_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.isDefault">is_default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.managedIdentityResourceId">managed_identity_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.storageResourceId">storage_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2">HdinsightKafkaClusterStorageAccountGen2</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filesystem_id_input`<sup>Optional</sup> <a name="filesystem_id_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.filesystemIdInput"></a>

```python
filesystem_id_input: str
```

- *Type:* str

---

##### `is_default_input`<sup>Optional</sup> <a name="is_default_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.isDefaultInput"></a>

```python
is_default_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `managed_identity_resource_id_input`<sup>Optional</sup> <a name="managed_identity_resource_id_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.managedIdentityResourceIdInput"></a>

```python
managed_identity_resource_id_input: str
```

- *Type:* str

---

##### `storage_resource_id_input`<sup>Optional</sup> <a name="storage_resource_id_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.storageResourceIdInput"></a>

```python
storage_resource_id_input: str
```

- *Type:* str

---

##### `filesystem_id`<sup>Required</sup> <a name="filesystem_id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.filesystemId"></a>

```python
filesystem_id: str
```

- *Type:* str

---

##### `is_default`<sup>Required</sup> <a name="is_default" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.isDefault"></a>

```python
is_default: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `managed_identity_resource_id`<sup>Required</sup> <a name="managed_identity_resource_id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.managedIdentityResourceId"></a>

```python
managed_identity_resource_id: str
```

- *Type:* str

---

##### `storage_resource_id`<sup>Required</sup> <a name="storage_resource_id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.storageResourceId"></a>

```python
storage_resource_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.internalValue"></a>

```python
internal_value: HdinsightKafkaClusterStorageAccountGen2
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2">HdinsightKafkaClusterStorageAccountGen2</a>

---


### HdinsightKafkaClusterStorageAccountList <a name="HdinsightKafkaClusterStorageAccountList" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_kafka_cluster

hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> HdinsightKafkaClusterStorageAccountOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccount">HdinsightKafkaClusterStorageAccount</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[HdinsightKafkaClusterStorageAccount]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccount">HdinsightKafkaClusterStorageAccount</a>]]

---


### HdinsightKafkaClusterStorageAccountOutputReference <a name="HdinsightKafkaClusterStorageAccountOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_kafka_cluster

hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.resetStorageResourceId">reset_storage_resource_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_storage_resource_id` <a name="reset_storage_resource_id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.resetStorageResourceId"></a>

```python
def reset_storage_resource_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.isDefaultInput">is_default_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.storageAccountKeyInput">storage_account_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.storageContainerIdInput">storage_container_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.storageResourceIdInput">storage_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.isDefault">is_default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.storageAccountKey">storage_account_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.storageContainerId">storage_container_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.storageResourceId">storage_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccount">HdinsightKafkaClusterStorageAccount</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_default_input`<sup>Optional</sup> <a name="is_default_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.isDefaultInput"></a>

```python
is_default_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `storage_account_key_input`<sup>Optional</sup> <a name="storage_account_key_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.storageAccountKeyInput"></a>

```python
storage_account_key_input: str
```

- *Type:* str

---

##### `storage_container_id_input`<sup>Optional</sup> <a name="storage_container_id_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.storageContainerIdInput"></a>

```python
storage_container_id_input: str
```

- *Type:* str

---

##### `storage_resource_id_input`<sup>Optional</sup> <a name="storage_resource_id_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.storageResourceIdInput"></a>

```python
storage_resource_id_input: str
```

- *Type:* str

---

##### `is_default`<sup>Required</sup> <a name="is_default" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.isDefault"></a>

```python
is_default: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `storage_account_key`<sup>Required</sup> <a name="storage_account_key" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.storageAccountKey"></a>

```python
storage_account_key: str
```

- *Type:* str

---

##### `storage_container_id`<sup>Required</sup> <a name="storage_container_id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.storageContainerId"></a>

```python
storage_container_id: str
```

- *Type:* str

---

##### `storage_resource_id`<sup>Required</sup> <a name="storage_resource_id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.storageResourceId"></a>

```python
storage_resource_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, HdinsightKafkaClusterStorageAccount]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccount">HdinsightKafkaClusterStorageAccount</a>]

---


### HdinsightKafkaClusterTimeoutsOutputReference <a name="HdinsightKafkaClusterTimeoutsOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_kafka_cluster

hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeouts">HdinsightKafkaClusterTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, HdinsightKafkaClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeouts">HdinsightKafkaClusterTimeouts</a>]

---



