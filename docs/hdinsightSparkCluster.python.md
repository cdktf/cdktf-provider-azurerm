# `hdinsightSparkCluster` Submodule <a name="`hdinsightSparkCluster` Submodule" id="@cdktf/provider-azurerm.hdinsightSparkCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HdinsightSparkCluster <a name="HdinsightSparkCluster" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster azurerm_hdinsight_spark_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_spark_cluster

hdinsightSparkCluster.HdinsightSparkCluster(
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
  component_version: HdinsightSparkClusterComponentVersion,
  gateway: HdinsightSparkClusterGateway,
  location: str,
  name: str,
  resource_group_name: str,
  roles: HdinsightSparkClusterRoles,
  tier: str,
  compute_isolation: HdinsightSparkClusterComputeIsolation = None,
  disk_encryption: typing.Union[IResolvable, typing.List[HdinsightSparkClusterDiskEncryption]] = None,
  encryption_in_transit_enabled: typing.Union[bool, IResolvable] = None,
  extension: HdinsightSparkClusterExtension = None,
  id: str = None,
  metastores: HdinsightSparkClusterMetastores = None,
  monitor: HdinsightSparkClusterMonitor = None,
  network: HdinsightSparkClusterNetwork = None,
  private_link_configuration: HdinsightSparkClusterPrivateLinkConfiguration = None,
  security_profile: HdinsightSparkClusterSecurityProfile = None,
  storage_account: typing.Union[IResolvable, typing.List[HdinsightSparkClusterStorageAccount]] = None,
  storage_account_gen2: HdinsightSparkClusterStorageAccountGen2 = None,
  tags: typing.Mapping[str] = None,
  timeouts: HdinsightSparkClusterTimeouts = None,
  tls_min_version: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.Initializer.parameter.clusterVersion">cluster_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#cluster_version HdinsightSparkCluster#cluster_version}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.Initializer.parameter.componentVersion">component_version</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComponentVersion">HdinsightSparkClusterComponentVersion</a></code> | component_version block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.Initializer.parameter.gateway">gateway</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterGateway">HdinsightSparkClusterGateway</a></code> | gateway block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#location HdinsightSparkCluster#location}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#name HdinsightSparkCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#resource_group_name HdinsightSparkCluster#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.Initializer.parameter.roles">roles</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRoles">HdinsightSparkClusterRoles</a></code> | roles block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.Initializer.parameter.tier">tier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#tier HdinsightSparkCluster#tier}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.Initializer.parameter.computeIsolation">compute_isolation</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolation">HdinsightSparkClusterComputeIsolation</a></code> | compute_isolation block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.Initializer.parameter.diskEncryption">disk_encryption</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryption">HdinsightSparkClusterDiskEncryption</a>]]</code> | disk_encryption block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.Initializer.parameter.encryptionInTransitEnabled">encryption_in_transit_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#encryption_in_transit_enabled HdinsightSparkCluster#encryption_in_transit_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.Initializer.parameter.extension">extension</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterExtension">HdinsightSparkClusterExtension</a></code> | extension block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#id HdinsightSparkCluster#id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.Initializer.parameter.metastores">metastores</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastores">HdinsightSparkClusterMetastores</a></code> | metastores block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.Initializer.parameter.monitor">monitor</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMonitor">HdinsightSparkClusterMonitor</a></code> | monitor block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.Initializer.parameter.network">network</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetwork">HdinsightSparkClusterNetwork</a></code> | network block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.Initializer.parameter.privateLinkConfiguration">private_link_configuration</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfiguration">HdinsightSparkClusterPrivateLinkConfiguration</a></code> | private_link_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.Initializer.parameter.securityProfile">security_profile</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfile">HdinsightSparkClusterSecurityProfile</a></code> | security_profile block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.Initializer.parameter.storageAccount">storage_account</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccount">HdinsightSparkClusterStorageAccount</a>]]</code> | storage_account block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.Initializer.parameter.storageAccountGen2">storage_account_gen2</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2">HdinsightSparkClusterStorageAccountGen2</a></code> | storage_account_gen2 block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#tags HdinsightSparkCluster#tags}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeouts">HdinsightSparkClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.Initializer.parameter.tlsMinVersion">tls_min_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#tls_min_version HdinsightSparkCluster#tls_min_version}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_version`<sup>Required</sup> <a name="cluster_version" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.Initializer.parameter.clusterVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#cluster_version HdinsightSparkCluster#cluster_version}.

---

##### `component_version`<sup>Required</sup> <a name="component_version" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.Initializer.parameter.componentVersion"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComponentVersion">HdinsightSparkClusterComponentVersion</a>

component_version block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#component_version HdinsightSparkCluster#component_version}

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.Initializer.parameter.gateway"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterGateway">HdinsightSparkClusterGateway</a>

gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#gateway HdinsightSparkCluster#gateway}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#location HdinsightSparkCluster#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#name HdinsightSparkCluster#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#resource_group_name HdinsightSparkCluster#resource_group_name}.

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.Initializer.parameter.roles"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRoles">HdinsightSparkClusterRoles</a>

roles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#roles HdinsightSparkCluster#roles}

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.Initializer.parameter.tier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#tier HdinsightSparkCluster#tier}.

---

##### `compute_isolation`<sup>Optional</sup> <a name="compute_isolation" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.Initializer.parameter.computeIsolation"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolation">HdinsightSparkClusterComputeIsolation</a>

compute_isolation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#compute_isolation HdinsightSparkCluster#compute_isolation}

---

##### `disk_encryption`<sup>Optional</sup> <a name="disk_encryption" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.Initializer.parameter.diskEncryption"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryption">HdinsightSparkClusterDiskEncryption</a>]]

disk_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#disk_encryption HdinsightSparkCluster#disk_encryption}

---

##### `encryption_in_transit_enabled`<sup>Optional</sup> <a name="encryption_in_transit_enabled" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.Initializer.parameter.encryptionInTransitEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#encryption_in_transit_enabled HdinsightSparkCluster#encryption_in_transit_enabled}.

---

##### `extension`<sup>Optional</sup> <a name="extension" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.Initializer.parameter.extension"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterExtension">HdinsightSparkClusterExtension</a>

extension block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#extension HdinsightSparkCluster#extension}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#id HdinsightSparkCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metastores`<sup>Optional</sup> <a name="metastores" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.Initializer.parameter.metastores"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastores">HdinsightSparkClusterMetastores</a>

metastores block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#metastores HdinsightSparkCluster#metastores}

---

##### `monitor`<sup>Optional</sup> <a name="monitor" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.Initializer.parameter.monitor"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMonitor">HdinsightSparkClusterMonitor</a>

monitor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#monitor HdinsightSparkCluster#monitor}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.Initializer.parameter.network"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetwork">HdinsightSparkClusterNetwork</a>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#network HdinsightSparkCluster#network}

---

##### `private_link_configuration`<sup>Optional</sup> <a name="private_link_configuration" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.Initializer.parameter.privateLinkConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfiguration">HdinsightSparkClusterPrivateLinkConfiguration</a>

private_link_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#private_link_configuration HdinsightSparkCluster#private_link_configuration}

---

##### `security_profile`<sup>Optional</sup> <a name="security_profile" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.Initializer.parameter.securityProfile"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfile">HdinsightSparkClusterSecurityProfile</a>

security_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#security_profile HdinsightSparkCluster#security_profile}

---

##### `storage_account`<sup>Optional</sup> <a name="storage_account" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.Initializer.parameter.storageAccount"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccount">HdinsightSparkClusterStorageAccount</a>]]

storage_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#storage_account HdinsightSparkCluster#storage_account}

---

##### `storage_account_gen2`<sup>Optional</sup> <a name="storage_account_gen2" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.Initializer.parameter.storageAccountGen2"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2">HdinsightSparkClusterStorageAccountGen2</a>

storage_account_gen2 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#storage_account_gen2 HdinsightSparkCluster#storage_account_gen2}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#tags HdinsightSparkCluster#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeouts">HdinsightSparkClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#timeouts HdinsightSparkCluster#timeouts}

---

##### `tls_min_version`<sup>Optional</sup> <a name="tls_min_version" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.Initializer.parameter.tlsMinVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#tls_min_version HdinsightSparkCluster#tls_min_version}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.putComponentVersion">put_component_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.putComputeIsolation">put_compute_isolation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.putDiskEncryption">put_disk_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.putExtension">put_extension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.putGateway">put_gateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.putMetastores">put_metastores</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.putMonitor">put_monitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.putNetwork">put_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.putPrivateLinkConfiguration">put_private_link_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.putRoles">put_roles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.putSecurityProfile">put_security_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.putStorageAccount">put_storage_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.putStorageAccountGen2">put_storage_account_gen2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.resetComputeIsolation">reset_compute_isolation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.resetDiskEncryption">reset_disk_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.resetEncryptionInTransitEnabled">reset_encryption_in_transit_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.resetExtension">reset_extension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.resetMetastores">reset_metastores</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.resetMonitor">reset_monitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.resetNetwork">reset_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.resetPrivateLinkConfiguration">reset_private_link_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.resetSecurityProfile">reset_security_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.resetStorageAccount">reset_storage_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.resetStorageAccountGen2">reset_storage_account_gen2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.resetTlsMinVersion">reset_tls_min_version</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_component_version` <a name="put_component_version" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.putComponentVersion"></a>

```python
def put_component_version(
  spark: str
) -> None
```

###### `spark`<sup>Required</sup> <a name="spark" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.putComponentVersion.parameter.spark"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#spark HdinsightSparkCluster#spark}.

---

##### `put_compute_isolation` <a name="put_compute_isolation" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.putComputeIsolation"></a>

```python
def put_compute_isolation(
  compute_isolation_enabled: typing.Union[bool, IResolvable] = None,
  host_sku: str = None
) -> None
```

###### `compute_isolation_enabled`<sup>Optional</sup> <a name="compute_isolation_enabled" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.putComputeIsolation.parameter.computeIsolationEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#compute_isolation_enabled HdinsightSparkCluster#compute_isolation_enabled}.

---

###### `host_sku`<sup>Optional</sup> <a name="host_sku" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.putComputeIsolation.parameter.hostSku"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#host_sku HdinsightSparkCluster#host_sku}.

---

##### `put_disk_encryption` <a name="put_disk_encryption" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.putDiskEncryption"></a>

```python
def put_disk_encryption(
  value: typing.Union[IResolvable, typing.List[HdinsightSparkClusterDiskEncryption]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.putDiskEncryption.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryption">HdinsightSparkClusterDiskEncryption</a>]]

---

##### `put_extension` <a name="put_extension" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.putExtension"></a>

```python
def put_extension(
  log_analytics_workspace_id: str,
  primary_key: str
) -> None
```

###### `log_analytics_workspace_id`<sup>Required</sup> <a name="log_analytics_workspace_id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.putExtension.parameter.logAnalyticsWorkspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#log_analytics_workspace_id HdinsightSparkCluster#log_analytics_workspace_id}.

---

###### `primary_key`<sup>Required</sup> <a name="primary_key" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.putExtension.parameter.primaryKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#primary_key HdinsightSparkCluster#primary_key}.

---

##### `put_gateway` <a name="put_gateway" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.putGateway"></a>

```python
def put_gateway(
  password: str,
  username: str
) -> None
```

###### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.putGateway.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#password HdinsightSparkCluster#password}.

---

###### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.putGateway.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#username HdinsightSparkCluster#username}.

---

##### `put_metastores` <a name="put_metastores" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.putMetastores"></a>

```python
def put_metastores(
  ambari: HdinsightSparkClusterMetastoresAmbari = None,
  hive: HdinsightSparkClusterMetastoresHive = None,
  oozie: HdinsightSparkClusterMetastoresOozie = None
) -> None
```

###### `ambari`<sup>Optional</sup> <a name="ambari" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.putMetastores.parameter.ambari"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbari">HdinsightSparkClusterMetastoresAmbari</a>

ambari block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#ambari HdinsightSparkCluster#ambari}

---

###### `hive`<sup>Optional</sup> <a name="hive" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.putMetastores.parameter.hive"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHive">HdinsightSparkClusterMetastoresHive</a>

hive block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#hive HdinsightSparkCluster#hive}

---

###### `oozie`<sup>Optional</sup> <a name="oozie" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.putMetastores.parameter.oozie"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozie">HdinsightSparkClusterMetastoresOozie</a>

oozie block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#oozie HdinsightSparkCluster#oozie}

---

##### `put_monitor` <a name="put_monitor" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.putMonitor"></a>

```python
def put_monitor(
  log_analytics_workspace_id: str,
  primary_key: str
) -> None
```

###### `log_analytics_workspace_id`<sup>Required</sup> <a name="log_analytics_workspace_id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.putMonitor.parameter.logAnalyticsWorkspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#log_analytics_workspace_id HdinsightSparkCluster#log_analytics_workspace_id}.

---

###### `primary_key`<sup>Required</sup> <a name="primary_key" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.putMonitor.parameter.primaryKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#primary_key HdinsightSparkCluster#primary_key}.

---

##### `put_network` <a name="put_network" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.putNetwork"></a>

```python
def put_network(
  connection_direction: str = None,
  private_link_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `connection_direction`<sup>Optional</sup> <a name="connection_direction" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.putNetwork.parameter.connectionDirection"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#connection_direction HdinsightSparkCluster#connection_direction}.

---

###### `private_link_enabled`<sup>Optional</sup> <a name="private_link_enabled" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.putNetwork.parameter.privateLinkEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#private_link_enabled HdinsightSparkCluster#private_link_enabled}.

---

##### `put_private_link_configuration` <a name="put_private_link_configuration" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.putPrivateLinkConfiguration"></a>

```python
def put_private_link_configuration(
  group_id: str,
  ip_configuration: HdinsightSparkClusterPrivateLinkConfigurationIpConfiguration,
  name: str
) -> None
```

###### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.putPrivateLinkConfiguration.parameter.groupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#group_id HdinsightSparkCluster#group_id}.

---

###### `ip_configuration`<sup>Required</sup> <a name="ip_configuration" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.putPrivateLinkConfiguration.parameter.ipConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfiguration">HdinsightSparkClusterPrivateLinkConfigurationIpConfiguration</a>

ip_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#ip_configuration HdinsightSparkCluster#ip_configuration}

---

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.putPrivateLinkConfiguration.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#name HdinsightSparkCluster#name}.

---

##### `put_roles` <a name="put_roles" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.putRoles"></a>

```python
def put_roles(
  head_node: HdinsightSparkClusterRolesHeadNode,
  worker_node: HdinsightSparkClusterRolesWorkerNode,
  zookeeper_node: HdinsightSparkClusterRolesZookeeperNode
) -> None
```

###### `head_node`<sup>Required</sup> <a name="head_node" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.putRoles.parameter.headNode"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNode">HdinsightSparkClusterRolesHeadNode</a>

head_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#head_node HdinsightSparkCluster#head_node}

---

###### `worker_node`<sup>Required</sup> <a name="worker_node" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.putRoles.parameter.workerNode"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNode">HdinsightSparkClusterRolesWorkerNode</a>

worker_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#worker_node HdinsightSparkCluster#worker_node}

---

###### `zookeeper_node`<sup>Required</sup> <a name="zookeeper_node" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.putRoles.parameter.zookeeperNode"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNode">HdinsightSparkClusterRolesZookeeperNode</a>

zookeeper_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#zookeeper_node HdinsightSparkCluster#zookeeper_node}

---

##### `put_security_profile` <a name="put_security_profile" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.putSecurityProfile"></a>

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

###### `aadds_resource_id`<sup>Required</sup> <a name="aadds_resource_id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.putSecurityProfile.parameter.aaddsResourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#aadds_resource_id HdinsightSparkCluster#aadds_resource_id}.

---

###### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.putSecurityProfile.parameter.domainName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#domain_name HdinsightSparkCluster#domain_name}.

---

###### `domain_username`<sup>Required</sup> <a name="domain_username" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.putSecurityProfile.parameter.domainUsername"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#domain_username HdinsightSparkCluster#domain_username}.

---

###### `domain_user_password`<sup>Required</sup> <a name="domain_user_password" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.putSecurityProfile.parameter.domainUserPassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#domain_user_password HdinsightSparkCluster#domain_user_password}.

---

###### `ldaps_urls`<sup>Required</sup> <a name="ldaps_urls" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.putSecurityProfile.parameter.ldapsUrls"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#ldaps_urls HdinsightSparkCluster#ldaps_urls}.

---

###### `msi_resource_id`<sup>Required</sup> <a name="msi_resource_id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.putSecurityProfile.parameter.msiResourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#msi_resource_id HdinsightSparkCluster#msi_resource_id}.

---

###### `cluster_users_group_dns`<sup>Optional</sup> <a name="cluster_users_group_dns" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.putSecurityProfile.parameter.clusterUsersGroupDns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#cluster_users_group_dns HdinsightSparkCluster#cluster_users_group_dns}.

---

##### `put_storage_account` <a name="put_storage_account" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.putStorageAccount"></a>

```python
def put_storage_account(
  value: typing.Union[IResolvable, typing.List[HdinsightSparkClusterStorageAccount]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.putStorageAccount.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccount">HdinsightSparkClusterStorageAccount</a>]]

---

##### `put_storage_account_gen2` <a name="put_storage_account_gen2" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.putStorageAccountGen2"></a>

```python
def put_storage_account_gen2(
  filesystem_id: str,
  is_default: typing.Union[bool, IResolvable],
  managed_identity_resource_id: str,
  storage_resource_id: str
) -> None
```

###### `filesystem_id`<sup>Required</sup> <a name="filesystem_id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.putStorageAccountGen2.parameter.filesystemId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#filesystem_id HdinsightSparkCluster#filesystem_id}.

---

###### `is_default`<sup>Required</sup> <a name="is_default" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.putStorageAccountGen2.parameter.isDefault"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#is_default HdinsightSparkCluster#is_default}.

---

###### `managed_identity_resource_id`<sup>Required</sup> <a name="managed_identity_resource_id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.putStorageAccountGen2.parameter.managedIdentityResourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#managed_identity_resource_id HdinsightSparkCluster#managed_identity_resource_id}.

---

###### `storage_resource_id`<sup>Required</sup> <a name="storage_resource_id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.putStorageAccountGen2.parameter.storageResourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#storage_resource_id HdinsightSparkCluster#storage_resource_id}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#create HdinsightSparkCluster#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#delete HdinsightSparkCluster#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#read HdinsightSparkCluster#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#update HdinsightSparkCluster#update}.

---

##### `reset_compute_isolation` <a name="reset_compute_isolation" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.resetComputeIsolation"></a>

```python
def reset_compute_isolation() -> None
```

##### `reset_disk_encryption` <a name="reset_disk_encryption" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.resetDiskEncryption"></a>

```python
def reset_disk_encryption() -> None
```

##### `reset_encryption_in_transit_enabled` <a name="reset_encryption_in_transit_enabled" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.resetEncryptionInTransitEnabled"></a>

```python
def reset_encryption_in_transit_enabled() -> None
```

##### `reset_extension` <a name="reset_extension" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.resetExtension"></a>

```python
def reset_extension() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_metastores` <a name="reset_metastores" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.resetMetastores"></a>

```python
def reset_metastores() -> None
```

##### `reset_monitor` <a name="reset_monitor" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.resetMonitor"></a>

```python
def reset_monitor() -> None
```

##### `reset_network` <a name="reset_network" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.resetNetwork"></a>

```python
def reset_network() -> None
```

##### `reset_private_link_configuration` <a name="reset_private_link_configuration" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.resetPrivateLinkConfiguration"></a>

```python
def reset_private_link_configuration() -> None
```

##### `reset_security_profile` <a name="reset_security_profile" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.resetSecurityProfile"></a>

```python
def reset_security_profile() -> None
```

##### `reset_storage_account` <a name="reset_storage_account" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.resetStorageAccount"></a>

```python
def reset_storage_account() -> None
```

##### `reset_storage_account_gen2` <a name="reset_storage_account_gen2" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.resetStorageAccountGen2"></a>

```python
def reset_storage_account_gen2() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_tls_min_version` <a name="reset_tls_min_version" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.resetTlsMinVersion"></a>

```python
def reset_tls_min_version() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a HdinsightSparkCluster resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_spark_cluster

hdinsightSparkCluster.HdinsightSparkCluster.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_spark_cluster

hdinsightSparkCluster.HdinsightSparkCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_spark_cluster

hdinsightSparkCluster.HdinsightSparkCluster.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_spark_cluster

hdinsightSparkCluster.HdinsightSparkCluster.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a HdinsightSparkCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the HdinsightSparkCluster to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing HdinsightSparkCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the HdinsightSparkCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.componentVersion">component_version</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComponentVersionOutputReference">HdinsightSparkClusterComponentVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.computeIsolation">compute_isolation</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolationOutputReference">HdinsightSparkClusterComputeIsolationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.diskEncryption">disk_encryption</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionList">HdinsightSparkClusterDiskEncryptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.extension">extension</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterExtensionOutputReference">HdinsightSparkClusterExtensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.gateway">gateway</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterGatewayOutputReference">HdinsightSparkClusterGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.httpsEndpoint">https_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.metastores">metastores</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference">HdinsightSparkClusterMetastoresOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.monitor">monitor</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMonitorOutputReference">HdinsightSparkClusterMonitorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.network">network</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetworkOutputReference">HdinsightSparkClusterNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.privateLinkConfiguration">private_link_configuration</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationOutputReference">HdinsightSparkClusterPrivateLinkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.roles">roles</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference">HdinsightSparkClusterRolesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.securityProfile">security_profile</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference">HdinsightSparkClusterSecurityProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.sshEndpoint">ssh_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.storageAccount">storage_account</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountList">HdinsightSparkClusterStorageAccountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.storageAccountGen2">storage_account_gen2</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2OutputReference">HdinsightSparkClusterStorageAccountGen2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeoutsOutputReference">HdinsightSparkClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.clusterVersionInput">cluster_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.componentVersionInput">component_version_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComponentVersion">HdinsightSparkClusterComponentVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.computeIsolationInput">compute_isolation_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolation">HdinsightSparkClusterComputeIsolation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.diskEncryptionInput">disk_encryption_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryption">HdinsightSparkClusterDiskEncryption</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.encryptionInTransitEnabledInput">encryption_in_transit_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.extensionInput">extension_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterExtension">HdinsightSparkClusterExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.gatewayInput">gateway_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterGateway">HdinsightSparkClusterGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.metastoresInput">metastores_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastores">HdinsightSparkClusterMetastores</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.monitorInput">monitor_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMonitor">HdinsightSparkClusterMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.networkInput">network_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetwork">HdinsightSparkClusterNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.privateLinkConfigurationInput">private_link_configuration_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfiguration">HdinsightSparkClusterPrivateLinkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.rolesInput">roles_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRoles">HdinsightSparkClusterRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.securityProfileInput">security_profile_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfile">HdinsightSparkClusterSecurityProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.storageAccountGen2Input">storage_account_gen2_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2">HdinsightSparkClusterStorageAccountGen2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.storageAccountInput">storage_account_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccount">HdinsightSparkClusterStorageAccount</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.tierInput">tier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeouts">HdinsightSparkClusterTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.tlsMinVersionInput">tls_min_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.clusterVersion">cluster_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.encryptionInTransitEnabled">encryption_in_transit_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.tier">tier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.tlsMinVersion">tls_min_version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `component_version`<sup>Required</sup> <a name="component_version" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.componentVersion"></a>

```python
component_version: HdinsightSparkClusterComponentVersionOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComponentVersionOutputReference">HdinsightSparkClusterComponentVersionOutputReference</a>

---

##### `compute_isolation`<sup>Required</sup> <a name="compute_isolation" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.computeIsolation"></a>

```python
compute_isolation: HdinsightSparkClusterComputeIsolationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolationOutputReference">HdinsightSparkClusterComputeIsolationOutputReference</a>

---

##### `disk_encryption`<sup>Required</sup> <a name="disk_encryption" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.diskEncryption"></a>

```python
disk_encryption: HdinsightSparkClusterDiskEncryptionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionList">HdinsightSparkClusterDiskEncryptionList</a>

---

##### `extension`<sup>Required</sup> <a name="extension" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.extension"></a>

```python
extension: HdinsightSparkClusterExtensionOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterExtensionOutputReference">HdinsightSparkClusterExtensionOutputReference</a>

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.gateway"></a>

```python
gateway: HdinsightSparkClusterGatewayOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterGatewayOutputReference">HdinsightSparkClusterGatewayOutputReference</a>

---

##### `https_endpoint`<sup>Required</sup> <a name="https_endpoint" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.httpsEndpoint"></a>

```python
https_endpoint: str
```

- *Type:* str

---

##### `metastores`<sup>Required</sup> <a name="metastores" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.metastores"></a>

```python
metastores: HdinsightSparkClusterMetastoresOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference">HdinsightSparkClusterMetastoresOutputReference</a>

---

##### `monitor`<sup>Required</sup> <a name="monitor" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.monitor"></a>

```python
monitor: HdinsightSparkClusterMonitorOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMonitorOutputReference">HdinsightSparkClusterMonitorOutputReference</a>

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.network"></a>

```python
network: HdinsightSparkClusterNetworkOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetworkOutputReference">HdinsightSparkClusterNetworkOutputReference</a>

---

##### `private_link_configuration`<sup>Required</sup> <a name="private_link_configuration" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.privateLinkConfiguration"></a>

```python
private_link_configuration: HdinsightSparkClusterPrivateLinkConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationOutputReference">HdinsightSparkClusterPrivateLinkConfigurationOutputReference</a>

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.roles"></a>

```python
roles: HdinsightSparkClusterRolesOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference">HdinsightSparkClusterRolesOutputReference</a>

---

##### `security_profile`<sup>Required</sup> <a name="security_profile" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.securityProfile"></a>

```python
security_profile: HdinsightSparkClusterSecurityProfileOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference">HdinsightSparkClusterSecurityProfileOutputReference</a>

---

##### `ssh_endpoint`<sup>Required</sup> <a name="ssh_endpoint" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.sshEndpoint"></a>

```python
ssh_endpoint: str
```

- *Type:* str

---

##### `storage_account`<sup>Required</sup> <a name="storage_account" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.storageAccount"></a>

```python
storage_account: HdinsightSparkClusterStorageAccountList
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountList">HdinsightSparkClusterStorageAccountList</a>

---

##### `storage_account_gen2`<sup>Required</sup> <a name="storage_account_gen2" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.storageAccountGen2"></a>

```python
storage_account_gen2: HdinsightSparkClusterStorageAccountGen2OutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2OutputReference">HdinsightSparkClusterStorageAccountGen2OutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.timeouts"></a>

```python
timeouts: HdinsightSparkClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeoutsOutputReference">HdinsightSparkClusterTimeoutsOutputReference</a>

---

##### `cluster_version_input`<sup>Optional</sup> <a name="cluster_version_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.clusterVersionInput"></a>

```python
cluster_version_input: str
```

- *Type:* str

---

##### `component_version_input`<sup>Optional</sup> <a name="component_version_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.componentVersionInput"></a>

```python
component_version_input: HdinsightSparkClusterComponentVersion
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComponentVersion">HdinsightSparkClusterComponentVersion</a>

---

##### `compute_isolation_input`<sup>Optional</sup> <a name="compute_isolation_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.computeIsolationInput"></a>

```python
compute_isolation_input: HdinsightSparkClusterComputeIsolation
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolation">HdinsightSparkClusterComputeIsolation</a>

---

##### `disk_encryption_input`<sup>Optional</sup> <a name="disk_encryption_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.diskEncryptionInput"></a>

```python
disk_encryption_input: typing.Union[IResolvable, typing.List[HdinsightSparkClusterDiskEncryption]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryption">HdinsightSparkClusterDiskEncryption</a>]]

---

##### `encryption_in_transit_enabled_input`<sup>Optional</sup> <a name="encryption_in_transit_enabled_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.encryptionInTransitEnabledInput"></a>

```python
encryption_in_transit_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `extension_input`<sup>Optional</sup> <a name="extension_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.extensionInput"></a>

```python
extension_input: HdinsightSparkClusterExtension
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterExtension">HdinsightSparkClusterExtension</a>

---

##### `gateway_input`<sup>Optional</sup> <a name="gateway_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.gatewayInput"></a>

```python
gateway_input: HdinsightSparkClusterGateway
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterGateway">HdinsightSparkClusterGateway</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `metastores_input`<sup>Optional</sup> <a name="metastores_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.metastoresInput"></a>

```python
metastores_input: HdinsightSparkClusterMetastores
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastores">HdinsightSparkClusterMetastores</a>

---

##### `monitor_input`<sup>Optional</sup> <a name="monitor_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.monitorInput"></a>

```python
monitor_input: HdinsightSparkClusterMonitor
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMonitor">HdinsightSparkClusterMonitor</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.networkInput"></a>

```python
network_input: HdinsightSparkClusterNetwork
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetwork">HdinsightSparkClusterNetwork</a>

---

##### `private_link_configuration_input`<sup>Optional</sup> <a name="private_link_configuration_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.privateLinkConfigurationInput"></a>

```python
private_link_configuration_input: HdinsightSparkClusterPrivateLinkConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfiguration">HdinsightSparkClusterPrivateLinkConfiguration</a>

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `roles_input`<sup>Optional</sup> <a name="roles_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.rolesInput"></a>

```python
roles_input: HdinsightSparkClusterRoles
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRoles">HdinsightSparkClusterRoles</a>

---

##### `security_profile_input`<sup>Optional</sup> <a name="security_profile_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.securityProfileInput"></a>

```python
security_profile_input: HdinsightSparkClusterSecurityProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfile">HdinsightSparkClusterSecurityProfile</a>

---

##### `storage_account_gen2_input`<sup>Optional</sup> <a name="storage_account_gen2_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.storageAccountGen2Input"></a>

```python
storage_account_gen2_input: HdinsightSparkClusterStorageAccountGen2
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2">HdinsightSparkClusterStorageAccountGen2</a>

---

##### `storage_account_input`<sup>Optional</sup> <a name="storage_account_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.storageAccountInput"></a>

```python
storage_account_input: typing.Union[IResolvable, typing.List[HdinsightSparkClusterStorageAccount]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccount">HdinsightSparkClusterStorageAccount</a>]]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tier_input`<sup>Optional</sup> <a name="tier_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.tierInput"></a>

```python
tier_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, HdinsightSparkClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeouts">HdinsightSparkClusterTimeouts</a>]

---

##### `tls_min_version_input`<sup>Optional</sup> <a name="tls_min_version_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.tlsMinVersionInput"></a>

```python
tls_min_version_input: str
```

- *Type:* str

---

##### `cluster_version`<sup>Required</sup> <a name="cluster_version" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.clusterVersion"></a>

```python
cluster_version: str
```

- *Type:* str

---

##### `encryption_in_transit_enabled`<sup>Required</sup> <a name="encryption_in_transit_enabled" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.encryptionInTransitEnabled"></a>

```python
encryption_in_transit_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.tier"></a>

```python
tier: str
```

- *Type:* str

---

##### `tls_min_version`<sup>Required</sup> <a name="tls_min_version" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.tlsMinVersion"></a>

```python
tls_min_version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### HdinsightSparkClusterComponentVersion <a name="HdinsightSparkClusterComponentVersion" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComponentVersion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComponentVersion.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_spark_cluster

hdinsightSparkCluster.HdinsightSparkClusterComponentVersion(
  spark: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComponentVersion.property.spark">spark</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#spark HdinsightSparkCluster#spark}. |

---

##### `spark`<sup>Required</sup> <a name="spark" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComponentVersion.property.spark"></a>

```python
spark: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#spark HdinsightSparkCluster#spark}.

---

### HdinsightSparkClusterComputeIsolation <a name="HdinsightSparkClusterComputeIsolation" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolation.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_spark_cluster

hdinsightSparkCluster.HdinsightSparkClusterComputeIsolation(
  compute_isolation_enabled: typing.Union[bool, IResolvable] = None,
  host_sku: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolation.property.computeIsolationEnabled">compute_isolation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#compute_isolation_enabled HdinsightSparkCluster#compute_isolation_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolation.property.hostSku">host_sku</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#host_sku HdinsightSparkCluster#host_sku}. |

---

##### `compute_isolation_enabled`<sup>Optional</sup> <a name="compute_isolation_enabled" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolation.property.computeIsolationEnabled"></a>

```python
compute_isolation_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#compute_isolation_enabled HdinsightSparkCluster#compute_isolation_enabled}.

---

##### `host_sku`<sup>Optional</sup> <a name="host_sku" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolation.property.hostSku"></a>

```python
host_sku: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#host_sku HdinsightSparkCluster#host_sku}.

---

### HdinsightSparkClusterConfig <a name="HdinsightSparkClusterConfig" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_spark_cluster

hdinsightSparkCluster.HdinsightSparkClusterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_version: str,
  component_version: HdinsightSparkClusterComponentVersion,
  gateway: HdinsightSparkClusterGateway,
  location: str,
  name: str,
  resource_group_name: str,
  roles: HdinsightSparkClusterRoles,
  tier: str,
  compute_isolation: HdinsightSparkClusterComputeIsolation = None,
  disk_encryption: typing.Union[IResolvable, typing.List[HdinsightSparkClusterDiskEncryption]] = None,
  encryption_in_transit_enabled: typing.Union[bool, IResolvable] = None,
  extension: HdinsightSparkClusterExtension = None,
  id: str = None,
  metastores: HdinsightSparkClusterMetastores = None,
  monitor: HdinsightSparkClusterMonitor = None,
  network: HdinsightSparkClusterNetwork = None,
  private_link_configuration: HdinsightSparkClusterPrivateLinkConfiguration = None,
  security_profile: HdinsightSparkClusterSecurityProfile = None,
  storage_account: typing.Union[IResolvable, typing.List[HdinsightSparkClusterStorageAccount]] = None,
  storage_account_gen2: HdinsightSparkClusterStorageAccountGen2 = None,
  tags: typing.Mapping[str] = None,
  timeouts: HdinsightSparkClusterTimeouts = None,
  tls_min_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterConfig.property.clusterVersion">cluster_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#cluster_version HdinsightSparkCluster#cluster_version}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterConfig.property.componentVersion">component_version</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComponentVersion">HdinsightSparkClusterComponentVersion</a></code> | component_version block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterConfig.property.gateway">gateway</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterGateway">HdinsightSparkClusterGateway</a></code> | gateway block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#location HdinsightSparkCluster#location}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#name HdinsightSparkCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#resource_group_name HdinsightSparkCluster#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterConfig.property.roles">roles</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRoles">HdinsightSparkClusterRoles</a></code> | roles block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterConfig.property.tier">tier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#tier HdinsightSparkCluster#tier}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterConfig.property.computeIsolation">compute_isolation</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolation">HdinsightSparkClusterComputeIsolation</a></code> | compute_isolation block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterConfig.property.diskEncryption">disk_encryption</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryption">HdinsightSparkClusterDiskEncryption</a>]]</code> | disk_encryption block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterConfig.property.encryptionInTransitEnabled">encryption_in_transit_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#encryption_in_transit_enabled HdinsightSparkCluster#encryption_in_transit_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterConfig.property.extension">extension</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterExtension">HdinsightSparkClusterExtension</a></code> | extension block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#id HdinsightSparkCluster#id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterConfig.property.metastores">metastores</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastores">HdinsightSparkClusterMetastores</a></code> | metastores block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterConfig.property.monitor">monitor</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMonitor">HdinsightSparkClusterMonitor</a></code> | monitor block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterConfig.property.network">network</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetwork">HdinsightSparkClusterNetwork</a></code> | network block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterConfig.property.privateLinkConfiguration">private_link_configuration</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfiguration">HdinsightSparkClusterPrivateLinkConfiguration</a></code> | private_link_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterConfig.property.securityProfile">security_profile</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfile">HdinsightSparkClusterSecurityProfile</a></code> | security_profile block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterConfig.property.storageAccount">storage_account</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccount">HdinsightSparkClusterStorageAccount</a>]]</code> | storage_account block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterConfig.property.storageAccountGen2">storage_account_gen2</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2">HdinsightSparkClusterStorageAccountGen2</a></code> | storage_account_gen2 block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#tags HdinsightSparkCluster#tags}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeouts">HdinsightSparkClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterConfig.property.tlsMinVersion">tls_min_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#tls_min_version HdinsightSparkCluster#tls_min_version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_version`<sup>Required</sup> <a name="cluster_version" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterConfig.property.clusterVersion"></a>

```python
cluster_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#cluster_version HdinsightSparkCluster#cluster_version}.

---

##### `component_version`<sup>Required</sup> <a name="component_version" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterConfig.property.componentVersion"></a>

```python
component_version: HdinsightSparkClusterComponentVersion
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComponentVersion">HdinsightSparkClusterComponentVersion</a>

component_version block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#component_version HdinsightSparkCluster#component_version}

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterConfig.property.gateway"></a>

```python
gateway: HdinsightSparkClusterGateway
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterGateway">HdinsightSparkClusterGateway</a>

gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#gateway HdinsightSparkCluster#gateway}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#location HdinsightSparkCluster#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#name HdinsightSparkCluster#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#resource_group_name HdinsightSparkCluster#resource_group_name}.

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterConfig.property.roles"></a>

```python
roles: HdinsightSparkClusterRoles
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRoles">HdinsightSparkClusterRoles</a>

roles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#roles HdinsightSparkCluster#roles}

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterConfig.property.tier"></a>

```python
tier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#tier HdinsightSparkCluster#tier}.

---

##### `compute_isolation`<sup>Optional</sup> <a name="compute_isolation" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterConfig.property.computeIsolation"></a>

```python
compute_isolation: HdinsightSparkClusterComputeIsolation
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolation">HdinsightSparkClusterComputeIsolation</a>

compute_isolation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#compute_isolation HdinsightSparkCluster#compute_isolation}

---

##### `disk_encryption`<sup>Optional</sup> <a name="disk_encryption" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterConfig.property.diskEncryption"></a>

```python
disk_encryption: typing.Union[IResolvable, typing.List[HdinsightSparkClusterDiskEncryption]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryption">HdinsightSparkClusterDiskEncryption</a>]]

disk_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#disk_encryption HdinsightSparkCluster#disk_encryption}

---

##### `encryption_in_transit_enabled`<sup>Optional</sup> <a name="encryption_in_transit_enabled" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterConfig.property.encryptionInTransitEnabled"></a>

```python
encryption_in_transit_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#encryption_in_transit_enabled HdinsightSparkCluster#encryption_in_transit_enabled}.

---

##### `extension`<sup>Optional</sup> <a name="extension" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterConfig.property.extension"></a>

```python
extension: HdinsightSparkClusterExtension
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterExtension">HdinsightSparkClusterExtension</a>

extension block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#extension HdinsightSparkCluster#extension}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#id HdinsightSparkCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metastores`<sup>Optional</sup> <a name="metastores" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterConfig.property.metastores"></a>

```python
metastores: HdinsightSparkClusterMetastores
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastores">HdinsightSparkClusterMetastores</a>

metastores block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#metastores HdinsightSparkCluster#metastores}

---

##### `monitor`<sup>Optional</sup> <a name="monitor" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterConfig.property.monitor"></a>

```python
monitor: HdinsightSparkClusterMonitor
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMonitor">HdinsightSparkClusterMonitor</a>

monitor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#monitor HdinsightSparkCluster#monitor}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterConfig.property.network"></a>

```python
network: HdinsightSparkClusterNetwork
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetwork">HdinsightSparkClusterNetwork</a>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#network HdinsightSparkCluster#network}

---

##### `private_link_configuration`<sup>Optional</sup> <a name="private_link_configuration" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterConfig.property.privateLinkConfiguration"></a>

```python
private_link_configuration: HdinsightSparkClusterPrivateLinkConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfiguration">HdinsightSparkClusterPrivateLinkConfiguration</a>

private_link_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#private_link_configuration HdinsightSparkCluster#private_link_configuration}

---

##### `security_profile`<sup>Optional</sup> <a name="security_profile" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterConfig.property.securityProfile"></a>

```python
security_profile: HdinsightSparkClusterSecurityProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfile">HdinsightSparkClusterSecurityProfile</a>

security_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#security_profile HdinsightSparkCluster#security_profile}

---

##### `storage_account`<sup>Optional</sup> <a name="storage_account" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterConfig.property.storageAccount"></a>

```python
storage_account: typing.Union[IResolvable, typing.List[HdinsightSparkClusterStorageAccount]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccount">HdinsightSparkClusterStorageAccount</a>]]

storage_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#storage_account HdinsightSparkCluster#storage_account}

---

##### `storage_account_gen2`<sup>Optional</sup> <a name="storage_account_gen2" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterConfig.property.storageAccountGen2"></a>

```python
storage_account_gen2: HdinsightSparkClusterStorageAccountGen2
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2">HdinsightSparkClusterStorageAccountGen2</a>

storage_account_gen2 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#storage_account_gen2 HdinsightSparkCluster#storage_account_gen2}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#tags HdinsightSparkCluster#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterConfig.property.timeouts"></a>

```python
timeouts: HdinsightSparkClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeouts">HdinsightSparkClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#timeouts HdinsightSparkCluster#timeouts}

---

##### `tls_min_version`<sup>Optional</sup> <a name="tls_min_version" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterConfig.property.tlsMinVersion"></a>

```python
tls_min_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#tls_min_version HdinsightSparkCluster#tls_min_version}.

---

### HdinsightSparkClusterDiskEncryption <a name="HdinsightSparkClusterDiskEncryption" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryption.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_spark_cluster

hdinsightSparkCluster.HdinsightSparkClusterDiskEncryption(
  encryption_algorithm: str = None,
  encryption_at_host_enabled: typing.Union[bool, IResolvable] = None,
  key_vault_key_id: str = None,
  key_vault_managed_identity_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryption.property.encryptionAlgorithm">encryption_algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#encryption_algorithm HdinsightSparkCluster#encryption_algorithm}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryption.property.encryptionAtHostEnabled">encryption_at_host_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#encryption_at_host_enabled HdinsightSparkCluster#encryption_at_host_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryption.property.keyVaultKeyId">key_vault_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#key_vault_key_id HdinsightSparkCluster#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryption.property.keyVaultManagedIdentityId">key_vault_managed_identity_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#key_vault_managed_identity_id HdinsightSparkCluster#key_vault_managed_identity_id}. |

---

##### `encryption_algorithm`<sup>Optional</sup> <a name="encryption_algorithm" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryption.property.encryptionAlgorithm"></a>

```python
encryption_algorithm: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#encryption_algorithm HdinsightSparkCluster#encryption_algorithm}.

---

##### `encryption_at_host_enabled`<sup>Optional</sup> <a name="encryption_at_host_enabled" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryption.property.encryptionAtHostEnabled"></a>

```python
encryption_at_host_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#encryption_at_host_enabled HdinsightSparkCluster#encryption_at_host_enabled}.

---

##### `key_vault_key_id`<sup>Optional</sup> <a name="key_vault_key_id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryption.property.keyVaultKeyId"></a>

```python
key_vault_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#key_vault_key_id HdinsightSparkCluster#key_vault_key_id}.

---

##### `key_vault_managed_identity_id`<sup>Optional</sup> <a name="key_vault_managed_identity_id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryption.property.keyVaultManagedIdentityId"></a>

```python
key_vault_managed_identity_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#key_vault_managed_identity_id HdinsightSparkCluster#key_vault_managed_identity_id}.

---

### HdinsightSparkClusterExtension <a name="HdinsightSparkClusterExtension" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterExtension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterExtension.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_spark_cluster

hdinsightSparkCluster.HdinsightSparkClusterExtension(
  log_analytics_workspace_id: str,
  primary_key: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterExtension.property.logAnalyticsWorkspaceId">log_analytics_workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#log_analytics_workspace_id HdinsightSparkCluster#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterExtension.property.primaryKey">primary_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#primary_key HdinsightSparkCluster#primary_key}. |

---

##### `log_analytics_workspace_id`<sup>Required</sup> <a name="log_analytics_workspace_id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterExtension.property.logAnalyticsWorkspaceId"></a>

```python
log_analytics_workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#log_analytics_workspace_id HdinsightSparkCluster#log_analytics_workspace_id}.

---

##### `primary_key`<sup>Required</sup> <a name="primary_key" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterExtension.property.primaryKey"></a>

```python
primary_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#primary_key HdinsightSparkCluster#primary_key}.

---

### HdinsightSparkClusterGateway <a name="HdinsightSparkClusterGateway" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterGateway"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterGateway.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_spark_cluster

hdinsightSparkCluster.HdinsightSparkClusterGateway(
  password: str,
  username: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterGateway.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#password HdinsightSparkCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterGateway.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#username HdinsightSparkCluster#username}. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterGateway.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#password HdinsightSparkCluster#password}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterGateway.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#username HdinsightSparkCluster#username}.

---

### HdinsightSparkClusterMetastores <a name="HdinsightSparkClusterMetastores" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastores"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastores.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_spark_cluster

hdinsightSparkCluster.HdinsightSparkClusterMetastores(
  ambari: HdinsightSparkClusterMetastoresAmbari = None,
  hive: HdinsightSparkClusterMetastoresHive = None,
  oozie: HdinsightSparkClusterMetastoresOozie = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastores.property.ambari">ambari</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbari">HdinsightSparkClusterMetastoresAmbari</a></code> | ambari block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastores.property.hive">hive</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHive">HdinsightSparkClusterMetastoresHive</a></code> | hive block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastores.property.oozie">oozie</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozie">HdinsightSparkClusterMetastoresOozie</a></code> | oozie block. |

---

##### `ambari`<sup>Optional</sup> <a name="ambari" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastores.property.ambari"></a>

```python
ambari: HdinsightSparkClusterMetastoresAmbari
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbari">HdinsightSparkClusterMetastoresAmbari</a>

ambari block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#ambari HdinsightSparkCluster#ambari}

---

##### `hive`<sup>Optional</sup> <a name="hive" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastores.property.hive"></a>

```python
hive: HdinsightSparkClusterMetastoresHive
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHive">HdinsightSparkClusterMetastoresHive</a>

hive block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#hive HdinsightSparkCluster#hive}

---

##### `oozie`<sup>Optional</sup> <a name="oozie" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastores.property.oozie"></a>

```python
oozie: HdinsightSparkClusterMetastoresOozie
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozie">HdinsightSparkClusterMetastoresOozie</a>

oozie block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#oozie HdinsightSparkCluster#oozie}

---

### HdinsightSparkClusterMetastoresAmbari <a name="HdinsightSparkClusterMetastoresAmbari" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbari"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbari.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_spark_cluster

hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbari(
  database_name: str,
  password: str,
  server: str,
  username: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbari.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#database_name HdinsightSparkCluster#database_name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbari.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#password HdinsightSparkCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbari.property.server">server</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#server HdinsightSparkCluster#server}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbari.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#username HdinsightSparkCluster#username}. |

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbari.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#database_name HdinsightSparkCluster#database_name}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbari.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#password HdinsightSparkCluster#password}.

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbari.property.server"></a>

```python
server: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#server HdinsightSparkCluster#server}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbari.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#username HdinsightSparkCluster#username}.

---

### HdinsightSparkClusterMetastoresHive <a name="HdinsightSparkClusterMetastoresHive" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHive"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHive.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_spark_cluster

hdinsightSparkCluster.HdinsightSparkClusterMetastoresHive(
  database_name: str,
  password: str,
  server: str,
  username: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHive.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#database_name HdinsightSparkCluster#database_name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHive.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#password HdinsightSparkCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHive.property.server">server</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#server HdinsightSparkCluster#server}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHive.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#username HdinsightSparkCluster#username}. |

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHive.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#database_name HdinsightSparkCluster#database_name}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHive.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#password HdinsightSparkCluster#password}.

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHive.property.server"></a>

```python
server: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#server HdinsightSparkCluster#server}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHive.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#username HdinsightSparkCluster#username}.

---

### HdinsightSparkClusterMetastoresOozie <a name="HdinsightSparkClusterMetastoresOozie" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozie"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozie.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_spark_cluster

hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozie(
  database_name: str,
  password: str,
  server: str,
  username: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozie.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#database_name HdinsightSparkCluster#database_name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozie.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#password HdinsightSparkCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozie.property.server">server</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#server HdinsightSparkCluster#server}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozie.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#username HdinsightSparkCluster#username}. |

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozie.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#database_name HdinsightSparkCluster#database_name}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozie.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#password HdinsightSparkCluster#password}.

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozie.property.server"></a>

```python
server: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#server HdinsightSparkCluster#server}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozie.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#username HdinsightSparkCluster#username}.

---

### HdinsightSparkClusterMonitor <a name="HdinsightSparkClusterMonitor" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMonitor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMonitor.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_spark_cluster

hdinsightSparkCluster.HdinsightSparkClusterMonitor(
  log_analytics_workspace_id: str,
  primary_key: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMonitor.property.logAnalyticsWorkspaceId">log_analytics_workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#log_analytics_workspace_id HdinsightSparkCluster#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMonitor.property.primaryKey">primary_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#primary_key HdinsightSparkCluster#primary_key}. |

---

##### `log_analytics_workspace_id`<sup>Required</sup> <a name="log_analytics_workspace_id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMonitor.property.logAnalyticsWorkspaceId"></a>

```python
log_analytics_workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#log_analytics_workspace_id HdinsightSparkCluster#log_analytics_workspace_id}.

---

##### `primary_key`<sup>Required</sup> <a name="primary_key" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMonitor.property.primaryKey"></a>

```python
primary_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#primary_key HdinsightSparkCluster#primary_key}.

---

### HdinsightSparkClusterNetwork <a name="HdinsightSparkClusterNetwork" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetwork.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_spark_cluster

hdinsightSparkCluster.HdinsightSparkClusterNetwork(
  connection_direction: str = None,
  private_link_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetwork.property.connectionDirection">connection_direction</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#connection_direction HdinsightSparkCluster#connection_direction}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetwork.property.privateLinkEnabled">private_link_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#private_link_enabled HdinsightSparkCluster#private_link_enabled}. |

---

##### `connection_direction`<sup>Optional</sup> <a name="connection_direction" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetwork.property.connectionDirection"></a>

```python
connection_direction: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#connection_direction HdinsightSparkCluster#connection_direction}.

---

##### `private_link_enabled`<sup>Optional</sup> <a name="private_link_enabled" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetwork.property.privateLinkEnabled"></a>

```python
private_link_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#private_link_enabled HdinsightSparkCluster#private_link_enabled}.

---

### HdinsightSparkClusterPrivateLinkConfiguration <a name="HdinsightSparkClusterPrivateLinkConfiguration" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_spark_cluster

hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfiguration(
  group_id: str,
  ip_configuration: HdinsightSparkClusterPrivateLinkConfigurationIpConfiguration,
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfiguration.property.groupId">group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#group_id HdinsightSparkCluster#group_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfiguration.property.ipConfiguration">ip_configuration</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfiguration">HdinsightSparkClusterPrivateLinkConfigurationIpConfiguration</a></code> | ip_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfiguration.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#name HdinsightSparkCluster#name}. |

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfiguration.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#group_id HdinsightSparkCluster#group_id}.

---

##### `ip_configuration`<sup>Required</sup> <a name="ip_configuration" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfiguration.property.ipConfiguration"></a>

```python
ip_configuration: HdinsightSparkClusterPrivateLinkConfigurationIpConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfiguration">HdinsightSparkClusterPrivateLinkConfigurationIpConfiguration</a>

ip_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#ip_configuration HdinsightSparkCluster#ip_configuration}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfiguration.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#name HdinsightSparkCluster#name}.

---

### HdinsightSparkClusterPrivateLinkConfigurationIpConfiguration <a name="HdinsightSparkClusterPrivateLinkConfigurationIpConfiguration" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_spark_cluster

hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfiguration(
  name: str,
  primary: typing.Union[bool, IResolvable] = None,
  private_ip_address: str = None,
  private_ip_allocation_method: str = None,
  subnet_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfiguration.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#name HdinsightSparkCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfiguration.property.primary">primary</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#primary HdinsightSparkCluster#primary}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfiguration.property.privateIpAddress">private_ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#private_ip_address HdinsightSparkCluster#private_ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfiguration.property.privateIpAllocationMethod">private_ip_allocation_method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#private_ip_allocation_method HdinsightSparkCluster#private_ip_allocation_method}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfiguration.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#subnet_id HdinsightSparkCluster#subnet_id}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfiguration.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#name HdinsightSparkCluster#name}.

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfiguration.property.primary"></a>

```python
primary: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#primary HdinsightSparkCluster#primary}.

---

##### `private_ip_address`<sup>Optional</sup> <a name="private_ip_address" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfiguration.property.privateIpAddress"></a>

```python
private_ip_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#private_ip_address HdinsightSparkCluster#private_ip_address}.

---

##### `private_ip_allocation_method`<sup>Optional</sup> <a name="private_ip_allocation_method" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfiguration.property.privateIpAllocationMethod"></a>

```python
private_ip_allocation_method: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#private_ip_allocation_method HdinsightSparkCluster#private_ip_allocation_method}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfiguration.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#subnet_id HdinsightSparkCluster#subnet_id}.

---

### HdinsightSparkClusterRoles <a name="HdinsightSparkClusterRoles" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRoles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRoles.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_spark_cluster

hdinsightSparkCluster.HdinsightSparkClusterRoles(
  head_node: HdinsightSparkClusterRolesHeadNode,
  worker_node: HdinsightSparkClusterRolesWorkerNode,
  zookeeper_node: HdinsightSparkClusterRolesZookeeperNode
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRoles.property.headNode">head_node</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNode">HdinsightSparkClusterRolesHeadNode</a></code> | head_node block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRoles.property.workerNode">worker_node</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNode">HdinsightSparkClusterRolesWorkerNode</a></code> | worker_node block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRoles.property.zookeeperNode">zookeeper_node</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNode">HdinsightSparkClusterRolesZookeeperNode</a></code> | zookeeper_node block. |

---

##### `head_node`<sup>Required</sup> <a name="head_node" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRoles.property.headNode"></a>

```python
head_node: HdinsightSparkClusterRolesHeadNode
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNode">HdinsightSparkClusterRolesHeadNode</a>

head_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#head_node HdinsightSparkCluster#head_node}

---

##### `worker_node`<sup>Required</sup> <a name="worker_node" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRoles.property.workerNode"></a>

```python
worker_node: HdinsightSparkClusterRolesWorkerNode
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNode">HdinsightSparkClusterRolesWorkerNode</a>

worker_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#worker_node HdinsightSparkCluster#worker_node}

---

##### `zookeeper_node`<sup>Required</sup> <a name="zookeeper_node" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRoles.property.zookeeperNode"></a>

```python
zookeeper_node: HdinsightSparkClusterRolesZookeeperNode
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNode">HdinsightSparkClusterRolesZookeeperNode</a>

zookeeper_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#zookeeper_node HdinsightSparkCluster#zookeeper_node}

---

### HdinsightSparkClusterRolesHeadNode <a name="HdinsightSparkClusterRolesHeadNode" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNode.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_spark_cluster

hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNode(
  username: str,
  vm_size: str,
  password: str = None,
  script_actions: typing.Union[IResolvable, typing.List[HdinsightSparkClusterRolesHeadNodeScriptActions]] = None,
  ssh_keys: typing.List[str] = None,
  subnet_id: str = None,
  virtual_network_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNode.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#username HdinsightSparkCluster#username}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNode.property.vmSize">vm_size</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#vm_size HdinsightSparkCluster#vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNode.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#password HdinsightSparkCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNode.property.scriptActions">script_actions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActions">HdinsightSparkClusterRolesHeadNodeScriptActions</a>]]</code> | script_actions block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNode.property.sshKeys">ssh_keys</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#ssh_keys HdinsightSparkCluster#ssh_keys}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNode.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#subnet_id HdinsightSparkCluster#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNode.property.virtualNetworkId">virtual_network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#virtual_network_id HdinsightSparkCluster#virtual_network_id}. |

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNode.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#username HdinsightSparkCluster#username}.

---

##### `vm_size`<sup>Required</sup> <a name="vm_size" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNode.property.vmSize"></a>

```python
vm_size: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#vm_size HdinsightSparkCluster#vm_size}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNode.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#password HdinsightSparkCluster#password}.

---

##### `script_actions`<sup>Optional</sup> <a name="script_actions" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNode.property.scriptActions"></a>

```python
script_actions: typing.Union[IResolvable, typing.List[HdinsightSparkClusterRolesHeadNodeScriptActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActions">HdinsightSparkClusterRolesHeadNodeScriptActions</a>]]

script_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#script_actions HdinsightSparkCluster#script_actions}

---

##### `ssh_keys`<sup>Optional</sup> <a name="ssh_keys" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNode.property.sshKeys"></a>

```python
ssh_keys: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#ssh_keys HdinsightSparkCluster#ssh_keys}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNode.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#subnet_id HdinsightSparkCluster#subnet_id}.

---

##### `virtual_network_id`<sup>Optional</sup> <a name="virtual_network_id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNode.property.virtualNetworkId"></a>

```python
virtual_network_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#virtual_network_id HdinsightSparkCluster#virtual_network_id}.

---

### HdinsightSparkClusterRolesHeadNodeScriptActions <a name="HdinsightSparkClusterRolesHeadNodeScriptActions" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActions.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_spark_cluster

hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActions(
  name: str,
  uri: str,
  parameters: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActions.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#name HdinsightSparkCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActions.property.uri">uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#uri HdinsightSparkCluster#uri}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActions.property.parameters">parameters</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#parameters HdinsightSparkCluster#parameters}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActions.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#name HdinsightSparkCluster#name}.

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActions.property.uri"></a>

```python
uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#uri HdinsightSparkCluster#uri}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActions.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#parameters HdinsightSparkCluster#parameters}.

---

### HdinsightSparkClusterRolesWorkerNode <a name="HdinsightSparkClusterRolesWorkerNode" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNode.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_spark_cluster

hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNode(
  target_instance_count: typing.Union[int, float],
  username: str,
  vm_size: str,
  autoscale: HdinsightSparkClusterRolesWorkerNodeAutoscale = None,
  password: str = None,
  script_actions: typing.Union[IResolvable, typing.List[HdinsightSparkClusterRolesWorkerNodeScriptActions]] = None,
  ssh_keys: typing.List[str] = None,
  subnet_id: str = None,
  virtual_network_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNode.property.targetInstanceCount">target_instance_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#target_instance_count HdinsightSparkCluster#target_instance_count}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNode.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#username HdinsightSparkCluster#username}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNode.property.vmSize">vm_size</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#vm_size HdinsightSparkCluster#vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNode.property.autoscale">autoscale</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscale">HdinsightSparkClusterRolesWorkerNodeAutoscale</a></code> | autoscale block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNode.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#password HdinsightSparkCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNode.property.scriptActions">script_actions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActions">HdinsightSparkClusterRolesWorkerNodeScriptActions</a>]]</code> | script_actions block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNode.property.sshKeys">ssh_keys</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#ssh_keys HdinsightSparkCluster#ssh_keys}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNode.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#subnet_id HdinsightSparkCluster#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNode.property.virtualNetworkId">virtual_network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#virtual_network_id HdinsightSparkCluster#virtual_network_id}. |

---

##### `target_instance_count`<sup>Required</sup> <a name="target_instance_count" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNode.property.targetInstanceCount"></a>

```python
target_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#target_instance_count HdinsightSparkCluster#target_instance_count}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNode.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#username HdinsightSparkCluster#username}.

---

##### `vm_size`<sup>Required</sup> <a name="vm_size" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNode.property.vmSize"></a>

```python
vm_size: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#vm_size HdinsightSparkCluster#vm_size}.

---

##### `autoscale`<sup>Optional</sup> <a name="autoscale" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNode.property.autoscale"></a>

```python
autoscale: HdinsightSparkClusterRolesWorkerNodeAutoscale
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscale">HdinsightSparkClusterRolesWorkerNodeAutoscale</a>

autoscale block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#autoscale HdinsightSparkCluster#autoscale}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNode.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#password HdinsightSparkCluster#password}.

---

##### `script_actions`<sup>Optional</sup> <a name="script_actions" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNode.property.scriptActions"></a>

```python
script_actions: typing.Union[IResolvable, typing.List[HdinsightSparkClusterRolesWorkerNodeScriptActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActions">HdinsightSparkClusterRolesWorkerNodeScriptActions</a>]]

script_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#script_actions HdinsightSparkCluster#script_actions}

---

##### `ssh_keys`<sup>Optional</sup> <a name="ssh_keys" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNode.property.sshKeys"></a>

```python
ssh_keys: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#ssh_keys HdinsightSparkCluster#ssh_keys}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNode.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#subnet_id HdinsightSparkCluster#subnet_id}.

---

##### `virtual_network_id`<sup>Optional</sup> <a name="virtual_network_id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNode.property.virtualNetworkId"></a>

```python
virtual_network_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#virtual_network_id HdinsightSparkCluster#virtual_network_id}.

---

### HdinsightSparkClusterRolesWorkerNodeAutoscale <a name="HdinsightSparkClusterRolesWorkerNodeAutoscale" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscale"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscale.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_spark_cluster

hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscale(
  capacity: HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacity = None,
  recurrence: HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrence = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscale.property.capacity">capacity</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacity">HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacity</a></code> | capacity block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscale.property.recurrence">recurrence</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrence">HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrence</a></code> | recurrence block. |

---

##### `capacity`<sup>Optional</sup> <a name="capacity" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscale.property.capacity"></a>

```python
capacity: HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacity
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacity">HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacity</a>

capacity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#capacity HdinsightSparkCluster#capacity}

---

##### `recurrence`<sup>Optional</sup> <a name="recurrence" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscale.property.recurrence"></a>

```python
recurrence: HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrence
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrence">HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrence</a>

recurrence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#recurrence HdinsightSparkCluster#recurrence}

---

### HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacity <a name="HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacity" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_spark_cluster

hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacity(
  max_instance_count: typing.Union[int, float],
  min_instance_count: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacity.property.maxInstanceCount">max_instance_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#max_instance_count HdinsightSparkCluster#max_instance_count}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacity.property.minInstanceCount">min_instance_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#min_instance_count HdinsightSparkCluster#min_instance_count}. |

---

##### `max_instance_count`<sup>Required</sup> <a name="max_instance_count" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacity.property.maxInstanceCount"></a>

```python
max_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#max_instance_count HdinsightSparkCluster#max_instance_count}.

---

##### `min_instance_count`<sup>Required</sup> <a name="min_instance_count" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacity.property.minInstanceCount"></a>

```python
min_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#min_instance_count HdinsightSparkCluster#min_instance_count}.

---

### HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrence <a name="HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrence" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrence.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_spark_cluster

hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrence(
  schedule: typing.Union[IResolvable, typing.List[HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceSchedule]],
  timezone: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrence.property.schedule">schedule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceSchedule">HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceSchedule</a>]]</code> | schedule block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrence.property.timezone">timezone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#timezone HdinsightSparkCluster#timezone}. |

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrence.property.schedule"></a>

```python
schedule: typing.Union[IResolvable, typing.List[HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceSchedule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceSchedule">HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceSchedule</a>]]

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#schedule HdinsightSparkCluster#schedule}

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrence.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#timezone HdinsightSparkCluster#timezone}.

---

### HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceSchedule <a name="HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceSchedule" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceSchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_spark_cluster

hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceSchedule(
  days: typing.List[str],
  target_instance_count: typing.Union[int, float],
  time: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceSchedule.property.days">days</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#days HdinsightSparkCluster#days}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceSchedule.property.targetInstanceCount">target_instance_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#target_instance_count HdinsightSparkCluster#target_instance_count}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceSchedule.property.time">time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#time HdinsightSparkCluster#time}. |

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceSchedule.property.days"></a>

```python
days: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#days HdinsightSparkCluster#days}.

---

##### `target_instance_count`<sup>Required</sup> <a name="target_instance_count" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceSchedule.property.targetInstanceCount"></a>

```python
target_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#target_instance_count HdinsightSparkCluster#target_instance_count}.

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceSchedule.property.time"></a>

```python
time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#time HdinsightSparkCluster#time}.

---

### HdinsightSparkClusterRolesWorkerNodeScriptActions <a name="HdinsightSparkClusterRolesWorkerNodeScriptActions" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActions.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_spark_cluster

hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActions(
  name: str,
  uri: str,
  parameters: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActions.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#name HdinsightSparkCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActions.property.uri">uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#uri HdinsightSparkCluster#uri}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActions.property.parameters">parameters</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#parameters HdinsightSparkCluster#parameters}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActions.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#name HdinsightSparkCluster#name}.

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActions.property.uri"></a>

```python
uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#uri HdinsightSparkCluster#uri}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActions.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#parameters HdinsightSparkCluster#parameters}.

---

### HdinsightSparkClusterRolesZookeeperNode <a name="HdinsightSparkClusterRolesZookeeperNode" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNode.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_spark_cluster

hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNode(
  username: str,
  vm_size: str,
  password: str = None,
  script_actions: typing.Union[IResolvable, typing.List[HdinsightSparkClusterRolesZookeeperNodeScriptActions]] = None,
  ssh_keys: typing.List[str] = None,
  subnet_id: str = None,
  virtual_network_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNode.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#username HdinsightSparkCluster#username}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNode.property.vmSize">vm_size</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#vm_size HdinsightSparkCluster#vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNode.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#password HdinsightSparkCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNode.property.scriptActions">script_actions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActions">HdinsightSparkClusterRolesZookeeperNodeScriptActions</a>]]</code> | script_actions block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNode.property.sshKeys">ssh_keys</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#ssh_keys HdinsightSparkCluster#ssh_keys}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNode.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#subnet_id HdinsightSparkCluster#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNode.property.virtualNetworkId">virtual_network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#virtual_network_id HdinsightSparkCluster#virtual_network_id}. |

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNode.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#username HdinsightSparkCluster#username}.

---

##### `vm_size`<sup>Required</sup> <a name="vm_size" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNode.property.vmSize"></a>

```python
vm_size: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#vm_size HdinsightSparkCluster#vm_size}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNode.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#password HdinsightSparkCluster#password}.

---

##### `script_actions`<sup>Optional</sup> <a name="script_actions" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNode.property.scriptActions"></a>

```python
script_actions: typing.Union[IResolvable, typing.List[HdinsightSparkClusterRolesZookeeperNodeScriptActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActions">HdinsightSparkClusterRolesZookeeperNodeScriptActions</a>]]

script_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#script_actions HdinsightSparkCluster#script_actions}

---

##### `ssh_keys`<sup>Optional</sup> <a name="ssh_keys" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNode.property.sshKeys"></a>

```python
ssh_keys: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#ssh_keys HdinsightSparkCluster#ssh_keys}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNode.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#subnet_id HdinsightSparkCluster#subnet_id}.

---

##### `virtual_network_id`<sup>Optional</sup> <a name="virtual_network_id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNode.property.virtualNetworkId"></a>

```python
virtual_network_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#virtual_network_id HdinsightSparkCluster#virtual_network_id}.

---

### HdinsightSparkClusterRolesZookeeperNodeScriptActions <a name="HdinsightSparkClusterRolesZookeeperNodeScriptActions" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActions.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_spark_cluster

hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActions(
  name: str,
  uri: str,
  parameters: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActions.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#name HdinsightSparkCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActions.property.uri">uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#uri HdinsightSparkCluster#uri}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActions.property.parameters">parameters</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#parameters HdinsightSparkCluster#parameters}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActions.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#name HdinsightSparkCluster#name}.

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActions.property.uri"></a>

```python
uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#uri HdinsightSparkCluster#uri}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActions.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#parameters HdinsightSparkCluster#parameters}.

---

### HdinsightSparkClusterSecurityProfile <a name="HdinsightSparkClusterSecurityProfile" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfile.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_spark_cluster

hdinsightSparkCluster.HdinsightSparkClusterSecurityProfile(
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
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfile.property.aaddsResourceId">aadds_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#aadds_resource_id HdinsightSparkCluster#aadds_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfile.property.domainName">domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#domain_name HdinsightSparkCluster#domain_name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfile.property.domainUsername">domain_username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#domain_username HdinsightSparkCluster#domain_username}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfile.property.domainUserPassword">domain_user_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#domain_user_password HdinsightSparkCluster#domain_user_password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfile.property.ldapsUrls">ldaps_urls</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#ldaps_urls HdinsightSparkCluster#ldaps_urls}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfile.property.msiResourceId">msi_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#msi_resource_id HdinsightSparkCluster#msi_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfile.property.clusterUsersGroupDns">cluster_users_group_dns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#cluster_users_group_dns HdinsightSparkCluster#cluster_users_group_dns}. |

---

##### `aadds_resource_id`<sup>Required</sup> <a name="aadds_resource_id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfile.property.aaddsResourceId"></a>

```python
aadds_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#aadds_resource_id HdinsightSparkCluster#aadds_resource_id}.

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfile.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#domain_name HdinsightSparkCluster#domain_name}.

---

##### `domain_username`<sup>Required</sup> <a name="domain_username" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfile.property.domainUsername"></a>

```python
domain_username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#domain_username HdinsightSparkCluster#domain_username}.

---

##### `domain_user_password`<sup>Required</sup> <a name="domain_user_password" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfile.property.domainUserPassword"></a>

```python
domain_user_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#domain_user_password HdinsightSparkCluster#domain_user_password}.

---

##### `ldaps_urls`<sup>Required</sup> <a name="ldaps_urls" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfile.property.ldapsUrls"></a>

```python
ldaps_urls: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#ldaps_urls HdinsightSparkCluster#ldaps_urls}.

---

##### `msi_resource_id`<sup>Required</sup> <a name="msi_resource_id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfile.property.msiResourceId"></a>

```python
msi_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#msi_resource_id HdinsightSparkCluster#msi_resource_id}.

---

##### `cluster_users_group_dns`<sup>Optional</sup> <a name="cluster_users_group_dns" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfile.property.clusterUsersGroupDns"></a>

```python
cluster_users_group_dns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#cluster_users_group_dns HdinsightSparkCluster#cluster_users_group_dns}.

---

### HdinsightSparkClusterStorageAccount <a name="HdinsightSparkClusterStorageAccount" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccount.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_spark_cluster

hdinsightSparkCluster.HdinsightSparkClusterStorageAccount(
  is_default: typing.Union[bool, IResolvable],
  storage_account_key: str,
  storage_container_id: str,
  storage_resource_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccount.property.isDefault">is_default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#is_default HdinsightSparkCluster#is_default}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccount.property.storageAccountKey">storage_account_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#storage_account_key HdinsightSparkCluster#storage_account_key}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccount.property.storageContainerId">storage_container_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#storage_container_id HdinsightSparkCluster#storage_container_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccount.property.storageResourceId">storage_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#storage_resource_id HdinsightSparkCluster#storage_resource_id}. |

---

##### `is_default`<sup>Required</sup> <a name="is_default" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccount.property.isDefault"></a>

```python
is_default: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#is_default HdinsightSparkCluster#is_default}.

---

##### `storage_account_key`<sup>Required</sup> <a name="storage_account_key" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccount.property.storageAccountKey"></a>

```python
storage_account_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#storage_account_key HdinsightSparkCluster#storage_account_key}.

---

##### `storage_container_id`<sup>Required</sup> <a name="storage_container_id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccount.property.storageContainerId"></a>

```python
storage_container_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#storage_container_id HdinsightSparkCluster#storage_container_id}.

---

##### `storage_resource_id`<sup>Optional</sup> <a name="storage_resource_id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccount.property.storageResourceId"></a>

```python
storage_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#storage_resource_id HdinsightSparkCluster#storage_resource_id}.

---

### HdinsightSparkClusterStorageAccountGen2 <a name="HdinsightSparkClusterStorageAccountGen2" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_spark_cluster

hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2(
  filesystem_id: str,
  is_default: typing.Union[bool, IResolvable],
  managed_identity_resource_id: str,
  storage_resource_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2.property.filesystemId">filesystem_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#filesystem_id HdinsightSparkCluster#filesystem_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2.property.isDefault">is_default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#is_default HdinsightSparkCluster#is_default}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2.property.managedIdentityResourceId">managed_identity_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#managed_identity_resource_id HdinsightSparkCluster#managed_identity_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2.property.storageResourceId">storage_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#storage_resource_id HdinsightSparkCluster#storage_resource_id}. |

---

##### `filesystem_id`<sup>Required</sup> <a name="filesystem_id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2.property.filesystemId"></a>

```python
filesystem_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#filesystem_id HdinsightSparkCluster#filesystem_id}.

---

##### `is_default`<sup>Required</sup> <a name="is_default" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2.property.isDefault"></a>

```python
is_default: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#is_default HdinsightSparkCluster#is_default}.

---

##### `managed_identity_resource_id`<sup>Required</sup> <a name="managed_identity_resource_id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2.property.managedIdentityResourceId"></a>

```python
managed_identity_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#managed_identity_resource_id HdinsightSparkCluster#managed_identity_resource_id}.

---

##### `storage_resource_id`<sup>Required</sup> <a name="storage_resource_id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2.property.storageResourceId"></a>

```python
storage_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#storage_resource_id HdinsightSparkCluster#storage_resource_id}.

---

### HdinsightSparkClusterTimeouts <a name="HdinsightSparkClusterTimeouts" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_spark_cluster

hdinsightSparkCluster.HdinsightSparkClusterTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#create HdinsightSparkCluster#create}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#delete HdinsightSparkCluster#delete}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#read HdinsightSparkCluster#read}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#update HdinsightSparkCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#create HdinsightSparkCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#delete HdinsightSparkCluster#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#read HdinsightSparkCluster#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#update HdinsightSparkCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### HdinsightSparkClusterComponentVersionOutputReference <a name="HdinsightSparkClusterComponentVersionOutputReference" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComponentVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComponentVersionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_spark_cluster

hdinsightSparkCluster.HdinsightSparkClusterComponentVersionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComponentVersionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComponentVersionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComponentVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComponentVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComponentVersionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComponentVersionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComponentVersionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComponentVersionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComponentVersionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComponentVersionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComponentVersionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComponentVersionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComponentVersionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComponentVersionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComponentVersionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComponentVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComponentVersionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComponentVersionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComponentVersionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComponentVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComponentVersionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComponentVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComponentVersionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComponentVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComponentVersionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComponentVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComponentVersionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComponentVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComponentVersionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComponentVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComponentVersionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComponentVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComponentVersionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComponentVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComponentVersionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComponentVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComponentVersionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComponentVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComponentVersionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComponentVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComponentVersionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComponentVersionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComponentVersionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComponentVersionOutputReference.property.sparkInput">spark_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComponentVersionOutputReference.property.spark">spark</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComponentVersionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComponentVersion">HdinsightSparkClusterComponentVersion</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComponentVersionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComponentVersionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `spark_input`<sup>Optional</sup> <a name="spark_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComponentVersionOutputReference.property.sparkInput"></a>

```python
spark_input: str
```

- *Type:* str

---

##### `spark`<sup>Required</sup> <a name="spark" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComponentVersionOutputReference.property.spark"></a>

```python
spark: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComponentVersionOutputReference.property.internalValue"></a>

```python
internal_value: HdinsightSparkClusterComponentVersion
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComponentVersion">HdinsightSparkClusterComponentVersion</a>

---


### HdinsightSparkClusterComputeIsolationOutputReference <a name="HdinsightSparkClusterComputeIsolationOutputReference" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_spark_cluster

hdinsightSparkCluster.HdinsightSparkClusterComputeIsolationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolationOutputReference.resetComputeIsolationEnabled">reset_compute_isolation_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolationOutputReference.resetHostSku">reset_host_sku</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_compute_isolation_enabled` <a name="reset_compute_isolation_enabled" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolationOutputReference.resetComputeIsolationEnabled"></a>

```python
def reset_compute_isolation_enabled() -> None
```

##### `reset_host_sku` <a name="reset_host_sku" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolationOutputReference.resetHostSku"></a>

```python
def reset_host_sku() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolationOutputReference.property.computeIsolationEnabledInput">compute_isolation_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolationOutputReference.property.hostSkuInput">host_sku_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolationOutputReference.property.computeIsolationEnabled">compute_isolation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolationOutputReference.property.hostSku">host_sku</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolation">HdinsightSparkClusterComputeIsolation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compute_isolation_enabled_input`<sup>Optional</sup> <a name="compute_isolation_enabled_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolationOutputReference.property.computeIsolationEnabledInput"></a>

```python
compute_isolation_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `host_sku_input`<sup>Optional</sup> <a name="host_sku_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolationOutputReference.property.hostSkuInput"></a>

```python
host_sku_input: str
```

- *Type:* str

---

##### `compute_isolation_enabled`<sup>Required</sup> <a name="compute_isolation_enabled" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolationOutputReference.property.computeIsolationEnabled"></a>

```python
compute_isolation_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `host_sku`<sup>Required</sup> <a name="host_sku" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolationOutputReference.property.hostSku"></a>

```python
host_sku: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolationOutputReference.property.internalValue"></a>

```python
internal_value: HdinsightSparkClusterComputeIsolation
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterComputeIsolation">HdinsightSparkClusterComputeIsolation</a>

---


### HdinsightSparkClusterDiskEncryptionList <a name="HdinsightSparkClusterDiskEncryptionList" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_spark_cluster

hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> HdinsightSparkClusterDiskEncryptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryption">HdinsightSparkClusterDiskEncryption</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[HdinsightSparkClusterDiskEncryption]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryption">HdinsightSparkClusterDiskEncryption</a>]]

---


### HdinsightSparkClusterDiskEncryptionOutputReference <a name="HdinsightSparkClusterDiskEncryptionOutputReference" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_spark_cluster

hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference.resetEncryptionAlgorithm">reset_encryption_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference.resetEncryptionAtHostEnabled">reset_encryption_at_host_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference.resetKeyVaultKeyId">reset_key_vault_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference.resetKeyVaultManagedIdentityId">reset_key_vault_managed_identity_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_encryption_algorithm` <a name="reset_encryption_algorithm" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference.resetEncryptionAlgorithm"></a>

```python
def reset_encryption_algorithm() -> None
```

##### `reset_encryption_at_host_enabled` <a name="reset_encryption_at_host_enabled" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference.resetEncryptionAtHostEnabled"></a>

```python
def reset_encryption_at_host_enabled() -> None
```

##### `reset_key_vault_key_id` <a name="reset_key_vault_key_id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference.resetKeyVaultKeyId"></a>

```python
def reset_key_vault_key_id() -> None
```

##### `reset_key_vault_managed_identity_id` <a name="reset_key_vault_managed_identity_id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference.resetKeyVaultManagedIdentityId"></a>

```python
def reset_key_vault_managed_identity_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference.property.encryptionAlgorithmInput">encryption_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference.property.encryptionAtHostEnabledInput">encryption_at_host_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference.property.keyVaultKeyIdInput">key_vault_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference.property.keyVaultManagedIdentityIdInput">key_vault_managed_identity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference.property.encryptionAlgorithm">encryption_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference.property.encryptionAtHostEnabled">encryption_at_host_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference.property.keyVaultKeyId">key_vault_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference.property.keyVaultManagedIdentityId">key_vault_managed_identity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryption">HdinsightSparkClusterDiskEncryption</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_algorithm_input`<sup>Optional</sup> <a name="encryption_algorithm_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference.property.encryptionAlgorithmInput"></a>

```python
encryption_algorithm_input: str
```

- *Type:* str

---

##### `encryption_at_host_enabled_input`<sup>Optional</sup> <a name="encryption_at_host_enabled_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference.property.encryptionAtHostEnabledInput"></a>

```python
encryption_at_host_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key_vault_key_id_input`<sup>Optional</sup> <a name="key_vault_key_id_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference.property.keyVaultKeyIdInput"></a>

```python
key_vault_key_id_input: str
```

- *Type:* str

---

##### `key_vault_managed_identity_id_input`<sup>Optional</sup> <a name="key_vault_managed_identity_id_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference.property.keyVaultManagedIdentityIdInput"></a>

```python
key_vault_managed_identity_id_input: str
```

- *Type:* str

---

##### `encryption_algorithm`<sup>Required</sup> <a name="encryption_algorithm" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference.property.encryptionAlgorithm"></a>

```python
encryption_algorithm: str
```

- *Type:* str

---

##### `encryption_at_host_enabled`<sup>Required</sup> <a name="encryption_at_host_enabled" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference.property.encryptionAtHostEnabled"></a>

```python
encryption_at_host_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key_vault_key_id`<sup>Required</sup> <a name="key_vault_key_id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference.property.keyVaultKeyId"></a>

```python
key_vault_key_id: str
```

- *Type:* str

---

##### `key_vault_managed_identity_id`<sup>Required</sup> <a name="key_vault_managed_identity_id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference.property.keyVaultManagedIdentityId"></a>

```python
key_vault_managed_identity_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryptionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, HdinsightSparkClusterDiskEncryption]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterDiskEncryption">HdinsightSparkClusterDiskEncryption</a>]

---


### HdinsightSparkClusterExtensionOutputReference <a name="HdinsightSparkClusterExtensionOutputReference" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterExtensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterExtensionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_spark_cluster

hdinsightSparkCluster.HdinsightSparkClusterExtensionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterExtensionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterExtensionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterExtensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterExtensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterExtensionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterExtensionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterExtensionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterExtensionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterExtensionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterExtensionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterExtensionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterExtensionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterExtensionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterExtensionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterExtensionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterExtensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterExtensionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterExtensionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterExtensionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterExtensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterExtensionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterExtensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterExtensionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterExtensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterExtensionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterExtensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterExtensionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterExtensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterExtensionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterExtensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterExtensionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterExtensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterExtensionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterExtensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterExtensionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterExtensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterExtensionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterExtensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterExtensionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterExtensionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterExtensionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterExtensionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterExtensionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterExtensionOutputReference.property.logAnalyticsWorkspaceIdInput">log_analytics_workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterExtensionOutputReference.property.primaryKeyInput">primary_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterExtensionOutputReference.property.logAnalyticsWorkspaceId">log_analytics_workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterExtensionOutputReference.property.primaryKey">primary_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterExtensionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterExtension">HdinsightSparkClusterExtension</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterExtensionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterExtensionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_analytics_workspace_id_input`<sup>Optional</sup> <a name="log_analytics_workspace_id_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterExtensionOutputReference.property.logAnalyticsWorkspaceIdInput"></a>

```python
log_analytics_workspace_id_input: str
```

- *Type:* str

---

##### `primary_key_input`<sup>Optional</sup> <a name="primary_key_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterExtensionOutputReference.property.primaryKeyInput"></a>

```python
primary_key_input: str
```

- *Type:* str

---

##### `log_analytics_workspace_id`<sup>Required</sup> <a name="log_analytics_workspace_id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterExtensionOutputReference.property.logAnalyticsWorkspaceId"></a>

```python
log_analytics_workspace_id: str
```

- *Type:* str

---

##### `primary_key`<sup>Required</sup> <a name="primary_key" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterExtensionOutputReference.property.primaryKey"></a>

```python
primary_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterExtensionOutputReference.property.internalValue"></a>

```python
internal_value: HdinsightSparkClusterExtension
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterExtension">HdinsightSparkClusterExtension</a>

---


### HdinsightSparkClusterGatewayOutputReference <a name="HdinsightSparkClusterGatewayOutputReference" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterGatewayOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_spark_cluster

hdinsightSparkCluster.HdinsightSparkClusterGatewayOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterGatewayOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterGatewayOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterGatewayOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterGatewayOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterGatewayOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterGatewayOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterGatewayOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterGatewayOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterGatewayOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterGatewayOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterGatewayOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterGatewayOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterGatewayOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterGatewayOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterGatewayOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterGatewayOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterGatewayOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterGatewayOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterGatewayOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterGatewayOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterGatewayOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterGatewayOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterGatewayOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterGatewayOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterGatewayOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterGatewayOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterGatewayOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterGatewayOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterGatewayOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterGatewayOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterGatewayOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterGatewayOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterGatewayOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterGatewayOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterGateway">HdinsightSparkClusterGateway</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterGatewayOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterGatewayOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterGatewayOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterGatewayOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterGatewayOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterGatewayOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterGatewayOutputReference.property.internalValue"></a>

```python
internal_value: HdinsightSparkClusterGateway
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterGateway">HdinsightSparkClusterGateway</a>

---


### HdinsightSparkClusterMetastoresAmbariOutputReference <a name="HdinsightSparkClusterMetastoresAmbariOutputReference" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbariOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbariOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_spark_cluster

hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbariOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbariOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbariOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbariOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbariOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbariOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbariOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbariOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbariOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbariOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbariOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbariOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbariOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbariOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbariOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbariOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbariOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbariOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbariOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbariOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbariOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbariOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbariOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbariOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbariOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbariOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbariOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbariOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbariOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbariOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbariOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbariOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbariOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbariOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbariOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbariOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbariOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbariOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbariOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbariOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbariOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbariOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbariOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbariOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbariOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbariOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbariOutputReference.property.serverInput">server_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbariOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbariOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbariOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbariOutputReference.property.server">server</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbariOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbariOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbari">HdinsightSparkClusterMetastoresAmbari</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbariOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbariOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbariOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbariOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `server_input`<sup>Optional</sup> <a name="server_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbariOutputReference.property.serverInput"></a>

```python
server_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbariOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbariOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbariOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbariOutputReference.property.server"></a>

```python
server: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbariOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbariOutputReference.property.internalValue"></a>

```python
internal_value: HdinsightSparkClusterMetastoresAmbari
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbari">HdinsightSparkClusterMetastoresAmbari</a>

---


### HdinsightSparkClusterMetastoresHiveOutputReference <a name="HdinsightSparkClusterMetastoresHiveOutputReference" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHiveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHiveOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_spark_cluster

hdinsightSparkCluster.HdinsightSparkClusterMetastoresHiveOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHiveOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHiveOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHiveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHiveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHiveOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHiveOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHiveOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHiveOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHiveOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHiveOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHiveOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHiveOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHiveOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHiveOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHiveOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHiveOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHiveOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHiveOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHiveOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHiveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHiveOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHiveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHiveOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHiveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHiveOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHiveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHiveOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHiveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHiveOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHiveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHiveOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHiveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHiveOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHiveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHiveOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHiveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHiveOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHiveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHiveOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHiveOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHiveOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHiveOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHiveOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHiveOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHiveOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHiveOutputReference.property.serverInput">server_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHiveOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHiveOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHiveOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHiveOutputReference.property.server">server</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHiveOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHiveOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHive">HdinsightSparkClusterMetastoresHive</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHiveOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHiveOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHiveOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHiveOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `server_input`<sup>Optional</sup> <a name="server_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHiveOutputReference.property.serverInput"></a>

```python
server_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHiveOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHiveOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHiveOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHiveOutputReference.property.server"></a>

```python
server: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHiveOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHiveOutputReference.property.internalValue"></a>

```python
internal_value: HdinsightSparkClusterMetastoresHive
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHive">HdinsightSparkClusterMetastoresHive</a>

---


### HdinsightSparkClusterMetastoresOozieOutputReference <a name="HdinsightSparkClusterMetastoresOozieOutputReference" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozieOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozieOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_spark_cluster

hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozieOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozieOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozieOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozieOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozieOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozieOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozieOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozieOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozieOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozieOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozieOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozieOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozieOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozieOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozieOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozieOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozieOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozieOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozieOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozieOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozieOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozieOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozieOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozieOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozieOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozieOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozieOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozieOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozieOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozieOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozieOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozieOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozieOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozieOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozieOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozieOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozieOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozieOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozieOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozieOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozieOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozieOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozieOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozieOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozieOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozieOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozieOutputReference.property.serverInput">server_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozieOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozieOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozieOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozieOutputReference.property.server">server</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozieOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozieOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozie">HdinsightSparkClusterMetastoresOozie</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozieOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozieOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozieOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozieOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `server_input`<sup>Optional</sup> <a name="server_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozieOutputReference.property.serverInput"></a>

```python
server_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozieOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozieOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozieOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozieOutputReference.property.server"></a>

```python
server: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozieOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozieOutputReference.property.internalValue"></a>

```python
internal_value: HdinsightSparkClusterMetastoresOozie
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozie">HdinsightSparkClusterMetastoresOozie</a>

---


### HdinsightSparkClusterMetastoresOutputReference <a name="HdinsightSparkClusterMetastoresOutputReference" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_spark_cluster

hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.putAmbari">put_ambari</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.putHive">put_hive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.putOozie">put_oozie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.resetAmbari">reset_ambari</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.resetHive">reset_hive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.resetOozie">reset_oozie</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ambari` <a name="put_ambari" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.putAmbari"></a>

```python
def put_ambari(
  database_name: str,
  password: str,
  server: str,
  username: str
) -> None
```

###### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.putAmbari.parameter.databaseName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#database_name HdinsightSparkCluster#database_name}.

---

###### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.putAmbari.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#password HdinsightSparkCluster#password}.

---

###### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.putAmbari.parameter.server"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#server HdinsightSparkCluster#server}.

---

###### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.putAmbari.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#username HdinsightSparkCluster#username}.

---

##### `put_hive` <a name="put_hive" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.putHive"></a>

```python
def put_hive(
  database_name: str,
  password: str,
  server: str,
  username: str
) -> None
```

###### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.putHive.parameter.databaseName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#database_name HdinsightSparkCluster#database_name}.

---

###### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.putHive.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#password HdinsightSparkCluster#password}.

---

###### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.putHive.parameter.server"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#server HdinsightSparkCluster#server}.

---

###### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.putHive.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#username HdinsightSparkCluster#username}.

---

##### `put_oozie` <a name="put_oozie" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.putOozie"></a>

```python
def put_oozie(
  database_name: str,
  password: str,
  server: str,
  username: str
) -> None
```

###### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.putOozie.parameter.databaseName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#database_name HdinsightSparkCluster#database_name}.

---

###### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.putOozie.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#password HdinsightSparkCluster#password}.

---

###### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.putOozie.parameter.server"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#server HdinsightSparkCluster#server}.

---

###### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.putOozie.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#username HdinsightSparkCluster#username}.

---

##### `reset_ambari` <a name="reset_ambari" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.resetAmbari"></a>

```python
def reset_ambari() -> None
```

##### `reset_hive` <a name="reset_hive" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.resetHive"></a>

```python
def reset_hive() -> None
```

##### `reset_oozie` <a name="reset_oozie" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.resetOozie"></a>

```python
def reset_oozie() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.property.ambari">ambari</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbariOutputReference">HdinsightSparkClusterMetastoresAmbariOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.property.hive">hive</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHiveOutputReference">HdinsightSparkClusterMetastoresHiveOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.property.oozie">oozie</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozieOutputReference">HdinsightSparkClusterMetastoresOozieOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.property.ambariInput">ambari_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbari">HdinsightSparkClusterMetastoresAmbari</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.property.hiveInput">hive_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHive">HdinsightSparkClusterMetastoresHive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.property.oozieInput">oozie_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozie">HdinsightSparkClusterMetastoresOozie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastores">HdinsightSparkClusterMetastores</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ambari`<sup>Required</sup> <a name="ambari" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.property.ambari"></a>

```python
ambari: HdinsightSparkClusterMetastoresAmbariOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbariOutputReference">HdinsightSparkClusterMetastoresAmbariOutputReference</a>

---

##### `hive`<sup>Required</sup> <a name="hive" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.property.hive"></a>

```python
hive: HdinsightSparkClusterMetastoresHiveOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHiveOutputReference">HdinsightSparkClusterMetastoresHiveOutputReference</a>

---

##### `oozie`<sup>Required</sup> <a name="oozie" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.property.oozie"></a>

```python
oozie: HdinsightSparkClusterMetastoresOozieOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozieOutputReference">HdinsightSparkClusterMetastoresOozieOutputReference</a>

---

##### `ambari_input`<sup>Optional</sup> <a name="ambari_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.property.ambariInput"></a>

```python
ambari_input: HdinsightSparkClusterMetastoresAmbari
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresAmbari">HdinsightSparkClusterMetastoresAmbari</a>

---

##### `hive_input`<sup>Optional</sup> <a name="hive_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.property.hiveInput"></a>

```python
hive_input: HdinsightSparkClusterMetastoresHive
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresHive">HdinsightSparkClusterMetastoresHive</a>

---

##### `oozie_input`<sup>Optional</sup> <a name="oozie_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.property.oozieInput"></a>

```python
oozie_input: HdinsightSparkClusterMetastoresOozie
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOozie">HdinsightSparkClusterMetastoresOozie</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastoresOutputReference.property.internalValue"></a>

```python
internal_value: HdinsightSparkClusterMetastores
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMetastores">HdinsightSparkClusterMetastores</a>

---


### HdinsightSparkClusterMonitorOutputReference <a name="HdinsightSparkClusterMonitorOutputReference" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMonitorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMonitorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_spark_cluster

hdinsightSparkCluster.HdinsightSparkClusterMonitorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMonitorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMonitorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMonitorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMonitorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMonitorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMonitorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMonitorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMonitorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMonitorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMonitorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMonitorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMonitorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMonitorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMonitorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMonitorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMonitorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMonitorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMonitorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMonitorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMonitorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMonitorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMonitorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMonitorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMonitorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMonitorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMonitorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMonitorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMonitorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMonitorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMonitorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMonitorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMonitorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMonitorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMonitorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMonitorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMonitorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMonitorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMonitorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMonitorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMonitorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMonitorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMonitorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMonitorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMonitorOutputReference.property.logAnalyticsWorkspaceIdInput">log_analytics_workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMonitorOutputReference.property.primaryKeyInput">primary_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMonitorOutputReference.property.logAnalyticsWorkspaceId">log_analytics_workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMonitorOutputReference.property.primaryKey">primary_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMonitorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMonitor">HdinsightSparkClusterMonitor</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMonitorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMonitorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_analytics_workspace_id_input`<sup>Optional</sup> <a name="log_analytics_workspace_id_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMonitorOutputReference.property.logAnalyticsWorkspaceIdInput"></a>

```python
log_analytics_workspace_id_input: str
```

- *Type:* str

---

##### `primary_key_input`<sup>Optional</sup> <a name="primary_key_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMonitorOutputReference.property.primaryKeyInput"></a>

```python
primary_key_input: str
```

- *Type:* str

---

##### `log_analytics_workspace_id`<sup>Required</sup> <a name="log_analytics_workspace_id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMonitorOutputReference.property.logAnalyticsWorkspaceId"></a>

```python
log_analytics_workspace_id: str
```

- *Type:* str

---

##### `primary_key`<sup>Required</sup> <a name="primary_key" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMonitorOutputReference.property.primaryKey"></a>

```python
primary_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMonitorOutputReference.property.internalValue"></a>

```python
internal_value: HdinsightSparkClusterMonitor
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterMonitor">HdinsightSparkClusterMonitor</a>

---


### HdinsightSparkClusterNetworkOutputReference <a name="HdinsightSparkClusterNetworkOutputReference" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetworkOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_spark_cluster

hdinsightSparkCluster.HdinsightSparkClusterNetworkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetworkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetworkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetworkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetworkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetworkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetworkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetworkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetworkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetworkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetworkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetworkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetworkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetworkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetworkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetworkOutputReference.resetConnectionDirection">reset_connection_direction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetworkOutputReference.resetPrivateLinkEnabled">reset_private_link_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetworkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetworkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetworkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetworkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetworkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetworkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetworkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetworkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetworkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetworkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetworkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetworkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetworkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_connection_direction` <a name="reset_connection_direction" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetworkOutputReference.resetConnectionDirection"></a>

```python
def reset_connection_direction() -> None
```

##### `reset_private_link_enabled` <a name="reset_private_link_enabled" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetworkOutputReference.resetPrivateLinkEnabled"></a>

```python
def reset_private_link_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetworkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetworkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetworkOutputReference.property.connectionDirectionInput">connection_direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetworkOutputReference.property.privateLinkEnabledInput">private_link_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetworkOutputReference.property.connectionDirection">connection_direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetworkOutputReference.property.privateLinkEnabled">private_link_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetworkOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetwork">HdinsightSparkClusterNetwork</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetworkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetworkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_direction_input`<sup>Optional</sup> <a name="connection_direction_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetworkOutputReference.property.connectionDirectionInput"></a>

```python
connection_direction_input: str
```

- *Type:* str

---

##### `private_link_enabled_input`<sup>Optional</sup> <a name="private_link_enabled_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetworkOutputReference.property.privateLinkEnabledInput"></a>

```python
private_link_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `connection_direction`<sup>Required</sup> <a name="connection_direction" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetworkOutputReference.property.connectionDirection"></a>

```python
connection_direction: str
```

- *Type:* str

---

##### `private_link_enabled`<sup>Required</sup> <a name="private_link_enabled" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetworkOutputReference.property.privateLinkEnabled"></a>

```python
private_link_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetworkOutputReference.property.internalValue"></a>

```python
internal_value: HdinsightSparkClusterNetwork
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterNetwork">HdinsightSparkClusterNetwork</a>

---


### HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference <a name="HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_spark_cluster

hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference.resetPrimary">reset_primary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference.resetPrivateIpAddress">reset_private_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference.resetPrivateIpAllocationMethod">reset_private_ip_allocation_method</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference.resetSubnetId">reset_subnet_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_primary` <a name="reset_primary" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference.resetPrimary"></a>

```python
def reset_primary() -> None
```

##### `reset_private_ip_address` <a name="reset_private_ip_address" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference.resetPrivateIpAddress"></a>

```python
def reset_private_ip_address() -> None
```

##### `reset_private_ip_allocation_method` <a name="reset_private_ip_allocation_method" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference.resetPrivateIpAllocationMethod"></a>

```python
def reset_private_ip_allocation_method() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.primaryInput">primary_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.privateIpAddressInput">private_ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.privateIpAllocationMethodInput">private_ip_allocation_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.primary">primary</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.privateIpAddress">private_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.privateIpAllocationMethod">private_ip_allocation_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfiguration">HdinsightSparkClusterPrivateLinkConfigurationIpConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `primary_input`<sup>Optional</sup> <a name="primary_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.primaryInput"></a>

```python
primary_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `private_ip_address_input`<sup>Optional</sup> <a name="private_ip_address_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.privateIpAddressInput"></a>

```python
private_ip_address_input: str
```

- *Type:* str

---

##### `private_ip_allocation_method_input`<sup>Optional</sup> <a name="private_ip_allocation_method_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.privateIpAllocationMethodInput"></a>

```python
private_ip_allocation_method_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.primary"></a>

```python
primary: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `private_ip_address`<sup>Required</sup> <a name="private_ip_address" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.privateIpAddress"></a>

```python
private_ip_address: str
```

- *Type:* str

---

##### `private_ip_allocation_method`<sup>Required</sup> <a name="private_ip_allocation_method" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.privateIpAllocationMethod"></a>

```python
private_ip_allocation_method: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: HdinsightSparkClusterPrivateLinkConfigurationIpConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfiguration">HdinsightSparkClusterPrivateLinkConfigurationIpConfiguration</a>

---


### HdinsightSparkClusterPrivateLinkConfigurationOutputReference <a name="HdinsightSparkClusterPrivateLinkConfigurationOutputReference" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_spark_cluster

hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationOutputReference.putIpConfiguration">put_ip_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ip_configuration` <a name="put_ip_configuration" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationOutputReference.putIpConfiguration"></a>

```python
def put_ip_configuration(
  name: str,
  primary: typing.Union[bool, IResolvable] = None,
  private_ip_address: str = None,
  private_ip_allocation_method: str = None,
  subnet_id: str = None
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationOutputReference.putIpConfiguration.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#name HdinsightSparkCluster#name}.

---

###### `primary`<sup>Optional</sup> <a name="primary" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationOutputReference.putIpConfiguration.parameter.primary"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#primary HdinsightSparkCluster#primary}.

---

###### `private_ip_address`<sup>Optional</sup> <a name="private_ip_address" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationOutputReference.putIpConfiguration.parameter.privateIpAddress"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#private_ip_address HdinsightSparkCluster#private_ip_address}.

---

###### `private_ip_allocation_method`<sup>Optional</sup> <a name="private_ip_allocation_method" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationOutputReference.putIpConfiguration.parameter.privateIpAllocationMethod"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#private_ip_allocation_method HdinsightSparkCluster#private_ip_allocation_method}.

---

###### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationOutputReference.putIpConfiguration.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#subnet_id HdinsightSparkCluster#subnet_id}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationOutputReference.property.ipConfiguration">ip_configuration</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference">HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationOutputReference.property.groupIdInput">group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationOutputReference.property.ipConfigurationInput">ip_configuration_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfiguration">HdinsightSparkClusterPrivateLinkConfigurationIpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationOutputReference.property.groupId">group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfiguration">HdinsightSparkClusterPrivateLinkConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_configuration`<sup>Required</sup> <a name="ip_configuration" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationOutputReference.property.ipConfiguration"></a>

```python
ip_configuration: HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference">HdinsightSparkClusterPrivateLinkConfigurationIpConfigurationOutputReference</a>

---

##### `group_id_input`<sup>Optional</sup> <a name="group_id_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationOutputReference.property.groupIdInput"></a>

```python
group_id_input: str
```

- *Type:* str

---

##### `ip_configuration_input`<sup>Optional</sup> <a name="ip_configuration_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationOutputReference.property.ipConfigurationInput"></a>

```python
ip_configuration_input: HdinsightSparkClusterPrivateLinkConfigurationIpConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationIpConfiguration">HdinsightSparkClusterPrivateLinkConfigurationIpConfiguration</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationOutputReference.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: HdinsightSparkClusterPrivateLinkConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterPrivateLinkConfiguration">HdinsightSparkClusterPrivateLinkConfiguration</a>

---


### HdinsightSparkClusterRolesHeadNodeOutputReference <a name="HdinsightSparkClusterRolesHeadNodeOutputReference" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_spark_cluster

hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.putScriptActions">put_script_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.resetScriptActions">reset_script_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.resetSshKeys">reset_ssh_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.resetSubnetId">reset_subnet_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.resetVirtualNetworkId">reset_virtual_network_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_script_actions` <a name="put_script_actions" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.putScriptActions"></a>

```python
def put_script_actions(
  value: typing.Union[IResolvable, typing.List[HdinsightSparkClusterRolesHeadNodeScriptActions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.putScriptActions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActions">HdinsightSparkClusterRolesHeadNodeScriptActions</a>]]

---

##### `reset_password` <a name="reset_password" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_script_actions` <a name="reset_script_actions" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.resetScriptActions"></a>

```python
def reset_script_actions() -> None
```

##### `reset_ssh_keys` <a name="reset_ssh_keys" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.resetSshKeys"></a>

```python
def reset_ssh_keys() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```

##### `reset_virtual_network_id` <a name="reset_virtual_network_id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.resetVirtualNetworkId"></a>

```python
def reset_virtual_network_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.property.scriptActions">script_actions</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsList">HdinsightSparkClusterRolesHeadNodeScriptActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.property.scriptActionsInput">script_actions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActions">HdinsightSparkClusterRolesHeadNodeScriptActions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.property.sshKeysInput">ssh_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.property.virtualNetworkIdInput">virtual_network_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.property.vmSizeInput">vm_size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.property.sshKeys">ssh_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.property.virtualNetworkId">virtual_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.property.vmSize">vm_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNode">HdinsightSparkClusterRolesHeadNode</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `script_actions`<sup>Required</sup> <a name="script_actions" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.property.scriptActions"></a>

```python
script_actions: HdinsightSparkClusterRolesHeadNodeScriptActionsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsList">HdinsightSparkClusterRolesHeadNodeScriptActionsList</a>

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `script_actions_input`<sup>Optional</sup> <a name="script_actions_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.property.scriptActionsInput"></a>

```python
script_actions_input: typing.Union[IResolvable, typing.List[HdinsightSparkClusterRolesHeadNodeScriptActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActions">HdinsightSparkClusterRolesHeadNodeScriptActions</a>]]

---

##### `ssh_keys_input`<sup>Optional</sup> <a name="ssh_keys_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.property.sshKeysInput"></a>

```python
ssh_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `virtual_network_id_input`<sup>Optional</sup> <a name="virtual_network_id_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.property.virtualNetworkIdInput"></a>

```python
virtual_network_id_input: str
```

- *Type:* str

---

##### `vm_size_input`<sup>Optional</sup> <a name="vm_size_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.property.vmSizeInput"></a>

```python
vm_size_input: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `ssh_keys`<sup>Required</sup> <a name="ssh_keys" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.property.sshKeys"></a>

```python
ssh_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `virtual_network_id`<sup>Required</sup> <a name="virtual_network_id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.property.virtualNetworkId"></a>

```python
virtual_network_id: str
```

- *Type:* str

---

##### `vm_size`<sup>Required</sup> <a name="vm_size" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.property.vmSize"></a>

```python
vm_size: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference.property.internalValue"></a>

```python
internal_value: HdinsightSparkClusterRolesHeadNode
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNode">HdinsightSparkClusterRolesHeadNode</a>

---


### HdinsightSparkClusterRolesHeadNodeScriptActionsList <a name="HdinsightSparkClusterRolesHeadNodeScriptActionsList" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_spark_cluster

hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> HdinsightSparkClusterRolesHeadNodeScriptActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActions">HdinsightSparkClusterRolesHeadNodeScriptActions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[HdinsightSparkClusterRolesHeadNodeScriptActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActions">HdinsightSparkClusterRolesHeadNodeScriptActions</a>]]

---


### HdinsightSparkClusterRolesHeadNodeScriptActionsOutputReference <a name="HdinsightSparkClusterRolesHeadNodeScriptActionsOutputReference" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_spark_cluster

hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsOutputReference.property.parametersInput">parameters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsOutputReference.property.parameters">parameters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActions">HdinsightSparkClusterRolesHeadNodeScriptActions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsOutputReference.property.parametersInput"></a>

```python
parameters_input: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsOutputReference.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, HdinsightSparkClusterRolesHeadNodeScriptActions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActions">HdinsightSparkClusterRolesHeadNodeScriptActions</a>]

---


### HdinsightSparkClusterRolesOutputReference <a name="HdinsightSparkClusterRolesOutputReference" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_spark_cluster

hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.putHeadNode">put_head_node</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.putWorkerNode">put_worker_node</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.putZookeeperNode">put_zookeeper_node</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_head_node` <a name="put_head_node" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.putHeadNode"></a>

```python
def put_head_node(
  username: str,
  vm_size: str,
  password: str = None,
  script_actions: typing.Union[IResolvable, typing.List[HdinsightSparkClusterRolesHeadNodeScriptActions]] = None,
  ssh_keys: typing.List[str] = None,
  subnet_id: str = None,
  virtual_network_id: str = None
) -> None
```

###### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.putHeadNode.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#username HdinsightSparkCluster#username}.

---

###### `vm_size`<sup>Required</sup> <a name="vm_size" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.putHeadNode.parameter.vmSize"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#vm_size HdinsightSparkCluster#vm_size}.

---

###### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.putHeadNode.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#password HdinsightSparkCluster#password}.

---

###### `script_actions`<sup>Optional</sup> <a name="script_actions" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.putHeadNode.parameter.scriptActions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeScriptActions">HdinsightSparkClusterRolesHeadNodeScriptActions</a>]]

script_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#script_actions HdinsightSparkCluster#script_actions}

---

###### `ssh_keys`<sup>Optional</sup> <a name="ssh_keys" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.putHeadNode.parameter.sshKeys"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#ssh_keys HdinsightSparkCluster#ssh_keys}.

---

###### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.putHeadNode.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#subnet_id HdinsightSparkCluster#subnet_id}.

---

###### `virtual_network_id`<sup>Optional</sup> <a name="virtual_network_id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.putHeadNode.parameter.virtualNetworkId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#virtual_network_id HdinsightSparkCluster#virtual_network_id}.

---

##### `put_worker_node` <a name="put_worker_node" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.putWorkerNode"></a>

```python
def put_worker_node(
  target_instance_count: typing.Union[int, float],
  username: str,
  vm_size: str,
  autoscale: HdinsightSparkClusterRolesWorkerNodeAutoscale = None,
  password: str = None,
  script_actions: typing.Union[IResolvable, typing.List[HdinsightSparkClusterRolesWorkerNodeScriptActions]] = None,
  ssh_keys: typing.List[str] = None,
  subnet_id: str = None,
  virtual_network_id: str = None
) -> None
```

###### `target_instance_count`<sup>Required</sup> <a name="target_instance_count" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.putWorkerNode.parameter.targetInstanceCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#target_instance_count HdinsightSparkCluster#target_instance_count}.

---

###### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.putWorkerNode.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#username HdinsightSparkCluster#username}.

---

###### `vm_size`<sup>Required</sup> <a name="vm_size" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.putWorkerNode.parameter.vmSize"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#vm_size HdinsightSparkCluster#vm_size}.

---

###### `autoscale`<sup>Optional</sup> <a name="autoscale" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.putWorkerNode.parameter.autoscale"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscale">HdinsightSparkClusterRolesWorkerNodeAutoscale</a>

autoscale block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#autoscale HdinsightSparkCluster#autoscale}

---

###### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.putWorkerNode.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#password HdinsightSparkCluster#password}.

---

###### `script_actions`<sup>Optional</sup> <a name="script_actions" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.putWorkerNode.parameter.scriptActions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActions">HdinsightSparkClusterRolesWorkerNodeScriptActions</a>]]

script_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#script_actions HdinsightSparkCluster#script_actions}

---

###### `ssh_keys`<sup>Optional</sup> <a name="ssh_keys" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.putWorkerNode.parameter.sshKeys"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#ssh_keys HdinsightSparkCluster#ssh_keys}.

---

###### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.putWorkerNode.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#subnet_id HdinsightSparkCluster#subnet_id}.

---

###### `virtual_network_id`<sup>Optional</sup> <a name="virtual_network_id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.putWorkerNode.parameter.virtualNetworkId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#virtual_network_id HdinsightSparkCluster#virtual_network_id}.

---

##### `put_zookeeper_node` <a name="put_zookeeper_node" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.putZookeeperNode"></a>

```python
def put_zookeeper_node(
  username: str,
  vm_size: str,
  password: str = None,
  script_actions: typing.Union[IResolvable, typing.List[HdinsightSparkClusterRolesZookeeperNodeScriptActions]] = None,
  ssh_keys: typing.List[str] = None,
  subnet_id: str = None,
  virtual_network_id: str = None
) -> None
```

###### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.putZookeeperNode.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#username HdinsightSparkCluster#username}.

---

###### `vm_size`<sup>Required</sup> <a name="vm_size" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.putZookeeperNode.parameter.vmSize"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#vm_size HdinsightSparkCluster#vm_size}.

---

###### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.putZookeeperNode.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#password HdinsightSparkCluster#password}.

---

###### `script_actions`<sup>Optional</sup> <a name="script_actions" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.putZookeeperNode.parameter.scriptActions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActions">HdinsightSparkClusterRolesZookeeperNodeScriptActions</a>]]

script_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#script_actions HdinsightSparkCluster#script_actions}

---

###### `ssh_keys`<sup>Optional</sup> <a name="ssh_keys" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.putZookeeperNode.parameter.sshKeys"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#ssh_keys HdinsightSparkCluster#ssh_keys}.

---

###### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.putZookeeperNode.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#subnet_id HdinsightSparkCluster#subnet_id}.

---

###### `virtual_network_id`<sup>Optional</sup> <a name="virtual_network_id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.putZookeeperNode.parameter.virtualNetworkId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#virtual_network_id HdinsightSparkCluster#virtual_network_id}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.property.headNode">head_node</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference">HdinsightSparkClusterRolesHeadNodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.property.workerNode">worker_node</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference">HdinsightSparkClusterRolesWorkerNodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.property.zookeeperNode">zookeeper_node</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference">HdinsightSparkClusterRolesZookeeperNodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.property.headNodeInput">head_node_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNode">HdinsightSparkClusterRolesHeadNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.property.workerNodeInput">worker_node_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNode">HdinsightSparkClusterRolesWorkerNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.property.zookeeperNodeInput">zookeeper_node_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNode">HdinsightSparkClusterRolesZookeeperNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRoles">HdinsightSparkClusterRoles</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `head_node`<sup>Required</sup> <a name="head_node" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.property.headNode"></a>

```python
head_node: HdinsightSparkClusterRolesHeadNodeOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNodeOutputReference">HdinsightSparkClusterRolesHeadNodeOutputReference</a>

---

##### `worker_node`<sup>Required</sup> <a name="worker_node" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.property.workerNode"></a>

```python
worker_node: HdinsightSparkClusterRolesWorkerNodeOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference">HdinsightSparkClusterRolesWorkerNodeOutputReference</a>

---

##### `zookeeper_node`<sup>Required</sup> <a name="zookeeper_node" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.property.zookeeperNode"></a>

```python
zookeeper_node: HdinsightSparkClusterRolesZookeeperNodeOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference">HdinsightSparkClusterRolesZookeeperNodeOutputReference</a>

---

##### `head_node_input`<sup>Optional</sup> <a name="head_node_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.property.headNodeInput"></a>

```python
head_node_input: HdinsightSparkClusterRolesHeadNode
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesHeadNode">HdinsightSparkClusterRolesHeadNode</a>

---

##### `worker_node_input`<sup>Optional</sup> <a name="worker_node_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.property.workerNodeInput"></a>

```python
worker_node_input: HdinsightSparkClusterRolesWorkerNode
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNode">HdinsightSparkClusterRolesWorkerNode</a>

---

##### `zookeeper_node_input`<sup>Optional</sup> <a name="zookeeper_node_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.property.zookeeperNodeInput"></a>

```python
zookeeper_node_input: HdinsightSparkClusterRolesZookeeperNode
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNode">HdinsightSparkClusterRolesZookeeperNode</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesOutputReference.property.internalValue"></a>

```python
internal_value: HdinsightSparkClusterRoles
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRoles">HdinsightSparkClusterRoles</a>

---


### HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacityOutputReference <a name="HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacityOutputReference" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_spark_cluster

hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacityOutputReference.property.maxInstanceCountInput">max_instance_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacityOutputReference.property.minInstanceCountInput">min_instance_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacityOutputReference.property.maxInstanceCount">max_instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacityOutputReference.property.minInstanceCount">min_instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacity">HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_instance_count_input`<sup>Optional</sup> <a name="max_instance_count_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacityOutputReference.property.maxInstanceCountInput"></a>

```python
max_instance_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_instance_count_input`<sup>Optional</sup> <a name="min_instance_count_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacityOutputReference.property.minInstanceCountInput"></a>

```python
min_instance_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_instance_count`<sup>Required</sup> <a name="max_instance_count" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacityOutputReference.property.maxInstanceCount"></a>

```python
max_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_instance_count`<sup>Required</sup> <a name="min_instance_count" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacityOutputReference.property.minInstanceCount"></a>

```python
min_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacityOutputReference.property.internalValue"></a>

```python
internal_value: HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacity
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacity">HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacity</a>

---


### HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference <a name="HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_spark_cluster

hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference.putCapacity">put_capacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference.putRecurrence">put_recurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference.resetCapacity">reset_capacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference.resetRecurrence">reset_recurrence</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_capacity` <a name="put_capacity" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference.putCapacity"></a>

```python
def put_capacity(
  max_instance_count: typing.Union[int, float],
  min_instance_count: typing.Union[int, float]
) -> None
```

###### `max_instance_count`<sup>Required</sup> <a name="max_instance_count" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference.putCapacity.parameter.maxInstanceCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#max_instance_count HdinsightSparkCluster#max_instance_count}.

---

###### `min_instance_count`<sup>Required</sup> <a name="min_instance_count" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference.putCapacity.parameter.minInstanceCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#min_instance_count HdinsightSparkCluster#min_instance_count}.

---

##### `put_recurrence` <a name="put_recurrence" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference.putRecurrence"></a>

```python
def put_recurrence(
  schedule: typing.Union[IResolvable, typing.List[HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceSchedule]],
  timezone: str
) -> None
```

###### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference.putRecurrence.parameter.schedule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceSchedule">HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceSchedule</a>]]

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#schedule HdinsightSparkCluster#schedule}

---

###### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference.putRecurrence.parameter.timezone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#timezone HdinsightSparkCluster#timezone}.

---

##### `reset_capacity` <a name="reset_capacity" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference.resetCapacity"></a>

```python
def reset_capacity() -> None
```

##### `reset_recurrence` <a name="reset_recurrence" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference.resetRecurrence"></a>

```python
def reset_recurrence() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference.property.capacity">capacity</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacityOutputReference">HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference.property.recurrence">recurrence</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference">HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference.property.capacityInput">capacity_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacity">HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference.property.recurrenceInput">recurrence_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrence">HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscale">HdinsightSparkClusterRolesWorkerNodeAutoscale</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference.property.capacity"></a>

```python
capacity: HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacityOutputReference">HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacityOutputReference</a>

---

##### `recurrence`<sup>Required</sup> <a name="recurrence" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference.property.recurrence"></a>

```python
recurrence: HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference">HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference</a>

---

##### `capacity_input`<sup>Optional</sup> <a name="capacity_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference.property.capacityInput"></a>

```python
capacity_input: HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacity
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacity">HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacity</a>

---

##### `recurrence_input`<sup>Optional</sup> <a name="recurrence_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference.property.recurrenceInput"></a>

```python
recurrence_input: HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrence
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrence">HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrence</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference.property.internalValue"></a>

```python
internal_value: HdinsightSparkClusterRolesWorkerNodeAutoscale
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscale">HdinsightSparkClusterRolesWorkerNodeAutoscale</a>

---


### HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference <a name="HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_spark_cluster

hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.putSchedule">put_schedule</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_schedule` <a name="put_schedule" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.putSchedule"></a>

```python
def put_schedule(
  value: typing.Union[IResolvable, typing.List[HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceSchedule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.putSchedule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceSchedule">HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceSchedule</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList">HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.scheduleInput">schedule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceSchedule">HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceSchedule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.timezoneInput">timezone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.timezone">timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrence">HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrence</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.schedule"></a>

```python
schedule: HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList">HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList</a>

---

##### `schedule_input`<sup>Optional</sup> <a name="schedule_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.scheduleInput"></a>

```python
schedule_input: typing.Union[IResolvable, typing.List[HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceSchedule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceSchedule">HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceSchedule</a>]]

---

##### `timezone_input`<sup>Optional</sup> <a name="timezone_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.timezoneInput"></a>

```python
timezone_input: str
```

- *Type:* str

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.internalValue"></a>

```python
internal_value: HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrence
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrence">HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrence</a>

---


### HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList <a name="HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_spark_cluster

hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceSchedule">HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceSchedule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceSchedule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceSchedule">HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceSchedule</a>]]

---


### HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference <a name="HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_spark_cluster

hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.daysInput">days_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.targetInstanceCountInput">target_instance_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.timeInput">time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.days">days</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.targetInstanceCount">target_instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.time">time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceSchedule">HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceSchedule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `days_input`<sup>Optional</sup> <a name="days_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.daysInput"></a>

```python
days_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_instance_count_input`<sup>Optional</sup> <a name="target_instance_count_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.targetInstanceCountInput"></a>

```python
target_instance_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_input`<sup>Optional</sup> <a name="time_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.timeInput"></a>

```python
time_input: str
```

- *Type:* str

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.days"></a>

```python
days: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_instance_count`<sup>Required</sup> <a name="target_instance_count" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.targetInstanceCount"></a>

```python
target_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.time"></a>

```python
time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceSchedule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceSchedule">HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceSchedule</a>]

---


### HdinsightSparkClusterRolesWorkerNodeOutputReference <a name="HdinsightSparkClusterRolesWorkerNodeOutputReference" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_spark_cluster

hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.putAutoscale">put_autoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.putScriptActions">put_script_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.resetAutoscale">reset_autoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.resetScriptActions">reset_script_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.resetSshKeys">reset_ssh_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.resetSubnetId">reset_subnet_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.resetVirtualNetworkId">reset_virtual_network_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_autoscale` <a name="put_autoscale" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.putAutoscale"></a>

```python
def put_autoscale(
  capacity: HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacity = None,
  recurrence: HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrence = None
) -> None
```

###### `capacity`<sup>Optional</sup> <a name="capacity" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.putAutoscale.parameter.capacity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacity">HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacity</a>

capacity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#capacity HdinsightSparkCluster#capacity}

---

###### `recurrence`<sup>Optional</sup> <a name="recurrence" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.putAutoscale.parameter.recurrence"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrence">HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrence</a>

recurrence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/hdinsight_spark_cluster#recurrence HdinsightSparkCluster#recurrence}

---

##### `put_script_actions` <a name="put_script_actions" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.putScriptActions"></a>

```python
def put_script_actions(
  value: typing.Union[IResolvable, typing.List[HdinsightSparkClusterRolesWorkerNodeScriptActions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.putScriptActions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActions">HdinsightSparkClusterRolesWorkerNodeScriptActions</a>]]

---

##### `reset_autoscale` <a name="reset_autoscale" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.resetAutoscale"></a>

```python
def reset_autoscale() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_script_actions` <a name="reset_script_actions" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.resetScriptActions"></a>

```python
def reset_script_actions() -> None
```

##### `reset_ssh_keys` <a name="reset_ssh_keys" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.resetSshKeys"></a>

```python
def reset_ssh_keys() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```

##### `reset_virtual_network_id` <a name="reset_virtual_network_id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.resetVirtualNetworkId"></a>

```python
def reset_virtual_network_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.property.autoscale">autoscale</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference">HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.property.scriptActions">script_actions</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsList">HdinsightSparkClusterRolesWorkerNodeScriptActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.property.autoscaleInput">autoscale_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscale">HdinsightSparkClusterRolesWorkerNodeAutoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.property.scriptActionsInput">script_actions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActions">HdinsightSparkClusterRolesWorkerNodeScriptActions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.property.sshKeysInput">ssh_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.property.targetInstanceCountInput">target_instance_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.property.virtualNetworkIdInput">virtual_network_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.property.vmSizeInput">vm_size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.property.sshKeys">ssh_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.property.targetInstanceCount">target_instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.property.virtualNetworkId">virtual_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.property.vmSize">vm_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNode">HdinsightSparkClusterRolesWorkerNode</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `autoscale`<sup>Required</sup> <a name="autoscale" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.property.autoscale"></a>

```python
autoscale: HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference">HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference</a>

---

##### `script_actions`<sup>Required</sup> <a name="script_actions" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.property.scriptActions"></a>

```python
script_actions: HdinsightSparkClusterRolesWorkerNodeScriptActionsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsList">HdinsightSparkClusterRolesWorkerNodeScriptActionsList</a>

---

##### `autoscale_input`<sup>Optional</sup> <a name="autoscale_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.property.autoscaleInput"></a>

```python
autoscale_input: HdinsightSparkClusterRolesWorkerNodeAutoscale
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeAutoscale">HdinsightSparkClusterRolesWorkerNodeAutoscale</a>

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `script_actions_input`<sup>Optional</sup> <a name="script_actions_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.property.scriptActionsInput"></a>

```python
script_actions_input: typing.Union[IResolvable, typing.List[HdinsightSparkClusterRolesWorkerNodeScriptActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActions">HdinsightSparkClusterRolesWorkerNodeScriptActions</a>]]

---

##### `ssh_keys_input`<sup>Optional</sup> <a name="ssh_keys_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.property.sshKeysInput"></a>

```python
ssh_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `target_instance_count_input`<sup>Optional</sup> <a name="target_instance_count_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.property.targetInstanceCountInput"></a>

```python
target_instance_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `virtual_network_id_input`<sup>Optional</sup> <a name="virtual_network_id_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.property.virtualNetworkIdInput"></a>

```python
virtual_network_id_input: str
```

- *Type:* str

---

##### `vm_size_input`<sup>Optional</sup> <a name="vm_size_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.property.vmSizeInput"></a>

```python
vm_size_input: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `ssh_keys`<sup>Required</sup> <a name="ssh_keys" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.property.sshKeys"></a>

```python
ssh_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `target_instance_count`<sup>Required</sup> <a name="target_instance_count" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.property.targetInstanceCount"></a>

```python
target_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `virtual_network_id`<sup>Required</sup> <a name="virtual_network_id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.property.virtualNetworkId"></a>

```python
virtual_network_id: str
```

- *Type:* str

---

##### `vm_size`<sup>Required</sup> <a name="vm_size" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.property.vmSize"></a>

```python
vm_size: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeOutputReference.property.internalValue"></a>

```python
internal_value: HdinsightSparkClusterRolesWorkerNode
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNode">HdinsightSparkClusterRolesWorkerNode</a>

---


### HdinsightSparkClusterRolesWorkerNodeScriptActionsList <a name="HdinsightSparkClusterRolesWorkerNodeScriptActionsList" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_spark_cluster

hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> HdinsightSparkClusterRolesWorkerNodeScriptActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActions">HdinsightSparkClusterRolesWorkerNodeScriptActions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[HdinsightSparkClusterRolesWorkerNodeScriptActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActions">HdinsightSparkClusterRolesWorkerNodeScriptActions</a>]]

---


### HdinsightSparkClusterRolesWorkerNodeScriptActionsOutputReference <a name="HdinsightSparkClusterRolesWorkerNodeScriptActionsOutputReference" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_spark_cluster

hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsOutputReference.property.parametersInput">parameters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsOutputReference.property.parameters">parameters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActions">HdinsightSparkClusterRolesWorkerNodeScriptActions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsOutputReference.property.parametersInput"></a>

```python
parameters_input: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsOutputReference.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, HdinsightSparkClusterRolesWorkerNodeScriptActions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesWorkerNodeScriptActions">HdinsightSparkClusterRolesWorkerNodeScriptActions</a>]

---


### HdinsightSparkClusterRolesZookeeperNodeOutputReference <a name="HdinsightSparkClusterRolesZookeeperNodeOutputReference" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_spark_cluster

hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.putScriptActions">put_script_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.resetScriptActions">reset_script_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.resetSshKeys">reset_ssh_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.resetSubnetId">reset_subnet_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.resetVirtualNetworkId">reset_virtual_network_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_script_actions` <a name="put_script_actions" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.putScriptActions"></a>

```python
def put_script_actions(
  value: typing.Union[IResolvable, typing.List[HdinsightSparkClusterRolesZookeeperNodeScriptActions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.putScriptActions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActions">HdinsightSparkClusterRolesZookeeperNodeScriptActions</a>]]

---

##### `reset_password` <a name="reset_password" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_script_actions` <a name="reset_script_actions" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.resetScriptActions"></a>

```python
def reset_script_actions() -> None
```

##### `reset_ssh_keys` <a name="reset_ssh_keys" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.resetSshKeys"></a>

```python
def reset_ssh_keys() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```

##### `reset_virtual_network_id` <a name="reset_virtual_network_id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.resetVirtualNetworkId"></a>

```python
def reset_virtual_network_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.property.scriptActions">script_actions</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsList">HdinsightSparkClusterRolesZookeeperNodeScriptActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.property.scriptActionsInput">script_actions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActions">HdinsightSparkClusterRolesZookeeperNodeScriptActions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.property.sshKeysInput">ssh_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.property.virtualNetworkIdInput">virtual_network_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.property.vmSizeInput">vm_size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.property.sshKeys">ssh_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.property.virtualNetworkId">virtual_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.property.vmSize">vm_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNode">HdinsightSparkClusterRolesZookeeperNode</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `script_actions`<sup>Required</sup> <a name="script_actions" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.property.scriptActions"></a>

```python
script_actions: HdinsightSparkClusterRolesZookeeperNodeScriptActionsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsList">HdinsightSparkClusterRolesZookeeperNodeScriptActionsList</a>

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `script_actions_input`<sup>Optional</sup> <a name="script_actions_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.property.scriptActionsInput"></a>

```python
script_actions_input: typing.Union[IResolvable, typing.List[HdinsightSparkClusterRolesZookeeperNodeScriptActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActions">HdinsightSparkClusterRolesZookeeperNodeScriptActions</a>]]

---

##### `ssh_keys_input`<sup>Optional</sup> <a name="ssh_keys_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.property.sshKeysInput"></a>

```python
ssh_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `virtual_network_id_input`<sup>Optional</sup> <a name="virtual_network_id_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.property.virtualNetworkIdInput"></a>

```python
virtual_network_id_input: str
```

- *Type:* str

---

##### `vm_size_input`<sup>Optional</sup> <a name="vm_size_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.property.vmSizeInput"></a>

```python
vm_size_input: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `ssh_keys`<sup>Required</sup> <a name="ssh_keys" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.property.sshKeys"></a>

```python
ssh_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `virtual_network_id`<sup>Required</sup> <a name="virtual_network_id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.property.virtualNetworkId"></a>

```python
virtual_network_id: str
```

- *Type:* str

---

##### `vm_size`<sup>Required</sup> <a name="vm_size" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.property.vmSize"></a>

```python
vm_size: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeOutputReference.property.internalValue"></a>

```python
internal_value: HdinsightSparkClusterRolesZookeeperNode
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNode">HdinsightSparkClusterRolesZookeeperNode</a>

---


### HdinsightSparkClusterRolesZookeeperNodeScriptActionsList <a name="HdinsightSparkClusterRolesZookeeperNodeScriptActionsList" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_spark_cluster

hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> HdinsightSparkClusterRolesZookeeperNodeScriptActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActions">HdinsightSparkClusterRolesZookeeperNodeScriptActions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[HdinsightSparkClusterRolesZookeeperNodeScriptActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActions">HdinsightSparkClusterRolesZookeeperNodeScriptActions</a>]]

---


### HdinsightSparkClusterRolesZookeeperNodeScriptActionsOutputReference <a name="HdinsightSparkClusterRolesZookeeperNodeScriptActionsOutputReference" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_spark_cluster

hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsOutputReference.property.parametersInput">parameters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsOutputReference.property.parameters">parameters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActions">HdinsightSparkClusterRolesZookeeperNodeScriptActions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsOutputReference.property.parametersInput"></a>

```python
parameters_input: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsOutputReference.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, HdinsightSparkClusterRolesZookeeperNodeScriptActions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterRolesZookeeperNodeScriptActions">HdinsightSparkClusterRolesZookeeperNodeScriptActions</a>]

---


### HdinsightSparkClusterSecurityProfileOutputReference <a name="HdinsightSparkClusterSecurityProfileOutputReference" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_spark_cluster

hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.resetClusterUsersGroupDns">reset_cluster_users_group_dns</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cluster_users_group_dns` <a name="reset_cluster_users_group_dns" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.resetClusterUsersGroupDns"></a>

```python
def reset_cluster_users_group_dns() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.property.aaddsResourceIdInput">aadds_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.property.clusterUsersGroupDnsInput">cluster_users_group_dns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.property.domainNameInput">domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.property.domainUsernameInput">domain_username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.property.domainUserPasswordInput">domain_user_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.property.ldapsUrlsInput">ldaps_urls_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.property.msiResourceIdInput">msi_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.property.aaddsResourceId">aadds_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.property.clusterUsersGroupDns">cluster_users_group_dns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.property.domainUsername">domain_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.property.domainUserPassword">domain_user_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.property.ldapsUrls">ldaps_urls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.property.msiResourceId">msi_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfile">HdinsightSparkClusterSecurityProfile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aadds_resource_id_input`<sup>Optional</sup> <a name="aadds_resource_id_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.property.aaddsResourceIdInput"></a>

```python
aadds_resource_id_input: str
```

- *Type:* str

---

##### `cluster_users_group_dns_input`<sup>Optional</sup> <a name="cluster_users_group_dns_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.property.clusterUsersGroupDnsInput"></a>

```python
cluster_users_group_dns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `domain_name_input`<sup>Optional</sup> <a name="domain_name_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.property.domainNameInput"></a>

```python
domain_name_input: str
```

- *Type:* str

---

##### `domain_username_input`<sup>Optional</sup> <a name="domain_username_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.property.domainUsernameInput"></a>

```python
domain_username_input: str
```

- *Type:* str

---

##### `domain_user_password_input`<sup>Optional</sup> <a name="domain_user_password_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.property.domainUserPasswordInput"></a>

```python
domain_user_password_input: str
```

- *Type:* str

---

##### `ldaps_urls_input`<sup>Optional</sup> <a name="ldaps_urls_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.property.ldapsUrlsInput"></a>

```python
ldaps_urls_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `msi_resource_id_input`<sup>Optional</sup> <a name="msi_resource_id_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.property.msiResourceIdInput"></a>

```python
msi_resource_id_input: str
```

- *Type:* str

---

##### `aadds_resource_id`<sup>Required</sup> <a name="aadds_resource_id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.property.aaddsResourceId"></a>

```python
aadds_resource_id: str
```

- *Type:* str

---

##### `cluster_users_group_dns`<sup>Required</sup> <a name="cluster_users_group_dns" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.property.clusterUsersGroupDns"></a>

```python
cluster_users_group_dns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `domain_username`<sup>Required</sup> <a name="domain_username" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.property.domainUsername"></a>

```python
domain_username: str
```

- *Type:* str

---

##### `domain_user_password`<sup>Required</sup> <a name="domain_user_password" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.property.domainUserPassword"></a>

```python
domain_user_password: str
```

- *Type:* str

---

##### `ldaps_urls`<sup>Required</sup> <a name="ldaps_urls" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.property.ldapsUrls"></a>

```python
ldaps_urls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `msi_resource_id`<sup>Required</sup> <a name="msi_resource_id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.property.msiResourceId"></a>

```python
msi_resource_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfileOutputReference.property.internalValue"></a>

```python
internal_value: HdinsightSparkClusterSecurityProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterSecurityProfile">HdinsightSparkClusterSecurityProfile</a>

---


### HdinsightSparkClusterStorageAccountGen2OutputReference <a name="HdinsightSparkClusterStorageAccountGen2OutputReference" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2OutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_spark_cluster

hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2OutputReference.property.filesystemIdInput">filesystem_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2OutputReference.property.isDefaultInput">is_default_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2OutputReference.property.managedIdentityResourceIdInput">managed_identity_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2OutputReference.property.storageResourceIdInput">storage_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2OutputReference.property.filesystemId">filesystem_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2OutputReference.property.isDefault">is_default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2OutputReference.property.managedIdentityResourceId">managed_identity_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2OutputReference.property.storageResourceId">storage_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2">HdinsightSparkClusterStorageAccountGen2</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filesystem_id_input`<sup>Optional</sup> <a name="filesystem_id_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2OutputReference.property.filesystemIdInput"></a>

```python
filesystem_id_input: str
```

- *Type:* str

---

##### `is_default_input`<sup>Optional</sup> <a name="is_default_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2OutputReference.property.isDefaultInput"></a>

```python
is_default_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `managed_identity_resource_id_input`<sup>Optional</sup> <a name="managed_identity_resource_id_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2OutputReference.property.managedIdentityResourceIdInput"></a>

```python
managed_identity_resource_id_input: str
```

- *Type:* str

---

##### `storage_resource_id_input`<sup>Optional</sup> <a name="storage_resource_id_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2OutputReference.property.storageResourceIdInput"></a>

```python
storage_resource_id_input: str
```

- *Type:* str

---

##### `filesystem_id`<sup>Required</sup> <a name="filesystem_id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2OutputReference.property.filesystemId"></a>

```python
filesystem_id: str
```

- *Type:* str

---

##### `is_default`<sup>Required</sup> <a name="is_default" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2OutputReference.property.isDefault"></a>

```python
is_default: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `managed_identity_resource_id`<sup>Required</sup> <a name="managed_identity_resource_id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2OutputReference.property.managedIdentityResourceId"></a>

```python
managed_identity_resource_id: str
```

- *Type:* str

---

##### `storage_resource_id`<sup>Required</sup> <a name="storage_resource_id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2OutputReference.property.storageResourceId"></a>

```python
storage_resource_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2OutputReference.property.internalValue"></a>

```python
internal_value: HdinsightSparkClusterStorageAccountGen2
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountGen2">HdinsightSparkClusterStorageAccountGen2</a>

---


### HdinsightSparkClusterStorageAccountList <a name="HdinsightSparkClusterStorageAccountList" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_spark_cluster

hdinsightSparkCluster.HdinsightSparkClusterStorageAccountList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> HdinsightSparkClusterStorageAccountOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccount">HdinsightSparkClusterStorageAccount</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[HdinsightSparkClusterStorageAccount]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccount">HdinsightSparkClusterStorageAccount</a>]]

---


### HdinsightSparkClusterStorageAccountOutputReference <a name="HdinsightSparkClusterStorageAccountOutputReference" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_spark_cluster

hdinsightSparkCluster.HdinsightSparkClusterStorageAccountOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountOutputReference.resetStorageResourceId">reset_storage_resource_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_storage_resource_id` <a name="reset_storage_resource_id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountOutputReference.resetStorageResourceId"></a>

```python
def reset_storage_resource_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountOutputReference.property.isDefaultInput">is_default_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountOutputReference.property.storageAccountKeyInput">storage_account_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountOutputReference.property.storageContainerIdInput">storage_container_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountOutputReference.property.storageResourceIdInput">storage_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountOutputReference.property.isDefault">is_default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountOutputReference.property.storageAccountKey">storage_account_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountOutputReference.property.storageContainerId">storage_container_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountOutputReference.property.storageResourceId">storage_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccount">HdinsightSparkClusterStorageAccount</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_default_input`<sup>Optional</sup> <a name="is_default_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountOutputReference.property.isDefaultInput"></a>

```python
is_default_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `storage_account_key_input`<sup>Optional</sup> <a name="storage_account_key_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountOutputReference.property.storageAccountKeyInput"></a>

```python
storage_account_key_input: str
```

- *Type:* str

---

##### `storage_container_id_input`<sup>Optional</sup> <a name="storage_container_id_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountOutputReference.property.storageContainerIdInput"></a>

```python
storage_container_id_input: str
```

- *Type:* str

---

##### `storage_resource_id_input`<sup>Optional</sup> <a name="storage_resource_id_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountOutputReference.property.storageResourceIdInput"></a>

```python
storage_resource_id_input: str
```

- *Type:* str

---

##### `is_default`<sup>Required</sup> <a name="is_default" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountOutputReference.property.isDefault"></a>

```python
is_default: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `storage_account_key`<sup>Required</sup> <a name="storage_account_key" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountOutputReference.property.storageAccountKey"></a>

```python
storage_account_key: str
```

- *Type:* str

---

##### `storage_container_id`<sup>Required</sup> <a name="storage_container_id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountOutputReference.property.storageContainerId"></a>

```python
storage_container_id: str
```

- *Type:* str

---

##### `storage_resource_id`<sup>Required</sup> <a name="storage_resource_id" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountOutputReference.property.storageResourceId"></a>

```python
storage_resource_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccountOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, HdinsightSparkClusterStorageAccount]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterStorageAccount">HdinsightSparkClusterStorageAccount</a>]

---


### HdinsightSparkClusterTimeoutsOutputReference <a name="HdinsightSparkClusterTimeoutsOutputReference" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hdinsight_spark_cluster

hdinsightSparkCluster.HdinsightSparkClusterTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeouts">HdinsightSparkClusterTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, HdinsightSparkClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hdinsightSparkCluster.HdinsightSparkClusterTimeouts">HdinsightSparkClusterTimeouts</a>]

---



